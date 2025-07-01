import React from 'react';
import { Button } from '../../../ui/Button';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Compact Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-normal text-black leading-tight tracking-tight">
              Who we are?!
            </h2>
          </div>

          {/* Right Column - Compact Content */}
          <div className="space-y-4 md:space-y-5">
            {/* Description Text - Mobile Line Breaks */}
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-normal">
              Borderless Creatives is a global<br className="md:hidden" /> 
              design studio built for the future,<br className="md:hidden" /> 
              crafted with cost-effective<br className="md:hidden" /> 
              experiences. We blend strategy,<br className="md:hidden" /> 
              storytelling, and aesthetics, powered<br className="md:hidden" /> 
              by cross-border team. This isn't just an<br className="md:hidden" /> 
              agency. It's a new model for creative<br className="md:hidden" /> 
              collaboration. Simple. Efficient.<br className="md:hidden" /> 
              And Borderless!
            </p>

            {/* CTA Button - Mobile Arrow Visible */}
            <div className="pt-2">
              {/* Mobile Button - Arrow Always Visible */}
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

              {/* Desktop Button - Hover Arrow Effect */}
              <div className="hidden md:block">
                <Button 
                  variant="primary" 
                  size="medium"
                  expandOnHover={true}
                  onClick={() => {
                    console.log('Navigate to About page');
                  }}
                  className="font-medium tracking-wide"
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
