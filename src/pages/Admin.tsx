
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Package, Users, ShoppingCart, Plus, Edit, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'men' | 'women';
  badge: string;
}

interface Order {
  id: string;
  customerName: string;
  items: number;
  total: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

const Admin = () => {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'orders'>('dashboard');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: 'men' as 'men' | 'women',
    badge: 'NEW'
  });

  useEffect(() => {
    // Initialize with sample data
    setProducts([
      { id: 1, name: 'Kilimanjaro Summit Tee', price: 'TSh 45,000', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80', category: 'men', badge: 'BESTSELLER' },
      { id: 2, name: 'Serengeti Queen Dress', price: 'TSh 95,000', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80', category: 'women', badge: 'NEW' }
    ]);

    setOrders([
      { id: 'ORD-001', customerName: 'John Mwangi', items: 2, total: 'TSh 140,000', status: 'pending', date: '2025-01-01' },
      { id: 'ORD-002', customerName: 'Sarah Njeri', items: 1, total: 'TSh 45,000', status: 'shipped', date: '2024-12-30' },
      { id: 'ORD-003', customerName: 'David Kimani', items: 3, total: 'TSh 185,000', status: 'delivered', date: '2024-12-28' }
    ]);
  }, []);

  if (!user || !isAdmin()) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Access Denied</h1>
            <p className="text-gray-400 mb-4">You need admin privileges to access this page.</p>
            <Button onClick={() => window.location.href = '/'} className="bg-yellow-600 hover:bg-yellow-700 text-black">
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      const product: Product = {
        id: Date.now(),
        ...newProduct
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '', image: '', category: 'men', badge: 'NEW' });
      setShowAddProduct(false);
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'text-yellow-500';
      case 'processing': return 'text-blue-500';
      case 'shipped': return 'text-purple-500';
      case 'delivered': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="text-gray-400">Welcome back, {user.name}</p>
          </div>
          <Button onClick={() => window.location.href = '/'} variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
            Back to Store
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'dashboard' 
                ? 'bg-yellow-600 text-black' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'products' 
                ? 'bg-yellow-600 text-black' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'orders' 
                ? 'bg-yellow-600 text-black' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Orders
          </button>
        </div>

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">{products.length}</h3>
                <p className="text-gray-400">Total Products</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <ShoppingCart className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">{orders.length}</h3>
                <p className="text-gray-400">Total Orders</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">156</h3>
                <p className="text-gray-400">Active Users</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Products Management */}
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Products</h2>
              <Button
                onClick={() => setShowAddProduct(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-black"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            {showAddProduct && (
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white">Add New Product</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Product Name</Label>
                      <Input
                        id="name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        className="bg-black border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="price" className="text-white">Price</Label>
                      <Input
                        id="price"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        placeholder="TSh 45,000"
                        className="bg-black border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image" className="text-white">Image URL</Label>
                      <Input
                        id="image"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        className="bg-black border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-white">Category</Label>
                      <select
                        id="category"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({...newProduct, category: e.target.value as 'men' | 'women'})}
                        className="w-full px-3 py-2 bg-black border border-gray-700 text-white rounded-md"
                      >
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button onClick={handleAddProduct} className="bg-yellow-600 hover:bg-yellow-700 text-black">
                      Add Product
                    </Button>
                    <Button onClick={() => setShowAddProduct(false)} variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                    <h4 className="text-white font-bold">{product.name}</h4>
                    <p className="text-yellow-500 font-bold">{product.price}</p>
                    <p className="text-gray-400 text-sm capitalize">{product.category}</p>
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="border-red-600 text-red-500 hover:bg-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Orders Management */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-bold">{order.id}</h4>
                        <p className="text-gray-400">{order.customerName}</p>
                        <p className="text-gray-400 text-sm">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white">{order.items} items</p>
                        <p className="text-yellow-500 font-bold">{order.total}</p>
                        <select
                          value={order.status}
                          onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value as Order['status'])}
                          className={`px-2 py-1 bg-black border border-gray-700 rounded text-sm ${getStatusColor(order.status)}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
