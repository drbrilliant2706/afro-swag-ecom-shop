
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface ProductCategoriesProps {
  formData: {
    category: string;
    gender: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const ProductCategories = ({ formData, onInputChange }: ProductCategoriesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="category" className="text-sm font-medium text-black">Category *</Label>
        <Select value={formData.category} onValueChange={(value) => onInputChange('category', value)}>
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
        <Select value={formData.gender} onValueChange={(value) => onInputChange('gender', value)}>
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
    </div>
  );
};

export default ProductCategories;
