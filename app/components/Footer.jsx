"use client"
import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const footerData = {
  fluxLend: [
    { label: 'FluxLend Xtreme', href: '#' },
    { label: 'FluxLend Basic', href: '#' },
  ],
  contact: {
    address: 'Sterling Towers, 20 Marina, Lagos Island, Lagos, Nigeria',
    email: 'hello@fluxlend.com',
    phone: '+234 02 017 004271',
  },
};

const socialLinks = [
  { platform: 'instagram', url: 'https://www.instagram.com/fluxlend' },
  { platform: 'twitter', url: 'https://x.com/fluxlend' },
  { platform: 'facebook', url: 'https://www.facebook.com/share/18FBkJFqi9/?mibextid=LQQJ4d' },
];

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#1a1a2e] text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2563eb]/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Logo & Description */}
          <div data-aos="fade-up">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-white">Flux</span>
                <span className="text-2xl font-bold text-[#2563eb]">Lend</span>
                <span className="w-2 h-2 rounded-full bg-[#2563eb] ml-1 animate-pulse"></span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              FluxLend is a digital lending platform powered by Sterling Bank in Nigeria. It allows users to access loans quickly without collateral, paperwork, or visiting a bank branch. FluxLend offers personal loans for individuals, entrepreneurs and salary earners.
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
                      ? 'bg-[#2563eb] text-white scale-110 shadow-lg shadow-[#2563eb]/50' 
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

          {/* FluxLend Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              FluxLend
            </h4>
            <ul className="space-y-4">
              {footerData.fluxLend.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-white hover:text-[#2563eb] transition-all duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1 group-hover:text-[#2563eb] transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {footerData.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#2563eb] transition-colors" />
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#2563eb] transition-colors" />
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
            © {new Date().getFullYear()} FluxLend. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


