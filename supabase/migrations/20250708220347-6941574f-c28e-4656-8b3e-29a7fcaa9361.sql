
-- Remove all sample data from existing tables
DELETE FROM public.order_items;
DELETE FROM public.orders;
DELETE FROM public.customers;
DELETE FROM public.products;

-- Create a table to track uploaded images
CREATE TABLE public.product_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_name TEXT,
  file_size INTEGER,
  mime_type TEXT,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on the new table
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;

-- Create policy for product images
CREATE POLICY "Admin and manager can manage product images"
ON public.product_images FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- Add trigger for updated_at
CREATE TRIGGER update_product_images_updated_at
  BEFORE UPDATE ON public.product_images
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Update the storage bucket policy to be more permissive for product images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Create storage policies for product images
CREATE POLICY "Admin can upload product images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'product-images' AND 
  public.is_admin_or_manager(auth.uid())
);

CREATE POLICY "Admin can view product images"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images');

CREATE POLICY "Admin can update product images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'product-images' AND 
  public.is_admin_or_manager(auth.uid())
);

CREATE POLICY "Admin can delete product images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'product-images' AND 
  public.is_admin_or_manager(auth.uid())
);
