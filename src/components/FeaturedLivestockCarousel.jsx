"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { livestockProducts } from "../utils/data";
import Link from "next/link";
import ProductImageModal from "./ProductImageModal";

export default function FeaturedLivestockCarousel() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="relative bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800">
          Featured Livestock Products
        </h2>
        <p className="mt-2 text-gray-600">
          Trusted veterinary products crafted for livestock health.
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
          {livestockProducts.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200"
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
            href="/products/livestock"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Explore Livestock Products
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
