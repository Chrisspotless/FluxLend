"use client"
import React, { useState } from 'react';
const IconChevronRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const checkoutFeatures = [
  {
    id: 'guided-scan',
    title: 'Guided Scanning',
    description: 'On-screen prompts keep scanning accurate and easy for first-time shoppers.',
  },
  {
    id: 'assisted-mode',
    title: 'Assisted Mode',
    description: 'Attendants can approve age-restricted items or overrides in seconds.',
  },
  {
    id: 'smart-bagging',
    title: 'Smart Bagging',
    description: 'Weight verification catches mis-scans without interrupting the flow.',
  },
  {
    id: 'receipts',
    title: 'Instant Receipts',
    description: 'Send digital receipts via SMS or email and support printed receipts when needed.',
  },
];

const CheckoutFeatures = () => {
  const [activeTab, setActiveTab] = useState('kiosk');
  const [activeFeature, setActiveFeature] = useState('guided-scan');
  const [scanScore, setScanScore] = useState(98);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Tabs */}
        <div 
          data-aos="fade-down"
          className="flex gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('kiosk')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'kiosk'
                ? 'bg-white text-gray-900 shadow-lg scale-105'
                : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
            }`}
          >
            Kiosk Checkout
          </button>
          <button
            onClick={() => setActiveTab('scan-go')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'scan-go'
                ? 'bg-white text-gray-900 shadow-lg scale-105'
                : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
            }`}
          >
            Scan & Go Mobile
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div data-aos="fade-right">
            <p className="text-sm font-semibold text-gray-500 tracking-wide mb-3">
              NovaCheckout platform
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] text-gray-900 font-semibold leading-tight mb-6">
              Empower customers with guided, secure self-service
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Combine kiosks and Scan & Go to deliver a consistent, enterprise-grade checkout experience.
            </p>

            {/* Feature Accordion */}
            <div className="space-y-0">
              {checkoutFeatures.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`w-full text-left py-4 border-l-4 pl-6 transition-all duration-300 group ${
                    activeFeature === feature.id
                      ? 'border-[#00a3a3] bg-white/50'
                      : 'border-transparent hover:border-gray-300 hover:bg-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4
                      className={`font-semibold text-base transition-colors ${
                        activeFeature === feature.id ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <IconChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeFeature === feature.id ? 'rotate-90 text-[#00a3a3]' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeFeature === feature.id ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Scan Accuracy Visual */}
          <div data-aos="fade-left" className="relative">
            {/* Scan Accuracy Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300">
              {/* Gauge */}
              <div className="relative w-64 h-32 mx-auto mb-6">
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  {/* Background Arc */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* Red Section */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 60 35"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Orange Section */}
                  <path
                    d="M 60 35 A 80 80 0 0 1 100 20"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Yellow Section */}
                  <path
                    d="M 100 20 A 80 80 0 0 1 140 35"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Green Section */}
                  <path
                    d="M 140 35 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Needle */}
                  <line
                    x1="100"
                    y1="100"
                    x2="155"
                    y2="50"
                    stroke="#0b1f3b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="origin-bottom transition-transform duration-700"
                    style={{ transformOrigin: '100px 100px' }}
                  />
                  <circle cx="100" cy="100" r="8" fill="#0b1f3b" />
                </svg>
                {/* Score */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                  <span className="text-4xl font-bold text-gray-900">{scanScore}</span>
                  <span className="text-xs text-green-500 flex items-center gap-1 mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Excellent
                  </span>
                </div>
              </div>
              {/* Scale Labels */}
              <div className="flex justify-between text-xs text-gray-400 px-4">
                <span>0</span>
                <span>100</span>
              </div>
            </div>

            {/* Checkout Summary Card */}
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto mt-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-500">Average Checkout Time</p>
                  <p className="text-xl font-bold text-gray-900">1:42 mins</p>
                  <p className="text-xs text-gray-400">Baskets per hour: 42</p>
                </div>
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                      <p className="text-lg font-bold text-gray-900">96%</p>
                      <p className="text-xs text-gray-500">Issue-Free Checkouts</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                      <p className="text-sm font-semibold text-gray-900">Assistance in 18s</p>
                      <p className="text-xs text-gray-500">Avg. attendant response</p>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=300&q=80"
                    alt="Checkout summary"
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutFeatures;



