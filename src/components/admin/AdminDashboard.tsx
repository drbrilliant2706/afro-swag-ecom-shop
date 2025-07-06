
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Download
} from 'lucide-react';
import { useDashboardStats } from '@/hooks/useDashboardStats';
import { useOrders } from '@/hooks/useOrders';
import { useProducts } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';

export const AdminDashboard = () => {
  const { stats, loading: statsLoading } = useDashboardStats();
  const { orders, loading: ordersLoading } = useOrders();
  const { products, loading: productsLoading } = useProducts();

  const recentOrders = orders.slice(0, 5);
  const topProducts = products
    .filter(p => p.is_featured)
    .slice(0, 4)
    .map(p => ({
      name: p.name,
      sales: Math.floor(Math.random() * 50) + 10, // Mock data - replace with real sales data
      revenue: `TSh ${(p.price * Math.floor(Math.random() * 50) + 10).toLocaleString()}`,
      growth: Math.floor(Math.random() * 30) - 10
    }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'shipped': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'processing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'pending': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  if (statsLoading || ordersLoading || productsLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-8 w-24 mb-2" />
                <Skeleton className="h-4 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {[...Array(2)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-16 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const statsCards = [
    { 
      title: 'Total Revenue', 
      value: `TSh ${stats?.total_revenue?.toLocaleString() || '0'}`, 
      change: '+12.5%', 
      trend: 'up',
      icon: DollarSign, 
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/10'
    },
    { 
      title: 'Orders Today', 
      value: stats?.pending_orders?.toString() || '0', 
      change: '+8.2%', 
      trend: 'up',
      icon: ShoppingCart, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10'
    },
    { 
      title: 'Total Customers', 
      value: stats?.total_customers?.toString() || '0', 
      change: '+5.4%', 
      trend: 'up',
      icon: Users, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10'
    },
    { 
      title: 'Active Products', 
      value: stats?.active_products?.toString() || '0', 
      change: '-2.1%', 
      trend: 'down',
      icon: Package, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/10'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Store
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                  )}
                  <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Enhanced Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.length > 0 ? recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.order_number}</p>
                    <p className="text-sm text-muted-foreground">Customer #{order.customer_id?.slice(0, 8)}</p>
                    <p className="text-xs text-muted-foreground">{new Date(order.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium">TSh {order.total_amount.toLocaleString()}</p>
                    <Badge className={getStatusColor(order.status)} variant="secondary">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              )) : (
                <p className="text-center text-muted-foreground py-8">No orders yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Featured Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.length > 0 ? topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{product.revenue}</p>
                    <div className="flex items-center">
                      {product.growth > 0 ? (
                        <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                      )}
                      <span className={`text-xs ${product.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              )) : (
                <p className="text-center text-muted-foreground py-8">No featured products</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start h-auto p-4" asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Package className="h-5 w-5 text-blue-600" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Add New Product</p>
                    <p className="text-xs text-muted-foreground">Create a new product listing</p>
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4" asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Users className="h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Manage Customers</p>
                    <p className="text-xs text-muted-foreground">{stats?.total_customers || 0} total customers</p>
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4" asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Analytics Report</p>
                    <p className="text-xs text-muted-foreground">View detailed analytics</p>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <Clock className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Low Stock Alert</p>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">{stats?.low_stock_products || 0} products need restocking</p>
                  <Progress value={75} className="mt-2 h-2" />
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">System Status</p>
                  <p className="text-xs text-green-700 dark:text-green-300">All systems operational</p>
                  <Progress value={100} className="mt-2 h-2" />
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
                <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Monthly Performance</p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">TSh {stats?.monthly_revenue?.toLocaleString() || '0'} this month</p>
                  <Progress value={85} className="mt-2 h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
