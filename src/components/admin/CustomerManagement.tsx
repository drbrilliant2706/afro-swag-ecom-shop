
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Search, 
  Filter, 
  UserPlus, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Crown,
  Star,
  Award,
  Download,
  Eye,
  Edit
} from 'lucide-react';

const customers = [
  {
    id: 'CUST-001',
    name: 'Sarah Njeri',
    email: 'sarah.njeri@email.com',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    joinDate: '2024-01-15',
    totalOrders: 15,
    totalSpent: 375000,
    tier: 'VIP',
    status: 'active',
    lastOrder: '2 days ago',
    avatar: null
  },
  {
    id: 'CUST-002',
    name: 'John Mwangi',
    email: 'john.mwangi@email.com',
    phone: '+254 723 456 789',
    location: 'Mombasa, Kenya',
    joinDate: '2024-02-20',
    totalOrders: 12,
    totalSpent: 300000,
    tier: 'Gold',
    status: 'active',
    lastOrder: '1 week ago',
    avatar: null
  },
  {
    id: 'CUST-003',
    name: 'Grace Wanjiku',
    email: 'grace.wanjiku@email.com',
    phone: '+254 734 567 890',
    location: 'Kisumu, Kenya',
    joinDate: '2024-03-10',
    totalOrders: 10,
    totalSpent: 250000,
    tier: 'Gold',
    status: 'active',
    lastOrder: '3 days ago',
    avatar: null
  },
  {
    id: 'CUST-004',
    name: 'David Kimani',
    email: 'david.kimani@email.com',
    phone: '+254 745 678 901',
    location: 'Nakuru, Kenya',
    joinDate: '2024-04-05',
    totalOrders: 8,
    totalSpent: 200000,
    tier: 'Silver',
    status: 'inactive',
    lastOrder: '2 weeks ago',
    avatar: null
  },
  {
    id: 'CUST-005',
    name: 'Peter Ochieng',
    email: 'peter.ochieng@email.com',
    phone: '+254 756 789 012',
    location: 'Eldoret, Kenya',
    joinDate: '2024-05-12',
    totalOrders: 6,
    totalSpent: 150000,
    tier: 'Bronze',
    status: 'active',
    lastOrder: '5 days ago',
    avatar: null
  },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'VIP': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    case 'Gold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'Silver': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    case 'Bronze': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const getTierIcon = (tier: string) => {
  switch (tier) {
    case 'VIP': return Crown;
    case 'Gold': return Star;
    case 'Silver': return Award;
    case 'Bronze': return Award;
    default: return Users;
  }
};

const getStatusColor = (status: string) => {
  return status === 'active' 
    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
};

export const CustomerManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === 'all' || customer.tier.toLowerCase() === selectedTier;
    return matchesSearch && matchesTier;
  });

  const tierCounts = {
    vip: customers.filter(c => c.tier === 'VIP').length,
    gold: customers.filter(c => c.tier === 'Gold').length,
    silver: customers.filter(c => c.tier === 'Silver').length,
    bronze: customers.filter(c => c.tier === 'Bronze').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
          <p className="text-muted-foreground">
            Manage your customer relationships and analyze customer behavior
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Customer Tier Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <Crown className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{tierCounts.vip}</div>
                <p className="text-sm text-muted-foreground">VIP Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/10">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{tierCounts.gold}</div>
                <p className="text-sm text-muted-foreground">Gold Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/10">
                <Award className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{tierCounts.silver}</div>
                <p className="text-sm text-muted-foreground">Silver Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{tierCounts.bronze}</div>
                <p className="text-sm text-muted-foreground">Bronze Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={selectedTier} 
                onChange={(e) => setSelectedTier(e.target.value)}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="all">All Tiers</option>
                <option value="vip">VIP</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="bronze">Bronze</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customers ({filteredCustomers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => {
                const TierIcon = getTierIcon(customer.tier);
                return (
                  <TableRow key={customer.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={customer.avatar || undefined} />
                          <AvatarFallback>
                            {customer.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">{customer.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Mail className="h-3 w-3" />
                          {customer.email}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          {customer.phone}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {customer.location}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTierColor(customer.tier)} variant="secondary">
                        <TierIcon className="h-3 w-3 mr-1" />
                        {customer.tier}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{customer.totalOrders}</TableCell>
                    <TableCell className="font-medium">TSh {customer.totalSpent.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(customer.status)} variant="secondary">
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{customer.lastOrder}</TableCell>
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
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
