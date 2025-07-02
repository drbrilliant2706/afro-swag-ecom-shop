import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const stats = [
  { title: 'Total Revenue', value: 'TSh 2,450,000', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
  { title: 'Orders Today', value: '23', change: '+8.2%', icon: ShoppingCart, color: 'text-blue-600' },
  { title: 'Active Customers', value: '1,234', change: '+5.4%', icon: Users, color: 'text-purple-600' },
  { title: 'Products Sold', value: '156', change: '+15.3%', icon: Package, color: 'text-orange-600' },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'John Mwangi', amount: 'TSh 45,000', status: 'processing', time: '2 mins ago' },
  { id: 'ORD-002', customer: 'Sarah Njeri', amount: 'TSh 78,000', status: 'shipped', time: '15 mins ago' },
  { id: 'ORD-003', customer: 'David Kimani', amount: 'TSh 32,000', status: 'delivered', time: '1 hour ago' },
  { id: 'ORD-004', customer: 'Grace Wanjiku', amount: 'TSh 95,000', status: 'pending', time: '2 hours ago' },
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
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your store's performance and recent activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
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

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <Package className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Add New Product</p>
                  <p className="text-xs text-muted-foreground">Create a new product listing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Customer Support</p>
                  <p className="text-xs text-muted-foreground">3 pending tickets</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium">Analytics Report</p>
                  <p className="text-xs text-muted-foreground">View detailed analytics</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            System Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <Clock className="h-4 w-4 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Low Stock Alert</p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300">5 products are running low on inventory</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800 dark:text-green-200">Payment System</p>
                <p className="text-xs text-green-700 dark:text-green-300">All payment gateways are operational</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};