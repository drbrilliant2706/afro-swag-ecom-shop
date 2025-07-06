
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye,
  Users,
  Activity,
  Bell,
  Settings,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw
} from 'lucide-react';

const securityAlerts = [
  {
    id: 'SEC-001',
    type: 'suspicious_login',
    severity: 'high',
    message: 'Multiple failed login attempts from IP 192.168.1.100',
    timestamp: '2024-01-02 14:30',
    status: 'active',
    location: 'Unknown Location'
  },
  {
    id: 'SEC-002',
    type: 'unusual_order',
    severity: 'medium',
    message: 'Large order placed from new customer account',
    timestamp: '2024-01-02 12:15',
    status: 'investigating',
    location: 'Nairobi, Kenya'
  },
  {
    id: 'SEC-003',
    type: 'payment_fraud',
    severity: 'high',
    message: 'Suspicious payment pattern detected',
    timestamp: '2024-01-02 10:45',
    status: 'resolved',
    location: 'Mombasa, Kenya'
  }
];

const userSessions = [
  {
    id: 'SESS-001',
    user: 'admin@africansfinest.com',
    role: 'Admin',
    ip: '192.168.1.50',
    location: 'Nairobi, Kenya',
    device: 'Chrome on Windows',
    lastActivity: '2024-01-02 15:30',
    status: 'active'
  },
  {
    id: 'SESS-002',
    user: 'manager@africansfinest.com',
    role: 'Manager',
    ip: '192.168.1.75',
    location: 'Mombasa, Kenya',
    device: 'Safari on MacOS',
    lastActivity: '2024-01-02 14:15',
    status: 'active'
  }
];

const auditLogs = [
  {
    id: 'AUDIT-001',
    user: 'admin@africansfinest.com',
    action: 'Product Updated',
    resource: 'PROD-001',
    timestamp: '2024-01-02 15:45',
    ip: '192.168.1.50',
    result: 'success'
  },
  {
    id: 'AUDIT-002',
    user: 'manager@africansfinest.com',
    action: 'Order Status Changed',
    resource: 'ORD-001',
    timestamp: '2024-01-02 14:30',
    ip: '192.168.1.75',
    result: 'success'
  },
  {
    id: 'AUDIT-003',
    user: 'unknown@suspicious.com',
    action: 'Failed Login Attempt',
    resource: 'Authentication',
    timestamp: '2024-01-02 13:20',
    ip: '192.168.1.100',
    result: 'failed'
  }
];

export const SecurityFraud = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'investigating': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'success': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Security & Fraud Protection</h2>
          <p className="text-muted-foreground">
            Monitor security threats, manage access controls, and prevent fraud
          </p>
        </div>
        <Button>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Status
        </Button>
      </div>

      {/* Security Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">98%</div>
                <p className="text-sm text-muted-foreground">Security Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/10">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">3</div>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Active Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                <Activity className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">157</div>
                <p className="text-sm text-muted-foreground">Today's Events</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="alerts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="alerts">Security Alerts</TabsTrigger>
          <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
          <TabsTrigger value="audit">Audit Log</TabsTrigger>
          <TabsTrigger value="settings">Security Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Security Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/10">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">{alert.message}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{alert.timestamp}</span>
                          <span>{alert.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getSeverityColor(alert.severity)} variant="secondary">
                        {alert.severity}
                      </Badge>
                      <Badge className={getStatusColor(alert.status)} variant="secondary">
                        {alert.status}
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

        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active User Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">{session.user}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{session.role}</span>
                          <span>{session.ip}</span>
                          <span>{session.location}</span>
                          <span>{session.device}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right text-sm">
                        <p className="text-muted-foreground">Last active:</p>
                        <p>{session.lastActivity}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Terminate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audit Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                        <Activity className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{log.action}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>User: {log.user}</span>
                          <span>Resource: {log.resource}</span>
                          <span>IP: {log.ip}</span>
                          <span>{log.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(log.result)} variant="secondary">
                      {log.result}
                    </Badge>
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
                  <Lock className="h-5 w-5" />
                  Authentication Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Require 2FA for all admin users</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Password Policy</p>
                    <p className="text-sm text-muted-foreground">Enforce strong passwords</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-muted-foreground">Auto-logout inactive sessions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Fraud Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Real-time Monitoring</p>
                    <p className="text-sm text-muted-foreground">Monitor suspicious activities</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">IP Blocking</p>
                    <p className="text-sm text-muted-foreground">Block suspicious IP addresses</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Rate Limiting</p>
                    <p className="text-sm text-muted-foreground">Limit API requests per IP</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Alert Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Send security alerts via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Alerts</p>
                    <p className="text-sm text-muted-foreground">Critical alerts via SMS</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Slack Integration</p>
                    <p className="text-sm text-muted-foreground">Send alerts to Slack channel</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Security Score</span>
                    <span className="font-medium">98/100</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Authentication Strength</span>
                    <span className="font-medium">95/100</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Access Control</span>
                    <span className="font-medium">100/100</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Data Protection</span>
                    <span className="font-medium">92/100</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
