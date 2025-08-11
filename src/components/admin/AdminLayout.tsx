
import { Suspense, lazy } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load admin components for better performance
const AdminDashboard = lazy(() => import('./AdminDashboard'));
const ProductManagement = lazy(() => import('./ProductManagement'));
const OrderManagement = lazy(() => import('./OrderManagement'));
const CustomerManagement = lazy(() => import('./CustomerManagement'));
const InventoryManagement = lazy(() => import('./InventoryManagement'));
const Analytics = lazy(() => import('./Analytics'));
const ContentManagement = lazy(() => import('./ContentManagement'));
const VendorManagement = lazy(() => import('./VendorManagement'));
const PricingPromotions = lazy(() => import('./PricingPromotions'));
const PaymentSettings = lazy(() => import('./PaymentSettings'));
const SecurityFraud = lazy(() => import('./SecurityFraud'));
const SecurityMonitor = lazy(() => import('./SecurityMonitor'));

const ComponentLoader = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-48" />
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-32" />
      ))}
    </div>
  </div>
);

export const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your African's Finest store
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:grid-cols-12">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="vendors">Vendors</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="monitor">Monitor</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Suspense fallback={<ComponentLoader />}>
              <AdminDashboard />
            </Suspense>
          </TabsContent>

          <TabsContent value="products">
            <Suspense fallback={<ComponentLoader />}>
              <ProductManagement />
            </Suspense>
          </TabsContent>

          <TabsContent value="orders">
            <Suspense fallback={<ComponentLoader />}>
              <OrderManagement />
            </Suspense>
          </TabsContent>

          <TabsContent value="customers">
            <Suspense fallback={<ComponentLoader />}>
              <CustomerManagement />
            </Suspense>
          </TabsContent>

          <TabsContent value="inventory">
            <Suspense fallback={<ComponentLoader />}>
              <InventoryManagement />
            </Suspense>
          </TabsContent>

          <TabsContent value="analytics">
            <Suspense fallback={<ComponentLoader />}>
              <Analytics />
            </Suspense>
          </TabsContent>

          <TabsContent value="content">
            <Suspense fallback={<ComponentLoader />}>
              <ContentManagement />
            </Suspense>
          </TabsContent>

          <TabsContent value="vendors">
            <Suspense fallback={<ComponentLoader />}>
              <VendorManagement />
            </Suspense>
          </TabsContent>

          <TabsContent value="pricing">
            <Suspense fallback={<ComponentLoader />}>
              <PricingPromotions />
            </Suspense>
          </TabsContent>

          <TabsContent value="payments">
            <Suspense fallback={<ComponentLoader />}>
              <PaymentSettings />
            </Suspense>
          </TabsContent>

          <TabsContent value="security">
            <Suspense fallback={<ComponentLoader />}>
              <SecurityFraud />
            </Suspense>
          </TabsContent>

          <TabsContent value="monitor">
            <Suspense fallback={<ComponentLoader />}>
              <SecurityMonitor />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
