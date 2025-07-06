
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  DollarSign,
  Settings,
  Shield,
  Bell,
  CheckCircle,
  AlertCircle,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

const paymentMethods = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    type: 'mobile_money',
    icon: Smartphone,
    status: 'active',
    enabled: true,
    fees: '2.5%',
    processingTime: 'Instant',
    supported: ['KES'],
    description: 'Kenya\'s leading mobile money service'
  },
  {
    id: 'visa_mastercard',
    name: 'Visa/Mastercard',
    type: 'card',
    icon: CreditCard,
    status: 'active',
    enabled: true,
    fees: '3.5% + TSh 50',
    processingTime: '2-3 business days',
    supported: ['USD', 'EUR', 'KES'],
    description: 'International card payments'
  },
  {
    id: 'airtel_money',
    name: 'Airtel Money',
    type: 'mobile_money',
    icon: Smartphone,
    status: 'active',
    enabled: false,
    fees: '2.8%',
    processingTime: 'Instant',
    supported: ['KES'],
    description: 'Airtel mobile money service'
  },
  {
    id: 'bank_transfer',
    name: 'Bank Transfer',
    type: 'bank',
    icon: Building,
    status: 'pending',
    enabled: false,
    fees: 'TSh 100 flat',
    processingTime: '1-2 business days',
    supported: ['KES'],
    description: 'Direct bank transfers'
  }
];

const transactionHistory = [
  {
    id: 'TXN-001',
    orderId: 'ORD-001',
    amount: 45000,
    method: 'M-Pesa',
    status: 'completed',
    customer: 'John Mwangi',
    date: '2024-01-02 14:30',
    reference: 'MP240102001'
  },
  {
    id: 'TXN-002',
    orderId: 'ORD-002',
    amount: 78000,
    method: 'Visa',
    status: 'completed',
    customer: 'Sarah Njeri',
    date: '2024-01-02 10:15',
    reference: 'VS240102002'
  },
  {
    id: 'TXN-003',
    orderId: 'ORD-003',
    amount: 32000,
    method: 'M-Pesa',
    status: 'pending',
    customer: 'David Kimani',
    date: '2024-01-02 09:45',
    reference: 'MP240102003'
  }
];

export const PaymentSettings = () => {
  const [activeTab, setActiveTab] = useState('methods');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'; 
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Payment Settings</h2>
          <p className="text-muted-foreground">
            Configure payment methods and manage transaction settings
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Payment Method
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{method.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(method.status)} variant="secondary">
                        {method.status}
                      </Badge>
                      <Switch checked={method.enabled} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Processing Fee</p>
                        <p className="font-medium">{method.fees}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Processing Time</p>
                        <p className="font-medium">{method.processingTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Supported Currencies</p>
                        <p className="font-medium">{method.supported.join(', ')}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactionHistory.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.orderId}</p>
                        <p className="text-sm text-muted-foreground">{transaction.customer}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">TSh {transaction.amount.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">{transaction.method}</p>
                      <Badge className={getStatusColor(transaction.status)} variant="secondary">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Require 2FA for payment settings</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment Encryption</p>
                    <p className="text-sm text-muted-foreground">Encrypt all payment data</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Fraud Detection</p>
                    <p className="text-sm text-muted-foreground">Enable automatic fraud screening</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment Confirmations</p>
                    <p className="text-sm text-muted-foreground">Notify on successful payments</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Failed Payments</p>
                    <p className="text-sm text-muted-foreground">Alert on payment failures</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Daily Reports</p>
                    <p className="text-sm text-muted-foreground">Send daily payment summaries</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Webhook URL</label>
                  <Input 
                    placeholder="https://your-store.com/webhooks/payments" 
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">API Key</label>
                  <Input 
                    type="password" 
                    placeholder="Enter your API key" 
                    className="mt-1"
                  />
                </div>
                <Button>Update Configuration</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Limits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Minimum Order Amount</label>
                  <Input 
                    type="number" 
                    placeholder="1000" 
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Maximum Order Amount</label>
                  <Input 
                    type="number" 
                    placeholder="1000000" 
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Daily Transaction Limit</label>
                  <Input 
                    type="number" 
                    placeholder="50" 
                    className="mt-1"
                  />
                </div>
                <Button>Save Limits</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
