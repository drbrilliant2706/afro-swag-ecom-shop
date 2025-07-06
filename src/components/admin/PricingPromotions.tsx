
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Tag, 
  Percent, 
  Calendar, 
  Users,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye,
  Copy,
  Target
} from 'lucide-react';

const promotions = [
  {
    id: 'PROMO-001',
    name: 'New Year Sale',
    code: 'NEWYEAR2024',
    type: 'percentage',
    value: 25,
    minOrder: 50000,
    usageLimit: 1000,
    usageCount: 234,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    status: 'active',
    categories: ['All']
  },
  {
    id: 'PROMO-002',
    name: 'First Time Buyer',
    code: 'WELCOME15',
    type: 'percentage',
    value: 15,
    minOrder: 25000,
    usageLimit: null,
    usageCount: 89,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'active',
    categories: ['All']
  },
  {
    id: 'PROMO-003',
    name: 'Valentine Special',
    code: 'LOVE2024',
    type: 'fixed',
    value: 10000,
    minOrder: 75000,
    usageLimit: 500,
    usageCount: 456,
    startDate: '2024-02-10',
    endDate: '2024-02-20',
    status: 'expired',
    categories: ['Couples', 'Gifts']
  }
];

const pricingRules = [
  {
    id: 'RULE-001',
    name: 'Bulk Discount - T-Shirts',
    category: 'T-Shirts',
    minQuantity: 5,
    discountType: 'percentage',
    discountValue: 10,
    status: 'active'
  },
  {
    id: 'RULE-002',
    name: 'VIP Customer Discount',
    category: 'All',
    customerTier: 'VIP',
    discountType: 'percentage',
    discountValue: 20,
    status: 'active'
  },
  {
    id: 'RULE-003',
    name: 'Seasonal Markup - Hoodies',
    category: 'Hoodies',
    seasonStart: '2024-06-01',
    seasonEnd: '2024-08-31',
    discountType: 'percentage',
    discountValue: -15,
    status: 'scheduled'
  }
];

export const PricingPromotions = () => {
  const [activeTab, setActiveTab] = useState('promotions');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Pricing & Promotions</h2>
          <p className="text-muted-foreground">
            Manage discount codes, promotional campaigns, and dynamic pricing
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Promotion
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <Tag className="h-5 w-5 text-blue-600" />
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
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <Percent className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">15.2%</div>
                <p className="text-sm text-muted-foreground">Avg Discount Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-sm text-muted-foreground">Promo Code Uses</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">TSh 456K</div>
                <p className="text-sm text-muted-foreground">Total Savings Given</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
          <TabsTrigger value="pricing-rules">Pricing Rules</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="promotions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Promotional Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Promotion</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Valid Period</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {promotions.map((promo) => (
                    <TableRow key={promo.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{promo.name}</p>
                          <p className="text-sm text-muted-foreground">Min. order: TSh {promo.minOrder.toLocaleString()}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded text-sm">{promo.code}</code>
                          <Button variant="ghost" size="sm">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        {promo.type === 'percentage' ? `${promo.value}%` : `TSh ${promo.value.toLocaleString()}`}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm">{promo.usageCount} used</p>
                          {promo.usageLimit && (
                            <p className="text-xs text-muted-foreground">
                              Limit: {promo.usageLimit}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{promo.startDate}</p>
                          <p className="text-muted-foreground">to {promo.endDate}</p>
                        </div>
                      </TableCell>
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
        </TabsContent>

        <TabsContent value="pricing-rules" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Dynamic Pricing Rules</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Rule
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pricingRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{rule.name}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Category: {rule.category}</span>
                          <span>
                            {rule.discountType === 'percentage' ? 
                              `${rule.discountValue}% ${rule.discountValue > 0 ? 'discount' : 'markup'}` : 
                              `TSh ${Math.abs(rule.discountValue).toLocaleString()} ${rule.discountValue > 0 ? 'discount' : 'markup'}`
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(rule.status)} variant="secondary">
                        {rule.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Promotions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {promotions.slice(0, 3).map((promo, index) => (
                    <div key={promo.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{promo.name}</p>
                          <p className="text-sm text-muted-foreground">{promo.code}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{promo.usageCount} uses</p>
                        <p className="text-sm text-muted-foreground">
                          {promo.usageLimit ? `${Math.round((promo.usageCount / promo.usageLimit) * 100)}% used` : 'No limit'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Promotion Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Revenue Generated</p>
                      <p className="text-sm text-green-600 dark:text-green-400">From promotional orders</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">TSh 2.1M</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-800 dark:text-blue-200">Conversion Rate</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Orders with promotions</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">68%</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                    <div>
                      <p className="font-medium text-purple-800 dark:text-purple-200">Avg Order Value</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">With promotions applied</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">TSh 78K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
