
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface DashboardStats {
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
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchStats = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .rpc('get_dashboard_stats');

      if (fetchError) throw fetchError;
      
      // Parse the JSON response safely
      const parsedStats = typeof data === 'string' ? JSON.parse(data) : data;
      setStats(parsedStats as DashboardStats);
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Error fetching dashboard stats",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    
    // Refresh stats every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    stats,
    loading,
    error,
    fetchStats,
  };
};
