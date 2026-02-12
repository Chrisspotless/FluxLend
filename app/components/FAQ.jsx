"use client"
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqsData = [
  {
    question: 'What is FluxLend?',
    answer: 'FluxLend is a digital lending platform powered by Sterling Bank in Nigeria. It allows users to access loans quickly without collateral, paperwork, or visiting a bank branch.',
  },
  {
    question: 'How long has FluxLend been in existence?',
    answer: 'FluxLend has been operating since 2018, providing quick and easy loans to Nigerians.',
  },
  {
    question: 'How many product variants does FluxLend have?',
    answer: 'FluxLend has two main product variants: FluxLend Xtreme for personal loans up to ₦2 million and FluxLend Basic for salary earners up to ₦5 million.',
  },
  {
    question: 'What makes FluxLend different from other lenders?',
    answer: 'FluxLend offers no collateral, no guarantors, no hidden charges, and quick disbursement. It\'s powered by Sterling Bank, ensuring reliability and trust.',
  },
  {
    question: 'Through what channels can I access FluxLend?',
    answer: 'You can access FluxLend through the web platform or mobile app, available on both iOS and Android.',
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 50}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-[#2563eb] shadow-lg' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 ${
          isOpen ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <span className={`font-medium text-base pr-4 transition-colors ${
          isOpen ? 'text-[#2563eb]' : 'text-gray-900'
        }`}>
          {faq.question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ${
          isOpen ? 'bg-[#2563eb] rotate-45' : 'bg-gray-100 hover:bg-gray-200'
        }`}>
          <Plus className={`w-4 h-4 transition-colors ${
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


