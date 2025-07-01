import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  id: number;
  image: string;
  brandName: string;
  projectTitle: string;
  description: string;
}

const FeaturedWorkCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Portfolio data - All using your branding image
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: '/assets/images/branding/feat.jpeg',
      brandName: 'Creative Studio',
      projectTitle: 'Brand Identity Design',
      description: 'Complete brand identity redesign including logo, color palette, and brand guidelines.'
    },
    {
      id: 2,
      image: '/assets/images/branding/feat.jpeg',
      brandName: 'Tech Startup',
      projectTitle: 'Product Design',
      description: 'User interface design and user experience optimization for technology platform.'
    },
    {
      id: 3,
      image: '/assets/images/branding/feat.jpeg',
      brandName: 'Fashion Brand',
      projectTitle: 'Digital Campaign',
      description: 'Comprehensive digital marketing campaign including social media content.'
    },
    {
      id: 4,
      image: '/assets/images/branding/feat.jpeg',
      brandName: 'Restaurant Chain',
      projectTitle: 'Visual Identity',
      description: 'Complete visual identity system including packaging and interior branding.'
    },
    {
      id: 5,
      image: '/assets/images/branding/feat.jpeg',
      brandName: 'Music Label',
      projectTitle: 'Album Artwork',
      description: 'Creative album artwork and promotional materials for emerging artists.'
    }
  ];

  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Navigation Controls Component (reusable)
  const NavigationControls = () => (
    <>
      {/* VIEW MORE Button */}
      <button 
        className="group inline-flex items-center border-2 border-black py-3 px-6 rounded-full text-base font-normal tracking-wide transition-all duration-300 hover:pr-12"
        style={{ 
          color: '#1A1A1A',
          backgroundColor: 'transparent'
        }}
      >
        <span>VIEW MORE</span>
        {/* Arrow - Hidden by default, appears on hover */}
        <svg 
          className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Arrow Navigation Controls */}
      <div className="flex gap-3">
        {/* Previous Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`
            w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300
            ${currentIndex === 0 
              ? 'border-gray-200 bg-transparent cursor-not-allowed' // Disabled State
              : 'border-gray-400 bg-transparent hover:border-black hover:bg-black group' // Default + Hover
            }
          `}
        >
          <svg 
            className={`w-5 h-5 transition-colors ${
              currentIndex === 0 
                ? 'text-gray-300' // Disabled State
                : 'text-gray-600 group-hover:text-white' // Default + Hover
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className={`
            w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300
            ${currentIndex === maxIndex 
              ? 'border-gray-200 bg-transparent cursor-not-allowed' // Disabled State
              : 'border-gray-400 bg-transparent hover:border-black hover:bg-black group' // Default + Hover
            }
          `}
        >
          <svg 
            className={`w-5 h-5 transition-colors ${
              currentIndex === maxIndex 
                ? 'text-gray-300' // Disabled State
                : 'text-gray-600 group-hover:text-white' // Default + Hover
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Desktop: Title + Controls, Mobile: Title Only */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-6">
          {/* Section Title */}
          <div>
            <h2 
              className="font-normal tracking-tight"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                color: '#1A1A1A',
                lineHeight: '1.2'
              }}
            >
              Featured Work
            </h2>
          </div>

          {/* Desktop Controls - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationControls />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden mb-8 md:mb-0">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 px-0 md:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="group cursor-pointer">
                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-6 relative">
                    <img 
                      src={item.image}
                      alt={`${item.brandName} - ${item.projectTitle}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                            <span class="text-white text-lg font-medium">Project ${item.id}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    {/* Brand Name and Project Title */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <h4 
                          className="font-medium mb-1"
                          style={{
                            fontSize: '1rem',
                            color: '#1A1A1A',
                            lineHeight: '1.4'
                          }}
                        >
                          Brand Name
                        </h4>
                        <p 
                          className="font-normal"
                          style={{
                            fontSize: '0.875rem',
                            color: '#6B7280',
                            lineHeight: '1.5'
                          }}
                        >
                          Lorem Ipsum
                        </p>
                      </div>
                      <div>
                        <h4 
                          className="font-medium mb-1"
                          style={{
                            fontSize: '1rem',
                            color: '#1A1A1A',
                            lineHeight: '1.4'
                          }}
                        >
                          Project Title
                        </h4>
                        <p 
                          className="font-normal"
                          style={{
                            fontSize: '0.875rem',
                            color: '#6B7280',
                            lineHeight: '1.5'
                          }}
                        >
                          Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls - Below Content, Hidden on Desktop */}
        <div className="flex md:hidden items-center justify-between">
          <NavigationControls />
        </div>

      </div>
    </section>
  );
};

export default FeaturedWorkCarousel;
