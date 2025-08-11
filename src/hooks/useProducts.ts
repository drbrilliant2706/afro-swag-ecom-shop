
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
      
      console.log('Fetching products with options:', { gender, category, limit });
      
      let query = supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      // Only filter by status if we want active products
      // This allows us to see if there are any products at all
      if (gender) {
        query = query.eq('gender', gender);
      }

      if (category) {
        query = query.eq('category', category);
      }

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error, status } = await query;

      console.log('Products query result:', { data, error, status, count: data?.length });

      if (error) {
        console.error('Products fetch error:', error);
        throw error;
      }

      // Log if no products found but query was successful
      if (!data || data.length === 0) {
        console.warn('No products found. This might indicate:');
        console.warn('1. No products in database');
        console.warn('2. RLS policies blocking access');
        console.warn('3. User not authenticated properly');
        
        // Check authentication status
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Current auth session:', session?.user?.email || 'Not authenticated');
      }

      setProducts(data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch products';
      setError(errorMessage);
      
      // Provide more specific error information
      if (errorMessage.includes('JWT')) {
        setError('Authentication error. Please log in again.');
      } else if (errorMessage.includes('permission')) {
        setError('Permission denied. You may need admin access to view products.');
      }
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
