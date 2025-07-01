
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart, Search, User, Menu, Star, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: "FINEST African Mask Tee",
      price: "TSh 45,000",
      image: "/lovable-uploads/83e9eb03-ffaa-4765-956a-cb1f637e3b77.png",
      badge: "NEW",
      colors: ["Red", "White", "Black"]
    },
    {
      id: 2,
      name: "FINEST Blue Oversized Tee",
      price: "TSh 48,000",
      image: "/lovable-uploads/1f0eef57-3784-4a0d-84d8-62b9fcb1c8d9.png",
      badge: "BESTSELLER",
      colors: ["Blue", "White", "Black"]
    },
    {
      id: 3,
      name: "NYUMBANI QWETU Collection",
      price: "TSh 52,000",
      image: "/lovable-uploads/86a2ceca-f52f-4c63-91b6-7fd6da14145f.png",
      badge: "LIMITED",
      colors: ["Beige", "Purple", "Black"]
    },
    {
      id: 4,
      name: "AFRIKA'S Finest Tee",
      price: "TSh 46,000",
      image: "/lovable-uploads/036867e1-6684-4f8f-889e-e89c5719d973.png",
      badge: "EXCLUSIVE",
      colors: ["Tan", "Black", "White"]
    }
  ];

  const handleShopCollection = () => {
    window.location.href = '/men';
  };

  const handleProductClick = (productId: number) => {
    window.location.href = `/product/${productId}`;
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Announcement Bar with Marquee Effect */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          FREE SHIPPING ACROSS EAST AFRICA ON ORDERS TSh 100,000+ | AUTHENTIC TANZANIAN & KENYAN STREETWEAR | WORLDWIDE DELIVERY
        </div>
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black hover:text-red-600 transition-colors cursor-pointer">
                AFRICAN'S <span className="text-red-600">FINEST</span>
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Unapologetically African. Universally Finest.</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-red-600 border-b-2 border-red-600 pb-1 hover:text-red-700 transition-colors">HOME</a>
                <a href="/men" className="text-black hover:text-red-600 transition-colors">MEN</a>
                <a href="/women" className="text-black hover:text-red-600 transition-colors">WOMEN</a>
                <a href="/lookbook" className="text-black hover:text-red-600 transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-red-600 transition-colors">ABOUT</a>
                <a href="/culture" className="text-black hover:text-red-600 transition-colors">CULTURE</a>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors transform hover:scale-110" />
              <User className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors transform hover:scale-110" />
              <Heart className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors transform hover:scale-110" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors transform hover:scale-110" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden hover:text-red-600 transition-colors"
              >
                <Menu className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/7f0b3db7-fa12-4dda-9ab8-e43780531947.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            SPRING<span className="text-red-600">25</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white">
            WHERE EAST AFRICAN HERITAGE MEETS STREETWEAR
          </p>
          <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
            From Kilimanjaro to the Serengeti, from Dar es Salaam to Nairobi - authentic designs that celebrate our roots while defining the future.
          </p>
          <Button 
            size="lg" 
            onClick={handleShopCollection}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            SHOP THE COLLECTION
          </Button>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 text-sm font-medium">
            <a href="#" className="text-black hover:text-red-600 border-b-2 border-red-600 pb-2 transition-colors">NEW ARRIVALS</a>
            <a href="#" className="text-gray-600 hover:text-red-600 pb-2 transition-colors">TEES</a>
            <a href="#" className="text-gray-600 hover:text-red-600 pb-2 transition-colors">HOODIES</a>
            <a href="#" className="text-gray-600 hover:text-red-600 pb-2 transition-colors">JACKETS</a>
            <a href="#" className="text-gray-600 hover:text-red-600 pb-2 transition-colors">ACCESSORIES</a>
            <a href="#" className="text-gray-600 hover:text-red-600 pb-2 transition-colors">WOMEN</a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">FEATURED DROPS</h3>
            <p className="text-gray-600">Handpicked pieces celebrating East African excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="bg-white border-gray-200 hover:border-red-600 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-lg"
                onClick={() => handleProductClick(product.id)}
              >
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
                      <Heart className="h-6 w-6 text-black hover:text-red-600 cursor-pointer transform hover:scale-110" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-black font-bold text-lg mb-2">{product.name}</h4>
                    <p className="text-red-600 font-bold text-xl mb-4">{product.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {product.colors.map((color, index) => (
                          <div key={index} className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400 hover:scale-110 transition-transform cursor-pointer"></div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-red-600 text-red-600" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 transition-all duration-300 transform hover:scale-105">
              VIEW ALL PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-bold text-white mb-6">THE MOVEMENT</h3>
              <p className="text-xl text-white mb-6">
                More than fashion. We're celebrating the richness of East African culture through contemporary streetwear that tells our story.
              </p>
              <p className="text-lg text-gray-100 mb-8">
                From Dar es Salaam to Nairobi, Zanzibar to Mombasa - we carry our heritage with pride, style, and uncompromising quality that represents the finest of Tanzania and Kenya.
              </p>
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 transition-all duration-300 transform hover:scale-105">
                <a href="/culture">DISCOVER OUR STORY</a>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/c1a27c87-fecb-4603-846b-e559103c12ef.png"
                alt="East African Culture"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">JOIN THE FAMILY</h3>
          <p className="text-xl text-gray-400 mb-8">
            Get 10% off your first order and stay updated on exclusive drops from East Africa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white border-gray-300 text-black placeholder-gray-500 flex-1 focus:ring-2 focus:ring-red-600 transition-all"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 transition-all duration-300 transform hover:scale-105">
              GET YOUR DISCOUNT
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-4 hover:text-red-600 transition-colors cursor-pointer">
                AFRICAN'S <span className="text-red-600">FINEST</span>
              </h4>
              <p className="text-gray-400 mb-6">
                Unapologetically African. Universally Finest.
              </p>
              
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors transform hover:scale-110" />
              </div>
            </div>

            {/* Shop */}
            <div>
              <h5 className="text-white font-bold text-lg mb-4">SHOP</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="/men" className="text-gray-400 hover:text-white transition-colors">Men's Collection</a></li>
                <li><a href="/women" className="text-gray-400 hover:text-white transition-colors">Women's Collection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h5 className="text-white font-bold text-lg mb-4">ABOUT</h5>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="/shipping-info" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="text-white font-bold text-lg mb-4">LEGAL</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 African's Finest. All rights reserved. Proudly representing Tanzania & Kenya.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Accept:</span>
              <span className="text-gray-400 text-sm">M-Pesa</span>
              <span className="text-gray-400 text-sm">Airtel Money</span>
              <span className="text-gray-400 text-sm">Visa</span>
              <span className="text-gray-400 text-sm">Mastercard</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
