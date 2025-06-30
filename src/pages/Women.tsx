import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Menu, Star, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import ProfileModal from "@/components/profile/ProfileModal";
import CartModal from "@/components/cart/CartModal";

const Women = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, getTotalItems } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const womenProducts = [
    {
      id: 1,
      name: "FINEST Crop Top Red",
      price: "KSh 3,200",
      image: "/lovable-uploads/83e9eb03-ffaa-4765-956a-cb1f637e3b77.png",
      badge: "NEW",
      colors: ["Red", "White", "Black"]
    },
    {
      id: 2,
      name: "FINEST Group Collection",
      price: "TSh 95,000",
      image: "/lovable-uploads/7f0b3db7-fa12-4dda-9ab8-e43780531947.png",
      badge: "BESTSELLER",
      colors: ["Red", "Black", "White"]
    },
    {
      id: 3,
      name: "FINEST Black Crop Top",
      price: "KSh 4,800",
      image: "/lovable-uploads/c1a27c87-fecb-4603-846b-e559103c12ef.png",
      badge: "EXCLUSIVE",
      colors: ["Black", "White"]
    },
    {
      id: 4,
      name: "NYUMBANI QWETU Purple",
      price: "TSh 55,000",
      image: "/lovable-uploads/6a04cec4-55f6-473d-b3d2-82836bbbadde.png",
      badge: "CULTURE",
      colors: ["Purple", "White", "Beige"]
    },
    {
      id: 5,
      name: "FINEST Split Jeans Style",
      price: "TSh 75,000",
      image: "/lovable-uploads/cab6174c-81c0-4121-bea1-7e06bcd15fae.png",
      badge: "LIMITED",
      colors: ["White", "Blue", "Black"]
    },
    {
      id: 6,
      name: "FINEST Pose Collection",
      price: "KSh 8,500",
      image: "/lovable-uploads/e634235e-8a2c-4e35-91ca-4d56793cad8f.png",
      badge: "PRIDE",
      colors: ["Red", "White", "Black"]
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
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">
                AFRICAN'S <span className="text-red-600">FINEST</span>
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-black hover:text-red-600 transition-colors">HOME</a>
                <a href="/men" className="text-black hover:text-red-600 transition-colors">MEN</a>
                <a href="/women" className="text-red-600 border-b-2 border-red-600 pb-1">WOMEN</a>
                <a href="/lookbook" className="text-black hover:text-red-600 transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-red-600 transition-colors">ABOUT</a>
                <a href="/culture" className="text-black hover:text-red-600 transition-colors">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
              <User 
                className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                onClick={() => setIsProfileOpen(true)}
              />
              <Heart className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart 
                  className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
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
            backgroundImage: `url('/lovable-uploads/c1a27c87-fecb-4603-846b-e559103c12ef.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            WOMEN'S <span className="text-red-600">COLLECTION</span>
          </h2>
          <p className="text-xl text-gray-200">
            Empress-level fashion celebrating East African beauty
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Button variant="outline" className="border-gray-400 text-black hover:bg-gray-200">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-red-600 border-b border-red-600">ALL</a>
                <a href="#" className="text-gray-600 hover:text-black">DRESSES</a>
                <a href="#" className="text-gray-600 hover:text-black">TOPS</a>
                <a href="#" className="text-gray-600 hover:text-black">BOTTOMS</a>
                <a href="#" className="text-gray-600 hover:text-black">OUTERWEAR</a>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{womenProducts.length} products</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenProducts.map((product) => (
              <Card key={product.id} className="bg-white border-gray-200 hover:border-red-600 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-600 text-white">
                      {product.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart 
                        className={`h-6 w-6 cursor-pointer ${
                          isFavorite(product.id) ? 'text-red-500 fill-red-500' : 'text-black hover:text-red-500'
                        }`}
                        onClick={() => handleToggleFavorite(product)}
                      />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-black font-bold text-lg mb-2">{product.name}</h4>
                    <p className="text-red-600 font-bold text-xl mb-4">{product.price}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        {product.colors.map((color, index) => (
                          <div key={index} className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-red-600 text-red-600" />
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
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

export default Women;
