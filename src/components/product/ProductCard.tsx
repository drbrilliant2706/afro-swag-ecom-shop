
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite
}) => {
  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 group">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-2 right-2 ${
              isFavorite ? 'text-red-500' : 'text-white'
            } hover:text-red-500`}
            onClick={() => onToggleFavorite(product)}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
        </div>
        <h4 className="text-white font-bold mb-2">{product.name}</h4>
        <p className="text-gray-400 text-sm mb-2">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-red-500 font-bold">{product.price}</span>
          <Button
            size="sm"
            onClick={() => onAddToCart(product)}
            className="bg-red-600 hover:bg-red-700"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
