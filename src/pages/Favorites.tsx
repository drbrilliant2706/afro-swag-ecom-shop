
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import ProfileModal from "@/components/profile/ProfileModal";
import CartModal from "@/components/cart/CartModal";

const Favorites = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart, getTotalItems } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You must be logged in to add items to your cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleRemoveFromFavorites = (id: number) => {
    removeFromFavorites(id);
    toast({
      title: "Removed from favorites",
      description: "Item has been removed from your favorites.",
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/">
                <h1 className="text-xl md:text-2xl font-bold text-black">
                  AFRICAN'S <span className="text-red-600">FINEST</span>
                </h1>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                <a href="/" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">HOME</a>
                <a href="/men" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">MEN</a>
                <a href="/women" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">WOMEN</a>
                <a href="/lookbook" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">ABOUT</a>
                <a href="/culture" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
              <User 
                className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                onClick={() => setIsProfileOpen(true)}
              />
              <a href="/favorites">
                <Heart className="h-4 w-4 md:h-5 md:w-5 text-red-600 fill-red-600 cursor-pointer transition-colors" />
              </a>
              <div className="relative">
                <ShoppingCart 
                  className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
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
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            YOUR <span className="text-red-600">FAVORITES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Items you've saved for later
          </p>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
              <p className="text-gray-500 mb-6">Start browsing and add items you love!</p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <a href="/men">Browse Products</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {favorites.map((product) => (
                <Card key={product.id} className="bg-white border-gray-200 hover:border-red-600 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <button
                          onClick={() => handleRemoveFromFavorites(product.id)}
                          className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="text-black font-bold text-base md:text-lg mb-2">{product.name}</h4>
                      <p className="text-red-600 font-bold text-lg md:text-xl mb-4">{product.price}</p>

                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-base"
                      >
                        VIEW PRODUCT
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm md:text-base">
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

export default Favorites;
