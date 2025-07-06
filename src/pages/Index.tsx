
import { useState, useEffect } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { DropAnimation } from '@/components/animations/DropAnimation';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { products, loading } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      // Show featured products first, then random selection
      const featured = products.filter(p => p.is_featured && p.status === 'active');
      const regular = products.filter(p => !p.is_featured && p.status === 'active');
      const combined = [...featured, ...regular].slice(0, 12);
      setFeaturedProducts(combined);
    }
  }, [products]);

  const getImageUrl = (product: any) => {
    if (product.images && product.images.length > 0) {
      return product.images[0];
    }
    return '/placeholder.svg';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section Skeleton */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-900 to-red-600">
          <div className="text-center text-white space-y-6">
            <Skeleton className="h-16 w-96 mx-auto bg-white/20" />
            <Skeleton className="h-6 w-64 mx-auto bg-white/20" />
            <Skeleton className="h-12 w-40 mx-auto bg-white/20" />
          </div>
        </section>

        {/* Products Grid Skeleton */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-8 w-1/3" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-900 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AFRIKA'S FINEST
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Celebrate African culture through premium fashion
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Shop Collection
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic African fashion pieces that celebrate our rich heritage
            </p>
          </div>

          {featuredProducts.length > 0 ? (
            <DropAnimation>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                      <img
                        src={getImageUrl(product)}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">
                        TSh {product.price.toLocaleString()}
                      </span>
                      {product.is_featured && (
                        <span className="bg-red-600 text-white px-2 py-1 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    {product.stock_quantity <= product.low_stock_threshold && (
                      <p className="text-orange-600 text-sm mt-1 font-medium">
                        Only {product.stock_quantity} left!
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </DropAnimation>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No products available at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AFRIKA'S FINEST is more than just a fashion brand - we're a celebration of African culture, 
            heritage, and craftsmanship. Each piece in our collection tells a story, connecting modern 
            style with traditional African aesthetics. From vibrant prints to contemporary cuts, 
            we bring you fashion that's both authentic and forward-thinking.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
