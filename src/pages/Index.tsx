import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import ProfileModal from "@/components/profile/ProfileModal";
import CartModal from "@/components/cart/CartModal";
import SearchModal from "@/components/search/SearchModal";
import { DropAnimation, DropAnimationGroup } from "@/components/animations/DropAnimation";
import { HeaderCarousel } from "@/components/ui/header-carousel";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { addToCart, getTotalItems } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { user } = useAuth();
  const { toast } = useToast();

  const featuredProducts = [
    {
      id: 1,
      name: "FINEST African Mask Tee",
      price: "TSh 25,000",
      image: "/lovable-uploads/83e9eb03-ffaa-4765-956a-cb1f637e3b77.png",
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "FINEST Blue Oversized Tee",
      price: "TSh 25,000",
      image: "/lovable-uploads/1f0eef57-3784-4a0d-84d8-62b9fcb1c8d9.png",
      badge: "LIMITED"
    },
    {
      id: 3,
      name: "NYUMBANI QWETU Collection",
      price: "TSh 25,000",
      image: "/lovable-uploads/86a2ceca-f52f-4c63-91b6-7fd6da14145f.png",
      badge: "EXCLUSIVE"
    },
    {
      id: 4,
      name: "AFRIKA'S Finest Tee",
      price: "TSh 25,000",
      image: "/lovable-uploads/036867e1-6684-4f8f-889e-e89c5719d973.png",
      badge: "NEW"
    }
  ];

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
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .marquee {
            animation: marquee 15s linear infinite;
          }
        `}
      </style>

      {/* Marquee Header */}
      <div className="bg-red-600 text-white py-1.5 sm:py-2 overflow-hidden">
        <div className="marquee whitespace-nowrap text-xs sm:text-sm md:text-base px-2">
          🎉 Fashion at it's ultimate prime. Shop with us and become part of our vast family worldwide. Afrika's finest telling our African Story. 🎉
        </div>
      </div>

      {/* Navigation with drop animation */}
      <DropAnimation delay={200} dropHeight={30}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/lovable-uploads/05b02c6d-e604-4df1-b5f6-7267787edde7.png" 
                  alt="Afrika's Finest Logo - East African Streetwear Brand" 
                  className="h-8 w-auto sm:h-10 md:h-12 mr-2"
                />
                <a href="/" className="text-sm sm:text-lg md:text-xl font-bold text-black hidden xs:block">
                  AFRICAN'S <span className="text-red-600">FINEST</span>
                </a>
              </div>

              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
                  <a href="/" className="text-red-600 border-b-2 border-red-600 pb-1 text-sm xl:text-base font-medium" aria-current="page">HOME</a>
                  <a href="/lookbook" className="text-black hover:text-red-600 transition-colors text-sm xl:text-base">LOOKBOOK</a>
                  <a href="/about" className="text-black hover:text-red-600 transition-colors text-sm xl:text-base">ABOUT</a>
                  <a href="/culture" className="text-black hover:text-red-600 transition-colors text-sm xl:text-base">CULTURE</a>
                  <Button asChild size="sm" className="bg-white text-black border border-black hover:bg-black hover:text-white transition-colors font-bold">
                    <a href="/men">NEW DROP</a>
                  </Button>
                </div>
              </div>

              <DropAnimationGroup staggerDelay={0.05}>
                {[
                  <Search 
                    key="search"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Search products"
                  />,
                  <User 
                    key="user"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                    onClick={() => setIsProfileOpen(true)}
                    aria-label="User profile"
                  />,
                  <a key="favorites" href="/favorites" aria-label="View favorites">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
                  </a>,
                  <div key="cart" className="relative">
                    <ShoppingCart 
                      className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                      onClick={() => setIsCartOpen(true)}
                      aria-label="Shopping cart"
                    />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center" aria-label={`${getTotalItems()} items in cart`}>
                      {getTotalItems()}
                    </span>
                  </div>,
                  <Menu 
                    key="menu"
                    className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors lg:hidden" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                  />
                ]}
              </DropAnimationGroup>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden border-t border-gray-200 py-3 bg-white">
                <div className="flex flex-col space-y-3 px-2">
                  <a href="/" className="text-red-600 py-2 font-medium">HOME</a>
                  <a href="/lookbook" className="text-black hover:text-red-600 transition-colors py-2">LOOKBOOK</a>
                  <a href="/about" className="text-black hover:text-red-600 transition-colors py-2">ABOUT</a>
                  <a href="/culture" className="text-black hover:text-red-600 transition-colors py-2">CULTURE</a>
                  <Button asChild size="sm" className="bg-white text-black border border-black hover:bg-black hover:text-white transition-colors font-bold mx-2 my-1">
                    <a href="/men">NEW DROP</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </DropAnimation>

      {/* Hero Section with Carousel Background */}
      <DropAnimation delay={300} dropHeight={40}>
        <header className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
          {/* Background Carousel */}
          <div className="absolute inset-0">
            <HeaderCarousel />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Text Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <DropAnimation delay={400} dropHeight={40}>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                  AFRICA'S <span className="text-red-600">FINEST</span>
                </h1>
              </DropAnimation>
              <DropAnimation delay={500} dropHeight={30}>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 px-4">
                  Authentic streetwear celebrating East African culture
                </p>
              </DropAnimation>
            </div>
          </div>
        </header>
      </DropAnimation>

      {/* Featured Products with staggered animations */}
      <main>
        <section className="py-6 sm:py-8 md:py-16 bg-white" aria-labelledby="featured-products">
          <div className="max-w-7xl mx-auto px-4">
            <DropAnimation delay={600} dropHeight={40}>
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <h2 id="featured-products" className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-2 sm:mb-4">
                  FEATURED <span className="text-red-600">PRODUCTS</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">Discover our most popular items</p>
              </div>
            </DropAnimation>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {featuredProducts.map((product, index) => (
              <DropAnimation key={product.id} delay={800 + index * 150} dropHeight={50}>
                <Card className="bg-white border-gray-200 hover:border-red-600 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <a href={`/product/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={`${product.name} - African streetwear fashion`}
                          className="w-full h-32 sm:h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </a>
                      <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-600 text-white text-xs">
                        {product.badge}
                      </Badge>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart 
                          className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 cursor-pointer ${
                            isFavorite(product.id) ? 'text-red-500 fill-red-500' : 'text-black hover:text-red-500'
                          }`}
                          onClick={() => handleToggleFavorite(product)}
                        />
                      </div>
                    </div>
                    
                    <div className="p-2 sm:p-3 md:p-4">
                      <a href={`/product/${product.id}`}>
                        <h4 className="text-black font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 hover:text-red-600 transition-colors cursor-pointer line-clamp-2">{product.name}</h4>
                      </a>
                       <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                         <p className="text-red-600 font-bold text-sm sm:text-base md:text-lg">{product.price}</p>
                       </div>

                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-1.5 sm:py-2"
                      >
                        VIEW PRODUCT
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DropAnimation>
            ))}
          </div>

          <DropAnimation delay={1400} dropHeight={30}>
            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold">
                <a href="/men">VIEW ALL PRODUCTS</a>
              </Button>
            </div>
          </DropAnimation>
        </div>
        </section>

        {/* About Section */}
        <section className="py-6 sm:py-8 md:py-16 bg-gray-100" aria-labelledby="our-story">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <DropAnimation delay={1000} dropHeight={50} className="order-2 lg:order-1">
              <article>
                <h2 id="our-story" className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
                  OUR <span className="text-red-600">STORY</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6">
                  African's Finest is more than just clothing—it's a movement celebrating the rich heritage and vibrant culture of East Africa. Each piece tells a story of tradition, pride, and contemporary style.
                </p>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                  From the bustling streets of Nairobi to the cultural heart of Dar es Salaam, we bring you authentic designs that honor our roots while embracing modern fashion.
                </p>
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold w-full sm:w-auto">
                  <a href="/about">LEARN MORE</a>
                </Button>
              </article>
            </DropAnimation>
            <DropAnimation delay={1200} dropHeight={60} className="relative order-1 lg:order-2">
              <div>
                <img 
                  src="/lovable-uploads/c1a27c87-fecb-4603-846b-e559103c12ef.png" 
                  alt="East African fashion and culture - celebrating heritage through streetwear"
                  className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </DropAnimation>
          </div>
        </div>
        </section>

        {/* About CTA Section */}
        <DropAnimation delay={1400} dropHeight={40}>
          <section className="bg-black text-white py-12 sm:py-16 md:py-20 text-center" aria-labelledby="learn-more-cta">
            <div className="max-w-4xl mx-auto px-4">
              <h2 id="learn-more-cta" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                LEARN MORE <span className="text-red-600">ABOUT US</span>
              </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              Discover our story, values, and the team behind Africa's Finest
            </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                <a href="/about">VISIT ABOUT PAGE</a>
              </Button>
            </div>
          </section>
        </DropAnimation>
      </main>

      {/* Modals */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Index;
