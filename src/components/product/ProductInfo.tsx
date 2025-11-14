


interface ProductInfoProps {
  product: {
    name: string;
    price: string;
    description: string;
    features: string[];
  };
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
        <p className="text-3xl font-bold text-red-600 mb-4">{product.price}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-black mb-2">Description</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-black mb-3">Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
