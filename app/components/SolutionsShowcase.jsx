"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const IconArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const products = [
  {
    id: 'kiosk',
    name: 'Self-Checkout Kiosk',
    image: 'https://www.lsretail.com/hs-fs/hubfs/ft-hero-sales-woman-with-tablet-POS.jpg?width=1600&height=900&name=ft-hero-sales-woman-with-tablet-POS.jpg',
    description: 'A guided kiosk experience with bagging scale support, age checks, and fast payment.',
    buttonText: 'See Kiosk in Action',
  },
  {
    id: 'scan-go',
    name: 'Scan & Go Mobile',
    image: 'https://www.lsretail.com/hs-fs/hubfs/ft-hero-complex-commerce-system.jpg?width=1600&height=900&name=ft-hero-complex-commerce-system.jpg',
    description: 'In-app scanning and payment so shoppers can skip the line and exit fast.',
    buttonText: 'See Scan & Go in Action',
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
        <Link
          href={`/solutions/${product.id}`}
          className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#00a3a3] text-white font-medium text-sm rounded-full transition-all duration-300 ${
            isHovered 
              ? 'shadow-lg shadow-[#00a3a3]/30 scale-105 bg-[#006b6b]' 
              : ''
          }`}
        >
          {product.buttonText}
          <IconArrowRight className={`w-4 h-4 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </Link>
      </div>
    </div>
  );
};

const SolutionsShowcase = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p 
            data-aos="fade-right"
            className="text-sm font-semibold text-gray-600 tracking-wide mb-4"
          >
            Unified solutions
          </p>
          <h2 
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-3xl md:text-4xl lg:text-[44px] text-gray-900 font-light leading-tight"
          >
            One platform for
            <br />
            <span className="relative">
              self-checkout at scale
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="#00a3a3" strokeWidth="2" strokeLinecap="round"/>
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

export default SolutionsShowcase;




