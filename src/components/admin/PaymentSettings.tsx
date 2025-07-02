import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const PaymentSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Payment Settings</h2>
        <p className="text-muted-foreground">Integrated payment and tax automation</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Payment Configuration</h3>
            <p className="text-muted-foreground">Payment gateway setup coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};