
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Eye, Share } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Lookbook = () => {
  const lookbookItems = [
    {
      id: 1,
      title: "KILIMANJARO SUMMIT",
      description: "Peak performance meets street style",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
      products: ["Kilimanjaro Summit Tee - TSh 45,000", "Safari Cargo Pants - KSh 5,500"],
      season: "Spring 2025"
    },
    {
      id: 2,
      title: "SERENGETI QUEEN",
      description: "Empress-level elegance with wild spirit",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
      products: ["Serengeti Queen Dress - TSh 95,000", "Gold Maasai Earrings - KSh 2,800"],
      season: "Spring 2025"
    },
    {
      id: 3,
      title: "URBAN NAIROBI",
      description: "City lights and cultural pride",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80",
      products: ["Nairobi Nights Hoodie - KSh 6,200", "Urban Warrior Joggers - TSh 55,000"],
      season: "Spring 2025"
    },
    {
      id: 4,
      title: "ZANZIBAR SUNSET",
      description: "Coastal vibes with heritage roots",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      products: ["Zanzibar Sunset Dress - TSh 85,000", "Coral Reef Accessories - KSh 3,500"],
      season: "Spring 2025"
    },
    {
      id: 5,
      title: "MAASAI WARRIOR",
      description: "Traditional strength, modern expression",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      products: ["Warrior Spirit Jacket - TSh 110,000", "Traditional Pattern Tee - KSh 3,800"],
      season: "Spring 2025"
    },
    {
      id: 6,
      title: "SAFARI EMPRESS",
      description: "Adventure-ready luxury fashion",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a13804?auto=format&fit=crop&w=800&q=80",
      products: ["Safari Empress Jacket - KSh 8,500", "Adventure Chic Pants - TSh 65,000"],
      season: "Spring 2025"
    }
  ];

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
                <a href="/men" className="text-white hover:text-yellow-500 transition-colors">MEN</a>
                <a href="/women" className="text-white hover:text-yellow-500 transition-colors">WOMEN</a>
                <a href="/lookbook" className="text-yellow-500 border-b-2 border-yellow-500 pb-1">LOOKBOOK</a>
                <a href="/about" className="text-white hover:text-yellow-500 transition-colors">ABOUT</a>
                <a href="/culture" className="text-white hover:text-yellow-500 transition-colors">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <User className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <Heart className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
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
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            SPRING <span className="text-yellow-500">LOOKBOOK</span>
          </h2>
          <p className="text-xl text-gray-200">
            East African elegance meets contemporary streetwear
          </p>
        </div>
      </section>

      {/* Season Navigation */}
      <section className="py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 text-sm font-medium">
            <a href="#" className="text-yellow-500 border-b-2 border-yellow-500 pb-2">SPRING 2025</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">SUMMER 2025</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">FALL 2024</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 pb-2">WINTER 2024</a>
          </div>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lookbookItems.map((item, index) => (
              <Card key={item.id} className={`bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 group ${index % 3 === 0 ? 'md:col-span-2' : ''}`}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${index % 3 === 0 ? 'h-96' : 'h-80'}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="bg-black bg-opacity-80 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        
                        <div className="mb-4">
                          <p className="text-sm text-gray-400 mb-2">Featured Items:</p>
                          {item.products.map((product, idx) => (
                            <p key={idx} className="text-sm text-white">{product}</p>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-yellow-500 font-semibold">{item.season}</span>
                          <div className="flex space-x-3">
                            <button className="text-white hover:text-yellow-500 transition-colors">
                              <Eye className="h-5 w-5" />
                            </button>
                            <button className="text-white hover:text-yellow-500 transition-colors">
                              <Heart className="h-5 w-5" />
                            </button>
                            <button className="text-white hover:text-yellow-500 transition-colors">
                              <Share className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Style Guide Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-black mb-6">STYLE GUIDE</h3>
          <p className="text-xl text-black mb-8">
            Learn how to style our pieces for different occasions and express your unique African identity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black bg-opacity-20 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-2">STREET STYLE</h4>
              <p className="text-black">Casual urban looks with cultural flair</p>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-2">CULTURAL EVENTS</h4>
              <p className="text-black">Elevated pieces for special occasions</p>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-2">TRAVEL READY</h4>
              <p className="text-black">Versatile pieces for the global citizen</p>
            </div>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            DOWNLOAD STYLE GUIDE
          </Button>
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
    </div>
  );
};

export default Lookbook;
