import { useQuery, useQueryClient } from '@tanstack/react-query';
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

interface UseProductsQueryOptions {
  gender?: string;
  category?: string;
  limit?: number;
  enabled?: boolean;
}

// Fetch function for products
const fetchProducts = async (options: UseProductsQueryOptions): Promise<Product[]> => {
  const { gender, category, limit } = options;
  
  let query = supabase
    .from('products')
    .select('*')
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

  return data || [];
};

// Main hook using React Query for caching
export const useProductsQuery = (options: UseProductsQueryOptions = {}) => {
  const { gender, category, limit, enabled = true } = options;
  
  const queryKey = ['products', { gender, category, limit }];
  
  const query = useQuery({
    queryKey,
    queryFn: () => fetchProducts({ gender, category, limit }),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });

  return {
    products: query.data || [],
    loading: query.isLoading,
    error: query.error?.message || null,
    refetch: query.refetch,
    isRefetching: query.isRefetching,
  };
};

// Hook to prefetch products
export const usePrefetchProducts = () => {
  const queryClient = useQueryClient();

  const prefetchProducts = (options: UseProductsQueryOptions = {}) => {
    const { gender, category, limit } = options;
    const queryKey = ['products', { gender, category, limit }];
    
    queryClient.prefetchQuery({
      queryKey,
      queryFn: () => fetchProducts({ gender, category, limit }),
      staleTime: 5 * 60 * 1000,
    });
  };

  return { prefetchProducts };
};

// Hook to get a single product
export const useProductQuery = (productId: string) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

      if (error) throw error;
      return data as Product;
    },
    enabled: !!productId,
    staleTime: 5 * 60 * 1000,
  });
};
