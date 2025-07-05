
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Your cart is empty</p>
              <Button
                onClick={onClose}
                className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-black"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <Card key={item.id} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-sm">{item.name}</h4>
                          <p className="text-yellow-500 font-bold">{item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-white hover:text-yellow-500"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-white hover:text-yellow-500"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-800 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-bold">Total:</span>
                  <span className="text-yellow-500 font-bold text-lg">
                    TSh {getTotalPrice()}
                  </span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black">
                    Checkout
                  </Button>
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full border-gray-600 text-white hover:bg-gray-800"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
