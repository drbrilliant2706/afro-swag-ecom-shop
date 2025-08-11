
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  sku: string;
  brand: string | null;
  category: string | null;
  gender: string | null;
  images: string[] | null;
  stock_quantity: number | null;
  status: 'active' | 'inactive' | 'low_stock' | 'out_of_stock';
  created_at: string | null;
  updated_at: string | null;
}

interface UseProductsOptions {
  gender?: string;
  category?: string;
  limit?: number;
  enabled?: boolean;
}

export const useProducts = (options: UseProductsOptions = {}) => {
  const { gender, category, limit, enabled = true } = options;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    if (!enabled) return;
    
    try {
      setLoading(true);
      setError(null);
      
      let query = supabase
        .from('products')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (gender) {
        query = query.eq('gender', gender);
      }

      if (category) {
        query = query.eq('category', category);
      }

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setProducts(data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [gender, category, limit, enabled]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const refetch = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch };
};
