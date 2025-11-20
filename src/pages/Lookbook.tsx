
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Eye, Share } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Lookbook = () => {
  const lookbookItems = [
    {
      id: 1,
      title: "FINEST COLLECTION",
      description: "Bold statements with African pride",
      image: "/lovable-uploads/7f0b3db7-fa12-4dda-9ab8-e43780531947.png",
      products: ["FINEST Group Tees - TSh 45,000", "Coordinated Crop Tops - KSh 5,500"],
      season: "Spring 2025"
    },
    {
      id: 2,
      title: "NYUMBANI QWETU",
      description: "Home is where the heart is - African style",
      image: "/lovable-uploads/86a2ceca-f52f-4c63-91b6-7fd6da14145f.png",
      products: ["NYUMBANI QWETU Tee - TSh 52,000", "Cultural Pride Collection - KSh 2,800"],
      season: "Spring 2025"
    },
    {
      id: 3,
      title: "STREET STYLE FINEST",
      description: "Urban elegance meets African heritage",
      image: "/lovable-uploads/036867e1-6684-4f8f-889e-e89c5719d973.png",
      products: ["AFRIKA'S Finest Tee - TSh 46,000", "Street Style Essentials - TSh 55,000"],
      season: "Spring 2025"
    },
    {
      id: 4,
      title: "BOLD & BEAUTIFUL",
      description: "Celebrating African femininity with style",
      image: "/lovable-uploads/c1a27c87-fecb-4603-846b-e559103c12ef.png",
      products: ["FINEST Black Crop - TSh 48,000", "Confident Style Collection - KSh 3,500"],
      season: "Spring 2025"
    },
    {
      id: 5,
      title: "SPLIT STYLE REVOLUTION",
      description: "Unique fashion meets cultural expression",
      image: "/lovable-uploads/cab6174c-81c0-4121-bea1-7e06bcd15fae.png",
      products: ["Split Jeans Collection - TSh 65,000", "Revolutionary Style - KSh 3,800"],
      season: "Spring 2025"
    },
    {
      id: 6,
      title: "CONFIDENT POSE",
      description: "Stand tall with African pride",
      image: "/lovable-uploads/e634235e-8a2c-4e35-91ca-4d56793cad8f.png",
      products: ["Confident Pose Collection - KSh 8,500", "Pride Statement Pieces - TSh 65,000"],
      season: "Spring 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">
                AFRICAN'S <span className="text-brand-green">FINEST</span>
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-black hover:text-brand-green transition-colors">HOME</a>
                <a href="/men" className="text-black hover:text-brand-green transition-colors">MEN</a>
                <a href="/women" className="text-black hover:text-brand-green transition-colors">WOMEN</a>
                <a href="/lookbook" className="text-brand-green border-b-2 border-brand-green pb-1">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-brand-green transition-colors">ABOUT</a>
                <a href="/culture" className="text-black hover:text-brand-green transition-colors">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
              <User className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
              <Heart className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
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
            backgroundImage: `url('/lovable-uploads/7f0b3db7-fa12-4dda-9ab8-e43780531947.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            SPRING <span className="text-brand-green">LOOKBOOK</span>
          </h2>
          <p className="text-xl text-gray-200">
            East African elegance meets contemporary streetwear
          </p>
        </div>
      </section>

      {/* Season Navigation */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 text-sm font-medium">
            <a href="#" className="text-brand-green border-b-2 border-brand-green pb-2">SPRING 2025</a>
            <a href="#" className="text-gray-600 hover:text-brand-green pb-2">SUMMER 2025</a>
            <a href="#" className="text-gray-600 hover:text-brand-green pb-2">FALL 2024</a>
            <a href="#" className="text-gray-600 hover:text-brand-green pb-2">WINTER 2024</a>
          </div>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lookbookItems.map((item, index) => (
              <Card key={item.id} className={`bg-white border-gray-200 hover:border-brand-green transition-all duration-300 group ${index % 3 === 0 ? 'md:col-span-2' : ''}`}>
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
                          <span className="text-xs text-red-600 font-semibold">{item.season}</span>
                          <div className="flex space-x-3">
                            <button className="text-white hover:text-red-600 transition-colors">
                              <Eye className="h-5 w-5" />
                            </button>
                            <button className="text-white hover:text-red-600 transition-colors">
                              <Heart className="h-5 w-5" />
                            </button>
                            <button className="text-white hover:text-red-600 transition-colors">
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
      <section className="py-16 bg-brand-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">STYLE GUIDE</h3>
          <p className="text-xl text-white mb-8">
            Learn how to style our pieces for different occasions and express your unique African identity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-2">STREET STYLE</h4>
              <p className="text-white">Casual urban looks with cultural flair</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-2">CULTURAL EVENTS</h4>
              <p className="text-white">Elevated pieces for special occasions</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-2">TRAVEL READY</h4>
              <p className="text-white">Versatile pieces for the global citizen</p>
            </div>
          </div>
          <Button className="bg-white text-brand-green hover:bg-gray-100 px-8 py-3">
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
