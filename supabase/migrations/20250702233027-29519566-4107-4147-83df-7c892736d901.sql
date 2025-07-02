-- Create enums for various status types
CREATE TYPE public.order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');
CREATE TYPE public.payment_status AS ENUM ('pending', 'paid', 'failed', 'refunded');
CREATE TYPE public.product_status AS ENUM ('active', 'inactive', 'low_stock', 'out_of_stock');
CREATE TYPE public.user_role AS ENUM ('admin', 'manager', 'staff');

-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  email TEXT,
  full_name TEXT,
  role user_role DEFAULT 'staff',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  sku TEXT UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  cost_price DECIMAL(10,2),
  category TEXT,
  brand TEXT,
  status product_status DEFAULT 'active',
  stock_quantity INTEGER DEFAULT 0,
  low_stock_threshold INTEGER DEFAULT 10,
  weight DECIMAL(8,3),
  dimensions JSONB,
  images TEXT[],
  tags TEXT[],
  is_featured BOOLEAN DEFAULT false,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create customers table
CREATE TABLE public.customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  date_of_birth DATE,
  gender TEXT,
  shipping_address JSONB,
  billing_address JSONB,
  customer_tier TEXT DEFAULT 'Bronze',
  total_orders INTEGER DEFAULT 0,
  total_spent DECIMAL(12,2) DEFAULT 0,
  last_order_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT UNIQUE NOT NULL,
  customer_id UUID REFERENCES public.customers(id),
  status order_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'pending',
  subtotal DECIMAL(12,2) NOT NULL,
  tax_amount DECIMAL(12,2) DEFAULT 0,
  shipping_amount DECIMAL(12,2) DEFAULT 0,
  discount_amount DECIMAL(12,2) DEFAULT 0,
  total_amount DECIMAL(12,2) NOT NULL,
  currency TEXT DEFAULT 'TSh',
  shipping_address JSONB,
  billing_address JSONB,
  notes TEXT,
  tracking_number TEXT,
  shipped_at TIMESTAMP WITH TIME ZONE,
  delivered_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create order_items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(12,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create inventory_transactions table
CREATE TABLE public.inventory_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id),
  transaction_type TEXT NOT NULL, -- 'sale', 'purchase', 'adjustment', 'return'
  quantity_change INTEGER NOT NULL, -- positive for incoming, negative for outgoing
  reference_id UUID, -- order_id, purchase_order_id, etc.
  notes TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create vendors table
CREATE TABLE public.vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  contact_person TEXT,
  address JSONB,
  tax_id TEXT,
  payment_terms TEXT,
  commission_rate DECIMAL(5,2) DEFAULT 0,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create vendor_products table (many-to-many relationship)
CREATE TABLE public.vendor_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID REFERENCES public.vendors(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  vendor_sku TEXT,
  vendor_price DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(vendor_id, product_id)
);

-- Create discounts table
CREATE TABLE public.discounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  discount_type TEXT NOT NULL, -- 'percentage', 'fixed_amount'
  discount_value DECIMAL(10,2) NOT NULL,
  minimum_order_amount DECIMAL(10,2),
  usage_limit INTEGER,
  usage_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  starts_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendor_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.discounts ENABLE ROW LEVEL SECURITY;

-- Create function to check user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS user_role
LANGUAGE SQL
SECURITY DEFINER
AS $$
  SELECT role FROM public.profiles WHERE profiles.user_id = $1;
$$;

-- Create function to check if user is admin or manager
CREATE OR REPLACE FUNCTION public.is_admin_or_manager(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = $1 
    AND role IN ('admin', 'manager')
  );
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins and managers can view all profiles"
ON public.profiles FOR SELECT
USING (public.is_admin_or_manager(auth.uid()));

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Admins can update any profile"
ON public.profiles FOR UPDATE
USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for products (admin/manager access)
CREATE POLICY "Admin and manager can manage products"
ON public.products FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- RLS Policies for customers (admin/manager access)
CREATE POLICY "Admin and manager can manage customers"
ON public.customers FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- RLS Policies for orders (admin/manager access)
CREATE POLICY "Admin and manager can manage orders"
ON public.orders FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- RLS Policies for order_items (admin/manager access)
CREATE POLICY "Admin and manager can manage order items"
ON public.order_items FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- RLS Policies for inventory_transactions (admin/manager access)
CREATE POLICY "Admin and manager can manage inventory"
ON public.inventory_transactions FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- RLS Policies for vendors (admin/manager access)
CREATE POLICY "Admin and manager can manage vendors"
ON public.vendors FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- RLS Policies for vendor_products (admin/manager access)
CREATE POLICY "Admin and manager can manage vendor products"
ON public.vendor_products FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- RLS Policies for discounts (admin/manager access)
CREATE POLICY "Admin and manager can manage discounts"
ON public.discounts FOR ALL
USING (public.is_admin_or_manager(auth.uid()));

-- Create trigger function for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON public.customers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_vendors_updated_at
  BEFORE UPDATE ON public.vendors
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_discounts_updated_at
  BEFORE UPDATE ON public.discounts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to automatically create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    'staff'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to auto-create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample data for development
INSERT INTO public.products (name, sku, description, price, cost_price, category, brand, stock_quantity) VALUES
('AFRIKA''S FINEST Mask Tee', 'AF-MT-001', 'Premium cotton t-shirt with African mask design', 25000, 12000, 'Men''s T-Shirts', 'AFRIKA''S FINEST', 45),
('FINEST Crop Collection', 'FC-CC-002', 'Stylish crop top from our finest collection', 25000, 12000, 'Women''s Tops', 'AFRIKA''S FINEST', 23),
('NYUMBANI QWETU Tee', 'NQ-T-003', 'Comfortable unisex t-shirt celebrating home', 25000, 12000, 'Unisex', 'AFRIKA''S FINEST', 8);

INSERT INTO public.customers (email, first_name, last_name, customer_tier, total_orders, total_spent, last_order_date) VALUES
('john@email.com', 'John', 'Mwangi', 'VIP', 12, 340000, '2025-01-02'),
('sarah@email.com', 'Sarah', 'Njeri', 'Gold', 8, 200000, '2025-01-01'),
('david@email.com', 'David', 'Kimani', 'Silver', 5, 125000, '2024-12-30');

INSERT INTO public.orders (order_number, customer_id, status, payment_status, subtotal, total_amount) VALUES
('ORD-001', (SELECT id FROM public.customers WHERE email = 'john@email.com'), 'pending', 'paid', 75000, 75000),
('ORD-002', (SELECT id FROM public.customers WHERE email = 'sarah@email.com'), 'processing', 'paid', 25000, 25000),
('ORD-003', (SELECT id FROM public.customers WHERE email = 'david@email.com'), 'shipped', 'paid', 50000, 50000);