
import { useParams, Navigate } from "react-router-dom";
import ProductDetail from "@/components/product/ProductDetail";

const Product = () => {
  const { id } = useParams();
  
  const products = [
    {
      id: 1,
      name: "FINEST African Mask Tee",
      price: "TSh 45,000",
      image: "/lovable-uploads/83e9eb03-ffaa-4765-956a-cb1f637e3b77.png",
      badge: "NEW",
      colors: ["Red", "White", "Black"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      description: "Celebrate African heritage with this premium cotton tee featuring authentic traditional mask designs. Made with sustainable materials and representing the finest craftsmanship from East Africa.",
      features: [
        "100% Premium Cotton",
        "Traditional African Mask Design",
        "Sustainable Production",
        "Comfort Fit",
        "Machine Washable",
        "Made in East Africa"
      ]
    },
    {
      id: 2,
      name: "FINEST Blue Oversized Tee",
      price: "TSh 48,000",
      image: "/lovable-uploads/1f0eef57-3784-4a0d-84d8-62b9fcb1c8d9.png",
      badge: "BESTSELLER",
      colors: ["Blue", "White", "Black"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      description: "Our bestselling oversized tee in premium blue, perfect for street style and casual wear. Designed for comfort and style with authentic African-inspired graphics.",
      features: [
        "Oversized Comfort Fit",
        "Premium Cotton Blend",
        "Street Style Design",
        "Durable Print Quality",
        "Pre-shrunk Fabric",
        "Ethically Made"
      ]
    },
    {
      id: 3,
      name: "NYUMBANI QWETU Collection",
      price: "TSh 52,000",
      image: "/lovable-uploads/86a2ceca-f52f-4c63-91b6-7fd6da14145f.png",
      badge: "LIMITED",
      colors: ["Beige", "Purple", "Black"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      description: "Limited edition piece from our Nyumbani Qwetu (Our Home) collection, celebrating East African unity and culture through contemporary streetwear design.",
      features: [
        "Limited Edition Design",
        "Cultural Heritage Print",
        "Premium Material Quality",
        "Exclusive Collection",
        "Numbered Edition",
        "Certificate of Authenticity"
      ]
    },
    {
      id: 4,
      name: "AFRIKA'S Finest Tee",
      price: "TSh 46,000",
      image: "/lovable-uploads/036867e1-6684-4f8f-889e-e89c5719d973.png",
      badge: "EXCLUSIVE",
      colors: ["Tan", "Black", "White"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      description: "Exclusive tee representing the finest of African fashion. Features bold typography and premium construction that speaks to our continental pride.",
      features: [
        "Exclusive Design",
        "Bold Typography",
        "Premium Construction",
        "Continental Pride",
        "High-Quality Print",
        "Comfortable Wear"
      ]
    }
  ];

  const productId = parseInt(id || "0");
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  return <ProductDetail product={product} />;
};

export default Product;
