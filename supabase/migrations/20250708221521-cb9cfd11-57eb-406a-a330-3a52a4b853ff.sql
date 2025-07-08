-- Update admin user role
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'admin@africansfinest.com';

-- Create storage policies for product-images bucket
CREATE POLICY "Admin and manager can upload product images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'product-images' 
  AND is_admin_or_manager(auth.uid())
);

CREATE POLICY "Admin and manager can update product images" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'product-images' 
  AND is_admin_or_manager(auth.uid())
);

CREATE POLICY "Admin and manager can delete product images" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'product-images' 
  AND is_admin_or_manager(auth.uid())
);

CREATE POLICY "Public can view product images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'product-images');