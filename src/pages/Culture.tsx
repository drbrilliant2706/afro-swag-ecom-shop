
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Culture = () => {
  const culturalStories = [
    {
      id: 1,
      title: "The Maasai Warrior Spirit",
      excerpt: "How traditional Maasai culture inspires our boldest designs",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2025",
      author: "Amani Mwalimu"
    },
    {
      id: 2,
      title: "Swahili Coast Fashion Heritage",
      excerpt: "Exploring the rich textile traditions of the East African coast",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2025",
      author: "Kesi Nguvu"
    },
    {
      id: 3,
      title: "Urban Nairobi Street Style",
      excerpt: "The vibrant fashion scene in Kenya's capital city",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2025",
      author: "Zara Kilifi"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Dar es Salaam Fashion Week",
      date: "April 20-25, 2025",
      location: "Dar es Salaam, Tanzania",
      description: "Showcasing our latest collection alongside East Africa's finest designers"
    },
    {
      id: 2,
      title: "Nairobi Pop-Up Store",
      date: "May 1-31, 2025",
      location: "Westlands, Nairobi",
      description: "Limited edition releases and exclusive Kenyan designs"
    },
    {
      id: 3,
      title: "Zanzibar Culture Festival",
      date: "June 15-20, 2025",
      location: "Stone Town, Zanzibar",
      description: "Celebrating Swahili heritage through fashion and art"
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
                <a href="/lookbook" className="text-white hover:text-yellow-500 transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-white hover:text-yellow-500 transition-colors">ABOUT</a>
                <a href="/culture" className="text-yellow-500 border-b-2 border-yellow-500 pb-1">CULTURE</a>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            OUR <span className="text-yellow-500">CULTURE</span>
          </h2>
          <p className="text-xl text-gray-200">
            Stories, traditions, and inspirations from East Africa
          </p>
        </div>
      </section>

      {/* Cultural Stories Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">CULTURAL STORIES</h3>
            <p className="text-xl text-gray-400">The heritage behind our designs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalStories.map((story) => (
              <Card key={story.id} className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-white font-bold text-xl mb-3">{story.title}</h4>
                    <p className="text-gray-400 mb-4">{story.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.date}
                      </span>
                      <span>{story.author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              READ MORE STORIES
            </Button>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 via-yellow-800 to-red-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-bold text-white mb-6">EAST AFRICAN HERITAGE</h3>
              <p className="text-xl text-gray-200 mb-6">
                From the snow-capped peaks of Kilimanjaro to the pristine beaches of Zanzibar, 
                our designs draw inspiration from the diverse landscapes and rich cultures of Tanzania and Kenya.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-200">Maasai warrior traditions and symbolism</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-200">Swahili coastal textile heritage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-600 rounded-full mr-3"></div>
                  <span className="text-gray-200">Urban street culture fusion</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80"
                alt="East African Heritage"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">UPCOMING EVENTS</h3>
            <p className="text-xl text-gray-400">Join us at fashion and cultural events across East Africa</p>
          </div>

          <div className="space-y-8">
            {events.map((event) => (
              <Card key={event.id} className="bg-black border-gray-800">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{event.title}</h4>
                      <div className="flex items-center text-yellow-500 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <Button className="bg-yellow-600 hover:bg-yellow-700 text-black">
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Users className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-6">JOIN OUR COMMUNITY</h3>
            <p className="text-xl text-gray-300 mb-8">
              Connect with fellow culture enthusiasts and be part of the African's Finest family
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3">
              FOLLOW ON INSTAGRAM
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              JOIN NEWSLETTER
            </Button>
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
    </div>
  );
};

export default Culture;
