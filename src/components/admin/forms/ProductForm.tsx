
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import ImageUpload from '../ImageUpload';

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

const ProductForm = ({ onSubmit, onCancel, productId }: ProductFormProps) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-black">Product Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="e.g., FINEST African Mask Tee"
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="price" className="text-sm font-medium text-black">Price *</Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
            placeholder="e.g., 25000"
            className="mt-1"
            type="number"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description" className="text-sm font-medium text-black">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Product description..."
          className="mt-1"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="category" className="text-sm font-medium text-black">Category *</Label>
          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TEES">T-Shirts</SelectItem>
              <SelectItem value="HOODIES">Hoodies</SelectItem>
              <SelectItem value="BOTTOMS">Bottoms</SelectItem>
              <SelectItem value="ACCESSORIES">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="gender" className="text-sm font-medium text-black">Gender *</Label>
          <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MEN">Men</SelectItem>
              <SelectItem value="WOMEN">Women</SelectItem>
              <SelectItem value="UNISEX">Unisex</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="stockQuantity" className="text-sm font-medium text-black">Stock Quantity</Label>
          <Input
            id="stockQuantity"
            type="number"
            value={formData.stockQuantity}
            onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
            placeholder="0"
            className="mt-1"
            min="0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="sku" className="text-sm font-medium text-black">SKU</Label>
          <Input
            id="sku"
            value={formData.sku}
            onChange={(e) => handleInputChange('sku', e.target.value)}
            placeholder="e.g., AF-MT-001"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="brand" className="text-sm font-medium text-black">Brand</Label>
          <Input
            id="brand"
            value={formData.brand}
            onChange={(e) => handleInputChange('brand', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium text-black">Product Images</Label>
        <div className="mt-1">
          <ImageUpload
            onImagesChange={handleImagesChange}
            maxImages={5}
            existingImages={formData.images}
            productId={productId}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
