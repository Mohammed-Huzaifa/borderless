// src/components/sections/about/OnboardingSection/index.tsx

import React, { useState, useEffect } from 'react';

// Onboarding steps data based on your screenshots
const onboardingSteps = [
  {
    step: 'Step 1',
    title: 'The Connection',
    description: 'We discover your work, reach out, chat and see if there’s a mutual fit.'
  },
  {
    step: 'Step 2',
    title: 'The Deep Dive',
    description: 'We review your portfolio, chat about your skills, goals, and how you work.'
  },
  {
    step: 'Step 3',
    title: 'The Match',
    description: 'You’re in. Your profile is set, and voila! Curated projects waiting for you.'
  }
];

const animatedWords = [
  { text: 'clients', color: '#A0AFFF', hoverColor: '#B8C5FF' },
  { text: 'talents', color: '#FFB38F', hoverColor: '#FFC8B3' }
];

export const OnboardingSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % animatedWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentWord = animatedWords[currentWordIndex];

  return (
    <section style={{ padding: '6rem 1.5rem', background: '#181A1A', position: 'relative', overflow: 'hidden' }}>
      {/* Background Stroke Image */}
      <img
        src="/assets/images/team/onboard.png"
        alt="Onboarding process background stroke"
        style={{
          position: 'absolute',
          top: '55%', // Adjusted vertical position
          left: '50%',
          width: '100vw', // <-- CHANGED: Stroke now spans the full screen width
          maxWidth: '100vw', // <-- CHANGED: Ensures it can stretch fully
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          opacity: 0.5
        }}
      />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h2 style={{ 
          fontSize: '2.75rem',
          fontWeight: 500, 
          color: '#FFFFFF', 
          textAlign: 'left', 
          marginBottom: '5rem'
        }}>
          The Borderless Onboarding for{' '}
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              color: isHovered ? currentWord.hoverColor : currentWord.color, 
              transition: 'color 0.3s ease-in-out',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {currentWord.text}
            <span style={{ 
              opacity: isHovered ? 1 : 0, 
              transform: isHovered ? 'translateX(0)' : 'translateX(-5px)',
              transition: 'opacity 0.3s, transform 0.3s',
              display: 'inline-block'
            }}>
              →
            </span>
          </span>
        </h2>
        {/* Content Container with increased gap */}
        <div style={{ 
          display: 'flex', 
          gap: '4rem', // <-- CHANGED: Gap between items is now larger
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          flexWrap: 'wrap' 
        }}>
          {onboardingSteps.map((step, index) => (
            <div key={index} style={{ flex: 1, minWidth: '300px', maxWidth: '360px', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{
                width: '140px',
                height: '280px',
                background: '#D9D9D9',
                borderRadius: '16px',
                flexShrink: 0
              }}>
                {/* Placeholder for images */}
              </div>
              <div style={{ textAlign: 'left', paddingTop: '1.5rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#B8C5E8', fontWeight: 500 }}>{step.step}</p>
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 600, color: '#FFFFFF' }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: '1.1rem', color: '#B8C5E8', lineHeight: 1.6 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
