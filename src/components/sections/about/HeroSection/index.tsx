// src/components/sections/about/HeroSection/index.tsx

import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        background: '#181A1A', // Grey/90 - Main
        padding: '8rem 1.5rem',
        position: 'relative',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div 
          style={{ 
            width: '55%',
            maxWidth: '720px',
            textAlign: 'left'
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: 'inline-block',
              background: '#484848', // BC-Primary BerryBlue-100
              color: '#fff',
              fontWeight: 500,
              fontSize: '1rem',
              borderRadius: 999,
              padding: '0.45em 1.2em',
              marginBottom: '2.5rem',
              letterSpacing: '0.05em'
            }}
          >
            Welcome to Borderless Creatives
          </span>

          {/* Heading */}
          <h1
            style={{
              color: '#fff',
              fontWeight: 400,
              fontSize: '2.5rem',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              marginBottom: '2.5rem',
            }}
          >
            'Built for speed, rooted in collaboration,
            <br />
            and borderless by design'
          </h1>

          {/* CTA Button with Corrected Hover State */}
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#fff',
              color: '#181A1A',
              fontWeight: 500,
              fontSize: '1.125rem',
              lineHeight: 1.2,
              borderRadius: 999,
              padding: '0.95em 2.2em', // Default padding
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out', // Smooth transition for padding and transform
              boxShadow: '0 1px 4px 0 rgba(0,0,0,0.06)',
              letterSpacing: '0.04em',
              position: 'relative',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={e => {
              const button = e.currentTarget;
              const arrow = button.querySelector('.hero-arrow') as HTMLElement;
              // Increase right padding to expand the button width
              button.style.paddingRight = '4.5em'; 
              if (arrow) {
                arrow.style.opacity = '1';
                arrow.style.transform = 'translateX(0)';
              }
            }}
            onMouseLeave={e => {
              const button = e.currentTarget;
              const arrow = button.querySelector('.hero-arrow') as HTMLElement;
              // Reset right padding to its original value
              button.style.paddingRight = '2.2em';
              if (arrow) {
                arrow.style.opacity = '0';
                arrow.style.transform = 'translateX(-1em)';
              }
            }}
          >
            SURE, LET’S CONNECT!
            <span
              className="hero-arrow"
              style={{
                position: 'absolute',
                right: '2.2em', // Position arrow inside the new padding area
                display: 'inline-flex',
                opacity: 0,
                transform: 'translateX(-1em)', // Start position for the arrow
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
              }}
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#181A1A" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
