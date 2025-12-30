import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { X, Search } from 'lucide-react';
import { useProductsQuery } from '@/hooks/useProductsQuery';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products, loading } = useProductsQuery();

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    return products
      .filter(product => 
        product.status === 'active' && (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      .map(product => ({
        id: product.id,
        name: product.name,
        price: `TSh ${product.price.toLocaleString()}`,
        category: `${product.gender}'s ${product.category}`
      }));
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 pt-20">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-96">
          {searchTerm.trim() === '' ? (
            <div className="p-8 text-center text-gray-500">
              Start typing to search for products...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No products found for "{searchTerm}"
            </div>
          ) : (
            <div className="p-4 space-y-2">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} onClick={onClose}>
                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-black">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                        <p className="font-bold text-brand-green">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
