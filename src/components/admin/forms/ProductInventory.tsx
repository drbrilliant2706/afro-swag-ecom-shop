
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ProductInventoryProps {
  formData: {
    sku: string;
    stockQuantity: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const ProductInventory = ({ formData, onInputChange }: ProductInventoryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="sku" className="text-sm font-medium text-black">SKU</Label>
        <Input
          id="sku"
          value={formData.sku}
          onChange={(e) => onInputChange('sku', e.target.value)}
          placeholder="e.g., AF-MT-001"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="stockQuantity" className="text-sm font-medium text-black">Stock Quantity</Label>
        <Input
          id="stockQuantity"
          type="number"
          value={formData.stockQuantity}
          onChange={(e) => onInputChange('stockQuantity', e.target.value)}
          placeholder="0"
          className="mt-1"
          min="0"
        />
      </div>
    </div>
  );
};

export default ProductInventory;
