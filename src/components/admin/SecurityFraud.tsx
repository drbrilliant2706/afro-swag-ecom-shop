import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  Eye,
  Lock,
  Activity,
  TrendingDown,
  Ban,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter
} from 'lucide-react';

const securityIncidents = [
  {
    id: 'INC-001',
    type: 'Suspicious Login',
    description: 'Login from unusual location',
    user: 'john.doe@example.com',
    ipAddress: '192.168.1.100',
    timestamp: '2024-01-05 14:30',
    status: 'open',
    severity: 'high'
  },
  {
    id: 'INC-002',
    type: 'Payment Fraud',
    description: 'Multiple failed transactions',
    user: 'jane.doe@example.com',
    ipAddress: '10.0.0.5',
    timestamp: '2024-01-04 09:15',
    status: 'closed',
    severity: 'medium'
  },
  {
    id: 'INC-003',
    type: 'DDoS Attack',
    description: 'High traffic from unknown sources',
    user: 'N/A',
    ipAddress: 'N/A',
    timestamp: '2024-01-03 18:00',
    status: 'investigating',
    severity: 'high'
  }
];

const fraudRules = [
  {
    id: 'RULE-001',
    name: 'High Transaction Volume',
    description: 'Flag users with > 10 transactions per day',
    threshold: 10,
    action: 'Disable Account',
    status: 'active',
    severity: 'high'
  },
  {
    id: 'RULE-002',
    name: 'Unusual Location Login',
    description: 'Flag logins from different countries within 24 hours',
    threshold: 1,
    action: 'Require Verification',
    status: 'active',
    severity: 'medium'
  },
  {
    id: 'RULE-003',
    name: 'Suspicious Email Domain',
    description: 'Flag registrations from disposable email domains',
    threshold: 1,
    action: 'Reject Registration',
    status: 'inactive',
    severity: 'low'
  }
];

const SecurityFraud = () => {
  const [activeTab, setActiveTab] = useState('incidents');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'closed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'investigating': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Security & Fraud Prevention</h2>
          <p className="text-muted-foreground">
            Monitor security threats and prevent fraudulent activities
          </p>
        </div>
        <Button>
          <Shield className="h-4 w-4 mr-2" />
          Add Security Rule
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/10">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <p className="text-sm text-muted-foreground">Open Incidents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/10">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Under Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">45</div>
                <p className="text-sm text-muted-foreground">Resolved Issues</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="incidents">Security Incidents</TabsTrigger>
          <TabsTrigger value="fraud-rules">Fraud Rules</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="incidents" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Security Incidents</CardTitle>
              <div className="flex items-center space-x-2">
                <Input placeholder="Search incidents..." className="max-w-md" />
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-border">
                {securityIncidents.map((incident) => (
                  <div key={incident.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{incident.type}</p>
                        <p className="text-sm text-muted-foreground">{incident.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                          <Users className="h-3 w-3" />
                          <span>{incident.user}</span>
                          <Lock className="h-3 w-3" />
                          <span>{incident.ipAddress}</span>
                          <Calendar className="h-3 w-3" />
                          <span>{incident.timestamp}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(incident.status)} variant="secondary">
                          {incident.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fraud-rules" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Fraud Prevention Rules</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Rule
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fraudRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{rule.name}</p>
                        <p className="text-sm text-muted-foreground">{rule.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(rule.status)} variant="secondary">
                        {rule.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
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
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Require 2FA for admin access</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">IP Address Whitelisting</p>
                  <p className="text-sm text-muted-foreground">Allow access only from trusted IPs</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Account Lockout</p>
                  <p className="text-sm text-muted-foreground">Lock accounts after multiple failed logins</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SecurityFraud;
