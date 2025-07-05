
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import CartModal from '@/components/cart/CartModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { DropAnimation, DropAnimationGroup } from '@/components/animations/DropAnimation';

const products = [
  {
    id: 1,
    name: "AFRIKA'S FINEST Mask Tee",
    price: "TSh 25,000",
    image: "/lovable-uploads/036867e1-6684-4f8f-889e-e89c5719d973.png",
    category: "Men's T-Shirts"
  },
  {
    id: 2,
    name: "FINEST Crop Collection",
    price: "TSh 25,000",
    image: "/lovable-uploads/05b02c6d-e604-4df1-b5f6-7267787edde7.png",
    category: "Women's Tops"
  },
  {
    id: 3,
    name: "NYUMBANI QWETU Tee",
    price: "TSh 25,000",
    image: "/lovable-uploads/093741ff-4455-45a5-981c-1152e3ee8456.png",
    category: "Unisex"
  },
  {
    id: 4,
    name: "DUKA VINTAGE Tee",
    price: "TSh 25,000",
    image: "/lovable-uploads/1284c969-9977-4434-b6c9-5959444c950d.png",
    category: "Men's T-Shirts"
  },
  {
    id: 5,
    name: "BOLD & BEAUTIFUL Tee",
    price: "TSh 25,000",
    image: "/lovable-uploads/14799a9a-4a94-4999-87ca-16e188c8aef5.png",
    category: "Women's Tops"
  },
  {
    id: 6,
    name: "AFRIKA'S FINEST Joggers",
    price: "TSh 45,000",
    image: "/lovable-uploads/17377105-5921-4435-8a98-0a949ca9848a.png",
    category: "Men's Bottoms"
  },
  {
    id: 7,
    name: "HERITAGE SNAPBACK",
    price: "TSh 30,000",
    image: "/lovable-uploads/18955190-e593-4194-b979-139229e32a94.png",
    category: "Accessories"
  },
  {
    id: 8,
    name: "AFRIKA'S FINEST Bomber Jacket",
    price: "TSh 80,000",
    image: "/lovable-uploads/1b999995-75a4-491d-a801-43e63418996d.png",
    category: "Men's Outerwear"
  },
];

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { addToCart, items } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { user, isAdmin } = useAuth();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  const toggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
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
                  onClick={() => setIsCartOpen(true)}
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

      {/* Hero Section */}
      <DropAnimation delay={200} dropHeight={50} duration={1}>
        <section className="relative h-96 bg-gradient-to-r from-red-900 to-black flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">CELEBRATE AFRICA</h2>
            <p className="text-xl mb-6">Premium streetwear inspired by African heritage</p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Shop Collection
            </Button>
          </div>
        </section>
      </DropAnimation>

      {/* Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <DropAnimation delay={400} dropHeight={40}>
            <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
          </DropAnimation>
          
          <DropAnimationGroup staggerDelay={0.1} dropHeight={60} duration={0.8}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded group-hover:scale-105 transition-transform duration-300"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`absolute top-2 right-2 ${
                          isFavorite(product.id) ? 'text-red-500' : 'text-white'
                        } hover:text-red-500`}
                        onClick={() => toggleFavorite(product)}
                      >
                        <Heart className={`h-5 w-5 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    <h4 className="text-white font-bold mb-2">{product.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-500 font-bold">{product.price}</span>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </DropAnimationGroup>
        </div>
      </section>

      {/* Footer */}
      <DropAnimation delay={800} dropHeight={30}>
        <footer className="bg-gray-900 border-t border-red-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h5 className="text-white font-bold mb-4">AFRIKA'S FINEST</h5>
                <p className="text-gray-400">Celebrating African heritage through premium streetwear.</p>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about" className="hover:text-red-500">About Us</a></li>
                  <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
                  <li><a href="/shipping" className="hover:text-red-500">Shipping Info</a></li>
                  <li><a href="/returns" className="hover:text-red-500">Returns</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Categories</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/men" className="hover:text-red-500">Men's Collection</a></li>
                  <li><a href="/women" className="hover:text-red-500">Women's Collection</a></li>
                  <li><a href="/culture" className="hover:text-red-500">Culture Wear</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Follow Us</h5>
                <p className="text-gray-400">Stay connected for the latest drops and African culture celebrations.</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Afrika's Finest. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </DropAnimation>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;
