"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="text-center md:text-left max-w-xl animate-fade-in-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight tracking-tight text-balance">
            Empowering Health{" "}
            <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Through Nature
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Science-backed solutions for Livestock & Poultry — made with care,
            powered by innovation.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/about"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Get to Know Us
            </Link>
            <Link
              href="/contact"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right: Overlapping Cards */}
        <div className="relative w-full max-w-md h-[300px] animate-fade-in-right hidden md:block">
          {/* Poultry Card */}
          <div className="absolute top-0 left-6 w-64 h-40 bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-4 border-l-4 border-orange-400 hover:scale-105 transition-all duration-300 z-20">
            <h3 className="font-bold text-blue-700 text-lg">
              Poultry Solutions
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Boost health & growth with science-backed poultry products.
            </p>
            <Link
              href="/products/poultry"
              className="text-sm text-orange-500 mt-3 inline-block hover:underline"
            >
              View Poultry
            </Link>
          </div>

          {/* Livestock Card */}
          <div className="absolute bottom-0 right-6 w-64 h-40 bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-4 border-l-4 border-blue-400 hover:scale-105 transition-all duration-300 z-10">
            <h3 className="font-bold text-blue-700 text-lg">Livestock Care</h3>
            <p className="text-gray-600 text-sm mt-2">
              Natural and effective products for livestock wellness.
            </p>
            <Link
              href="/products/livestock"
              className="text-sm text-blue-500 mt-3 inline-block hover:underline"
            >
              View Livestock
            </Link>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 C480,140 960,20 1440,80 L1440,100 L0,100 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
