"use client";
import { useState } from "react";
import { poultryProducts } from "@/utils/data";
import ProductImageModal from "@/components/ProductImageModal";

export default function PoultryProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Poultry Products
        </h1>
        <p className="text-gray-600 mt-2">
          Explore our complete range of poultry healthcare solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {poultryProducts.map((product, idx) => (
          <div
            key={idx}
            className="cursor-pointer rounded-lg overflow-hidden border shadow hover:shadow-lg transition"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <ProductImageModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
