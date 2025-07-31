"use client";
import { FiX } from "react-icons/fi";

export default function ProductImageModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black text-white rounded-full p-1.5 hover:text-red-400 transition z-10"
          aria-label="Close"
        >
          <FiX size={26} />
        </button>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[85vh] object-contain bg-white rounded-xl"
        />
      </div>
    </div>
  );
}
