
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

const stats = [
  { 
    title: 'Total Revenue', 
    value: 'TSh 2,450,000', 
    change: '+12.5%', 
    trend: 'up',
    icon: DollarSign, 
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/10'
  },
  { 
    title: 'Orders Today', 
    value: '23', 
    change: '+8.2%', 
    trend: 'up',
    icon: ShoppingCart, 
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/10'
  },
  { 
    title: 'Active Customers', 
    value: '1,234', 
    change: '+5.4%', 
    trend: 'up',
    icon: Users, 
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/10'
  },
  { 
    title: 'Products Sold', 
    value: '156', 
    change: '-2.1%', 
    trend: 'down',
    icon: Package, 
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/10'
  },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'John Mwangi', amount: 'TSh 45,000', status: 'processing', time: '2 mins ago' },
  { id: 'ORD-002', customer: 'Sarah Njeri', amount: 'TSh 78,000', status: 'shipped', time: '15 mins ago' },
  { id: 'ORD-003', customer: 'David Kimani', amount: 'TSh 32,000', status: 'delivered', time: '1 hour ago' },
  { id: 'ORD-004', customer: 'Grace Wanjiku', amount: 'TSh 95,000', status: 'pending', time: '2 hours ago' },
  { id: 'ORD-005', customer: 'Peter Ochieng', amount: 'TSh 67,000', status: 'processing', time: '3 hours ago' },
];

const topProducts = [
  { name: 'AFRIKA\'S FINEST Mask Tee', sales: 45, revenue: 'TSh 1,125,000', growth: 15 },
  { name: 'FINEST Crop Collection', sales: 32, revenue: 'TSh 800,000', growth: 8 },
  { name: 'NYUMBANI QWETU Tee', sales: 28, revenue: 'TSh 700,000', growth: -3 },
  { name: 'Heritage Print Hoodie', sales: 21, revenue: 'TSh 525,000', growth: 12 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'shipped': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'processing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'pending': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

export const AdminDashboard = () => {
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
        {stats.map((stat) => {
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
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.time}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium">{order.amount}</p>
                    <Badge className={getStatusColor(order.status)} variant="secondary">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
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
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Alerts Row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Enhanced Quick Actions */}
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
                    <p className="text-sm font-medium">Customer Support</p>
                    <p className="text-xs text-muted-foreground">3 pending tickets</p>
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

        {/* Enhanced System Health */}
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
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">5 products need restocking</p>
                  <Progress value={75} className="mt-2 h-2" />
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">Payment System</p>
                  <p className="text-xs text-green-700 dark:text-green-300">All gateways operational</p>
                  <Progress value={100} className="mt-2 h-2" />
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
                <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Server Performance</p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Response time: 245ms</p>
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
