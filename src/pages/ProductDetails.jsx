// src/components/ProductDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  // Find the selected product
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      
      {/* Product Image */}
 <div className="md:w-1/2 w-full flex justify-center items-center bg-white rounded shadow p-4">
  <img
    src={product.image || "/placeholder.png"}
    alt={product.name}
    className="w-full max-w-[360px] h-auto object-contain"
  />
</div>


      {/* Product Info */}
      <div className="md:w-1/2 flex flex-col gap-4">

        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.category}</p>

        {/* Price & Stock */}
        <div className="flex gap-4 mt-2">
          <span className="px-3 py-1 bg-green-600 text-white rounded-full">
            Price: ₹{product.price}
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full">
            Stock: {product.stock}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4">{product.description}</p>

        {/* ---------------- PRODUCT SPECIFICATIONS ---------------- */}
        {product.specifications && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Product Specifications
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-1">

              {product.specifications.drugType && (
                <li>Drug Type: {product.specifications.drugType}</li>
              )}

              {product.specifications.dosageGuidelines && (
                <li>Dosage Guidelines: {product.specifications.dosageGuidelines}</li>
              )}

              {product.specifications.suitableFor && (
                <li>Suitable For: {product.specifications.suitableFor}</li>
              )}

              {product.specifications.physicalForm && (
                <li>Physical Form: {product.specifications.physicalForm}</li>
              )}

              {product.specifications.storageInstructions && (
                <li>Storage Instructions: {product.specifications.storageInstructions}</li>
              )}

              {product.specifications.originOfMedicine && (
                <li>Origin of Medicine: {product.specifications.originOfMedicine}</li>
              )}

              {product.specifications.dosageForm && (
                <li>Dosage Form: {product.specifications.dosageForm}</li>
              )}
            </ul>
          </div>
        )}

        {/* ---------------- TRADE INFORMATION ---------------- */}
        {product.tradeInformation && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Trade Information
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-1">

              {product.tradeInformation.paymentTerms && (
                <li>Payment Terms: {product.tradeInformation.paymentTerms}</li>
              )}

              {product.tradeInformation.supplyAbility && (
                <li>Supply Ability: {product.tradeInformation.supplyAbility}</li>
              )}

              {product.tradeInformation.deliveryTime && (
                <li>Delivery Time: {product.tradeInformation.deliveryTime}</li>
              )}

              {product.tradeInformation.mainDomesticMarket && (
                <li>Main Domestic Market: {product.tradeInformation.mainDomesticMarket}</li>
              )}
            </ul>
          </div>
        )}

        {/* ---------------- FAQs ---------------- */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">FAQs</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <strong>Q: What is the physical form of this medication?</strong>
              <p>
                A: {product.specifications?.physicalForm || "Information not available"}
              </p>
            </div>

            <div>
              <strong>Q: Where is this product manufactured?</strong>
              <p>
                A: {product.specifications?.originOfMedicine || "Information not available"}
              </p>
            </div>

            <div>
              <strong>Q: What are the storage instructions?</strong>
              <p>
                A: {product.specifications?.storageInstructions || "Information not available"}
              </p>
            </div>

            <div>
              <strong>Q: Is this medication suitable for children?</strong>
              <p>
                A: {product.specifications?.suitableFor || "Information not available"}
              </p>
            </div>

            <div>
              <strong>Q: What type of drug is this?</strong>
              <p>
                A: {product.specifications?.drugType || "Information not available"}
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/products"
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
        >
          Back to Products
        </Link>

      </div>
    </div>
  );
};

export default ProductDetails;
