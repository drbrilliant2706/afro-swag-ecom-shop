
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search, Filter } from 'lucide-react';
import AddProductModal from './AddProductModal';
import ProductTable from './tables/ProductTable';
import { useProducts } from '@/hooks/useProducts';
import { useDashboardStats } from '@/hooks/useDashboardStats';

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const { products, loading, refetch } = useProducts();
  const { stats } = useDashboardStats();

  const handleProductAdded = () => {
    refetch();
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Product Management</h2>
          <p className="text-muted-foreground">
            Manage your product catalog with intuitive controls
          </p>
        </div>
        <Button onClick={() => setShowAddProduct(true)} className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Products ({filteredProducts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="text-muted-foreground">Loading products...</div>
            </div>
          ) : (
            <ProductTable products={filteredProducts} />
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{stats?.total_products || 0}</div>
            <p className="text-sm text-muted-foreground">Total Products</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">{stats?.low_stock_products || 0}</div>
            <p className="text-sm text-muted-foreground">Low Stock Items</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">TSh {stats?.inventory_value?.toLocaleString() || 0}</div>
            <p className="text-sm text-muted-foreground">Total Inventory Value</p>
          </CardContent>
        </Card>
      </div>

      <AddProductModal 
        isOpen={showAddProduct} 
        onClose={() => setShowAddProduct(false)}
        onProductAdded={handleProductAdded}
      />
    </div>
  );
};

export default ProductManagement;
