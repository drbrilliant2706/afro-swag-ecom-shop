
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
  Package, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  Plus,
  Search,
  Filter,
  Download
} from 'lucide-react';

const inventoryItems = [
  {
    id: 'INV-001',
    name: 'AFRIKA\'S FINEST Mask Tee',
    sku: 'AF-MT-001',
    category: 'T-Shirts',
    currentStock: 15,
    reorderLevel: 10,
    maxStock: 50,
    unitCost: 12000,
    status: 'in-stock'
  },
  {
    id: 'INV-002',
    name: 'FINEST Crop Collection',
    sku: 'FC-CC-002',
    category: 'Crop Tops',
    currentStock: 8,
    reorderLevel: 10,
    maxStock: 30,
    unitCost: 15000,
    status: 'low-stock'
  },
  {
    id: 'INV-003',
    name: 'NYUMBANI QWETU Tee',
    sku: 'NQ-T-003',
    category: 'T-Shirts',
    currentStock: 0,
    reorderLevel: 5,
    maxStock: 25,
    unitCost: 10000,
    status: 'out-of-stock'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in-stock': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'low-stock': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'out-of-stock': return 'bg-brand-green/10 text-brand-green dark:bg-brand-green/20 dark:text-brand-green-light';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const InventoryManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
          <p className="text-muted-foreground">
            Track stock levels, reorder points, and inventory valuation
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Stock
        </Button>
      </div>

      {/* Inventory Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <Package className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">95</div>
                <p className="text-sm text-muted-foreground">Total Items</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/10">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-sm text-muted-foreground">Low Stock</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-green/10 dark:bg-brand-green/20">
                <TrendingDown className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <p className="text-sm text-muted-foreground">Out of Stock</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">TSh 2.1M</div>
                <p className="text-sm text-muted-foreground">Total Value</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Reorder Level</TableHead>
                <TableHead>Unit Cost</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="font-mono">{item.sku}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.currentStock}</TableCell>
                  <TableCell>{item.reorderLevel}</TableCell>
                  <TableCell>TSh {item.unitCost.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)} variant="secondary">
                      {item.status}
                    </Badge>
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

export default InventoryManagement;
