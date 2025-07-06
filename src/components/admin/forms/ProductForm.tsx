import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageUpload } from '../ImageUpload';
import { useProducts } from '@/hooks/useProducts';

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  cost_price: string;
  sku: string;
  category: string;
  brand: string;
  gender: string;
  stock_quantity: string;
  low_stock_threshold: string;
  max_stock_quantity: string;
  reorder_point: string;
  material: string;
  care_instructions: string;
  weight: string;
  status: 'active' | 'inactive' | 'low_stock' | 'out_of_stock';
  is_featured: boolean;
  tags: string;
  seo_title: string;
  seo_description: string;
  images: string[];
}

interface ProductFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  initialData?: Partial<ProductFormData>;
}

const ProductForm = ({ onSubmit, onCancel, initialData }: ProductFormProps) => {
  const { uploadProductImage } = useProducts();
  const [formData, setFormData] = useState<ProductFormData>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price || '',
    cost_price: initialData?.cost_price || '',
    sku: initialData?.sku || '',
    category: initialData?.category || '',
    brand: initialData?.brand || 'AFRIKA\'S FINEST',
    gender: initialData?.gender || '',
    stock_quantity: initialData?.stock_quantity || '0',
    low_stock_threshold: initialData?.low_stock_threshold || '10',
    max_stock_quantity: initialData?.max_stock_quantity || '1000',
    reorder_point: initialData?.reorder_point || '15',
    material: initialData?.material || '',
    care_instructions: initialData?.care_instructions || '',
    weight: initialData?.weight || '',
    status: initialData?.status || 'active',
    is_featured: initialData?.is_featured || false,
    tags: initialData?.tags || '',
    seo_title: initialData?.seo_title || '',
    seo_description: initialData?.seo_description || '',
    images: initialData?.images || [],
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof ProductFormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (file: File) => {
    const url = await uploadProductImage(file);
    setFormData(prev => ({ ...prev, images: [...prev.images, url] }));
    return url;
  };

  const handleImageRemove = (url: string) => {
    setFormData(prev => ({ ...prev, images: prev.images.filter(img => img !== url) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        cost_price: formData.cost_price ? parseFloat(formData.cost_price) : null,
        sku: formData.sku,
        category: formData.category,
        brand: formData.brand,
        gender: formData.gender,
        stock_quantity: parseInt(formData.stock_quantity),
        low_stock_threshold: parseInt(formData.low_stock_threshold),
        max_stock_quantity: parseInt(formData.max_stock_quantity),
        reorder_point: parseInt(formData.reorder_point),
        material: formData.material,
        care_instructions: formData.care_instructions,
        weight: formData.weight ? parseFloat(formData.weight) : null,
        status: formData.status,
        is_featured: formData.is_featured,
        images: formData.images,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : null,
        seo_title: formData.seo_title,
        seo_description: formData.seo_description,
        dimensions: null,
        size_guide: null,
        supplier_info: null,
      };

      await onSubmit(productData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Product Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="sku">SKU *</Label>
            <Input
              id="sku"
              value={formData.sku}
              onChange={(e) => handleInputChange('sku', e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Selling Price (TSh) *</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="cost_price">Cost Price (TSh)</Label>
            <Input
              id="cost_price"
              type="number"
              step="0.01"
              value={formData.cost_price}
              onChange={(e) => handleInputChange('cost_price', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Category & Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Category & Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="T-Shirts">T-Shirts</SelectItem>
                <SelectItem value="Hoodies">Hoodies</SelectItem>
                <SelectItem value="Tops">Tops</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
                <SelectItem value="Bottoms">Bottoms</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Unisex">Unisex</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="brand">Brand</Label>
            <Input
              id="brand"
              value={formData.brand}
              onChange={(e) => handleInputChange('brand', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="material">Material</Label>
            <Input
              id="material"
              value={formData.material}
              onChange={(e) => handleInputChange('material', e.target.value)}
              placeholder="e.g., 100% Cotton"
            />
          </div>
          
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              step="0.01"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="care_instructions">Care Instructions</Label>
          <Textarea
            id="care_instructions"
            value={formData.care_instructions}
            onChange={(e) => handleInputChange('care_instructions', e.target.value)}
            placeholder="e.g., Machine wash cold, tumble dry low"
          />
        </div>
      </div>

      {/* Inventory */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Inventory Management</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="stock_quantity">Current Stock</Label>
            <Input
              id="stock_quantity"
              type="number"
              value={formData.stock_quantity}
              onChange={(e) => handleInputChange('stock_quantity', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="low_stock_threshold">Low Stock Alert</Label>
            <Input
              id="low_stock_threshold"
              type="number"
              value={formData.low_stock_threshold}
              onChange={(e) => handleInputChange('low_stock_threshold', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="max_stock_quantity">Max Stock</Label>
            <Input
              id="max_stock_quantity"
              type="number"
              value={formData.max_stock_quantity}
              onChange={(e) => handleInputChange('max_stock_quantity', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="reorder_point">Reorder Point</Label>
            <Input
              id="reorder_point"
              type="number"
              value={formData.reorder_point}
              onChange={(e) => handleInputChange('reorder_point', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Product Images</h3>
        <ImageUpload
          onImageUpload={handleImageUpload}
          onImageRemove={handleImageRemove}
          images={formData.images}
          maxImages={5}
        />
      </div>

      {/* SEO & Marketing */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">SEO & Marketing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value: 'active' | 'inactive' | 'low_stock' | 'out_of_stock') => handleInputChange('status', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="low_stock">Low Stock</SelectItem>
                <SelectItem value="out_of_stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2 pt-6">
            <input
              type="checkbox"
              id="is_featured"
              checked={formData.is_featured}
              onChange={(e) => handleInputChange('is_featured', e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="is_featured">Featured Product</Label>
          </div>
        </div>

        <div>
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => handleInputChange('tags', e.target.value)}
            placeholder="e.g., african, fashion, cotton"
          />
        </div>

        <div>
          <Label htmlFor="seo_title">SEO Title</Label>
          <Input
            id="seo_title"
            value={formData.seo_title}
            onChange={(e) => handleInputChange('seo_title', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="seo_description">SEO Description</Label>
          <Textarea
            id="seo_description"
            value={formData.seo_description}
            onChange={(e) => handleInputChange('seo_description', e.target.value)}
            rows={3}
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4 pt-6">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading} className="bg-red-600 hover:bg-red-700">
          {loading ? 'Saving...' : 'Save Product'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
