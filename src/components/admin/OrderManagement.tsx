import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Eye, Package, Truck, CheckCircle } from 'lucide-react';

const orders = [
  { 
    id: 'ORD-001', 
    customer: 'John Mwangi', 
    items: 3, 
    total: 'TSh 75,000', 
    status: 'pending', 
    date: '2025-01-02',
    paymentStatus: 'paid'
  },
  { 
    id: 'ORD-002', 
    customer: 'Sarah Njeri', 
    items: 1, 
    total: 'TSh 25,000', 
    status: 'processing', 
    date: '2025-01-02',
    paymentStatus: 'paid'
  },
  { 
    id: 'ORD-003', 
    customer: 'David Kimani', 
    items: 2, 
    total: 'TSh 50,000', 
    status: 'shipped', 
    date: '2025-01-01',
    paymentStatus: 'paid'
  },
];

export const OrderManagement = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'shipped': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'delivered': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Order Management</h2>
        <p className="text-muted-foreground">
          Track and manage all customer orders with seamless processing
        </p>
      </div>

      {/* Order Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold">23</div>
                <p className="text-sm text-muted-foreground">Pending Orders</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">15</div>
                <p className="text-sm text-muted-foreground">In Transit</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold">89</div>
                <p className="text-sm text-muted-foreground">Delivered</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div>
              <div className="text-2xl font-bold">TSh 2.4M</div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono">{order.id}</TableCell>
                  <TableCell className="font-medium">{order.customer}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell className="font-medium">{order.total}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)} variant="secondary">
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};