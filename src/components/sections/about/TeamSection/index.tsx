// src/components/sections/about/TeamSection/index.tsx

import React from 'react';

// --- You can edit each person's data and image styles here ---
const teamMembers = [
  {
    name: 'Nidhi Kamdar',
    title: 'Founder and Business Head...',
    role: 'The Dream Architect',
    image: '/assets/images/team/Nidhi.png',
    hoverStroke: '/assets/images/team/stroke1.png',
    socialIcon: '/assets/images/icons/linkedin.png',
    bgColor: '#FFF6F2', // Light pink background
    hoverTags: ['Trekker', 'Trekker'],
    // Specific styles for Nidhi's image
    imageStyle: {
      aspectRatio: '4 / 5',
      objectPosition: 'top center' // Ensures the top of the image is prioritized
    }
  },
  {
    name: 'Sumedha Tambe',
    title: 'Head of Creative Operations...',
    role: 'The Creative Conductor',
    image: '/assets/images/team/Sumedha.png',
    hoverStroke: '/assets/images/team/stroke2.png',
    socialIcon: '/assets/images/icons/instagram-dark.svg',
    bgColor: '#F2F6FF', // Light blue background
    hoverTags: ['Head for Speed', 'Retriever'],
    // Specific styles for Sumedha's image
    imageStyle: {
      aspectRatio: '4 / 5',
      objectPosition: 'center center' // Centers the image perfectly
    }
  }
];

// Reusable Team Card Component with final corrections
const TeamCard: React.FC<typeof teamMembers[0]> = ({ name, title, role, image, hoverStroke, socialIcon, bgColor, hoverTags, imageStyle }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = e.currentTarget;
    const photo = wrapper.querySelector('.team-photo') as HTMLElement;
    const stroke = wrapper.querySelector('.team-hover-stroke') as HTMLElement;
    const tags = wrapper.querySelectorAll('.team-hover-tag');

    if (photo) photo.style.filter = 'grayscale(0%)';
    if (stroke) stroke.style.opacity = '1';
    tags.forEach(tag => ((tag as HTMLElement).style.opacity = '1'));
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = e.currentTarget;
    const photo = wrapper.querySelector('.team-photo') as HTMLElement;
    const stroke = wrapper.querySelector('.team-hover-stroke') as HTMLElement;
    const tags = wrapper.querySelectorAll('.team-hover-tag');

    if (photo) photo.style.filter = 'grayscale(100%)';
    if (stroke) stroke.style.opacity = '0';
    tags.forEach(tag => ((tag as HTMLElement).style.opacity = '0'));
  };

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '300px', // <-- CHANGED: Card size reduced
        fontFamily: 'sans-serif',
        background: '#FFFFFF',
        borderRadius: '20px', // Slightly more rounded corners
        boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden'
      }}
    >
      {/* Image Area with Colored Background */}
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          position: 'relative', 
          cursor: 'pointer',
          background: bgColor,
          padding: '0.75rem', // Reduced padding around the image
        }}
      >
        <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={hoverStroke}
            alt=""
            className="team-hover-stroke"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.15)',
              width: '115%',
              height: '115%',
              opacity: 0,
              transition: 'opacity 0.4s ease-in-out',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <img 
            src={image} 
            alt={name}
            className="team-photo"
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              filter: 'grayscale(100%)',
              transition: 'filter 0.4s ease-in-out',
              position: 'relative',
              zIndex: 2,
              ...imageStyle // <-- CHANGED: Applying separate styles for each person
            }}
          />
          {hoverTags.map((tag, index) => (
            <span 
              key={index}
              className="team-hover-tag"
              style={{
                position: 'absolute',
                top: index === 0 ? '8%' : 'auto',
                bottom: index === 0 ? 'auto' : '8%',
                left: index === 0 ? 'auto' : '6%',
                right: index === 0 ? '6%' : 'auto',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(6px)',
                padding: '0.3rem 0.8rem',
                borderRadius: '99px',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#333',
                opacity: 0,
                transition: 'opacity 0.4s 0.1s ease',
                pointerEvents: 'none',
                zIndex: 3,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Text Content Area */}
      <div style={{ padding: '1.50rem', textAlign: 'left' }}> {/* <-- CHANGED: Padding increased for more internal space */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: '#1A1A1A' }}>{role}</h3>
            <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.95rem', color: '#555' }}>{name}</p>
            <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.85rem', color: '#777' }}>{title}</p>
          </div>
          <img src={socialIcon} alt="social icon" style={{ width: '24px', height: '24px', marginTop: '0.15rem'}}/>
        </div>

        <button 
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: '99px',
            border: '2px solid #D1D5DB', // Lighter default border
            background: 'transparent',
            color: '#374151', // Darker gray text
            fontSize: '0.9rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1A1A1A';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.borderColor = '#1A1A1A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#374151';
            e.currentTarget.style.borderColor = '#D1D5DB';
          }}
        >
          SURE, LET'S CONNECT!
        </button>
      </div>
    </div>
  );
};

// Main Team Section Component
export const TeamSection: React.FC = () => {
  return (
    <section style={{ padding: '4rem 1.5rem', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 500, color: '#1A1A1A', textAlign: 'left', marginBottom: '2.5rem' }}>
          The Core Crew
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          {teamMembers.map(member => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
