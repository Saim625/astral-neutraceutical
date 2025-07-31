"use client";
import { useState } from "react";
import { livestockProducts } from "@/utils/data";
import ProductImageModal from "@/components/ProductImageModal";

export default function LivestockProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Livestock Products
        </h1>
        <p className="text-gray-600 mt-2">
          Explore our reliable range of livestock care solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {livestockProducts.map((product, idx) => (
          <div
            key={idx}
            className="cursor-pointer rounded-lg overflow-hidden border shadow hover:shadow-lg transition"
            onClick={() => setSelectedProduct(product)}
          >
            {/* Image Wrapper */}
            <div className="w-full h-full bg-white flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
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
