
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  image_name: string | null;
  file_size: number | null;
  mime_type: string | null;
  is_primary: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}

export const useProductImages = (productId?: string) => {
  const [images, setImages] = useState<ProductImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      setImages([]);
      setLoading(false);
      return;
    }

    const fetchProductImages = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('product_images')
          .select('*')
          .eq('product_id', productId)
          .order('is_primary', { ascending: false })
          .order('created_at', { ascending: true });

        if (error) {
          throw error;
        }

        setImages(data || []);
      } catch (err) {
        console.error('Error fetching product images:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProductImages();
  }, [productId]);

  const refetch = () => {
    if (productId) {
      const fetchProductImages = async () => {
        try {
          setLoading(true);
          const { data, error } = await supabase
            .from('product_images')
            .select('*')
            .eq('product_id', productId)
            .order('is_primary', { ascending: false })
            .order('created_at', { ascending: true });

          if (error) {
            throw error;
          }

          setImages(data || []);
        } catch (err) {
          console.error('Error fetching product images:', err);
          setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
          setLoading(false);
        }
      };

      fetchProductImages();
    }
  };

  return { images, loading, error, refetch };
};
