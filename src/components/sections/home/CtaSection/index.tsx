// src/components/sections/home/CtaSection/index.tsx

import React from 'react';

// This is the corrected section that will appear on your homepage
export const CtaSection: React.FC = () => {
  const buttonHoverEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const arrow = button.querySelector('.cta-arrow') as HTMLElement;
    button.style.paddingRight = '2.5rem';
    if (arrow) {
      arrow.style.opacity = '1';
      arrow.style.transform = 'translateX(0)';
    }
  };

  const buttonHoverLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const arrow = button.querySelector('.cta-arrow') as HTMLElement;
    button.style.paddingRight = '1.5rem';
    if (arrow) {
      arrow.style.opacity = '0';
      arrow.style.transform = 'translateX(-0.5rem)';
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        background: 'linear-gradient(135deg, #1b3168ff 0%, #1A1A1A 100%)',
        overflow: 'hidden',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <img
        // --- THIS IS THE CORRECTED LINE ---
        // Using a direct string path for an image in the `public` folder
        src="/assets/images/Strokes/stroke5.png" 
        alt="Decorative stroke"
        style={{
          position: 'absolute',
          // left: '-5%',
          left: '-2%',//edited
          top: '50%',
          transform: 'translateY(-51%)',
          // width: '55%',
          width: '100%',//edited
          height: '100%',//added
          maxWidth: '1700px', //max-width added for bigger view
          // opacity: 0.15,
          opacity: 15,//edited
          zIndex: 1,
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      />
      
      {/* Content Container */}
      <div 
        style={{ 
          // maxWidth: '1200px',
          maxWidth: '1000px',//new value 
          margin: '0 auto', 
          width: '100%', 
          position: 'relative', 
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <div style={{ maxWidth: '600px', textAlign: 'left' }}>
          <h2 style={{ color: '#FFFFFF', fontWeight: 400, fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '1rem' }}>
            Ready to build without borders,<br />
            create without limits?
          </h2>

          <p style={{ color: '#B8C5E8', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Ready to build Without Borders. Create Without Limits
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              onMouseEnter={buttonHoverEnter}
              onMouseLeave={buttonHoverLeave}
              style={{
                display: 'inline-flex', alignItems: 'center', background: '#fff', color: '#111',
                border: 'none', borderRadius: '100px', padding: '0.9rem 1.5rem',
                fontWeight: 500, fontSize: '1rem', cursor: 'pointer', transition: 'padding 0.3s ease', whiteSpace: 'nowrap'
              }}
            >
              WANT TO HIRE US?
              <span className="cta-arrow" style={{ display: 'inline-block', marginLeft: '0.5rem', opacity: 0, transform: 'translateX(-0.5rem)', transition: 'opacity 0.3s, transform 0.3s'}} aria-hidden="true">&gt;</span>
            </button>
            <button
              onMouseEnter={buttonHoverEnter}
              onMouseLeave={buttonHoverLeave}
              style={{
                display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#fff',
                border: '2px solid #fff', borderRadius: '100px', padding: '0.9rem 1.5rem',
                fontWeight: 500, fontSize: '1rem', cursor: 'pointer', transition: 'padding 0.3s ease, background 0.3s, color 0.3s', whiteSpace: 'nowrap'
              }}
            >
              LET'S COLLABORATE!
              <span className="cta-arrow" style={{ display: 'inline-block', marginLeft: '0.5rem', opacity: 0, transform: 'translateX(-0.5rem)', transition: 'opacity 0.3s, transform 0.3s' }} aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    // inside the img tag, under the section tag,I did the following changes:
    // 1. changed left from '-5%' to '-2%'
    // 2. changed width from '55%' to '100%'
    // 3. added height: '100%'
    // 4. changed opacity from 0.15 to 15
    // 5. added maxWidth: '1700px' for bigger view
    // 6. under the content container, I changed maxWidth from '1200px' to '800px'
  );
};
