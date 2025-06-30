
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Award, Users, Globe, Target } from "lucide-react";

const About = () => {
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
                <a href="/lookbook" className="text-white hover:text-yellow-500 transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-yellow-500 border-b-2 border-yellow-500 pb-1">ABOUT</a>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            OUR <span className="text-yellow-500">STORY</span>
          </h2>
          <p className="text-xl text-gray-200">
            Born in East Africa, designed for the world
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              UNAPOLOGETICALLY AFRICAN. UNIVERSALLY FINEST.
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in the heart of East Africa, African's Finest represents more than just fashion. 
              We are a movement celebrating the rich heritage of Tanzania and Kenya while embracing 
              contemporary streetwear culture that speaks to the global African diaspora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80"
                alt="Our founder"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-white mb-4">From Dar es Salaam to the World</h4>
              <p className="text-gray-300 mb-6">
                Our journey began in 2020 when our founder, inspired by the vibrant street culture 
                of Dar es Salaam and Nairobi, decided to create clothing that celebrates African 
                identity while meeting international fashion standards.
              </p>
              <p className="text-gray-300">
                Every design tells a story - from the Maasai warriors to the bustling markets of 
                Stone Town, we infuse authentic African elements into modern streetwear that 
                resonates globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">OUR VALUES</h3>
            <p className="text-xl text-gray-400">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">EXCELLENCE</h4>
              <p className="text-gray-400">Premium quality that honors our heritage</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">COMMUNITY</h4>
              <p className="text-gray-400">Supporting local artisans and creatives</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">GLOBAL REACH</h4>
              <p className="text-gray-400">Connecting Africa to the world</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">AUTHENTICITY</h4>
              <p className="text-gray-400">True to our roots, forward in vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">THE TEAM</h3>
            <p className="text-xl text-gray-400">The minds behind the movement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="CEO"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-white mb-2">AMANI MWALIMU</h4>
              <p className="text-yellow-500 mb-2">Founder & CEO</p>
              <p className="text-gray-400">Visionary from Dar es Salaam with 10+ years in fashion</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80"
                alt="Creative Director"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-white mb-2">KESI NGUVU</h4>
              <p className="text-yellow-500 mb-2">Creative Director</p>
              <p className="text-gray-400">Nairobi-based designer specializing in Afrofuturism</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b332c3cb?auto=format&fit=crop&w=400&q=80"
                alt="Head of Production"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-white mb-2">ZARA KILIFI</h4>
              <p className="text-yellow-500 mb-2">Head of Production</p>
              <p className="text-gray-400">Ensuring quality from Mombasa to global markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-black mb-6">JOIN THE MOVEMENT</h3>
          <p className="text-xl text-black mb-8">
            Be part of a community that celebrates African excellence
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
            SHOP THE COLLECTION
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

export default About;
