"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { poultryProducts } from "../utils/data";
import { useState } from "react";
import Link from "next/link";
import ProductImageModal from "./ProductImageModal";

export default function FeaturedPoultryCarousel() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800">
          Featured Poultry Products
        </h2>
        <p className="mt-2 text-gray-600">
          Trusted poultry care solutions backed by quality and results.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="mySwiper"
        >
          {poultryProducts.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-12 text-center">
          <Link
            href="/products/poultry"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Explore Poultry Products
          </Link>
        </div>
      </div>

      {selectedProduct && (
        <ProductImageModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
