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
import { Eye, Mail, Phone, Star } from 'lucide-react';

const customers = [
  { 
    id: 1, 
    name: 'John Mwangi', 
    email: 'john@email.com',
    orders: 12,
    spent: 'TSh 340,000',
    tier: 'VIP',
    lastOrder: '2025-01-02'
  },
  { 
    id: 2, 
    name: 'Sarah Njeri', 
    email: 'sarah@email.com',
    orders: 8,
    spent: 'TSh 200,000',
    tier: 'Gold',
    lastOrder: '2025-01-01'
  },
  { 
    id: 3, 
    name: 'David Kimani', 
    email: 'david@email.com',
    orders: 5,
    spent: 'TSh 125,000',
    tier: 'Silver',
    lastOrder: '2024-12-30'
  },
];

export const CustomerManagement = () => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'VIP': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Gold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Silver': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
        <p className="text-muted-foreground">
          Manage customer relationships and track purchase history
        </p>
      </div>

      {/* Customer Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-sm text-muted-foreground">Total Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">89</div>
            <p className="text-sm text-muted-foreground">New This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">TSh 195K</div>
            <p className="text-sm text-muted-foreground">Avg Order Value</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-sm text-muted-foreground">Customer Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Database</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        {customer.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell className="font-medium">{customer.spent}</TableCell>
                  <TableCell>
                    <Badge className={getTierColor(customer.tier)} variant="secondary">
                      <Star className="h-3 w-3 mr-1" />
                      {customer.tier}
                    </Badge>
                  </TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
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