
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, RotateCcw, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Returns = () => {
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
          <h1 className="text-5xl font-bold text-white mb-4">RETURNS & EXCHANGES</h1>
          <p className="text-xl text-white">Easy returns within 30 days of purchase</p>
        </div>
      </section>

      {/* Return Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">OUR RETURN POLICY</h2>
            <p className="text-lg text-gray-600">We want you to love your African's Finest purchase</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <RotateCcw className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">30-DAY RETURNS</h3>
                <p className="text-gray-600">Return any unworn item within 30 days of delivery for a full refund</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <CheckCircle className="h-12 w-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">FREE EXCHANGES</h3>
                <p className="text-gray-600">Exchange for a different size or color at no additional cost</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center">
              <CardContent className="p-8">
                <AlertCircle className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">QUALITY GUARANTEE</h3>
                <p className="text-gray-600">Defective items can be returned at any time for replacement</p>
              </CardContent>
            </Card>
          </div>

          {/* Return Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">HOW TO RETURN</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-bold text-black mb-2">INITIATE RETURN</h4>
                <p className="text-sm text-gray-600">Contact us or log into your account to start a return</p>
              </div>
              <div className="text-center">
                <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-bold text-black mb-2">PACK ITEMS</h4>
                <p className="text-sm text-gray-600">Package items in original condition with tags attached</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-bold text-black mb-2">SHIP BACK</h4>
                <p className="text-sm text-gray-600">Send items back using the prepaid return label</p>
              </div>
              <div className="text-center">
                <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h4 className="font-bold text-black mb-2">GET REFUND</h4>
                <p className="text-sm text-gray-600">Receive your refund within 5-7 business days</p>
              </div>
            </div>
          </div>

          {/* Return Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">RETURNABLE ITEMS</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Unworn items with original tags</li>
                  <li>• Items in original packaging</li>
                  <li>• Standard collection items</li>
                  <li>• Items purchased within last 30 days</li>
                  <li>• Sale items (for store credit)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <XCircle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">NON-RETURNABLE ITEMS</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Worn or washed items</li>
                  <li>• Items without original tags</li>
                  <li>• Custom/personalized items</li>
                  <li>• Undergarments and intimates</li>
                  <li>• Final sale items</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Refund Information */}
          <div className="bg-gray-100 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">REFUND INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-3">Tanzania</h4>
                <p className="text-gray-700 mb-2">M-Pesa refunds: 1-3 business days</p>
                <p className="text-gray-700">Bank transfers: 5-7 business days</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-3">Kenya</h4>
                <p className="text-gray-700 mb-2">M-Pesa refunds: 1-3 business days</p>
                <p className="text-gray-700">Bank transfers: 5-7 business days</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-3">International</h4>
                <p className="text-gray-700 mb-2">Credit card refunds: 5-10 business days</p>
                <p className="text-gray-700">PayPal refunds: 3-5 business days</p>
              </div>
            </div>
          </div>

          {/* Contact for Returns */}
          <div className="bg-red-600 p-8 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-white mb-4">NEED HELP WITH YOUR RETURN?</h3>
            <p className="text-xl text-white mb-6">
              Our customer service team is here to assist you
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                EMAIL US
              </Button>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                WHATSAPP CHAT
              </Button>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                CALL US
              </Button>
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

export default Returns;
