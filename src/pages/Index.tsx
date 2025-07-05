
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import CartModal from '@/components/cart/CartModal';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/layout/HeroSection';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Footer } from '@/components/layout/Footer';
import { products } from '@/data/products';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  const toggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <HeroSection />
      <ProductGrid
        products={products}
        onAddToCart={handleAddToCart}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
      <Footer />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;
