import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Menu, Star, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import ProfileModal from "@/components/profile/ProfileModal";
import CartModal from "@/components/cart/CartModal";

const Men = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, getTotalItems } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const menProducts = [
    {
      id: 1,
      name: "Kilimanjaro Summit Tee",
      price: "TSh 45,000",
      originalPrice: "TSh 55,000",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      badge: "BESTSELLER",
      colors: ["Black", "Khaki", "Olive"]
    },
    {
      id: 2,
      name: "Maasai Warrior Hoodie",
      price: "TSh 85,000",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      badge: "LIMITED",
      colors: ["Black", "Red", "Brown"]
    },
    {
      id: 3,
      name: "Safari Spirit Joggers",
      price: "KSh 4,500",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      badge: "NEW",
      colors: ["Khaki", "Olive", "Black"]
    },
    {
      id: 4,
      name: "Serengeti Bomber Jacket",
      price: "TSh 120,000",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      badge: "EXCLUSIVE",
      colors: ["Black", "Tan", "Green"]
    },
    {
      id: 5,
      name: "Uhuru Freedom Tank",
      price: "KSh 2,800",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f356f?auto=format&fit=crop&w=800&q=80",
      badge: "PRIDE",
      colors: ["Black", "Green", "Red"]
    },
    {
      id: 6,
      name: "Zanzibar Sunset Shirt",
      price: "TSh 65,000",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      badge: "CULTURE",
      colors: ["Orange", "Yellow", "Blue"]
    }
  ];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleToggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                AFRICAN'S <span className="text-yellow-500">FINEST</span>
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-white hover:text-yellow-500 transition-colors">HOME</a>
                <a href="/men" className="text-yellow-500 border-b-2 border-yellow-500 pb-1">MEN</a>
                <a href="/women" className="text-white hover:text-yellow-500 transition-colors">WOMEN</a>
                <a href="/lookbook" className="text-white hover:text-yellow-500 transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-white hover:text-yellow-500 transition-colors">ABOUT</a>
                <a href="/culture" className="text-white hover:text-yellow-500 transition-colors">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <User 
                className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" 
                onClick={() => setIsProfileOpen(true)}
              />
              <Heart className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart 
                  className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" 
                  onClick={() => setIsCartOpen(true)}
                />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            MEN'S <span className="text-yellow-500">COLLECTION</span>
          </h2>
          <p className="text-xl text-gray-200">
            Bold designs inspired by the warriors of East Africa
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-yellow-500 border-b border-yellow-500">ALL</a>
                <a href="#" className="text-gray-400 hover:text-white">TEES</a>
                <a href="#" className="text-gray-400 hover:text-white">HOODIES</a>
                <a href="#" className="text-gray-400 hover:text-white">JACKETS</a>
                <a href="#" className="text-gray-400 hover:text-white">BOTTOMS</a>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{menProducts.length} products</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menProducts.map((product) => (
              <Card key={product.id} className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-600">
                      {product.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart 
                        className={`h-6 w-6 cursor-pointer ${
                          isFavorite(product.id) ? 'text-red-500 fill-red-500' : 'text-white hover:text-red-500'
                        }`}
                        onClick={() => handleToggleFavorite(product)}
                      />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-white font-bold text-lg mb-2">{product.name}</h4>
                    <div className="flex items-center space-x-2 mb-4">
                      <p className="text-yellow-500 font-bold text-xl">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-gray-500 line-through text-sm">{product.originalPrice}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        {product.colors.map((color, index) => (
                          <div key={index} className="w-4 h-4 rounded-full bg-gray-700 border border-gray-600"></div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold"
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 African's Finest. Proudly representing Tanzania & Kenya.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Men;
