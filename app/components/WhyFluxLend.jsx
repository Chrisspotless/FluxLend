"use client"
import React, { useState } from 'react';
import { Play, Wallet, Users, Calendar, Building2, X } from 'lucide-react';

const stats = [
  {
    icon: 'wallet',
    value: 'N300B+',
    label: 'Loans Disbursed',
  },
  {
    icon: 'people',
    value: '3,000,000+',
    label: 'FluxLend Lovers',
  },
  {
    icon: 'calendar',
    value: '2018',
    label: 'Operating since',
  },
];

const WhyFluxLend = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [playButtonHovered, setPlayButtonHovered] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'wallet':
        return <Wallet className="w-6 h-6 text-gray-400" />;
      case 'people':
        return <Users className="w-6 h-6 text-gray-400" />;
      case 'calendar':
        return <Calendar className="w-6 h-6 text-gray-400" />;
      default:
        return <Wallet className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p 
            data-aos="fade-up"
            className="text-sm font-semibold text-gray-500 tracking-wide mb-4"
          >
            Why FluxLend?
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl lg:text-[44px] text-gray-900 font-semibold leading-tight mb-4"
          >
            Refreshed to serve you better and support your goals
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 text-lg"
          >
            Discover what's New on FluxLend in 90 seconds
          </p>
        </div>

        {/* Video Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video Thumbnail */}
          <div 
            data-aos="fade-right"
            className="relative group cursor-pointer" 
            onClick={() => setIsVideoModalOpen(true)}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://specta.sterling.ng/images/ladies-seating-smiling-two.png"
                alt="Why FluxLend"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className={`w-20 h-20 bg-[#2563eb] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    playButtonHovered ? 'scale-125 shadow-2xl shadow-[#2563eb]/50' : ''
                  }`}
                  onMouseEnter={() => setPlayButtonHovered(true)}
                  onMouseLeave={() => setPlayButtonHovered(false)}
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </button>
                
                {/* Ripple effect */}
                <div className="absolute w-20 h-20 rounded-full border-4 border-[#2563eb]/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute w-28 h-28 rounded-full border-2 border-[#2563eb]/20 animate-ping" style={{ animationDuration: '2.5s' }}></div>
              </div>
            </div>
            
            <button
              className="inline-flex items-center gap-2 mt-4 text-[#2563eb] font-medium hover:underline transition-all duration-300 hover:gap-3"
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoModalOpen(true);
              }}
            >
              <Play className="w-4 h-4" />
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div data-aos="fade-left" className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-center gap-6 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#2563eb] group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(stat.icon)}
                  </div>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
            {/* Sterling Bank */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex items-center gap-6 p-6 rounded-xl bg-gray-50 hover:bg-[#2563eb]/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Building2 className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Powered by</span>
                <span className="font-bold text-gray-900">Sterling Bank PLC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="951"
              height="535"
              src="https://www.youtube.com/embed/fuiiJuB7tJs"
              title="Loans 101 (Loan Basics 1/3)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 hover:rotate-90"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyFluxLend;

