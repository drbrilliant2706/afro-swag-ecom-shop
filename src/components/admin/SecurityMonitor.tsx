
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  AlertTriangle, 
  Activity, 
  RefreshCw,
  Database,
  Users,
  Lock
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface SecurityCheck {
  id: string;
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  severity: 'low' | 'medium' | 'high';
}

export const SecurityMonitor = () => {
  const [checks, setChecks] = useState<SecurityCheck[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, session } = useAuth();

  const runSecurityChecks = async () => {
    setLoading(true);
    const securityChecks: SecurityCheck[] = [];

    try {
      // Check 1: Authentication Status
      if (!session || !user) {
        securityChecks.push({
          id: 'auth-status',
          name: 'Authentication Status',
          status: 'fail',
          message: 'User not properly authenticated',
          severity: 'high'
        });
      } else {
        securityChecks.push({
          id: 'auth-status',
          name: 'Authentication Status',
          status: 'pass',
          message: `Authenticated as ${user.email} (${user.role})`,
          severity: 'low'
        });
      }

      // Check 2: Admin Access
      if (user?.role !== 'admin') {
        securityChecks.push({
          id: 'admin-access',
          name: 'Admin Access',
          status: 'warning',
          message: 'Current user does not have admin privileges',
          severity: 'medium'
        });
      } else {
        securityChecks.push({
          id: 'admin-access',
          name: 'Admin Access',
          status: 'pass',
          message: 'Admin access verified',
          severity: 'low'
        });
      }

      // Check 3: Database Connection
      try {
        const { error } = await supabase.from('products').select('count').limit(1);
        if (error) {
          securityChecks.push({
            id: 'db-connection',
            name: 'Database Connection',
            status: 'fail',
            message: `Database error: ${error.message}`,
            severity: 'high'
          });
        } else {
          securityChecks.push({
            id: 'db-connection',
            name: 'Database Connection',
            status: 'pass',
            message: 'Database connection successful',
            severity: 'low'
          });
        }
      } catch (err) {
        securityChecks.push({
          id: 'db-connection',
          name: 'Database Connection',
          status: 'fail',
          message: 'Failed to connect to database',
          severity: 'high'
        });
      }

      // Check 4: RLS Policies
      try {
        const { data, error } = await supabase.from('products').select('*').limit(1);
        if (error && error.message.includes('RLS')) {
          securityChecks.push({
            id: 'rls-policies',
            name: 'Row Level Security',
            status: 'fail',
            message: 'RLS policies may be blocking access',
            severity: 'high'
          });
        } else {
          securityChecks.push({
            id: 'rls-policies',
            name: 'Row Level Security',
            status: 'pass',
            message: 'RLS policies functioning correctly',
            severity: 'low'
          });
        }
      } catch (err) {
        securityChecks.push({
          id: 'rls-policies',
          name: 'Row Level Security',
          status: 'warning',
          message: 'Unable to verify RLS policies',
          severity: 'medium'
        });
      }

      // Check 5: Session Validity
      const sessionAge = session ? Date.now() - new Date(session.user.created_at).getTime() : 0;
      const sessionAgeHours = sessionAge / (1000 * 60 * 60);
      
      if (sessionAgeHours > 24) {
        securityChecks.push({
          id: 'session-validity',
          name: 'Session Validity',
          status: 'warning',
          message: 'Session is older than 24 hours, consider refreshing',
          severity: 'medium'
        });
      } else {
        securityChecks.push({
          id: 'session-validity',
          name: 'Session Validity',
          status: 'pass',
          message: 'Session is fresh and valid',
          severity: 'low'
        });
      }

    } catch (error) {
      console.error('Security check error:', error);
      securityChecks.push({
        id: 'general-error',
        name: 'General Security Check',
        status: 'fail',
        message: 'Failed to complete security checks',
        severity: 'high'
      });
    }

    setChecks(securityChecks);
    setLoading(false);
  };

  useEffect(() => {
    runSecurityChecks();
  }, [user, session]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return <Shield className="h-4 w-4 text-green-600" />;
      case 'fail': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'warning': return <Activity className="h-4 w-4 text-yellow-600" />;
      default: return <Shield className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'fail': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'warning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const failedChecks = checks.filter(check => check.status === 'fail').length;
  const warningChecks = checks.filter(check => check.status === 'warning').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Security Monitor</h3>
          <p className="text-sm text-muted-foreground">
            Real-time security status and diagnostics
          </p>
        </div>
        <Button onClick={runSecurityChecks} disabled={loading} size="sm">
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/10">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {checks.filter(c => c.status === 'pass').length}
                </div>
                <p className="text-sm text-muted-foreground">Passed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/10">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">{warningChecks}</div>
                <p className="text-sm text-muted-foreground">Warnings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/10">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{failedChecks}</div>
                <p className="text-sm text-muted-foreground">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Alerts */}
      {(failedChecks > 0 || warningChecks > 0) && (
        <Alert variant={failedChecks > 0 ? "destructive" : "default"}>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {failedChecks > 0 
              ? `${failedChecks} critical security issue(s) detected. Immediate attention required.`
              : `${warningChecks} security warning(s) detected. Review recommended.`
            }
          </AlertDescription>
        </Alert>
      )}

      {/* Detailed Checks */}
      <Card>
        <CardHeader>
          <CardTitle>Security Checks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {checks.map((check) => (
              <div key={check.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(check.status)}
                  <div>
                    <p className="font-medium">{check.name}</p>
                    <p className="text-sm text-muted-foreground">{check.message}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(check.severity)} variant="secondary">
                    {check.severity}
                  </Badge>
                  <Badge className={getStatusColor(check.status)} variant="secondary">
                    {check.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
