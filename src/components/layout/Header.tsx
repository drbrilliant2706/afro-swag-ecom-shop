
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { DropAnimation } from '@/components/animations/DropAnimation';

interface HeaderProps {
  onCartOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const { user, isAdmin } = useAuth();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <DropAnimation dropHeight={30} duration={0.8}>
      <header className="border-b border-red-600 bg-black/95 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/lovable-uploads/ff71bc8e-6331-4e52-8f9f-5c838167aa34.png"
                alt="Afrika's Finest Logo"
                className="h-10 w-auto"
              />
              <h1 className="text-2xl font-bold text-red-500">AFRIKA'S FINEST</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-red-500 transition-colors">Home</a>
              <a href="/men" className="hover:text-red-500 transition-colors">Men</a>
              <a href="/women" className="hover:text-red-500 transition-colors">Women</a>
              <a href="/lookbook" className="hover:text-red-500 transition-colors">Lookbook</a>
              <a href="/about" className="hover:text-red-500 transition-colors">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">Welcome, {user.name}</span>
                  {isAdmin() && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.location.href = '/admin'}
                      className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                    >
                      Admin
                    </Button>
                  )}
                </div>
              ) : (
                <Button
                  size="sm"
                  onClick={() => window.location.href = '/auth'}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <User className="h-4 w-4 mr-1" />
                  Login
                </Button>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-red-500 relative"
                onClick={onCartOpen}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:text-red-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-red-600">
              <nav className="flex flex-col space-y-2 mt-4">
                <a href="/" className="hover:text-red-500 transition-colors py-2">Home</a>
                <a href="/men" className="hover:text-red-500 transition-colors py-2">Men</a>
                <a href="/women" className="hover:text-red-500 transition-colors py-2">Women</a>
                <a href="/lookbook" className="hover:text-red-500 transition-colors py-2">Lookbook</a>
                <a href="/about" className="hover:text-red-500 transition-colors py-2">About</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </DropAnimation>
  );
};
