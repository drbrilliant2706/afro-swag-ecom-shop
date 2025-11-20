
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, ShoppingCart, Search, User, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
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
                <a href="/lookbook" className="text-black hover:text-brand-green transition-colors">LOOKBOOK</a>
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

      {/* Header */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">CONTACT US</h1>
          <p className="text-xl text-white">Get in touch with the African's Finest family</p>
          <p className="text-lg text-white mt-2">Fashion at it's ultimate prime. Shop with us and become part of our vast family worldwide.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">EMAIL US</h3>
                <p className="text-gray-600 mb-2">africasfinest2@gmail.com</p>
                <p className="text-gray-600">info@africansfinest.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">CALL US</h3>
                <p className="text-gray-600 mb-2">+255 628 009 126</p>
                <p className="text-gray-600">+255 748 996 330</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">VISIT US</h3>
                <p className="text-gray-600 mb-2">Dar es Salaam, Tanzania</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">LET'S TALK</h3>
                <p className="text-gray-600 mb-2">Mon-Fri: 8AM-6PM</p>
                <p className="text-gray-600">Sat: 9AM-4PM (EAT)</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">SEND US A MESSAGE</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">First Name *</label>
                    <Input placeholder="Your first name" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Last Name *</label>
                    <Input placeholder="Your last name" className="border-gray-300" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Email *</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-gray-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                  <Input placeholder="+255 or +254 ..." className="border-gray-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Subject *</label>
                  <Input placeholder="What can we help you with?" className="border-gray-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Message *</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    className="border-gray-300 min-h-[120px]" 
                  />
                </div>
                
                <Button className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-3 w-full">
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black mb-6">OUR LOCATIONS</h2>
              
              <div className="space-y-8">
                <Card className="bg-gray-100 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">TANZANIA HEADQUARTERS</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center">
                        <MapPin className="h-4 w-4 text-brand-green mr-2" />
                        Dar es Salaam, Tanzania
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 text-brand-green mr-2" />
                        +255 628 009 126
                      </p>
                      <p className="flex items-center">
                        <Mail className="h-4 w-4 text-brand-green mr-2" />
                        africasfinest2@gmail.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-100 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">KENYA OFFICE</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center">
                        <MapPin className="h-4 w-4 text-brand-green mr-2" />
                        Nairobi, Kenya
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 text-brand-green mr-2" />
                        +255 748 996 330
                      </p>
                      <p className="flex items-center">
                        <Mail className="h-4 w-4 text-brand-green mr-2" />
                        info@africansfinest.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-black mb-4">QUICK RESPONSES</h3>
                <p className="text-gray-700 mb-4">
                  Need immediate assistance? Try these options:
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                    WhatsApp Support
                  </Button>
                  <Button variant="outline" className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 text-left">
              <CardContent className="p-6">
                <h4 className="font-bold text-black mb-2">How long does shipping take?</h4>
                <p className="text-gray-600">Standard delivery takes 3-7 business days within East Africa.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 text-left">
              <CardContent className="p-6">
                <h4 className="font-bold text-black mb-2">Do you ship internationally?</h4>
                <p className="text-gray-600">Yes, we ship worldwide with delivery taking 10-21 business days.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 text-left">
              <CardContent className="p-6">
                <h4 className="font-bold text-black mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-600">M-Pesa, Airtel Money, Visa, Mastercard, and bank transfers.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 text-left">
              <CardContent className="p-6">
                <h4 className="font-bold text-black mb-2">Can I return my order?</h4>
                <p className="text-gray-600">Yes, we offer 30-day returns on unworn items with original tags.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 African's Finest. Fashion at it's ultimate prime. Proudly representing Tanzania & Kenya.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
