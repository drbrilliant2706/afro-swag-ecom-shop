
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
import { CheckCircle2, Clock, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_amount: number;
  created_at: string;
  customer_id: string;
  customers: {
    first_name: string;
    phone: string;
    email: string;
  };
}

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          customers (
            first_name,
            phone,
            email
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('orders-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'orders'
        },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleVerifyOrder = async (orderId: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: 'processing' })
        .eq('id', orderId);

      if (error) throw error;
      toast.success('Order verified successfully');
      fetchOrders();
    } catch (error) {
      console.error('Error verifying order:', error);
      toast.error('Failed to verify order');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const unattendedOrders = orders.filter(o => o.status === 'pending');
  const attendedOrders = orders.filter(o => o.status !== 'pending');

  if (loading) {
    return <div className="p-8 text-center">Loading orders...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Order Management</h2>
        <p className="text-muted-foreground">
          Verify and manage customer orders
        </p>
      </div>

      {/* Order Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <div className="text-3xl font-bold text-yellow-900">{unattendedOrders.length}</div>
                <p className="text-sm font-medium text-yellow-700">Unattended Orders</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-3xl font-bold text-green-900">{attendedOrders.length}</div>
                <p className="text-sm font-medium text-green-700">Attended Orders</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div>
              <div className="text-3xl font-bold text-blue-900">
                TSh {orders.reduce((sum, o) => sum + o.total_amount, 0).toLocaleString()}
              </div>
              <p className="text-sm font-medium text-blue-700">Total Revenue</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Tabs */}
      <Tabs defaultValue="unattended" className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="unattended" className="relative">
            Unattended Orders
            {unattendedOrders.length > 0 && (
              <Badge className="ml-2 bg-yellow-500">{unattendedOrders.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="attended">
            Attended Orders
          </TabsTrigger>
        </TabsList>

        <TabsContent value="unattended">
          <Card>
            <CardHeader>
              <CardTitle className="text-yellow-700">Unattended Orders - Require Verification</CardTitle>
            </CardHeader>
            <CardContent>
              {unattendedOrders.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No unattended orders
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order Number</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {unattendedOrders.map((order) => (
                      <TableRow key={order.id} className="bg-yellow-50/50">
                        <TableCell className="font-mono font-bold">{order.order_number}</TableCell>
                        <TableCell className="font-medium">{order.customers?.first_name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-xs">
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              <span>{order.customers?.phone}</span>
                            </div>
                            {order.customers?.email && (
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                <span>{order.customers?.email}</span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-bold text-green-600">
                          TSh {order.total_amount.toLocaleString()}
                        </TableCell>
                        <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            onClick={() => handleVerifyOrder(order.id)}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle2 className="h-4 w-4 mr-1" />
                            Verify Order
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attended">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Attended Orders</CardTitle>
            </CardHeader>
            <CardContent>
              {attendedOrders.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No attended orders yet
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order Number</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendedOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-mono">{order.order_number}</TableCell>
                        <TableCell className="font-medium">{order.customers?.first_name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-xs">
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              <span>{order.customers?.phone}</span>
                            </div>
                            {order.customers?.email && (
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                <span>{order.customers?.email}</span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          TSh {order.total_amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)} variant="secondary">
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrderManagement;
