import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Package,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ArrowUpRight
} from 'lucide-react';
import { useDashboardStats } from '@/hooks/useDashboardStats';
import { Skeleton } from '@/components/ui/skeleton';

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    date: '2024-01-05',
    amount: 75000,
    status: 'completed'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    date: '2024-01-04',
    amount: 120000,
    status: 'processing'
  },
  {
    id: 'ORD-003',
    customer: 'Peter Jones',
    date: '2024-01-03',
    amount: 45000,
    status: 'shipped'
  }
];

const lowStockItems = [
  {
    id: 'PROD-001',
    name: 'AFRIKA\'S FINEST Mask Tee',
    stock: 8,
    threshold: 10
  },
  {
    id: 'PROD-002',
    name: 'FINEST Crop Collection',
    stock: 5,
    threshold: 10
  },
  {
    id: 'PROD-003',
    name: 'NYUMBANI QWETU Tee',
    stock: 2,
    threshold: 5
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    case 'processing':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    case 'shipped':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  }
};

const StatCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend 
}: { 
  title: string; 
  value: string | number; 
  change: string; 
  icon: any; 
  trend: 'up' | 'down' | 'neutral';
}) => (
  <Card className="relative overflow-hidden border-0 shadow-sm bg-card hover:shadow-md transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3">
      <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">{value}</div>
      <div className="flex items-center gap-1 mt-1">
        {trend === 'up' ? (
          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
        ) : trend === 'down' ? (
          <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
        ) : null}
        <p className={`text-xs sm:text-sm ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-muted-foreground'}`}>
          {change}
        </p>
      </div>
    </CardContent>
  </Card>
);

const LoadingSkeleton = () => (
  <div className="space-y-4 sm:space-y-6">
    <div>
      <Skeleton className="h-6 sm:h-8 w-48 sm:w-64 mb-2" />
      <Skeleton className="h-4 w-64 sm:w-80" />
    </div>
    <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-24 sm:h-32" />
      ))}
    </div>
    <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-7">
      <Skeleton className="h-64 sm:h-80 lg:col-span-4" />
      <Skeleton className="h-64 sm:h-80 lg:col-span-3" />
    </div>
  </div>
);

const AdminDashboard = () => {
  const { stats, loading } = useDashboardStats();

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={`TSh ${stats.total_revenue.toLocaleString()}`}
          change="+20.1% from last month"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Orders"
          value={stats.total_orders}
          change="+12% from last month"
          icon={ShoppingBag}
          trend="up"
        />
        <StatCard
          title="Customers"
          value={stats.total_customers}
          change="+5.7% from last month"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Products"
          value={stats.total_products}
          change="+2 new this week"
          icon={Package}
          trend="neutral"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-0 shadow-sm">
          <CardHeader className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base sm:text-lg font-semibold">Recent Orders</CardTitle>
              <button className="text-xs sm:text-sm text-primary hover:underline flex items-center gap-1">
                View all <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 sm:space-y-4">
              {recentOrders.map((order, index) => (
                <div 
                  key={order.id} 
                  className={`flex items-center justify-between py-2 sm:py-3 ${
                    index !== recentOrders.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-medium">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium">{order.customer}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{order.id} • {order.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm sm:text-base font-semibold">TSh {order.amount.toLocaleString()}</p>
                    <Badge className={`text-xs capitalize ${getStatusColor(order.status)}`}>
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 border-0 shadow-sm">
          <CardHeader className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
                Low Stock Alert
              </CardTitle>
              <Badge variant="secondary" className="text-xs">
                {lowStockItems.length} items
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 sm:space-y-4">
              {lowStockItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex items-center justify-between py-2 sm:py-3 ${
                    index !== lowStockItems.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-medium truncate">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden max-w-24 sm:max-w-32">
                        <div 
                          className={`h-full rounded-full ${
                            item.stock <= 2 ? 'bg-red-500' : item.stock <= 5 ? 'bg-amber-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${(item.stock / item.threshold) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                        {item.stock}/{item.threshold}
                      </span>
                    </div>
                  </div>
                  <Badge 
                    className={`ml-2 text-xs ${
                      item.stock <= 2 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}
                  >
                    {item.stock <= 2 ? 'Critical' : 'Low'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
