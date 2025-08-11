
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ProductImagesProps {
  product: {
    name: string;
    image: string;
    badge: string;
  };
}

const ProductImages = ({ product }: ProductImagesProps) => {
  const [activeImage, setActiveImage] = useState(product.image);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-96 lg:h-[600px] object-cover hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-red-600 text-white">
          {product.badge}
        </Badge>
      </div>
      
      <div className="flex space-x-2">
        {[product.image, product.image, product.image].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.name} ${index + 1}`}
            className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition-all hover:scale-105 ${
              activeImage === img ? 'border-red-600' : 'border-gray-200'
            }`}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
