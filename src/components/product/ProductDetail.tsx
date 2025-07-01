
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Minus, Plus, CreditCard, Smartphone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    badge: string;
    colors: string[];
    sizes: string[];
    description: string;
    features: string[];
  };
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);
  
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Size selection is required before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToFavorites = () => {
    addToFavorites({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    toast({
      title: "Added to favorites!",
      description: `${product.name} has been added to your favorites.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm">
            <a href="/" className="text-gray-500 hover:text-red-600 transition-colors">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <a href="/men" className="text-gray-500 hover:text-red-600 transition-colors">Men</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                {product.badge}
              </Badge>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {[product.image, product.image, product.image].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition-all hover:scale-105 ${
                    activeImage === img ? 'border-red-600' : 'border-gray-200'
                  }`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-red-600 text-red-600" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8) · 127 reviews</span>
              </div>
              <p className="text-3xl font-bold text-red-600 mb-4">{product.price}</p>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md transition-all hover:scale-105 ${
                      selectedColor === color
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-300 text-gray-700 hover:border-red-600'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Size: {selectedSize}</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-md transition-all hover:scale-105 ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-red-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart and Favorites */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                ADD TO CART - {product.price}
              </Button>

              <Button
                onClick={handleAddToFavorites}
                variant="outline"
                className={`w-full border-2 py-4 transition-all duration-300 transform hover:scale-105 ${
                  isFavorite(product.id)
                    ? 'border-red-600 text-red-600 bg-red-50'
                    : 'border-gray-300 text-gray-700 hover:border-red-600'
                }`}
                size="lg"
              >
                <Heart className={`mr-2 h-5 w-5 ${isFavorite(product.id) ? 'fill-red-600' : ''}`} />
                {isFavorite(product.id) ? 'ADDED TO FAVORITES' : 'ADD TO FAVORITES'}
              </Button>
            </div>

            {/* Payment Methods */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-black mb-3">Payment Methods</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Smartphone className="h-5 w-5" />
                  <span>M-Pesa</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Smartphone className="h-5 w-5" />
                  <span>Airtel Money</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <CreditCard className="h-5 w-5" />
                  <span>Credit Card</span>
                </div>
              </div>
            </div>

            {/* Product Features */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
