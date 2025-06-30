
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart, Search, User, Menu, Star, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Kilimanjaro Crown Tee",
      price: "TSh 45,000",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      badge: "NEW",
      colors: ["Black", "Gold", "Green"]
    },
    {
      id: 2,
      name: "Maasai Warrior Hoodie",
      price: "KSh 6,200",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      badge: "BESTSELLER",
      colors: ["Black", "Red", "White"]
    },
    {
      id: 3,
      name: "Safari Spirit Joggers",
      price: "TSh 65,000",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      badge: "LIMITED",
      colors: ["Khaki", "Olive", "Navy"]
    },
    {
      id: 4,
      name: "Serengeti Bomber Jacket",
      price: "KSh 8,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      badge: "EXCLUSIVE",
      colors: ["Black", "Gold", "Burgundy"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-yellow-600 to-red-600 text-black text-center py-2 text-sm font-medium">
        FREE SHIPPING ACROSS EAST AFRICA ON ORDERS TSh 100,000+ | AUTHENTIC TANZANIAN & KENYAN STREETWEAR | WORLDWIDE DELIVERY
      </div>

      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                AFRICAN'S <span className="text-yellow-500">FINEST</span>
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Unapologetically African. Universally Finest.</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-yellow-500 border-b-2 border-yellow-500 pb-1">HOME</a>
                <a href="/men" className="text-white hover:text-yellow-500 transition-colors">MEN</a>
                <a href="/women" className="text-white hover:text-yellow-500 transition-colors">WOMEN</a>
                <a href="/lookbook" className="text-white hover:text-yellow-500 transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-white hover:text-yellow-500 transition-colors">ABOUT</a>
                <a href="/culture" className="text-white hover:text-yellow-500 transition-colors">CULTURE</a>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <User className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <Heart className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5 text-white" />
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
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            SPRING<span className="text-yellow-500">25</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            WHERE EAST AFRICAN HERITAGE MEETS STREETWEAR
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            From Kilimanjaro to the Serengeti, from Dar es Salaam to Nairobi - authentic designs that celebrate our roots while defining the future.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-12 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            SHOP THE COLLECTION
          </Button>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 text-sm font-medium">
            <a href="#" className="text-white hover:text-yellow-500 border-b-2 border-yellow-500 pb-2">NEW ARRIVALS</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">TEES</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">HOODIES</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">JACKETS</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">ACCESSORIES</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">WOMEN</a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">FEATURED DROPS</h3>
            <p className="text-gray-400">Handpicked pieces celebrating East African excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
                      <Heart className="h-6 w-6 text-white hover:text-red-500 cursor-pointer" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-white font-bold text-lg mb-2">{product.name}</h4>
                    <p className="text-yellow-500 font-bold text-xl mb-4">{product.price}</p>
                    
                    <div className="flex items-center justify-between">
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              VIEW ALL PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 via-yellow-800 to-red-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-bold text-white mb-6">THE MOVEMENT</h3>
              <p className="text-xl text-gray-200 mb-6">
                More than fashion. We're celebrating the richness of East African culture through contemporary streetwear that tells our story.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From Dar es Salaam to Nairobi, Zanzibar to Mombasa - we carry our heritage with pride, style, and uncompromising quality that represents the finest of Tanzania and Kenya.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                <a href="/culture">DISCOVER OUR STORY</a>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="East African Culture"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">JOIN THE FAMILY</h3>
          <p className="text-xl text-gray-400 mb-8">
            Get 10% off your first order and stay updated on exclusive drops from East Africa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-black border-gray-700 text-white placeholder-gray-500 flex-1"
            />
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8">
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
              <h4 className="text-2xl font-bold text-white mb-4">
                AFRICAN'S <span className="text-yellow-500">FINEST</span>
              </h4>
              <p className="text-gray-400 mb-6">
                Unapologetically African. Universally Finest.
              </p>
              
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
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
