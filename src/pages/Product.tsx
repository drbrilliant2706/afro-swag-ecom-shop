
import { useParams, Navigate } from "react-router-dom";
import ProductDetail from "@/components/product/ProductDetail";

const Product = () => {
  const { id } = useParams();
  
  const products = [
    // Men's Products
    {
      id: 1,
      name: "FINEST African Mask Tee",
      price: "TSh 25,000",
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
      price: "TSh 25,000",
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
      price: "TSh 25,000",
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
      price: "TSh 25,000",
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
    },
    // Women's Products
    {
      id: 21,
      name: "AFRIKA'S FINEST Crop Collection",
      price: "TSh 25,000",
      image: "/lovable-uploads/5c33a062-0000-460d-af95-63a3342380ea.png",
      badge: "NEW",
      colors: ["White", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Stylish crop tee collection showcasing African pride. Perfect for modern women who want to celebrate their heritage with contemporary fashion.",
      features: [
        "Crop Top Design",
        "Premium Cotton Material",
        "African Pride Branding",
        "Comfortable Fit",
        "Modern Styling",
        "Machine Washable"
      ]
    },
    {
      id: 22,
      name: "AFRIKA'S FINEST Purple Oversized Tee",
      price: "TSh 25,000",
      image: "/lovable-uploads/c0791d3c-b695-4f10-a6c8-3f40e5817d35.png",
      badge: "BESTSELLER",
      colors: ["Purple", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Bestselling oversized tee in rich purple color, featuring the iconic Afrika's Finest logo with traditional mask design.",
      features: [
        "Oversized Fit",
        "Rich Purple Color",
        "Traditional Mask Logo",
        "Premium Fabric",
        "Streetwear Style",
        "Comfortable Wear"
      ]
    },
    {
      id: 23,
      name: "AFRIKA'S FINEST Beige Oversized Tee",
      price: "TSh 25,000",
      image: "/lovable-uploads/9281b935-05bf-4bc6-bc91-b290612beca6.png",
      badge: "EXCLUSIVE",
      colors: ["Beige", "White"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Exclusive beige oversized tee with traditional African mask design. Perfect for casual wear with a touch of cultural elegance.",
      features: [
        "Exclusive Beige Color",
        "Oversized Design",
        "Cultural Mask Print",
        "Premium Cotton",
        "Casual Elegance",
        "Easy Care"
      ]
    },
    {
      id: 24,
      name: "AFRIKA'S FINEST Navy Chair Collection",
      price: "TSh 25,000",
      image: "/lovable-uploads/d3f3d3e5-9d95-4e58-a22a-3f858fda41fc.png",
      badge: "LIMITED",
      colors: ["Navy", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Limited edition navy dress from our special chair collection. Artistic representation of African heritage in modern fashion.",
      features: [
        "Limited Edition",
        "Navy Blue Color",
        "Artistic Design",
        "Comfortable Dress",
        "Heritage Inspired",
        "Unique Styling"
      ]
    },
    {
      id: 25,
      name: "AFRIKA'S FINEST Oversized Statement Tee",
      price: "TSh 25,000",
      image: "/lovable-uploads/5e0f328b-f1d8-4431-8107-31754766376e.png",
      badge: "CULTURE",
      colors: ["Navy", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Make a statement with this oversized tee featuring 'Afrika's Finest - The African Story' branding. Perfect for cultural expression.",
      features: [
        "Statement Design",
        "Cultural Message",
        "Oversized Fit",
        "Bold Typography",
        "African Story Theme",
        "Premium Quality"
      ]
    },
    {
      id: 26,
      name: "NYUMBANI QWETU NI AFRIKA Collection",
      price: "TSh 25,000",
      image: "/lovable-uploads/ff71bc8e-6331-4e52-8f9f-5c838167aa34.png",
      badge: "PRIDE",
      colors: ["White", "Camo"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Pride collection featuring 'Nyumbani Qwetu Ni Afrika' (Our Home is Africa) message with camouflage pants styling.",
      features: [
        "Pride Collection",
        "Swahili Message",
        "Mixed Styling",
        "Cultural Pride",
        "Unique Design",
        "Comfortable Fit"
      ]
    },
    {
      id: 27,
      name: "FINEST Back Print Collection",
      price: "TSh 25,000",
      image: "/lovable-uploads/093741ff-4455-45a5-981c-1152e3ee8456.png",
      badge: "NEW",
      colors: ["White", "Burgundy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "New collection featuring bold back print design with 'FINEST' branding and African mask logo in striking colors.",
      features: [
        "Back Print Design",
        "Bold Graphics",
        "Striking Colors",
        "African Mask Logo",
        "New Collection",
        "Quality Print"
      ]
    },
    {
      id: 28,
      name: "FINEST Duo Collection",
      price: "TSh 25,000",
      image: "/lovable-uploads/6e193c65-0c7e-4fef-83e2-6acb7a9dc7fc.png",
      badge: "BESTSELLER",
      colors: ["White", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Bestselling duo collection perfect for matching outfits. Features the classic 'FINEST' design in versatile white.",
      features: [
        "Duo Collection",
        "Matching Design",
        "Classic White",
        "Versatile Style",
        "Bestseller",
        "Premium Cotton"
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
