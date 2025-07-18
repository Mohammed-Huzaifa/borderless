import React from 'react';
import { Button } from '../../../ui/Button';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-16 lg:px-[120px] px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Compact Heading */}
          <div>
            <h2 
              className="text-[#1A1A1A] mb-8"
              style={{
                fontSize: '40px',
                fontWeight: '400',
                lineHeight: '120%',
                fontFamily: 'Switzer, sans-serif'
              }}
            >
              Who We Are?
            </h2>
          </div>

          {/* Right Column - Compact Content */}
          <div className="space-y-4 md:space-y-5">
            {/* Description Text */}
            <p
              className="text-[#5F5F5F] font-switzer font-normal lg:text-[24px] lg:leading-[140%]"
            >
              Borderless Creatives is a global <br className="md:hidden" /> 
              design studio built for the future, <br className="md:hidden" /> 
              crafted with cost-effective <br className="md:hidden" /> 
              experiences. We blend strategy, <br className="md:hidden" /> 
              storytelling, and aesthetics, powered <br className="md:hidden" /> 
              by cross-border team. This isn't just an <br className="md:hidden" /> 
              agency. It's a new model for creative <br className="md:hidden" /> 
              collaboration. Simple. Efficient. <br className="md:hidden" /> 
              And Borderless!
            </p>

            {/* CTA Button */}
            <div className="pt-2 lg:pt-[40px]">
              {/* Mobile Button */}
              <div className="md:hidden">
                <Button 
                  variant="primary" 
                  size="small"
                  rightIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  }
                  onClick={() => {
                    console.log('Navigate to About page');
                  }}
                  className="font-medium tracking-wide"
                >
                  MORE ABOUT US
                </Button>
              </div>

              {/* Desktop Button */}
              <div className="hidden md:block">
                <Button 
                  variant="primary" 
                  size="medium"
                  onClick={() => {
                    console.log('Navigate to About page');
                  }}
                  className="font-medium tracking-wide h-[48px] text-[18px] leading-[120%] px-[24px] transition-all duration-300 group"
                  rightIcon={
                    <svg className="w-[24px] h-[24px] ml-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  }
                >
                  MORE ABOUT US
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
