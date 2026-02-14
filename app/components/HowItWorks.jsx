"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const IconSpeed = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 12h1M16 12h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconPayments = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
    <path d="M7 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconShield = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconInsights = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 16V9M12 16V6M17 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const benefitsData = [
  {
    title: 'One Unified Platform',
    description: 'Replace separate checkout tools with a single, integrated suite for kiosks and mobile.',
    icon: 'speed',
  },
  {
    title: 'Automated Retail Tasks',
    description: 'Reduce manual steps with guided workflows, automatic prompts, and smart validations.',
    icon: 'payments',
  },
  {
    title: 'Scale with Confidence',
    description: 'Add lanes, locations, and new formats without reworking your checkout experience.',
    icon: 'shield',
  },
  {
    title: 'Single Source of Truth',
    description: 'Track every basket, assistance event, and payment in one consolidated view.',
    icon: 'insights',
  },
];

const BenefitCard = ({ benefit, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const icons = {
    speed: IconSpeed,
    payments: IconPayments,
    shield: IconShield,
    insights: IconInsights,
  };
  const Icon = icons[benefit.icon] || IconInsights;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`group bg-white rounded-2xl p-8 transition-all duration-500 cursor-pointer ${
        isHovered ? 'shadow-2xl -translate-y-2 bg-gradient-to-br from-white to-blue-50' : 'hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
        isHovered ? 'bg-[#00a3a3] scale-110 rotate-6' : 'bg-blue-50'
      }`}>
        <Icon className={`w-6 h-6 transition-colors duration-500 ${
          isHovered ? 'text-white' : 'text-[#00a3a3]'
        }`} />
      </div>
      <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
        isHovered ? 'text-[#00a3a3]' : 'text-[#00a3a3]'
      }`}>
        {benefit.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {benefit.description}
      </p>
      <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
        isHovered ? 'opacity-100 text-[#00a3a3]' : 'opacity-0'
      }`}>
        Learn more
        <svg className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-12">
          <div className="lg:max-w-xl">
            <p 
              data-aos="fade-right"
              className="text-sm font-semibold text-gray-500 tracking-wide mb-4"
            >
            Built for retail teams
            </p>
            <h2 
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-3xl md:text-4xl lg:text-[42px] text-gray-900 font-semibold leading-tight"
            >
              How will unified, modular software transform your checkout?
            </h2>
          </div>
          <p 
            data-aos="fade-left"
            className="text-gray-500 mt-6 lg:mt-0 lg:max-w-sm text-base leading-relaxed lg:text-right"
          >
            Standardize checkout operations, reduce queues, and improve accuracy with one connected platform.
          </p>
        </div>

        {/* CTA Button */}
        <div 
          data-aos="fade-up"
          className="mb-16"
        >
          <Link
            href="/demo"
            className={`relative inline-flex w-full items-center justify-center gap-2 overflow-hidden px-6 py-4 text-center bg-[#00a3a3] text-white font-medium text-base rounded-full transition-all duration-300 sm:w-auto sm:px-8 ${
              ctaHovered ? 'shadow-xl shadow-[#00a3a3]/40 scale-105' : ''
            }`}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            <span className={`absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient)] to-[var(--brand-gradient)] transition-opacity duration-300 ${ctaHovered ? 'opacity-100' : 'opacity-0'}`}></span>
            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              Talk to an expert
              <svg className={`w-5 h-5 transition-transform duration-300 ${ctaHovered ? 'translate-x-1' : ''}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;



