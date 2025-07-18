import React, { useState } from 'react';
import { Button } from '../../../ui/Button';

interface ServiceTag {
  name: string;
  color: string;
}

interface InteractiveWordProps {
  word: string;
  tags: ServiceTag[];
  className?: string;
  style?: React.CSSProperties;
  hoverColor?: string;
}

const InteractiveWord: React.FC<InteractiveWordProps> = ({ 
  word, 
  tags, 
  className = '', 
  style = {},
  hoverColor = '#E8E8E8'
}) => {
  const [showTags, setShowTags] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ 
      x: rect.left + rect.width / 2, 
      y: rect.top + rect.height / 3 // Center of the word
    });
    setShowTags(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setShowTags(false);
    setIsHovered(false);
  };

  // Split tags into top and bottom groups
  const splitTags = () => {
    const midPoint = Math.ceil(tags.length / 2);
    const topTags = tags.slice(0, midPoint);
    const bottomTags = tags.slice(midPoint);
    return { topTags, bottomTags };
  };

  const { topTags, bottomTags } = splitTags();

  return (
    <>
      <span
        className={`relative cursor-pointer transition-all duration-300 ${className}`}
        style={{
          ...style,
          color: isHovered ? hoverColor : style.color || '#E8E8E8'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {word}
      </span>
      
      {/* Floating Service Tags - Above & Below Layout */}
      {showTags && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
        >
          {/* Top Tags */}
          <div
            className="absolute transform -translate-x-1/2"
            style={{
              top: -50, // Distance above the word (adjustable)
              left: 0,
            }}
          >
            <div className="flex gap-3 justify-center animate-fade-in">
              {topTags.map((tag, index) => (
                <span
                  key={`top-${tag.name}`}
                  className={`px-3 py-1 text-white text-sm rounded-full shadow-lg animate-slide-up whitespace-nowrap ${tag.color}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Tags */}
          <div
            className="absolute transform -translate-x-1/2"
            style={{
              top: 20, // Distance below the word (adjustable)
              left: 0,
            }}
          >
            <div className="flex gap-3 justify-center animate-fade-in">
              {bottomTags.map((tag, index) => (
                <span
                  key={`bottom-${tag.name}`}
                  className={`px-3 py-1 text-white text-sm rounded-full shadow-lg animate-slide-up whitespace-nowrap ${tag.color}`}
                  style={{
                    animationDelay: `${(topTags.length + index) * 100}ms`, // Stagger after top tags
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const InteractiveNarrative: React.FC = () => {
  // Service tag data with exact colors from your screenshots
  const serviceData = {
    brands: [
      { name: 'Illustration', color: 'bg-orange-600' },
      { name: 'Identity', color: 'bg-red-600' },
      { name: 'Packaging', color: 'bg-orange-700' },
      { name: 'Typography', color: 'bg-red-700' }
    ],
    products: [
      { name: 'UX', color: 'bg-blue-500' },
      { name: 'UI', color: 'bg-blue-600' },
      { name: 'App Design', color: 'bg-blue-400' },
      { name: 'Website Design', color: 'bg-blue-700' }
    ],
    stories: [
      { name: 'Motion Graphics', color: 'bg-green-500' },
      { name: 'Animations', color: 'bg-green-600' },
      { name: 'Micro-Interactions', color: 'bg-green-400' }
    ],
    digital: [
      { name: 'Campaigns', color: 'bg-blue-500' },
      { name: 'Strategy', color: 'bg-blue-600' },
      { name: 'Content', color: 'bg-blue-700' }
    ],
    interactions: [
      { name: 'Board Games', color: 'bg-pink-500' },
      { name: 'Art Installation', color: 'bg-purple-500' },
      { name: 'Experiential Design', color: 'bg-pink-600' },
      { name: 'Book Design', color: 'bg-purple-600' }
    ],
    tech: [
      { name: 'Out-Stack', color: 'bg-yellow-500' },
      { name: 'Data Info', color: 'bg-orange-400' },
      { name: 'Quality Analyst', color: 'bg-yellow-600' }
    ],
    intelligence: [
      { name: 'Engineering', color: 'bg-orange-500' },
      { name: 'Integration', color: 'bg-orange-600' },
      { name: 'Gen AI Design', color: 'bg-blue-500' }
    ]
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-20" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header Text - Left Aligned */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-normal tracking-wide" style={{ color: '#A3A3A3' }}>
            Built around you. Designed for your vision
          </h2>
        </div>

        {/* Interactive Narrative Text - Left Aligned, Compact */}
        <div className="mb-8">
          <p 
            className="font-normal tracking-tight leading-tight"
            style={{ 
              color: '#A3A3A3',
              fontSize: 'clamp(2rem, 7vw, 3rem)',
              lineHeight: '1.5',
              letterSpacing: '-0.02em'
            }}
          >
            Where{' '}
            <InteractiveWord 
              word="brands" 
              tags={serviceData.brands}
              style={{ color: '#E8E8E8' }}
              hoverColor="#F97316"
            />{' '}
            are born,{' '}
            <InteractiveWord 
              word="products" 
              tags={serviceData.products}
              style={{ color: '#E8E8E8' }}
              hoverColor="#FFFFFF"
            />{' '}
            evolve,
            <br/>
            <InteractiveWord 
              word="stories" 
              tags={serviceData.stories}
              style={{ color: '#E8E8E8' }}
              hoverColor="#2D933E"
            />{' '}
            move hearts,{' '}
            <InteractiveWord 
              word="digital" 
              tags={serviceData.digital}
              style={{ color: '#E8E8E8' }}
              hoverColor="#5776C4"
            />{' '}
            comes alive,
            <br />
            <InteractiveWord 
              word="interactions" 
              tags={serviceData.interactions}
              style={{ color: '#E8E8E8' }}
              hoverColor="#EC4899"
            />{' '}
            feel human,{' '}
            <InteractiveWord 
              word="tech" 
              tags={serviceData.tech}
              style={{ color: '#E8E8E8' }}
              hoverColor="#FEBF12"
            />{' '}
            fades
            <br />
            into flow, &{' '}
            <InteractiveWord 
              word="intelligence" 
              tags={serviceData.intelligence}
              style={{ color: '#E8E8E8' }}
              hoverColor="#F97316"
            />{' '}
            pushes the edge
          </p>
        </div>

        {/* CTA Button - Left Aligned */}
        <div>
          <Button 
            variant="outline" 
            size="medium"
            className="border-2 px-8 py-4 text-lg font-normal tracking-wide rounded-full transition-all duration-300 hover:text-gray-900 group"
            style={{ 
              borderColor: '#E8E8E8', 
              color: '#E8E8E8' 
            }}
            rightIcon={
              <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
          >
            EXPLORE WHAT WE DO!
          </Button>
        </div>

      </div>
    </section>
  );
};

export default InteractiveNarrative;
