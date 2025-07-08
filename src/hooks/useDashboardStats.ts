import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface DashboardStats {
  total_products: number;
  active_products: number;
  low_stock_products: number;
  out_of_stock_products: number;
  total_orders: number;
  pending_orders: number;
  total_customers: number;
  total_revenue: number;
  monthly_revenue: number;
  inventory_value: number;
}

export const useDashboardStats = () => {
  const [stats, setStats] = useState<DashboardStats>({
    total_products: 0,
    active_products: 0,
    low_stock_products: 0,
    out_of_stock_products: 0,
    total_orders: 0,
    pending_orders: 0,
    total_customers: 0,
    total_revenue: 0,
    monthly_revenue: 0,
    inventory_value: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.rpc('get_dashboard_stats');

        if (error) {
          throw error;
        }

        // Safely handle the JSON response with default values
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          const statsData = {
            total_products: Number(data.total_products || 0),
            active_products: Number(data.active_products || 0),
            low_stock_products: Number(data.low_stock_products || 0),
            out_of_stock_products: Number(data.out_of_stock_products || 0),
            total_orders: Number(data.total_orders || 0),
            pending_orders: Number(data.pending_orders || 0),
            total_customers: Number(data.total_customers || 0),
            total_revenue: Number(data.total_revenue || 0),
            monthly_revenue: Number(data.monthly_revenue || 0),
            inventory_value: Number(data.inventory_value || 0),
          };
          setStats(statsData);
        } else {
          // If no data found, keep default zero values
          console.log('No dashboard stats found, using default values');
        }
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
        // Keep default zero values on error
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};
