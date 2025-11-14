import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Building, 
  DollarSign, 
  Package,
  Phone,
  Mail,
  MapPin,
  Plus,
  Edit,
  Eye,
  Trash2
} from 'lucide-react';

const vendors = [
  {
    id: 'VEN-001',
    name: 'African Textile Co.',
    contactPerson: 'Samuel Kimani',
    email: 'samuel@africantextile.co.ke',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    status: 'active',
    products: 45,
    commissionRate: 15,
    totalSales: 2340000,
    joinDate: '2023-06-15',
    paymentTerms: 'Net 30'
  },
  {
    id: 'VEN-002',
    name: 'Heritage Fabrics Ltd',
    contactPerson: 'Grace Wanjiku',
    email: 'grace@heritagefabrics.com',
    phone: '+254 723 456 789',
    location: 'Mombasa, Kenya',
    status: 'active',
    products: 32,
    commissionRate: 12,
    totalSales: 1890000,
    joinDate: '2023-08-20',
    paymentTerms: 'Net 15'
  },
  {
    id: 'VEN-003',
    name: 'Traditional Crafts Kenya',
    contactPerson: 'Peter Ochieng',
    email: 'peter@traditionalcrafts.ke',
    phone: '+254 734 567 890',
    location: 'Kisumu, Kenya',
    status: 'pending',
    products: 18,
    commissionRate: 18,
    totalSales: 560000,
    joinDate: '2024-01-10',
    paymentTerms: 'Net 45'
  },
  {
    id: 'VEN-004',
    name: 'Urban African Wear',
    contactPerson: 'Mary Njeri',
    email: 'mary@urbanafrican.com',
    phone: '+254 745 678 901',
    location: 'Nakuru, Kenya',
    status: 'inactive',
    products: 0,
    commissionRate: 20,
    totalSales: 0,
    joinDate: '2023-12-05',
    paymentTerms: 'Net 30'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'inactive': return 'bg-brand-green/10 text-brand-green dark:bg-brand-green/20 dark:text-brand-green-light';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const VendorManagement = () => {
  const totalVendors = vendors.length;
  const activeVendors = vendors.filter(v => v.status === 'active').length;
  const totalProducts = vendors.reduce((sum, v) => sum + v.products, 0);
  const totalSales = vendors.reduce((sum, v) => sum + v.totalSales, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Vendor Management</h2>
          <p className="text-muted-foreground">
            Manage vendor partnerships, commission rates, and product catalogs
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      {/* Vendor Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <Building className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalVendors}</div>
                <p className="text-sm text-muted-foreground">Total Vendors</p>
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
                <div className="text-2xl font-bold">{activeVendors}</div>
                <p className="text-sm text-muted-foreground">Active Vendors</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <Package className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalProducts}</div>
                <p className="text-sm text-muted-foreground">Vendor Products</p>
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
                <div className="text-2xl font-bold">TSh {(totalSales / 1000000).toFixed(1)}M</div>
                <p className="text-sm text-muted-foreground">Total Vendor Sales</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vendor Table */}
      <Card>
        <CardHeader>
          <CardTitle>Vendor Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Total Sales</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow key={vendor.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{vendor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Joined: {vendor.joinDate}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{vendor.contactPerson}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {vendor.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {vendor.phone}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {vendor.location}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{vendor.products}</TableCell>
                  <TableCell className="font-medium">{vendor.commissionRate}%</TableCell>
                  <TableCell className="font-medium">
                    TSh {vendor.totalSales.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(vendor.status)} variant="secondary">
                      {vendor.status}
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
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Vendor Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vendors.filter(v => v.status === 'active').sort((a, b) => b.totalSales - a.totalSales).slice(0, 3).map((vendor, index) => (
                <div key={vendor.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{vendor.name}</p>
                      <p className="text-sm text-muted-foreground">{vendor.products} products</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">TSh {vendor.totalSales.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{vendor.commissionRate}% commission</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commission Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Total Commissions</p>
                  <p className="text-sm text-green-600 dark:text-green-400">This month</p>
                </div>
                <p className="text-2xl font-bold text-green-600">TSh 89K</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                <div>
                  <p className="font-medium text-blue-800 dark:text-blue-200">Average Commission</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Across all vendors</p>
                </div>
                <p className="text-2xl font-bold text-blue-600">15.8%</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                <div>
                  <p className="font-medium text-purple-800 dark:text-purple-200">Pending Payouts</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Next payout cycle</p>
                </div>
                <p className="text-2xl font-bold text-purple-600">TSh 234K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorManagement;
