import { useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  BarChart3, 
  CreditCard,
  Truck,
  Tag,
  FileText,
  UserCheck,
  Shield,
  Menu,
  X
} from 'lucide-react';

// Lazy load admin components for better performance - fix named exports
const AdminDashboard = lazy(() => import('./AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const ProductManagement = lazy(() => import('./ProductManagement').then(module => ({ default: module.ProductManagement })));
const OrderManagement = lazy(() => import('./OrderManagement').then(module => ({ default: module.OrderManagement })));
const CustomerManagement = lazy(() => import('./CustomerManagement').then(module => ({ default: module.CustomerManagement })));
const InventoryManagement = lazy(() => import('./InventoryManagement').then(module => ({ default: module.InventoryManagement })));
const PricingPromotions = lazy(() => import('./PricingPromotions').then(module => ({ default: module.PricingPromotions })));
const Analytics = lazy(() => import('./Analytics').then(module => ({ default: module.Analytics })));
const PaymentSettings = lazy(() => import('./PaymentSettings').then(module => ({ default: module.PaymentSettings })));
const ContentManagement = lazy(() => import('./ContentManagement').then(module => ({ default: module.ContentManagement })));
const VendorManagement = lazy(() => import('./VendorManagement').then(module => ({ default: module.VendorManagement })));
const SecurityFraud = lazy(() => import('./SecurityFraud').then(module => ({ default: module.SecurityFraud })));

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  component: React.ComponentType;
  badge?: string;
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, component: AdminDashboard },
  { id: 'products', label: 'Products', icon: Package, component: ProductManagement, badge: 'NEW' },
  { id: 'orders', label: 'Orders', icon: ShoppingCart, component: OrderManagement },
  { id: 'customers', label: 'Customers', icon: Users, component: CustomerManagement },
  { id: 'inventory', label: 'Inventory', icon: Truck, component: InventoryManagement },
  { id: 'pricing', label: 'Pricing & Promos', icon: Tag, component: PricingPromotions },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, component: Analytics },
  { id: 'payments', label: 'Payments', icon: CreditCard, component: PaymentSettings },
  { id: 'content', label: 'Content & SEO', icon: FileText, component: ContentManagement },
  { id: 'vendors', label: 'Vendors', icon: UserCheck, component: VendorManagement },
  { id: 'security', label: 'Security', icon: Shield, component: SecurityFraud },
];

const LoadingSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-64" />
    <Skeleton className="h-4 w-48" />
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-32" />
      ))}
    </div>
    <Skeleton className="h-64 w-full" />
  </div>
);

export const AdminLayout = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ActiveComponent = menuItems.find(item => item.id === activeTab)?.component || AdminDashboard;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {user?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              Back to Store
            </Button>
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-64 transform border-r bg-background transition-transform duration-200 ease-in-out
          md:relative md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-16 md:pt-0">
            <nav className="flex-1 space-y-1 p-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                      ${activeTab === item.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-destructive text-destructive-foreground rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-h-screen md:pl-0">
          <div className="container py-6">
            <Suspense fallback={<LoadingSkeleton />}>
              <ActiveComponent />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};
