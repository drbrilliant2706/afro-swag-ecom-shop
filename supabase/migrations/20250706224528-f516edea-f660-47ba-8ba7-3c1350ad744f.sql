
-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);

-- Create RLS policies for product-images bucket
CREATE POLICY "Admin can upload product images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'product-images' AND 
  is_admin_or_manager(auth.uid())
);

CREATE POLICY "Admin can update product images" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'product-images' AND 
  is_admin_or_manager(auth.uid())
);

CREATE POLICY "Admin can delete product images" ON storage.objects
FOR DELETE USING (
  bucket_id = 'product-images' AND 
  is_admin_or_manager(auth.uid())
);

CREATE POLICY "Everyone can view product images" ON storage.objects
FOR SELECT USING (bucket_id = 'product-images');

-- Add missing columns to products table for better management
ALTER TABLE products ADD COLUMN IF NOT EXISTS gender text;
ALTER TABLE products ADD COLUMN IF NOT EXISTS size_guide jsonb;
ALTER TABLE products ADD COLUMN IF NOT EXISTS material text;
ALTER TABLE products ADD COLUMN IF NOT EXISTS care_instructions text;

-- Create analytics table for tracking
CREATE TABLE IF NOT EXISTS analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  event_data jsonb,
  user_id uuid REFERENCES auth.users(id),
  session_id text,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on analytics
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Create policy for analytics
CREATE POLICY "Admin can manage analytics" ON analytics
FOR ALL USING (is_admin_or_manager(auth.uid()));

-- Update products table to support better inventory management
ALTER TABLE products ADD COLUMN IF NOT EXISTS max_stock_quantity integer DEFAULT 1000;
ALTER TABLE products ADD COLUMN IF NOT EXISTS reorder_point integer DEFAULT 10;
ALTER TABLE products ADD COLUMN IF NOT EXISTS supplier_info jsonb;

-- Create content management table
CREATE TABLE IF NOT EXISTS content_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content text,
  meta_title text,
  meta_description text,
  is_published boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on content_pages
ALTER TABLE content_pages ENABLE ROW LEVEL SECURITY;

-- Create policies for content_pages
CREATE POLICY "Admin can manage content pages" ON content_pages
FOR ALL USING (is_admin_or_manager(auth.uid()));

CREATE POLICY "Everyone can view published content" ON content_pages
FOR SELECT USING (is_published = true);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text NOT NULL,
  type text DEFAULT 'info',
  is_read boolean DEFAULT false,
  user_id uuid REFERENCES auth.users(id),
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on notifications
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Create policies for notifications
CREATE POLICY "Users can view their notifications" ON notifications
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admin can manage all notifications" ON notifications
FOR ALL USING (is_admin_or_manager(auth.uid()));

-- Insert default content pages
INSERT INTO content_pages (slug, title, content, is_published) VALUES
('about', 'About Us', 'Learn about AFRIKA''S FINEST and our mission to celebrate African culture through fashion.', true),
('shipping', 'Shipping Information', 'Information about our shipping policies and delivery times.', true),
('returns', 'Returns & Exchanges', 'Our return and exchange policy details.', true),
('size-guide', 'Size Guide', 'Complete size guide for all our products.', true),
('privacy', 'Privacy Policy', 'Our privacy policy and data protection information.', true),
('terms', 'Terms of Service', 'Terms and conditions for using our services.', true)
ON CONFLICT (slug) DO NOTHING;

-- Add triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers to relevant tables
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_content_pages_updated_at ON content_pages;
CREATE TRIGGER update_content_pages_updated_at
  BEFORE UPDATE ON content_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create function to get dashboard stats
CREATE OR REPLACE FUNCTION get_dashboard_stats()
RETURNS jsonb
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  result jsonb;
BEGIN
  SELECT jsonb_build_object(
    'total_products', (SELECT COUNT(*) FROM products),
    'active_products', (SELECT COUNT(*) FROM products WHERE status = 'active'),
    'low_stock_products', (SELECT COUNT(*) FROM products WHERE stock_quantity <= low_stock_threshold),
    'out_of_stock_products', (SELECT COUNT(*) FROM products WHERE stock_quantity = 0),
    'total_orders', (SELECT COUNT(*) FROM orders),
    'pending_orders', (SELECT COUNT(*) FROM orders WHERE status = 'pending'),
    'total_customers', (SELECT COUNT(*) FROM customers),
    'total_revenue', (SELECT COALESCE(SUM(total_amount), 0) FROM orders WHERE payment_status = 'paid'),
    'monthly_revenue', (SELECT COALESCE(SUM(total_amount), 0) FROM orders WHERE payment_status = 'paid' AND created_at >= date_trunc('month', now())),
    'inventory_value', (SELECT COALESCE(SUM(stock_quantity * cost_price), 0) FROM products WHERE cost_price IS NOT NULL)
  ) INTO result;
  
  RETURN result;
END;
$$;
