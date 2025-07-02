import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const VendorManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Vendor Management</h2>
        <p className="text-muted-foreground">Vendor onboarding, commission rules, and payout flows</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Marketplace Management</h3>
            <p className="text-muted-foreground">Vendor management tools coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};