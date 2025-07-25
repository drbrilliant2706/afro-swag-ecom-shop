
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { User, ShoppingBag, Heart, Settings, LogOut, Shield } from 'lucide-react';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'profile'>('login');
  const { user, logout, isAdmin } = useAuth();
  const { items, getTotalItems } = useCart();
  const { favorites } = useFavorites();

  if (!isOpen) return null;

  const handleAuthSuccess = () => {
    setActiveTab('profile');
  };

  const handleLogout = () => {
    logout();
    setActiveTab('login');
    onClose();
  };

  const handleAdminAccess = () => {
    window.location.href = '/admin';
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-red-600 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-red-600 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">
            {user ? 'Profile' : 'Account'}
          </h2>
          <button
            onClick={onClose}
            className="text-red-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {!user ? (
            <>
              {activeTab === 'login' && (
                <LoginForm
                  onSuccess={handleAuthSuccess}
                  onSwitchToRegister={() => setActiveTab('register')}
                />
              )}
              {activeTab === 'register' && (
                <RegisterForm
                  onSuccess={handleAuthSuccess}
                  onSwitchToLogin={() => setActiveTab('login')}
                />
              )}
            </>
          ) : (
            <Card className="bg-red-900 border-red-600">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{user.name}</h3>
                    <p className="text-red-200 text-sm">{user.email}</p>
                    {isAdmin() && (
                      <div className="flex items-center gap-1 mt-1">
                        <Shield className="h-3 w-3 text-red-400" />
                        <span className="text-red-400 text-xs font-bold">ADMINISTRATOR</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black p-4 rounded-lg text-center border border-red-600">
                    <ShoppingBag className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <p className="text-white font-bold">{getTotalItems()}</p>
                    <p className="text-red-200 text-sm">Cart Items</p>
                  </div>
                  <div className="bg-black p-4 rounded-lg text-center border border-red-600">
                    <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <p className="text-white font-bold">{favorites.length}</p>
                    <p className="text-red-200 text-sm">Favorites</p>
                  </div>
                </div>

                {isAdmin() && (
                  <Button
                    onClick={handleAdminAccess}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Access Admin Panel
                  </Button>
                )}

                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full border-red-600 text-white hover:bg-red-600 hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
