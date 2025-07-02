import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ContentManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Content & SEO</h2>
        <p className="text-muted-foreground">Manage content, search, and SEO optimization</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Content Management</h3>
            <p className="text-muted-foreground">Content and SEO tools coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};