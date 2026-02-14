"use client"
import React, { useState } from 'react';
const IconPlus = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const faqsData = [
  {
    question: 'What is NovaCheckout?',
    answer: 'NovaCheckout is a customer-facing self-checkout experience for grocery, convenience, and specialty retail stores.',
  },
  {
    question: 'Do customers need to download an app?',
    answer: 'No. Shoppers can use the kiosk without an app, and Scan & Go is optional for mobile-first stores.',
  },
  {
    question: 'How does loss prevention work?',
    answer: 'NovaCheckout uses smart weight verification, prompts for high-risk items, and attendant assist flows to keep baskets accurate.',
  },
  {
    question: 'Can it integrate with our POS and catalog?',
    answer: 'Yes. We connect to your product catalog, prices, and promotions with standard retail integrations.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'Tap, chip, mobile wallets, store credit, and digital receipts are supported out of the box.',
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 50}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-[#00a3a3] shadow-lg' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 ${
          isOpen ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <span className={`font-medium text-base pr-4 transition-colors ${
          isOpen ? 'text-[#00a3a3]' : 'text-gray-900'
        }`}>
          {faq.question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ${
          isOpen ? 'bg-[#00a3a3] rotate-45' : 'bg-gray-100 hover:bg-gray-200'
        }`}>
          <IconPlus className={`w-4 h-4 transition-colors ${
            isOpen ? 'text-white' : 'text-gray-600'
          }`} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className={`px-6 pb-6 pt-2 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2 
            data-aos="fade-right"
            className="text-3xl md:text-4xl lg:text-[40px] text-gray-900 font-semibold leading-tight"
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;




