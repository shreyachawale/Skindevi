import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-serif text-gray-900">{product.name}</h3>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-50 text-pink-700 text-xs rounded-full border border-pink-200"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Usage</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{product.usage}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Suitable For</h4>
            <p className="text-sm text-gray-700">{product.suitableFor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
