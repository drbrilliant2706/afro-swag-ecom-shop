
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import ImageUpload from '../ImageUpload';
import ProductBasicInfo from './ProductBasicInfo';
import ProductCategories from './ProductCategories';
import ProductInventory from './ProductInventory';

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

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
  productId?: string;
}

const ProductForm = ({ onSubmit, onCancel }: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
    category: '',
    gender: '',
    sku: '',
    stockQuantity: '',
    brand: 'AFRIKA\'S FINEST',
    images: []
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImagesChange = (images: string[]) => {
    setFormData(prev => ({
      ...prev,
      images
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.category || !formData.gender) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProductBasicInfo
        formData={formData}
        onInputChange={handleInputChange}
      />

      <ProductCategories
        formData={formData}
        onInputChange={handleInputChange}
      />

      <ProductInventory
        formData={formData}
        onInputChange={handleInputChange}
      />

      <div>
        <Label className="text-sm font-medium text-black">Product Images</Label>
        <div className="mt-1">
          <ImageUpload
            onImagesChange={handleImagesChange}
            maxImages={5}
            existingImages={formData.images}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
