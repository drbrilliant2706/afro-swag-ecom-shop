
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';
import ProductForm from './forms/ProductForm';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => Promise<void>;
}

const AddProductModal = ({ isOpen, onClose, onSubmit }: AddProductModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
          <CardHeader className="border-b border-gray-200">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold">Add New Product</CardTitle>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <ProductForm onSubmit={onSubmit} onCancel={onClose} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProductModal;
