"use client"
import React, { useState } from 'react';
const IconPlay = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5l11 7-11 7V5z" />
  </svg>
);

const IconShield = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const IconUsers = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" stroke="currentColor" strokeWidth="2" />
    <path d="M4 20c1.8-3 5-4 8-4s6.2 1 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconTrend = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 16l6-6 4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 8h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBuilding = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 21V5l7-3 7 3v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClose = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const stats = [
  {
    icon: 'wallet',
    value: '1,250+',
    label: 'Stores Live',
  },
  {
    icon: 'people',
    value: '48M+',
    label: 'Checkouts Completed',
  },
  {
    icon: 'calendar',
    value: '34%',
    label: 'Avg. Queue Reduction',
  },
];

const TrustAndSecurity = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [playButtonHovered, setPlayButtonHovered] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'wallet':
        return <IconShield className="w-6 h-6 text-gray-400" />;
      case 'people':
        return <IconUsers className="w-6 h-6 text-gray-400" />;
      case 'calendar':
        return <IconTrend className="w-6 h-6 text-gray-400" />;
      default:
        return <IconShield className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section id="security" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p 
            data-aos="fade-up"
            className="text-sm font-semibold text-gray-500 tracking-wide mb-4"
          >
            Designed for your business needs
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl lg:text-[44px] text-gray-900 font-semibold leading-tight mb-4"
          >
            Secure, reliable, and built for enterprise retail
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 text-lg"
          >
            See how the platform works in 90 seconds
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
                src="https://www.lsretail.com/hs-fs/hubfs/ft-hero-business-man-backoffice-laptop.jpg?width=1600&height=900&name=ft-hero-business-man-backoffice-laptop.jpg"
                alt="Self-checkout demo"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className={`w-20 h-20 bg-[#00a3a3] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    playButtonHovered ? 'scale-125 shadow-2xl shadow-[#00a3a3]/50' : ''
                  }`}
                  onMouseEnter={() => setPlayButtonHovered(true)}
                  onMouseLeave={() => setPlayButtonHovered(false)}
                >
                  <IconPlay className="w-8 h-8 text-white ml-1" />
                </button>
                
                {/* Ripple effect */}
                <div className="absolute w-20 h-20 rounded-full border-4 border-[#00a3a3]/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute w-28 h-28 rounded-full border-2 border-[#00a3a3]/20 animate-ping" style={{ animationDuration: '2.5s' }}></div>
              </div>
            </div>
            
            <button
              className="inline-flex items-center gap-2 mt-4 text-[#00a3a3] font-medium hover:underline transition-all duration-300 hover:gap-3"
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoModalOpen(true);
              }}
            >
              <IconPlay className="w-4 h-4" />
              Watch the demo
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
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#00a3a3] group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(stat.icon)}
                  </div>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#00a3a3] transition-colors">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
            {/* Trust Signal */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex items-center gap-6 p-6 rounded-xl bg-gray-50 hover:bg-[#00a3a3]/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <IconBuilding className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Certified for</span>
                <span className="font-bold text-gray-900">PCI-ready payment standards</span>
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
              title="Self-Checkout Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 hover:rotate-90"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <IconClose className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrustAndSecurity;


