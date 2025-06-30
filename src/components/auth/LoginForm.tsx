
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

interface LoginFormProps {
  onSuccess: () => void;
  onSwitchToRegister: () => void;
}

const LoginForm = ({ onSuccess, onSwitchToRegister }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        onSuccess();
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900 border-gray-800">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white text-center">LOGIN</h2>
        <p className="text-gray-400 text-center">Welcome back to African's Finest</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black border-gray-700 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border-gray-700 text-white"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-black"
          >
            {loading ? 'Logging in...' : 'LOGIN'}
          </Button>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-yellow-500 hover:underline"
              >
                Register here
              </button>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Demo Admin: admin@africansfinest.com / admin123
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
