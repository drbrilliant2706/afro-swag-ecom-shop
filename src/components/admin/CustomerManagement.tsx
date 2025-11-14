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
import { 
  Users, 
  UserPlus, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  DollarSign,
  ShoppingBag,
  Eye,
  Edit,
  TrendingUp
} from 'lucide-react';

const customers = [
  {
    id: 'CUST-001',
    name: 'John Mwangi',
    email: 'john.mwangi@example.com',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    joinDate: '2023-01-15',
    orders: 12,
    totalSpent: 750000,
    status: 'active'
  },
  {
    id: 'CUST-002',
    name: 'Sarah Wanjiku',
    email: 'sarah.wanjiku@example.com',
    phone: '+254 723 456 789',
    location: 'Mombasa, Kenya',
    joinDate: '2023-03-20',
    orders: 5,
    totalSpent: 320000,
    status: 'active'
  },
  {
    id: 'CUST-003',
    name: 'David Kamau',
    email: 'david.kamau@example.com',
    phone: '+254 734 567 890',
    location: 'Kisumu, Kenya',
    joinDate: '2023-05-10',
    orders: 3,
    totalSpent: 180000,
    status: 'inactive'
  },
  {
    id: 'CUST-004',
    name: 'Mary Njeri',
    email: 'mary.njeri@example.com',
    phone: '+254 745 678 901',
    location: 'Nakuru, Kenya',
    joinDate: '2023-07-05',
    orders: 8,
    totalSpent: 540000,
    status: 'active'
  },
  {
    id: 'CUST-005',
    name: 'Peter Omondi',
    email: 'peter.omondi@example.com',
    phone: '+254 756 789 012',
    location: 'Eldoret, Kenya',
    joinDate: '2023-09-12',
    orders: 15,
    totalSpent: 920000,
    status: 'active'
  },
  {
    id: 'CUST-006',
    name: 'Alice Muthoni',
    email: 'alice.muthoni@example.com',
    phone: '+254 767 890 123',
    location: 'Thika, Kenya',
    joinDate: '2023-11-01',
    orders: 2,
    totalSpent: 90000,
    status: 'inactive'
  },
  {
    id: 'CUST-007',
    name: 'James Mutua',
    email: 'james.mutua@example.com',
    phone: '+254 778 901 234',
    location: 'Kitale, Kenya',
    joinDate: '2024-01-25',
    orders: 7,
    totalSpent: 480000,
    status: 'active'
  },
  {
    id: 'CUST-008',
    name: 'Ruth Akinyi',
    email: 'ruth.akinyi@example.com',
    phone: '+254 789 012 345',
    location: 'Machakos, Kenya',
    joinDate: '2024-03-10',
    orders: 4,
    totalSpent: 260000,
    status: 'inactive'
  },
  {
    id: 'CUST-009',
    name: 'Samuel Kariuki',
    email: 'samuel.kariuki@example.com',
    phone: '+254 790 123 456',
    location: 'Nyeri, Kenya',
    joinDate: '2024-05-18',
    orders: 10,
    totalSpent: 680000,
    status: 'active'
  },
  {
    id: 'CUST-010',
    name: 'Esther Atieno',
    email: 'esther.atieno@example.com',
    phone: '+254 701 234 567',
    location: 'Kakamega, Kenya',
    joinDate: '2024-07-01',
    orders: 6,
    totalSpent: 410000,
    status: 'active'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'inactive': return 'bg-brand-green/10 text-brand-green dark:bg-brand-green/20 dark:text-brand-green-light';
    case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const CustomerManagement = () => {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === 'active').length;
  const inactiveCustomers = customers.filter(c => c.status === 'inactive').length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
          <p className="text-muted-foreground">
            Manage customer accounts, track order history, and analyze customer data
          </p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Customer Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalCustomers}</div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{activeCustomers}</div>
                <p className="text-sm text-muted-foreground">Active Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-green/10 dark:bg-brand-green/20">
                <Users className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <div className="text-2xl font-bold">{inactiveCustomers}</div>
                <p className="text-sm text-muted-foreground">Inactive Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                <DollarSign className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">TSh {(totalRevenue / 1000000).toFixed(1)}M</div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Joined: {customer.joinDate}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {customer.phone}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {customer.location}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{customer.orders}</TableCell>
                  <TableCell className="font-medium">
                    TSh {customer.totalSpent.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(customer.status)} variant="secondary">
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Customer Insights */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>New vs. Returning Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-50 dark:bg-green-900/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">New Customers</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">34</p>
                  <p className="text-sm text-green-600">+12% <TrendingUp className="inline-block h-3 w-3 ml-1" /></p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 dark:bg-blue-900/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Returning Customers</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">89</p>
                  <p className="text-sm text-blue-600">+8% <TrendingUp className="inline-block h-3 w-3 ml-1" /></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Spending Habits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Average Order Value</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Per customer</p>
                </div>
                <p className="text-2xl font-bold text-green-600">TSh 6,300</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                <div>
                  <p className="font-medium text-blue-800 dark:text-blue-200">Most Popular Category</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">By orders</p>
                </div>
                <p className="text-2xl font-bold text-blue-600">T-Shirts</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                <div>
                  <p className="font-medium text-purple-800 dark:text-purple-200">Highest Spending Customer</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">This month</p>
                </div>
                <p className="text-2xl font-bold text-purple-600">TSh 89K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerManagement;
