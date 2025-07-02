import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const PricingPromotions = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Pricing & Promotions</h2>
        <p className="text-muted-foreground">Dynamic pricing and promotional campaigns</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Pricing Dashboard</h3>
            <p className="text-muted-foreground">Advanced pricing tools coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};