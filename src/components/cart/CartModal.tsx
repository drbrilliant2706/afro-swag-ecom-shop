
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmitOrder = async () => {
    if (!customerName || !customerPhone) {
      toast.error('Please provide your name and phone number');
      return;
    }

    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setLoading(true);
    try {
      // Create customer
      const { data: customer, error: customerError } = await supabase
        .from('customers')
        .insert({
          first_name: customerName,
          phone: customerPhone,
          email: customerEmail || null,
        })
        .select()
        .single();

      if (customerError) throw customerError;

      // Calculate totals
      const subtotal = items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
        return sum + (price * item.quantity);
      }, 0);

      // Create order
      const orderNumber = `ORD-${Date.now()}`;
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_id: customer.id,
          order_number: orderNumber,
          status: 'pending',
          payment_status: 'pending',
          subtotal: subtotal,
          total_amount: subtotal,
          currency: 'TSh',
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.id.toString(),
        quantity: item.quantity,
        unit_price: parseFloat(item.price.replace(/[^\d.]/g, '')),
        total_price: parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast.success('Order submitted successfully! Admin will verify your order soon.');
      clearCart();
      setCustomerName('');
      setCustomerPhone('');
      setCustomerEmail('');
      onClose();
    } catch (error) {
      console.error('Order submission error:', error);
      toast.error('Failed to submit order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-gray-200 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-black">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Your cart is empty</p>
              <Button
                onClick={onClose}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <Card key={item.id} className="bg-gray-50 border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-black font-bold text-sm">{item.name}</h4>
                          <p className="text-red-600 font-bold">{item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-black hover:text-red-600"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-black">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-black hover:text-red-600"
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

              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-black font-bold">Total:</span>
                  <span className="text-red-600 font-bold text-lg">
                    TSh {getTotalPrice()}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <Label htmlFor="name" className="text-black">Name *</Label>
                    <Input
                      id="name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your full name"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-black">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+255 XXX XXX XXX"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-black">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    onClick={handleSubmitOrder}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    {loading ? 'Submitting...' : 'Submit Order'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full border-gray-300 text-black hover:bg-gray-100"
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
