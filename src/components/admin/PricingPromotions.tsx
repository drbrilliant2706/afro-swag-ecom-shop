
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
  Percent, 
  Tag, 
  TrendingUp, 
  Calendar,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

const promotions = [
  {
    id: 'PROMO-001',
    name: 'Summer Sale',
    type: 'percentage',
    value: 20,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    status: 'active',
    usageCount: 45,
    totalSavings: 125000
  },
  {
    id: 'PROMO-002',
    name: 'New Customer Discount',
    type: 'fixed',
    value: 5000,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'active',
    usageCount: 23,
    totalSavings: 115000
  },
  {
    id: 'PROMO-003',
    name: 'Holiday Special',
    type: 'percentage',
    value: 15,
    startDate: '2023-12-15',
    endDate: '2024-01-02',
    status: 'expired',
    usageCount: 89,
    totalSavings: 234000
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'expired': return 'bg-brand-green/10 text-brand-green dark:bg-brand-green/20 dark:text-brand-green-light';
    case 'scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const PricingPromotions = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Pricing & Promotions</h2>
          <p className="text-muted-foreground">
            Manage discount codes, promotions, and pricing strategies
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Promotion
        </Button>
      </div>

      {/* Promotion Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <Tag className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-sm text-muted-foreground">Active Promotions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <Percent className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">157</div>
                <p className="text-sm text-muted-foreground">Total Usage</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">TSh 474K</div>
                <p className="text-sm text-muted-foreground">Total Savings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Promotions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Promotions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Promotion</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Savings</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((promo) => (
                <TableRow key={promo.id}>
                  <TableCell className="font-medium">{promo.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {promo.type === 'percentage' ? 'Percentage' : 'Fixed Amount'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {promo.type === 'percentage' 
                      ? `${promo.value}%` 
                      : `TSh ${promo.value.toLocaleString()}`
                    }
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{promo.startDate}</div>
                      <div className="text-muted-foreground">to {promo.endDate}</div>
                    </div>
                  </TableCell>
                  <TableCell>{promo.usageCount}</TableCell>
                  <TableCell>TSh {promo.totalSavings.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(promo.status)} variant="secondary">
                      {promo.status}
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
    </div>
  );
};

export default PricingPromotions;
