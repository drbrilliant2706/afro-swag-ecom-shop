
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
const NewsletterManagement = lazy(() => import('./NewsletterManagement'));

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
      <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Manage your Afrika's Finest store
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-4 sm:space-y-6">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <TabsList className="inline-flex h-auto min-w-max gap-1 p-1 bg-muted/50 rounded-lg">
              <TabsTrigger value="dashboard" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Dashboard</TabsTrigger>
              <TabsTrigger value="products" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Products</TabsTrigger>
              <TabsTrigger value="orders" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Orders</TabsTrigger>
              <TabsTrigger value="customers" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Customers</TabsTrigger>
              <TabsTrigger value="inventory" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Inventory</TabsTrigger>
              <TabsTrigger value="analytics" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Analytics</TabsTrigger>
              <TabsTrigger value="content" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Content</TabsTrigger>
              <TabsTrigger value="vendors" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Vendors</TabsTrigger>
              <TabsTrigger value="pricing" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Pricing</TabsTrigger>
              <TabsTrigger value="payments" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Payments</TabsTrigger>
              <TabsTrigger value="security" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Security</TabsTrigger>
              <TabsTrigger value="monitor" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Monitor</TabsTrigger>
              <TabsTrigger value="newsletter" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap">Newsletter</TabsTrigger>
            </TabsList>
          </div>

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

          <TabsContent value="newsletter">
            <Suspense fallback={<ComponentLoader />}>
              <NewsletterManagement />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
