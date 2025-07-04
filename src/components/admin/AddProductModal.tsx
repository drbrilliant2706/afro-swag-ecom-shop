
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ProductForm from './forms/ProductForm';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  category: string;
  gender: string;
  sku: string;
  stockQuantity: string;
  brand: string;
  images: string[];
}

const AddProductModal = ({ isOpen, onClose }: AddProductModalProps) => {
  const { toast } = useToast();

  const handleSubmit = (formData: ProductFormData) => {
    console.log('Product data:', formData);
    
    toast({
      title: "Product Added Successfully!",
      description: `${formData.name} has been added to the ${formData.gender.toLowerCase()} collection.`,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
          <CardHeader className="border-b border-gray-200">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold text-black">Add New Product</CardTitle>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-black"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <ProductForm onSubmit={handleSubmit} onCancel={onClose} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProductModal;
