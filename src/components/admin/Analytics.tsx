import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">Gorgeous dashboards and analytics</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-muted-foreground">Comprehensive analytics coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};