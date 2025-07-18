// src/components/sections/about/ValuesSection/index.tsx

import React from 'react';

// Data for the value cards, including the path to your SVG icons
const valuesData = [
  {
    title: 'Global Talent Pool',
    description: 'Diverse designers bring fresh, global perspectives onboard',
    icon: '/assets/images/values/global.svg'
  },
  {
    title: 'Strategic Storytelling',
    description: 'Creative solutions rooted in strategy, insight, and bold thinking',
    icon: '/assets/images/values/story.svg'
  },
  {
    title: 'Seamless Collaboration',
    description: 'Smooth communication across time zones with efficient delivery',
    icon: '/assets/images/values/collab.svg'
  },
  {
    title: 'Cost-Effective Design',
    description: 'High-quality design services tailored to fit your budget',
    icon: '/assets/images/values/cost.svg'
  }
];

// Reusable Value Card Component
const ValueCard: React.FC<{ title: string, description: string, icon: string }> = ({ title, description, icon }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        padding: '2.5rem', // <-- CHANGED: Padding increased to make cards feel bigger
        textAlign: 'left',
        transition: 'border-color 0.3s ease-in-out',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div 
        className="svg-icon-container"
        style={{ 
          width: '48px', 
          height: '48px', 
          marginBottom: '1.5rem',
        }}
      >
        <img src={icon} alt={`${title} icon`} style={{ width: '100%', height: '100%' }} />
      </div>

      <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF' }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: '1rem', color: '#B8C5E8', lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
};

// Main Our Values Section Component
export const ValuesSection: React.FC = () => {
  return (
    <section style={{ padding: '6rem 1.5rem', background: '#181A1A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
        <span
          style={{
            display: 'inline-block',
            background: '#333333',
            color: '#E0E0E0',
            fontWeight: 500,
            fontSize: '0.9rem',
            borderRadius: '99px',
            padding: '0.4em 1em',
            marginBottom: '1.5rem',
          }}
        >
          Our Values
        </span>

        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 500, 
          color: '#FFFFFF', 
          marginBottom: '3rem' // <-- CHANGED: Gap reduced from 4rem to 3rem
        }}>
          Here is what we bring to the table!
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // <-- CHANGED: Minimum box size increased
          gap: '1.5rem' 
        }}>
          {valuesData.map((value, index) => (
            <ValueCard key={index} title={value.title} description={value.description} icon={value.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
