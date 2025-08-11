
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ProductBasicInfoProps {
  formData: {
    name: string;
    description: string;
    price: string;
    brand: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const ProductBasicInfo = ({ formData, onInputChange }: ProductBasicInfoProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-black">Product Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
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
            onChange={(e) => onInputChange('price', e.target.value)}
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
          onChange={(e) => onInputChange('description', e.target.value)}
          placeholder="Product description..."
          className="mt-1"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="brand" className="text-sm font-medium text-black">Brand</Label>
        <Input
          id="brand"
          value={formData.brand}
          onChange={(e) => onInputChange('brand', e.target.value)}
          className="mt-1"
        />
      </div>
    </>
  );
};

export default ProductBasicInfo;
