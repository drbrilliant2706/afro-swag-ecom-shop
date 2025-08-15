import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Heart, Search, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { CartModal } from "@/components/cart/CartModal";
import { SearchModal } from "@/components/search/SearchModal";
import { ProfileModal } from "@/components/profile/ProfileModal";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const products = [
  {
    id: 1,
    name: "African Heritage Tee",
    price: 29.99,
    image: "/lovable-uploads/036867e1-6684-4f8f-889e-e89c5719d973.png",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Kente Cloth Shorts",
    price: 39.50,
    image: "/lovable-uploads/1c991567-7437-4901-a99f-906426c790e3.png",
    rating: 4.5,
    reviews: 89
  },
  {
    id: 3,
    name: "Ankara Print Dress",
    price: 59.00,
    image: "/lovable-uploads/41a8989b-a99f-4963-a573-55929559e96e.png",
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: "Dashiki Summer Shirt",
    price: 34.99,
    image: "/lovable-uploads/5a9ca967-7539-4591-854c-961a29f69ca7.png",
    rating: 4.2,
    reviews: 62
  },
  {
    id: 5,
    name: "Maasai Beaded Bracelet",
    price: 19.99,
    image: "/lovable-uploads/71999957-e96d-496d-89d7-0a511555245b.png",
    rating: 4.7,
    reviews: 95
  },
  {
    id: 6,
    name: "Zulu Pattern Scarf",
    price: 24.50,
    image: "/lovable-uploads/7873199a-5849-4949-8449-60195539597a.png",
    rating: 4.6,
    reviews: 78
  },
  {
    id: 7,
    name: "Ethiopian Cross Pendant",
    price: 49.00,
    image: "/lovable-uploads/82159091-9541-461a-8554-989611a9935b.png",
    rating: 4.9,
    reviews: 132
  },
  {
    id: 8,
    name: "Rasta Color Beanie",
    price: 27.99,
    image: "/lovable-uploads/b647994a-597a-4999-86e3-2a89ca055a99.png",
    rating: 4.3,
    reviews: 54
  },
];

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cartItems } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    document.title = "Afrika's Finest - Home";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-First Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="mobile-padding py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="touch-target md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">AF</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-foreground">AFRIKA'S FINEST</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/men" className="text-foreground hover:text-primary transition-colors">Men</Link>
              <Link to="/women" className="text-foreground hover:text-primary transition-colors">Women</Link>
              <Link to="/lookbook" className="text-foreground hover:text-primary transition-colors">Lookbook</Link>
              <Link to="/culture" className="text-foreground hover:text-primary transition-colors">Culture</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="touch-target relative"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="touch-target relative"
                onClick={() => setIsProfileOpen(true)}
              >
                <User className="h-5 w-5" />
              </Button>

              <Button 
                variant="ghost" 
                size="icon" 
                className="touch-target relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile First */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10"></div>
        <OptimizedImage
          src="/lovable-uploads/9281b935-05bf-4bc6-bc91-b290612beca6.png"
          alt="African heritage fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center mobile-padding max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            AFRIKA'S FINEST
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Redefining the African narrative through bold designs and timeless style
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto touch-target bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto touch-target border-white text-white hover:bg-white hover:text-primary px-8">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mobile-padding max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="mobile-heading font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="mobile-text text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular pieces celebrating African heritage and contemporary style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 touch-target bg-background/80 hover:bg-background"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                  >
                    <Heart 
                      className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                    />
                  </Button>
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <p className="font-bold text-primary text-base sm:text-lg">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" className="touch-target bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="mobile-padding max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="mobile-heading font-bold text-foreground mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="mobile-text text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                To create world-class African-inspired apparel and content that celebrates our heritage, 
                reshapes perceptions, and empowers Africans to dream bigger, live better, and lead boldly.
              </p>
              <p className="mobile-text text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Every piece we create is a statement: Africa is not defined by the limits others place on us. 
                Our outfits are worn with pride, carrying the essence of the motherland into every street, stage, and social space.
              </p>
              <Link to="/about">
                <Button className="touch-target bg-accent hover:bg-accent/90 text-accent-foreground">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="order-first lg:order-last">
              <OptimizedImage
                src="/lovable-uploads/83e9eb03-ffaa-4765-956a-cb1f637e3b77.png"
                alt="African culture and heritage"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </div>
  );
};

export default Index;
