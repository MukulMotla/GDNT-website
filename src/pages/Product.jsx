import React from "react";
import ProductCard from "../components/ProductCard";
import {products} from "../data/products"; // your array of 28 products

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      {/* <div className="bg-blue-600 text-white py-10">
        <h1 className="text-4xl font-bold text-center">Our Products</h1>
        <p className="text-center mt-2 text-lg">
          Browse our high-quality medicines
        </p>
      </div> */}
     <div className="relative bg-white shadow-sm">
        <div className="absolute inset-0 opacity-10">
        </div>

        <div className="relative py-16 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
           Our Products
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Browse our high-quality medicines
          </p>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>



      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
