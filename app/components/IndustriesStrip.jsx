"use client"
import React from 'react';
import Link from 'next/link';

const industries = [
  {
    slug: 'grocery-supermarkets',
    title: 'Grocery & Supermarkets',
    description: 'High-volume lanes with assisted mode, bagging checks, and fast payments.',
  },
  {
    slug: 'specialty-retail',
    title: 'Specialty Retail',
    description: 'Elevated customer experience with mobile scanning and digital receipts.',
  },
  {
    slug: 'convenience-fuel',
    title: 'Convenience & Fuel',
    description: 'Quick checkout for small baskets and time-sensitive visits.',
  },
  {
    slug: 'pharmacy',
    title: 'Pharmacy',
    description: 'Secure workflows for regulated items and age validation.',
  },
  {
    slug: 'hospitality-dining',
    title: 'Hospitality & Dining',
    description: 'Self-service kiosks for order, pay, and pickup queues.',
  },
  {
    slug: 'department-stores',
    title: 'Department Stores',
    description: 'Scale self-checkout across multiple floors and formats.',
  },
];

const IndustriesStrip = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="lg:max-w-2xl">
            <p
              data-aos="fade-right"
              className="text-sm font-semibold text-gray-500 tracking-wide mb-4"
            >
              Designed for your business needs
            </p>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-3xl md:text-4xl lg:text-[42px] text-gray-900 font-semibold leading-tight"
            >
              Built for every retail format and customer journey
            </h2>
          </div>
          <p
            data-aos="fade-left"
            className="text-gray-500 lg:max-w-sm text-base leading-relaxed lg:text-right"
          >
            NovaCheckout supports the way your teams work today and scales with your next growth phase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Link
              href={`/industries/${industry.slug}`}
              key={industry.title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-[#00a3a3]"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-full border border-[#00a3a3] px-6 py-3 text-sm font-semibold text-[#00a3a3] transition-all duration-300 hover:bg-[#00a3a3] hover:text-white"
          >
            View all industries
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesStrip;
