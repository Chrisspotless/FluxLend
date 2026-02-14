"use client"
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
const IconChevronDown = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMenu = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClose = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navLinks = [
  { label: 'Menu', href: '/admin/items' },
  { label: 'Solutions', href: '/solutions', hasDropdown: true },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Industries', href: '/industries' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Security', href: '#security' },
];

const products = [
  {
    id: 'kiosk',
    name: 'Self-Checkout Kiosk',
    description: 'Fast, guided checkout with bagging scale and assisted mode for every store size.',
  },
  {
    id: 'scan-go',
    name: 'Scan & Go Mobile',
    description: 'Shopper-led scanning with in-app pay and exit validation to reduce queues.',
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginHovered, setLoginHovered] = useState(false);
  const [createAccountHovered, setCreateAccountHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: true,
      offset: 8,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center group">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#0b1f3b] group-hover:text-[#00a3a3] transition-colors">Nova</span>
              <span className="text-2xl font-bold text-[#00a3a3]">Checkout</span>
              <span className="w-2 h-2 rounded-full bg-[#00a3a3] ml-1 -mt-3 group-hover:scale-125 transition-transform"></span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-[#00a3a3] font-medium text-[15px] transition-colors group"
                    onMouseEnter={() => setIsProductDropdownOpen(true)}
                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                  >
                    {link.label}
                    <IconChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="relative text-gray-700 hover:text-[#00a3a3] font-medium text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00a3a3] after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </a>
                )}
                {link.hasDropdown && isProductDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                    onMouseEnter={() => setIsProductDropdownOpen(true)}
                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                  >
                    {products.map((product) => (
                      <a
                        key={product.id}
                        href={`/solutions/${product.id}`}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors group/item"
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-gray-900 group-hover/item:text-[#00a3a3] transition-colors">{product.name}</div>
                          <IconArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{product.description.substring(0, 50)}...</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
              <a
                href="/demo"
                className={`flex items-center gap-2 px-5 py-2.5 font-medium text-[15px] border rounded-full transition-all duration-300 ${
                  createAccountHovered
                    ? 'border-[#00a3a3] text-[#00a3a3] bg-blue-50 scale-105'
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onMouseEnter={() => setCreateAccountHovered(true)}
                onMouseLeave={() => setCreateAccountHovered(false)}
              >
                Talk to our experts
                <IconChevronDown className={`w-4 h-4 transition-transform duration-300 ${createAccountHovered ? 'rotate-[-90deg]' : '-rotate-90'}`} />
              </a>
              <a
                href="/demo"
                className={`px-6 py-2.5 bg-[#00a3a3] text-white font-medium text-[15px] rounded-full transition-all duration-300 ${
                  loginHovered
                    ? 'bg-[#007a7a] scale-105 shadow-lg shadow-[#00a3a3]/30'
                    : 'hover:bg-[#006b6b]'
                }`}
                onMouseEnter={() => setLoginHovered(true)}
                onMouseLeave={() => setLoginHovered(false)}
              >
                Request a demo
              </a>
            </div>

          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className={`block transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMenuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden border-t border-gray-100 transition-[max-height,opacity,transform,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen
              ? 'max-h-[80vh] opacity-100 translate-y-0 py-4 pointer-events-auto'
              : 'max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium text-[15px] py-2 hover:text-[#00a3a3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                data-aos="fade-down"
                data-aos-delay={80 + index * 40}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100" data-aos="fade-up" data-aos-delay="220">
              <a
                href="/demo"
                className="w-full text-center px-5 py-2.5 text-gray-700 font-medium text-[15px] border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              >
                Talk to our experts
              </a>
              <a
                href="/demo"
                className="w-full text-center px-6 py-2.5 bg-[#00a3a3] text-white font-medium text-[15px] rounded-full hover:bg-[#006b6b] transition-colors"
              >
                Request a demo
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;



