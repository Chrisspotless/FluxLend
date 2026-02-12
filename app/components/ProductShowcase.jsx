"use client"
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'xtreme',
    name: 'FluxLend Xtreme',
    image: 'https://specta.sterling.ng/images/lady-with-plenty-hair.png',
    description: 'Quick loans of up to ₦2 million to achieve your personal and business goals.',
    buttonText: 'Continue With FluxLend Xtreme',
  },
  {
    id: 'basic',
    name: 'FluxLend Basic',
    image: 'https://specta.sterling.ng/images/prismic-tower.png',
    description: 'Community lending of up to ₦5 million for salary earners who need an extra boost.',
    buttonText: 'Continue With FluxLend Basic',
  },
];

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Product Info */}
      <div className="p-6 lg:p-8 bg-white">
        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
          {product.name}
        </h3>
        <p className="text-gray-600 text-base mb-6 leading-relaxed">
          {product.description}
        </p>
        <button
          className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-medium text-sm rounded-full transition-all duration-300 ${
            isHovered 
              ? 'shadow-lg shadow-[#2563eb]/30 scale-105 bg-[#1e40af]' 
              : ''
          }`}
        >
          {product.buttonText}
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </button>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p 
            data-aos="fade-right"
            className="text-sm font-semibold text-gray-600 tracking-wide mb-4"
          >
            Product Showcase
          </p>
          <h2 
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-3xl md:text-4xl lg:text-[44px] text-gray-900 font-light leading-tight"
          >
            Welcome to the
            <br />
            <span className="relative">
              FluxVerse
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;


