
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  DollarSign, 
  Shield, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Smartphone,
  Building
} from 'lucide-react';

const paymentMethods = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    type: 'mobile',
    status: 'active',
    fees: '1.5%',
    icon: <Smartphone className="h-5 w-5" />
  },
  {
    id: 'airtel',
    name: 'Airtel Money',
    type: 'mobile',
    status: 'active',
    fees: '1.2%',
    icon: <Smartphone className="h-5 w-5" />
  },
  {
    id: 'visa',
    name: 'Visa/Mastercard',
    type: 'card',
    status: 'active',
    fees: '2.9%',
    icon: <CreditCard className="h-5 w-5" />
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    type: 'bank',
    status: 'inactive',
    fees: '0.5%',
    icon: <Building className="h-5 w-5" />
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const PaymentSettings = () => {
  const [activeTab, setActiveTab] = useState('methods');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Payment Settings</h2>
        <p className="text-muted-foreground">
          Configure payment methods, fees, and processing options
        </p>
      </div>

      {/* Payment Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <p className="text-sm text-muted-foreground">Active Methods</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">1.8%</div>
                <p className="text-sm text-muted-foreground">Avg. Fees</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                <CreditCard className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">TSh 1.2M</div>
                <p className="text-sm text-muted-foreground">Monthly Volume</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="settings">General Settings</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {method.icon}
                      </div>
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-muted-foreground">Processing fee: {method.fees}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(method.status)} variant="secondary">
                        {method.status}
                      </Badge>
                      <Switch defaultChecked={method.status === 'active'} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Payment Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Input id="currency" value="TSh (Tanzanian Shilling)" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeout">Payment Timeout (minutes)</Label>
                  <Input id="timeout" type="number" defaultValue="15" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-capture payments</p>
                  <p className="text-sm text-muted-foreground">Automatically capture authorized payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Refund notifications</p>
                  <p className="text-sm text-muted-foreground">Send email notifications for refunds</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">3D Secure</p>
                  <p className="text-sm text-muted-foreground">Enable 3D Secure for card payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Fraud detection</p>
                  <p className="text-sm text-muted-foreground">Automatically flag suspicious transactions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">PCI DSS compliance</p>
                  <p className="text-sm text-muted-foreground">Maintain PCI DSS compliance standards</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentSettings;
