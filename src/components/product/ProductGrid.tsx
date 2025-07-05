
import React from 'react';
import { ProductCard } from './ProductCard';
import { DropAnimation, DropAnimationGroup } from '@/components/animations/DropAnimation';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onToggleFavorite,
  isFavorite
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <DropAnimation delay={400} dropHeight={40}>
          <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
        </DropAnimation>
        
        <DropAnimationGroup staggerDelay={0.1} dropHeight={60} duration={0.8}>
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={isFavorite(product.id)}
                />
              ))}
            </div>
          </>
        </DropAnimationGroup>
      </div>
    </section>
  );
};
