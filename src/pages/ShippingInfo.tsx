
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, Truck, Clock, MapPin, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ShippingInfo = () => {
  const shippingRates = [
    {
      region: "Tanzania (Mainland)",
      standard: "TSh 5,000 - 10,000",
      express: "TSh 15,000 - 20,000",
      time: "3-5 business days"
    },
    {
      region: "Kenya",
      standard: "KSh 500 - 1,200",
      express: "KSh 1,500 - 2,500",
      time: "3-5 business days"
    },
    {
      region: "Zanzibar",
      standard: "TSh 8,000 - 12,000",
      express: "TSh 18,000 - 25,000",
      time: "4-6 business days"
    },
    {
      region: "Rest of East Africa",
      standard: "USD 15 - 25",
      express: "USD 35 - 50",
      time: "7-10 business days"
    },
    {
      region: "International",
      standard: "USD 25 - 45",
      express: "USD 55 - 85",
      time: "10-21 business days"
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
                AFRICAN'S <span className="text-red-600">FINEST</span>
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-black hover:text-red-600 transition-colors">HOME</a>
                <a href="/men" className="text-black hover:text-red-600 transition-colors">MEN</a>
                <a href="/women" className="text-black hover:text-red-600 transition-colors">WOMEN</a>
                <a href="/lookbook" className="text-black hover:text-red-600 transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-red-600 transition-colors">ABOUT</a>
                <a href="/culture" className="text-black hover:text-red-600 transition-colors">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
              <User className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
              <Heart className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-black hover:text-red-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">SHIPPING INFORMATION</h1>
          <p className="text-xl text-white">Fast and reliable delivery across East Africa and beyond</p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">SHIPPING OPTIONS</h2>
            <p className="text-lg text-gray-600">Choose the delivery option that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <Truck className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">STANDARD DELIVERY</h3>
                <p className="text-gray-600 mb-4">Reliable delivery to your doorstep</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>3-7 business days</li>
                  <li>Tracking included</li>
                  <li>Signature required</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">EXPRESS DELIVERY</h3>
                <p className="text-gray-600 mb-4">Fast delivery for urgent orders</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1-3 business days</li>
                  <li>Priority handling</li>
                  <li>Real-time tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">PICKUP POINTS</h3>
                <p className="text-gray-600 mb-4">Collect from convenient locations</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Dar es Salaam & Nairobi</li>
                  <li>Extended hours</li>
                  <li>Secure storage</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Rates */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">SHIPPING RATES</h2>
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-4 px-4 font-bold text-black">Region</th>
                        <th className="py-4 px-4 font-bold text-black">Standard</th>
                        <th className="py-4 px-4 font-bold text-black">Express</th>
                        <th className="py-4 px-4 font-bold text-black">Delivery Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shippingRates.map((rate, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-4 font-medium text-black">{rate.region}</td>
                          <td className="py-4 px-4 text-gray-700">{rate.standard}</td>
                          <td className="py-4 px-4 text-gray-700">{rate.express}</td>
                          <td className="py-4 px-4 text-red-600">{rate.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Free Shipping */}
          <div className="bg-red-600 p-8 rounded-lg text-center mb-16">
            <Package className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">FREE SHIPPING</h3>
            <p className="text-xl text-white mb-4">
              Enjoy free standard shipping on orders over:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="text-2xl font-bold text-white">TSh 100,000</p>
                <p className="text-white">Tanzania</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="text-2xl font-bold text-white">KSh 12,000</p>
                <p className="text-white">Kenya</p>
              </div>
            </div>
          </div>

          {/* Processing Time */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-6">ORDER PROCESSING</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-black mb-3">Processing Time:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Standard orders: 1-2 business days</li>
                  <li>• Custom/personalized items: 3-5 business days</li>
                  <li>• Pre-order items: As specified on product page</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-3">Business Hours:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monday - Friday: 8:00 AM - 6:00 PM (EAT)</li>
                  <li>• Saturday: 9:00 AM - 4:00 PM (EAT)</li>
                  <li>• Sunday: Closed</li>
                  <li>• Orders placed after hours processed next business day</li>
                </ul>
              </div>
            </div>
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

export default ShippingInfo;
