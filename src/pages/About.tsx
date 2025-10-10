
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Award, Users, Globe, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                AFRICAN'S <span className="text-red-600">FINEST</span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                <a href="/" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">HOME</a>
                <a href="/lookbook" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">LOOKBOOK</a>
                <a href="/about" className="text-red-600 border-b-2 border-red-600 pb-1 text-sm lg:text-base" aria-current="page">ABOUT</a>
                <a href="/culture" className="text-black hover:text-red-600 transition-colors text-sm lg:text-base">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" aria-label="Search" />
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" aria-label="User profile" />
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" aria-label="Favorites" />
              <div className="relative">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" aria-label="Shopping cart" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/c1a27c87-fecb-4603-846b-e559103c12ef.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
            OUR <span className="text-red-600">STORY</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Born in East Africa, designed for the world
          </p>
        </div>
      </header>

      {/* Main Story Section */}
      <main>
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                THE REAL AFRICAN STORY
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              AFRIKA'S FINEST is an African-inspired apparel brand on a mission to tell the real African story: 
              the story of greatness, resilience, creativity, and pride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            <div>
              <img 
                src="/lovable-uploads/036867e1-6684-4f8f-889e-e89c5719d973.png"
                alt="Celebration of African culture and heritage through fashion"
                className="rounded-lg shadow-2xl w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
                Through bold designs, timeless styles, and powerful visuals, we celebrate Africa's history — 
                its triumphs and struggles — while showcasing the richness of its cultures, music, food, 
                sports, and everyday life.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
                Every piece we create is a statement: Africa is not defined by the limits others place on us. 
                Our outfits are worn with pride, carrying the essence of the motherland into every street, 
                stage, and social space.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                AFRIKA'S FINEST is also committed to using our platform to educate, inspire, and empower 
                Africans to rise above poverty, embrace knowledge, and create lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-100">

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Vision */}
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-center mb-4 sm:mb-6">
                <div className="bg-red-600 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">OUR VISION</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To redefine the African narrative by becoming the most influential African-inspired clothing brand — 
                a brand that inspires pride, unity, and global recognition for Africa's culture, creativity, and potential.
              </p>
            </article>

            {/* Mission */}
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-center mb-4 sm:mb-6">
                <div className="bg-black rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">OUR MISSION</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To create world-class African-inspired apparel and content that celebrates our heritage, 
                reshapes perceptions, and empowers Africans to dream bigger, live better, and lead boldly.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">OUR VALUES</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <article className="text-center">
              <div className="bg-red-600 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">EXCELLENCE</h3>
              <p className="text-sm sm:text-base text-gray-600">Premium quality that honors our heritage</p>
            </article>

            <article className="text-center">
              <div className="bg-black rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">COMMUNITY</h3>
              <p className="text-sm sm:text-base text-gray-600">Supporting local artisans and creatives</p>
            </article>

            <article className="text-center">
              <div className="bg-red-600 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">GLOBAL REACH</h3>
              <p className="text-sm sm:text-base text-gray-600">Connecting Africa to the world</p>
            </article>

            <article className="text-center">
              <div className="bg-black rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">AUTHENTICITY</h3>
              <p className="text-sm sm:text-base text-gray-600">True to our roots, forward in vision</p>
            </article>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">THE TEAM</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">The minds behind the movement</p>
          </div>

          <div className="flex justify-center">
            <article className="text-center max-w-md px-4">
              <img 
                src="/lovable-uploads/83e9eb03-ffaa-4765-956a-cb1f637e3b77.png"
                alt="QEVOQCH - Founder and CEO of Africa's Finest"
                className="rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4 object-cover"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">QEVOQCH</h3>
              <p className="text-red-600 mb-2 sm:mb-3 text-base sm:text-lg font-semibold">Founder & CEO</p>
              <p className="text-sm sm:text-base text-gray-600">Visionary leader driving Africa's Finest to tell the authentic African story through fashion and culture</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">JOIN THE MOVEMENT</h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8">
            Be part of a community that celebrates African excellence
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-bold">
            SHOP THE COLLECTION
          </Button>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 African's Finest. Proudly representing Tanzania & Kenya.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
