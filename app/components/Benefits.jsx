"use client"
import React, { useState } from 'react';
import { Wallet, ArrowRight, Zap, Shield, CreditCard } from 'lucide-react';

const benefitsData = [
  {
    title: 'Access to Quick Loans',
    description: 'Request for a loan on FluxLend and get it in minutes. We\'ve made it accessible to you.',
    icon: Zap,
  },
  {
    title: 'Flexible repayment options',
    description: 'With FluxLend, you can customise your repayment option to fit your financial situations.',
    icon: CreditCard,
  },
  {
    title: 'No Hidden Charges',
    description: 'You can trust us to be as transparent as a clear glass. No hidden charges or additional fees.',
    icon: Shield,
  },
  {
    title: 'Know your Credit Score',
    description: 'Knowing your credit score helps you manage your financial health and make informed decisions.',
    icon: Wallet,
  },
];

const BenefitCard = ({ benefit, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = benefit.icon;

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
        isHovered ? 'bg-[#2563eb] scale-110 rotate-6' : 'bg-blue-50'
      }`}>
        <Icon className={`w-6 h-6 transition-colors duration-500 ${
          isHovered ? 'text-white' : 'text-[#2563eb]'
        }`} />
      </div>
      <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
        isHovered ? 'text-[#2563eb]' : 'text-[#2563eb]'
      }`}>
        {benefit.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {benefit.description}
      </p>
      <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
        isHovered ? 'opacity-100 text-[#2563eb]' : 'opacity-0'
      }`}>
        Learn more
        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
      </div>
    </div>
  );
};

const Benefits = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-12">
          <div className="lg:max-w-xl">
            <p 
              data-aos="fade-right"
              className="text-sm font-semibold text-gray-500 tracking-wide mb-4"
            >
              What's in it for you?
            </p>
            <h2 
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-3xl md:text-4xl lg:text-[42px] text-gray-900 font-semibold leading-tight"
            >
              Enjoy a revolving suite of loan offers tailored to your needs
            </h2>
          </div>
          <p 
            data-aos="fade-left"
            className="text-gray-500 mt-6 lg:mt-0 lg:max-w-sm text-base leading-relaxed lg:text-right"
          >
            Whoever you are and whatever your goals are, FluxLend is your sure money partner, offering easy access to the loans you need to achieve them.
          </p>
        </div>

        {/* CTA Button */}
        <div 
          data-aos="fade-up"
          className="mb-16"
        >
          <button
            className={`relative overflow-hidden px-8 py-4 bg-[#2563eb] text-white font-medium text-base rounded-full transition-all duration-300 ${
              ctaHovered ? 'shadow-xl shadow-[#2563eb]/40 scale-105' : ''
            }`}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            <span className={`absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] transition-opacity duration-300 ${ctaHovered ? 'opacity-100' : 'opacity-0'}`}></span>
            <span className="relative z-10 flex items-center gap-2">
              Get started now
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${ctaHovered ? 'translate-x-1' : ''}`} />
            </span>
          </button>
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

export default Benefits;


