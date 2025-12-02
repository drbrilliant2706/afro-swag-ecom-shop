import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Menu, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";
import ProfileModal from "@/components/profile/ProfileModal";
import CartModal from "@/components/cart/CartModal";
import SearchModal from "@/components/search/SearchModal";

const Women = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  
  const { addToCart, getTotalItems } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { user } = useAuth();
  const { toast } = useToast();
  const { products, loading } = useProducts();

  // Filter products for women and active status
  const womenProducts = products.filter(product => 
    product.gender === 'WOMEN' && product.status === 'active'
  ).map(product => ({
    id: product.id,
    name: product.name,
    price: `TSh ${product.price.toLocaleString()}`,
    image: product.images && product.images.length > 0 ? product.images[0] : "/placeholder.svg",
    badge: "NEW",
    colors: ["Red", "White", "Black"], // Default colors for now
    category: product.category || "TOPS"
  }));

  const filteredProducts = womenProducts.filter(product => {
    if (selectedCategory !== "ALL" && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

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

  const handleToggleFavorite = (product: any) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You must be logged in to add items to favorites.",
        variant: "destructive",
      });
      return;
    }

    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
      toast({
        title: "Removed from favorites",
        description: `${product.name} has been removed from your favorites.`,
      });
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      toast({
        title: "Added to favorites!",
        description: `${product.name} has been added to your favorites.`,
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
              <a href="/">
                  <h1 className="text-xl md:text-2xl font-bold text-black">
                  AFRICAN'S <span className="text-brand-green">FINEST</span>
                </h1>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                <a href="/" className="text-black hover:text-brand-green transition-colors text-sm lg:text-base">HOME</a>
                <a href="/men" className="text-black hover:text-brand-green transition-colors text-sm lg:text-base">MEN</a>
                <a href="/women" className="text-brand-green border-b-2 border-brand-green pb-1 text-sm lg:text-base">WOMEN</a>
                <a href="/lookbook" className="text-black hover:text-brand-green transition-colors text-sm lg:text-base">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-brand-green transition-colors text-sm lg:text-base">ABOUT</a>
                <a href="/culture" className="text-black hover:text-brand-green transition-colors text-sm lg:text-base">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <Search 
                className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                onClick={() => setIsSearchOpen(true)}
              />
              <User 
                className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                onClick={() => setIsProfileOpen(true)}
              />
              <a href="/favorites">
                <Heart className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
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
              <Menu 
                className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors md:hidden" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-2">
                <a href="/" className="text-black hover:text-brand-green transition-colors py-2">HOME</a>
                <a href="/men" className="text-black hover:text-brand-green transition-colors py-2">MEN</a>
                <a href="/women" className="text-brand-green py-2">WOMEN</a>
                <a href="/lookbook" className="text-black hover:text-brand-green transition-colors py-2">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-brand-green transition-colors py-2">ABOUT</a>
                <a href="/culture" className="text-black hover:text-brand-green transition-colors py-2">CULTURE</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/5c33a062-0000-460d-af95-63a3342380ea.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            WOMEN'S <span className="text-brand-green">COLLECTION</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Empress-level fashion celebrating East African beauty
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 md:py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full md:w-auto">
              <Button 
                variant="outline" 
                className="border-gray-400 text-black hover:bg-gray-200 w-full sm:w-auto"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              
              {/* Desktop Filter Options */}
              <div className="hidden md:flex space-x-4 text-sm">
                <button 
                  onClick={() => setSelectedCategory("ALL")}
                  className={selectedCategory === "ALL" ? "text-red-600 border-b border-red-600" : "text-gray-600 hover:text-black"}
                >
                  ALL
                </button>
                <button 
                  onClick={() => setSelectedCategory("DRESSES")}
                  className={selectedCategory === "DRESSES" ? "text-red-600 border-b border-red-600" : "text-gray-600 hover:text-black"}
                >
                  DRESSES
                </button>
                <button 
                  onClick={() => setSelectedCategory("TOPS")}
                  className={selectedCategory === "TOPS" ? "text-red-600 border-b border-red-600" : "text-gray-600 hover:text-black"}
                >
                  TOPS
                </button>
                <button 
                  onClick={() => setSelectedCategory("BOTTOMS")}
                  className={selectedCategory === "BOTTOMS" ? "text-red-600 border-b border-red-600" : "text-gray-600 hover:text-black"}
                >
                  BOTTOMS
                </button>
                <button 
                  onClick={() => setSelectedCategory("OUTERWEAR")}
                  className={selectedCategory === "OUTERWEAR" ? "text-red-600 border-b border-red-600" : "text-gray-600 hover:text-black"}
                >
                  OUTERWEAR
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{filteredProducts.length} products</p>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Filter Products</h3>
                <X 
                  className="h-5 w-5 cursor-pointer" 
                  onClick={() => setIsFilterOpen(false)}
                />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Category</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["ALL", "DRESSES", "TOPS", "BOTTOMS", "OUTERWEAR"].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`p-2 text-sm rounded ${
                        selectedCategory === category
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="text-lg text-gray-600">Loading products...</div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">No women's products are currently available. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden bg-gray-50 mb-3">
                    <a href={`/product/${product.id}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </a>
                    <Badge className="absolute top-3 left-3 bg-gray-100 text-gray-600 text-xs font-normal">
                      {product.badge}
                    </Badge>
                    <div className="absolute top-3 right-3">
                      <Heart 
                        className={`h-5 w-5 sm:h-6 sm:w-6 cursor-pointer transition-colors ${
                          isFavorite(Number(product.id)) ? 'text-black fill-black' : 'text-gray-400 hover:text-black'
                        }`}
                        onClick={() => handleToggleFavorite(product)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <a href={`/product/${product.id}`}>
                        <h4 className="text-black font-medium text-sm sm:text-base hover:underline line-clamp-2">{product.name}</h4>
                      </a>
                      <span className="text-gray-400 hover:text-black cursor-pointer ml-2">+</span>
                    </div>
                    <p className="text-black text-sm sm:text-base">{product.price}</p>
                  </div>
                </div>
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
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Women;
