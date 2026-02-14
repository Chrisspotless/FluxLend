"use client"
import React, { useState } from 'react';

const HeroSection = () => {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#0b1f3b] overflow-hidden pt-[72px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.lsretail.com/hs-fs/hubfs/hero-homepage.jpg?width=1800&height=1000&name=hero-homepage.jpg"
          alt="Customer using self-checkout"
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient)] via-[color-mix(in_oklab,var(--brand-gradient)_80%,transparent)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center min-h-[calc(100vh-72px)]">
          <div className="max-w-2xl py-20">
            <h1 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-5xl text-white leading-[1.15] font-light mb-6"
            >
              Unified, modular
              <br />
              self-checkout for modern retail
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-gray-300 mb-10"
            >
              Eliminate the complexity of separate systems with one platform for kiosk and mobile checkout.
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap gap-4"
            >
              <a
                href="/demo"
                className={`relative px-8 py-4 bg-[#00a3a3] text-white font-medium text-base rounded-full overflow-hidden transition-all duration-300 ${
                  primaryHovered ? 'shadow-xl shadow-[#00a3a3]/40 scale-105' : ''
                }`}
                onMouseEnter={() => setPrimaryHovered(true)}
                onMouseLeave={() => setPrimaryHovered(false)}
              >
                <span className={`absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient)] to-[var(--brand-gradient)] transition-opacity duration-300 ${primaryHovered ? 'opacity-100' : 'opacity-0'}`}></span>
                <span className="relative z-10 flex items-center gap-2">
                  Request a demo
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${primaryHovered ? 'translate-x-1' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="/solutions"
                className={`px-8 py-4 bg-transparent text-white font-medium text-base rounded-full border-2 transition-all duration-300 ${
                  secondaryHovered 
                    ? 'bg-white text-[#0b1f3b] border-white scale-105' 
                    : 'border-white/80 hover:bg-white/10'
                }`}
                onMouseEnter={() => setSecondaryHovered(true)}
                onMouseLeave={() => setSecondaryHovered(false)}
              >
                <span className="flex items-center gap-2">
                  Explore the suite
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${secondaryHovered ? 'translate-y-1' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="500"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



