
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Package, 
  Search, 
  Filter, 
  AlertTriangle, 
  TrendingDown,
  TrendingUp,
  Plus,
  Minus,
  BarChart3,
  Download,
  RefreshCw,
  Edit,
  Eye
} from 'lucide-react';

const inventoryItems = [
  {
    id: 'PROD-001',
    name: 'AFRIKA\'S FINEST Mask Tee',
    sku: 'AF-MT-001',
    category: 'T-Shirts',
    currentStock: 45,
    reservedStock: 5,
    availableStock: 40,
    minStock: 10,
    maxStock: 100,
    reorderPoint: 15,
    costPrice: 15000,
    sellPrice: 25000,
    status: 'in_stock',
    lastRestocked: '2024-01-15',
    supplier: 'Local Supplier A'
  },
  {
    id: 'PROD-002',
    name: 'FINEST Crop Collection',
    sku: 'FC-CC-002',
    category: 'Tops',
    currentStock: 8,
    reservedStock: 2,
    availableStock: 6,
    minStock: 10,
    maxStock: 50,
    reorderPoint: 15,
    costPrice: 18000,
    sellPrice: 25000,
    status: 'low_stock',
    lastRestocked: '2024-01-10',
    supplier: 'Local Supplier B'
  },
  {
    id: 'PROD-003',
    name: 'NYUMBANI QWETU Tee',
    sku: 'NQ-T-003',
    category: 'T-Shirts',
    currentStock: 0,
    reservedStock: 0,
    availableStock: 0,
    minStock: 10,
    maxStock: 75,
    reorderPoint: 15,
    costPrice: 16000,
    sellPrice: 25000,
    status: 'out_of_stock',
    lastRestocked: '2023-12-20',
    supplier: 'Local Supplier A'
  },
  {
    id: 'PROD-004',
    name: 'Heritage Print Hoodie',
    sku: 'HP-H-004',
    category: 'Hoodies',
    currentStock: 25,
    reservedStock: 3,
    availableStock: 22,
    minStock: 5,
    maxStock: 40,
    reorderPoint: 10,
    costPrice: 35000,
    sellPrice: 55000,
    status: 'in_stock',
    lastRestocked: '2024-01-20',
    supplier: 'Premium Supplier'
  },
  {
    id: 'PROD-005',
    name: 'Cultural Pride Cap',
    sku: 'CP-C-005',
    category: 'Accessories',
    currentStock: 12,
    reservedStock: 1,
    availableStock: 11,
    minStock: 15,
    maxStock: 60,
    reorderPoint: 20,
    costPrice: 8000,
    sellPrice: 15000,
    status: 'low_stock',
    lastRestocked: '2024-01-05',
    supplier: 'Accessory Supplier'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in_stock': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'low_stock': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'out_of_stock': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'overstocked': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const getStockLevel = (current: number, min: number, max: number) => {
  if (current === 0) return { level: 'Out of Stock', color: 'bg-red-500', percentage: 0 };
  if (current <= min) return { level: 'Low Stock', color: 'bg-yellow-500', percentage: (current / max) * 100 };
  if (current >= max * 0.8) return { level: 'Well Stocked', color: 'bg-green-500', percentage: (current / max) * 100 };
  return { level: 'Normal', color: 'bg-blue-500', percentage: (current / max) * 100 };
};

export const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalItems = inventoryItems.length;
  const lowStockItems = inventoryItems.filter(item => item.status === 'low_stock').length;
  const outOfStockItems = inventoryItems.filter(item => item.status === 'out_of_stock').length;
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.costPrice), 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
          <p className="text-muted-foreground">
            Real-time inventory tracking and stock management
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Package className="h-4 w-4 mr-2" />
            Add Stock
          </Button>
        </div>
      </div>

      {/* Inventory Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <Package className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalItems}</div>
                <p className="text-sm text-muted-foreground">Total Products</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/10">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">{lowStockItems}</div>
                <p className="text-sm text-muted-foreground">Low Stock Items</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/10">
                <TrendingDown className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{outOfStockItems}</div>
                <p className="text-sm text-muted-foreground">Out of Stock</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <BarChart3 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">TSh {totalValue.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Inventory Value</p>
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
                placeholder="Search by product name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="all">All Categories</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Hoodies">Hoodies</option>
                <option value="Tops">Tops</option>
                <option value="Accessories">Accessories</option>
              </select>
              <select 
                value={selectedStatus} 
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="all">All Status</option>
                <option value="in_stock">In Stock</option>
                <option value="low_stock">Low Stock</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Items ({filteredItems.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Reserved</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => {
                const stockInfo = getStockLevel(item.currentStock, item.minStock, item.maxStock);
                return (
                  <TableRow key={item.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{item.sku}</span>
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.currentStock} / {item.maxStock}</span>
                          <span className="text-muted-foreground">{stockInfo.level}</span>
                        </div>
                        <Progress 
                          value={stockInfo.percentage} 
                          className="h-2"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{item.availableStock}</TableCell>
                    <TableCell className="text-muted-foreground">{item.reservedStock}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(item.status)} variant="secondary">
                        {item.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      TSh {(item.currentStock * item.costPrice).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.lastRestocked}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Minus className="h-4 w-4" />
                        </Button>
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
