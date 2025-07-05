
-- Add missing columns to orders table to match our usage
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS customer_email TEXT,
ADD COLUMN IF NOT EXISTS customer_name TEXT,
ADD COLUMN IF NOT EXISTS customer_phone TEXT;

-- Update the orders table to include items as JSONB
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS items JSONB;

-- Make subtotal optional since we calculate total_amount directly
ALTER TABLE public.orders 
ALTER COLUMN subtotal DROP NOT NULL;
