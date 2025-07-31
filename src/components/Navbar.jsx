"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useOutsideClick } from "@/utils/useOutsideClick";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuRef = useRef();
  const productRef = useRef();

  useOutsideClick(menuRef, () => {
    if (menuOpen) setMenuOpen(false);
  });
  useOutsideClick(productRef, () => {
    if (productRef) setProductsOpen(false);
  });
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img
              src="/logo1.png"
              alt="Astral Logo"
              className="mb-2 h-12 w-auto object-contain"
            />
          </Link>
          <Link href="/">
            <img
              src="/logo2.png"
              alt="Astral Name"
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700 text-[16px]">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition">
            About
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-orange-500 transition">
              Products <FiChevronDown className="ml-1 text-sm" />
            </button>
            <div className="absolute left-0 mt-2 w-44 bg-white shadow-xl rounded-md opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top z-50">
              <Link
                href="/products/poultry"
                className="block px-4 py-2 hover:bg-orange-100 text-sm"
              >
                Poultry
              </Link>
              <Link
                href="/products/livestock"
                className="block px-4 py-2 hover:bg-orange-100 text-sm"
              >
                Livestock
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="text-lg font-bold text-blue-700">Menu</div>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 text-gray-700 font-medium space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between w-full"
            >
              <span>Products</span>
              <FiChevronDown
                className={`transform transition ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {productsOpen && (
              <div ref={productRef} className="ml-3 mt-2 space-y-1 text-sm">
                <li>
                  <Link
                    href="/products/poultry"
                    onClick={() => setMenuOpen(false)}
                  >
                    Poultry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/livestock"
                    onClick={() => setMenuOpen(false)}
                  >
                    Livestock
                  </Link>
                </li>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
