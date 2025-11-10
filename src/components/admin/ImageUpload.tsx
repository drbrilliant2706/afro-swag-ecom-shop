
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ImageUploadProps {
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
  existingImages?: string[];
  productId?: string;
}

const ImageUpload = ({ onImagesChange, maxImages = 5, existingImages = [] }: ImageUploadProps) => {
  const [images, setImages] = useState<string[]>(existingImages);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    if (files.length === 0) return;
    
    if (images.length + files.length > maxImages) {
      toast({
        title: "Too many images",
        description: `You can only upload up to ${maxImages} images.`,
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    const newImageUrls: string[] = [];

    try {
      for (const file of files) {
        if (!file.type.startsWith('image/')) {
          toast({
            title: "Invalid file type",
            description: "Please select only image files.",
            variant: "destructive",
          });
          continue;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
          toast({
            title: "File too large",
            description: "Please select images smaller than 10MB.",
            variant: "destructive",
          });
          continue;
        }

        const imageUrl = await uploadImage(file);
        if (imageUrl) {
          newImageUrls.push(imageUrl);
        }
      }

      const updatedImages = [...images, ...newImageUrls];
      setImages(updatedImages);
      onImagesChange(updatedImages);

      if (newImageUrls.length > 0) {
        toast({
          title: "Images uploaded successfully",
          description: `${newImageUrls.length} image(s) have been uploaded.`,
        });
      }
    } catch (error) {
      console.error('Error uploading images:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload images. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  return (
    <div className="space-y-4">
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="relative group">
              <img
                src={imageUrl}
                alt={`Product image ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-green-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          disabled={uploading || images.length >= maxImages}
        />
        
        {uploading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mb-2"></div>
            <p className="text-sm text-gray-600">Uploading images...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {images.length < maxImages ? (
              <>
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="mb-2"
                >
                  <Image className="h-4 w-4 mr-2" />
                  Choose Images
                </Button>
                <p className="text-sm text-gray-600">
                  Upload up to {maxImages} images (PNG, JPG, GIF up to 10MB each)
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {images.length}/{maxImages} images uploaded
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-600">
                Maximum number of images reached ({maxImages}/{maxImages})
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
