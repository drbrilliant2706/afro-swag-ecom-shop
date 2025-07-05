
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { X, CreditCard } from 'lucide-react';
import { Database } from '@/integrations/supabase/types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OrderInsert = Database['public']['Tables']['orders']['Insert'];
type OrderItemInsert = Database['public']['Tables']['order_items']['Insert'];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const totalAmount = parseFloat(getTotalPrice().replace(/,/g, ''));
      
      // Create order in database with proper structure
      const orderData: OrderInsert = {
        subtotal: totalAmount,
        total_amount: totalAmount,
        currency: 'TSh',
        status: 'pending',
        payment_status: 'pending',
        shipping_address: { 
          address: customerInfo.address,
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone
        },
        items: items // Store cart items in the items JSONB field
      };

      const { data: order, error } = await supabase
        .from('orders')
        .insert([orderData])
        .select()
        .single();

      if (error) throw error;

      // Create order items for detailed tracking
      const orderItems: OrderItemInsert[] = items.map(item => ({
        order_id: order.id,
        product_name: item.name,
        product_image: item.image,
        quantity: item.quantity,
        unit_price: parseFloat(item.price.replace(/[^0-9]/g, '')),
        total_price: parseFloat(item.price.replace(/[^0-9]/g, '')) * item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast({
        title: "Order Created!",
        description: `Your order ${order.order_number} has been created successfully.`,
      });

      clearCart();
      onClose();
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Failed",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const totalAmount = getTotalPrice();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-black border border-red-600">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Checkout</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-red-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white">Name *</Label>
            <Input
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              className="bg-gray-900 border-gray-700 text-white"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-white">Email *</Label>
            <Input
              name="email"
              type="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              className="bg-gray-900 border-gray-700 text-white"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-white">Phone</Label>
            <Input
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
              className="bg-gray-900 border-gray-700 text-white"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-white">Shipping Address</Label>
            <Input
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              className="bg-gray-900 border-gray-700 text-white"
            />
          </div>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-semibold">Total:</span>
              <span className="text-red-500 font-bold text-lg">TSh {totalAmount}</span>
            </div>
            
            <Button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              {loading ? 'Processing...' : 'Place Order'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
