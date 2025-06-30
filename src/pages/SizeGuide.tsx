
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SizeGuide = () => {
  const sizeCharts = {
    men: {
      tshirts: [
        { size: "XS", chest: "86-91", waist: "71-76", length: "68" },
        { size: "S", chest: "91-96", waist: "76-81", length: "70" },
        { size: "M", chest: "96-101", waist: "81-86", length: "72" },
        { size: "L", chest: "101-106", waist: "86-91", length: "74" },
        { size: "XL", chest: "106-111", waist: "91-96", length: "76" },
        { size: "XXL", chest: "111-116", waist: "96-101", length: "78" }
      ],
      hoodies: [
        { size: "XS", chest: "91-96", waist: "76-81", length: "66" },
        { size: "S", chest: "96-101", waist: "81-86", length: "68" },
        { size: "M", chest: "101-106", waist: "86-91", length: "70" },
        { size: "L", chest: "106-111", waist: "91-96", length: "72" },
        { size: "XL", chest: "111-116", waist: "96-101", length: "74" },
        { size: "XXL", chest: "116-121", waist: "101-106", length: "76" }
      ]
    },
    women: {
      tops: [
        { size: "XS", bust: "81-84", waist: "61-64", hips: "86-89", length: "61" },
        { size: "S", bust: "84-87", waist: "64-67", hips: "89-92", length: "62" },
        { size: "M", bust: "87-90", waist: "67-70", hips: "92-95", length: "63" },
        { size: "L", bust: "90-93", waist: "70-73", hips: "95-98", length: "64" },
        { size: "XL", bust: "93-96", waist: "73-76", hips: "98-101", length: "65" },
        { size: "XXL", bust: "96-99", waist: "76-79", hips: "101-104", length: "66" }
      ]
    }
  };

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
          <h1 className="text-5xl font-bold text-white mb-4">SIZE GUIDE</h1>
          <p className="text-xl text-white">Find your perfect fit for African's Finest clothing</p>
        </div>
      </section>

      {/* Size Charts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Men's Sizes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8">MEN'S SIZING</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">T-Shirts & Polos</h3>
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 font-bold text-black">Size</th>
                          <th className="py-3 px-4 font-bold text-black">Chest (cm)</th>
                          <th className="py-3 px-4 font-bold text-black">Waist (cm)</th>
                          <th className="py-3 px-4 font-bold text-black">Length (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeCharts.men.tshirts.map((size, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-red-600">{size.size}</td>
                            <td className="py-3 px-4">{size.chest}</td>
                            <td className="py-3 px-4">{size.waist}</td>
                            <td className="py-3 px-4">{size.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Hoodies & Sweatshirts</h3>
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 font-bold text-black">Size</th>
                          <th className="py-3 px-4 font-bold text-black">Chest (cm)</th>
                          <th className="py-3 px-4 font-bold text-black">Waist (cm)</th>
                          <th className="py-3 px-4 font-bold text-black">Length (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeCharts.men.hoodies.map((size, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-red-600">{size.size}</td>
                            <td className="py-3 px-4">{size.chest}</td>
                            <td className="py-3 px-4">{size.waist}</td>
                            <td className="py-3 px-4">{size.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Women's Sizes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8">WOMEN'S SIZING</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Tops & Crop Tops</h3>
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 font-bold text-black">Size</th>
                          <th className="py-3 px-4 font-bold text-black">Bust (cm)</th>
                          <th className="py-3 px-4 font-bold text-black">Waist (cm)</th>
                          <th className="py-3 px-4 font-bold text-black">Hips (cm)</th>
                          <th className="py-3 px-4 font-bold text-black">Length (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeCharts.women.tops.map((size, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-red-600">{size.size}</td>
                            <td className="py-3 px-4">{size.bust}</td>
                            <td className="py-3 px-4">{size.waist}</td>
                            <td className="py-3 px-4">{size.hips}</td>
                            <td className="py-3 px-4">{size.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Measurement Guide */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-6">HOW TO MEASURE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-black mb-3">For Men:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Chest:</strong> Measure around the fullest part of your chest</li>
                  <li><strong>Waist:</strong> Measure around your natural waistline</li>
                  <li><strong>Length:</strong> Measure from the highest point of the shoulder to the bottom hem</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-3">For Women:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Bust:</strong> Measure around the fullest part of your bust</li>
                  <li><strong>Waist:</strong> Measure around the narrowest part of your waist</li>
                  <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
                  <li><strong>Length:</strong> Measure from the highest point of the shoulder to the bottom hem</li>
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

export default SizeGuide;
