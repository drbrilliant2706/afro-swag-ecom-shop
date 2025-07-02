import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const SecurityFraud = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Security & Fraud Protection</h2>
        <p className="text-muted-foreground">Secure role-based access and fraud protection</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Security Dashboard</h3>
            <p className="text-muted-foreground">Advanced security features coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};