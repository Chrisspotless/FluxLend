"use client"
import React, { useState } from 'react';
const IconArrowUpRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17l10-10M10 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconMail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 4l3 1-1 4-3-1c1.5 3.5 4 6 7.5 7l1-3 4 1 1 3c-1.5 2-4 3-7 2-5-2-9-6-11-11-1-3 0-5.5 2-7l3 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

const IconTwitter = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M19 7c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.3.9A3.4 3.4 0 0 0 10.5 9c0 .3 0 .6.1.8-2.7-.1-5-1.4-6.6-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.2 3 2.8 3.3-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.4 1.9 2.4 3.6 2.5A7 7 0 0 1 4 18c1.6 1 3.5 1.6 5.5 1.6 6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.2-1 1.6-1.7z" fill="currentColor" />
  </svg>
);

const IconFacebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 8h3V5h-3c-2 0-4 1.6-4 4v2H7v3h3v5h3v-5h3l1-3h-4V9c0-.6.4-1 1-1z" fill="currentColor" />
  </svg>
);

const footerData = {
  fluxLend: [
    { label: 'Self-Checkout Kiosk', href: '#kiosk' },
    { label: 'Scan & Go Mobile', href: '#scan-go' },
  ],
  contact: {
    address: '1200 Market St, San Francisco, CA 94102',
    email: 'hello@novacheckout.com',
    phone: '+1 (415) 555-0199',
  },
};

const socialLinks = [
  { platform: 'instagram', url: 'https://www.instagram.com/' },
  { platform: 'twitter', url: 'https://x.com/' },
  { platform: 'facebook', url: 'https://www.facebook.com/' },
];

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'instagram':
        return <IconInstagram className="w-5 h-5" />;
      case 'twitter':
        return <IconTwitter className="w-5 h-5" />;
      case 'facebook':
        return <IconFacebook className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#0b1f3b] text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a3a3]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00a3a3]/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Logo & Description */}
          <div data-aos="fade-up">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-white">Nova</span>
                <span className="text-2xl font-bold text-[#00a3a3]">Checkout</span>
                <span className="w-2 h-2 rounded-full bg-[#00a3a3] ml-1 animate-pulse"></span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              NovaCheckout delivers customer-facing self-checkout for retail teams who want faster queues, higher scan accuracy, and a frictionless shopper experience.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredSocial === index 
                      ? 'bg-[#00a3a3] text-white scale-110 shadow-lg shadow-[#00a3a3]/50' 
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* NovaCheckout Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              NovaCheckout
            </h4>
            <ul className="space-y-4">
              {footerData.fluxLend.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-white hover:text-[#00a3a3] transition-all duration-300"
                  >
                    {link.label}
                    <IconArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group cursor-pointer">
                <IconPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1 group-hover:text-[#00a3a3] transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {footerData.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <IconMail className="w-5 h-5 text-gray-400 group-hover:text-[#00a3a3] transition-colors" />
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <IconPhone className="w-5 h-5 text-gray-400 group-hover:text-[#00a3a3] transition-colors" />
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NovaCheckout. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



