import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition flex flex-col overflow-hidden">
      
      {/* Product Image */}
      <div className="w-full h-64 flex justify-center items-center bg-white p-4">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width="300"
          height="300"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500">{product.category}</p>

        <p className="text-gray-700 text-sm line-clamp-3">
          {product.shortDesc}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs">
            Price: {product.price}
          </span>
          <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
            Stock: {product.stock}
          </span>
        </div>

        {/* View Details Button */}
        <Link
          to={`/products/${product.id}`}
          className="mt-auto bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
