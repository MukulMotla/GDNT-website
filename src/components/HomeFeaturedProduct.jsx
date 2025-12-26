// src/components/HomeFeaturedProduct.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomeFeaturedProduct = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition flex flex-col overflow-hidden">
      {/* Product Image */}
 <div className="w-full h-64 flex justify-center items-center bg-white p-4">
  <img
    src={product.image || "/placeholder.png"}
    alt={product.name}
    className="max-h-full max-w-full object-contain"
  />
</div>




      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-2">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.shortDesc}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs">
            M.R.P : {product.price}
          </span>
          <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
            Stock: {product.stock}
          </span>
        </div>

        <div className="mt-4 flex gap-2 flex-wrap">
          <Link
            to={`/products/${product.id}`}
            className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition text-sm"
          >
            View Details
          </Link>

          {product.brochure && (
            <a
              href={product.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700 transition text-sm"
            >
              Brochure
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedProduct;
