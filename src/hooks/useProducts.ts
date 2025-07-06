
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string | null;
  brand: string | null;
  gender: string | null;
  sku: string;
  stock_quantity: number;
  low_stock_threshold: number;
  max_stock_quantity: number;
  reorder_point: number;
  status: 'active' | 'inactive' | 'low_stock' | 'out_of_stock';
  images: string[] | null;
  tags: string[] | null;
  material: string | null;
  care_instructions: string | null;
  size_guide: any | null;
  supplier_info: any | null;
  cost_price: number | null;
  weight: number | null;
  dimensions: any | null;
  seo_title: string | null;
  seo_description: string | null;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setProducts(data || []);
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Error fetching products",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (productData: Omit<Product, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error: createError } = await supabase
        .from('products')
        .insert(productData)
        .select()
        .single();

      if (createError) throw createError;
      
      setProducts(prev => [data, ...prev]);
      toast({
        title: "Product created successfully",
        description: `${productData.name} has been added to your inventory.`,
      });
      
      return data;
    } catch (err: any) {
      toast({
        title: "Error creating product",
        description: err.message,
        variant: "destructive",
      });
      throw err;
    }
  };

  const updateProduct = async (id: string, updates: Partial<Omit<Product, 'id' | 'created_at' | 'updated_at'>>) => {
    try {
      const { data, error: updateError } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (updateError) throw updateError;
      
      setProducts(prev => prev.map(p => p.id === id ? data : p));
      toast({
        title: "Product updated successfully",
        description: "Changes have been saved.",
      });
      
      return data;
    } catch (err: any) {
      toast({
        title: "Error updating product",
        description: err.message,
        variant: "destructive",
      });
      throw err;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const { error: deleteError } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
      
      setProducts(prev => prev.filter(p => p.id !== id));
      toast({
        title: "Product deleted successfully",
        description: "The product has been removed from your inventory.",
      });
    } catch (err: any) {
      toast({
        title: "Error deleting product",
        description: err.message,
        variant: "destructive",
      });
      throw err;
    }
  };

  const uploadProductImage = async (file: File, productId?: string) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = productId ? `${productId}/${fileName}` : `temp/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err: any) {
      toast({
        title: "Error uploading image",
        description: err.message,
        variant: "destructive",
      });
      throw err;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    uploadProductImage,
  };
};
