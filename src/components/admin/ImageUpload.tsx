
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  onImageUpload: (file: File) => Promise<string>;
  onImageRemove?: (url: string) => void;
  images?: string[];
  maxImages?: number;
  className?: string;
}

export const ImageUpload = ({ 
  onImageUpload, 
  onImageRemove, 
  images = [], 
  maxImages = 5,
  className = ""
}: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length === 0) return;
    
    if (images.length + files.length > maxImages) {
      toast({
        title: "Too many images",
        description: `Maximum ${maxImages} images allowed.`,
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    try {
      for (const file of files) {
        if (!file.type.startsWith('image/')) {
          toast({
            title: "Invalid file type",
            description: "Please select image files only.",
            variant: "destructive",
          });
          continue;
        }
        
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
          toast({
            title: "File too large",
            description: "Please select images smaller than 5MB.",
            variant: "destructive",
          });
          continue;
        }

        await onImageUpload(file);
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading || images.length >= maxImages}
          className="flex items-center gap-2"
        >
          <Upload className="h-4 w-4" />
          {uploading ? 'Uploading...' : 'Upload Images'}
        </Button>
        <span className="text-sm text-muted-foreground">
          {images.length}/{maxImages} images
        </span>
      </div>
      
      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((url, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={url}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NiA5NkM4NiA4Ny43MTU3IDkyLjcxNTcgODEgMTAxIDgxQzEwOS4yODQgODEgMTE2IDg3LjcxNTcgMTE2IDk2QzExNiAxMDQuMjg0IDEwOS4yODQgMTExIDEwMSAxMTFDOTIuNzE1NyAxMTEgODYgMTA0LjI4NCA4NiA5NloiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTc2IDEzNkM3NiAxMzEuNTgyIDc5LjU4MiAxMjggODQgMTI4SDE0OEMxNTIuNDE4IDEyOCAxNTYgMTMxLjU4MiAxNTYgMTM2VjE0NkMxNTYgMTUwLjQxOCAxNTIuNDE4IDE1NCAxNDggMTU0SDg0Qzc5LjU4MiAxNTQgNzYgMTUwLjQxOCA3NiAxNDZWMTM2WiIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K';
                  }}
                />
              </div>
              {onImageRemove && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onImageRemove(url)}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
      
      {images.length === 0 && (
        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
          <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">No images uploaded yet</p>
          <p className="text-xs text-muted-foreground mt-1">
            Click "Upload Images" to add product photos
          </p>
        </div>
      )}
    </div>
  );
};
