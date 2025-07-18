import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../../ui/Button/Icons';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on desktop (screen width >= 768px)
      if (window.innerWidth >= 768) {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      } else {
        // Keep it false for mobile to prevent expansion
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Also handle resize events

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: 'ABOUT', href: '/about' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <>
      {/* Navigation Bar - Exact Length from Your Screenshots */}
      <nav 
        className={`
          fixed top-6 left-1/2 transform -translate-x-1/2 z-50
          transition-all duration-500 ease-out 
          ${className}
        `}
      >
        <div 
          className={`
            bg-black/50 rounded-full
            px-12 py-4 flex items-center justify-between
            transition-all duration-500 ease-out
            ${isScrolled ? 'w-[600px] shadow-2xl' : 'w-[90vw] max-w-[1200px] shadow-lg'}
          `}
        >
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-white font-normal text-sm tracking-wide leading-tight hover:text-gray-300 transition-colors duration-300"
            >
              BORDERLESS<br />CREATIVES
            </a>
          </div>

          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#E8E8E8] hover:text-white transition-colors duration-300"
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '120%',
                  fontFamily: 'Switzer, sans-serif',
                  padding: '0 16px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 hover:text-gray-300 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/90"
            onClick={toggleMobileMenu}
          />
          
          <div className="relative h-full flex flex-col bg-black">
            <div className="flex items-center justify-between p-6">
              <div className="text-white font-normal text-lg tracking-wide leading-tight">
                BORDERLESS<br />CREATIVES
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 hover:text-gray-300 transition-colors duration-300"
                aria-label="Close mobile menu"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-12">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className="text-white text-2xl font-normal tracking-wide hover:text-gray-300 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
