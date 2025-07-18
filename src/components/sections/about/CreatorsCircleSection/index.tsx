// src/components/sections/about/CreatorsCircleSection/index.tsx

import React from 'react';

// Data for the collaborators based on your screenshot
// We'll use the 2 available people and strokes, and you can add the others later
const creators = [
  {
    role: 'Movement Magician',
    name: 'Abhishek Singh',
    specialty: '(Motion Design)',
    image: '/assets/images/team/Nidhi.png', // Placeholder image
    hoverStroke: '/assets/images/team/stroke1.png',
    bgColor: '#F2FFF6', // Light green
    hoverTags: ['Trekker', 'Trekker', 'Trekker']
  },
  {
    role: 'Growth Whisperer',
    name: 'Mayank Malvia',
    specialty: '(Marketing & Data Analyst)',
    image: '/assets/images/team/Sumedha.png', // Placeholder image
    hoverStroke: '/assets/images/team/stroke2.png',
    bgColor: '#F2F6FF', // Light blue
    hoverTags: ['Need for Speed', 'Need for Speed']
  },
  {
    role: 'Flow Hacker',
    name: 'Anushka Vyas',
    specialty: '(Product Design)',
    image: '/assets/images/team/Nidhi.png', // Placeholder image
    hoverStroke: '/assets/images/team/stroke1.png', // Placeholder stroke
    bgColor: '#F2F6FF', // Light blue
    hoverTags: ['Trekker', 'Trekker']
  },
  {
    role: 'Identity Alchemist',
    name: 'Riya Bhugari',
    specialty: '(Brand Design)',
    image: '/assets/images/team/Sumedha.png', // Placeholder image
    hoverStroke: '/assets/images/team/stroke2.png', // Placeholder stroke
    bgColor: '#FFF6F2', // Light orange
    hoverTags: ['Trekker', 'Trekker']
  },
  // You can add the other 8 collaborators here when ready
];

// Reusable Creator Card Component
const CreatorCard: React.FC<typeof creators[0]> = ({ role, name, specialty, image, hoverStroke, bgColor, hoverTags }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const photo = card.querySelector('.creator-photo') as HTMLElement;
    const stroke = card.querySelector('.creator-hover-stroke') as HTMLElement;
    const tags = card.querySelectorAll('.creator-hover-tag');
    const defaultArrow = card.querySelector('.arrow-default') as HTMLElement;
    const hoverArrow = card.querySelector('.arrow-hover') as HTMLElement;

    if (photo) photo.style.filter = 'grayscale(0%)';
    if (stroke) stroke.style.opacity = '1';
    tags.forEach(tag => ((tag as HTMLElement).style.opacity = '1'));
    if (defaultArrow) defaultArrow.style.opacity = '0';
    if (hoverArrow) hoverArrow.style.opacity = '1';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const photo = card.querySelector('.creator-photo') as HTMLElement;
    const stroke = card.querySelector('.creator-hover-stroke') as HTMLElement;
    const tags = card.querySelectorAll('.creator-hover-tag');
    const defaultArrow = card.querySelector('.arrow-default') as HTMLElement;
    const hoverArrow = card.querySelector('.arrow-hover') as HTMLElement;

    if (photo) photo.style.filter = 'grayscale(100%)';
    if (stroke) stroke.style.opacity = '0';
    tags.forEach(tag => ((tag as HTMLElement).style.opacity = '0'));
    if (defaultArrow) defaultArrow.style.opacity = '1';
    if (hoverArrow) hoverArrow.style.opacity = '0';
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'relative', 
        width: '100%', 
        fontFamily: 'sans-serif',
        background: bgColor,
        borderRadius: '16px',
        padding: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div style={{ borderRadius: '8px', overflow: 'hidden', position: 'relative', marginBottom: '1rem' }}>
        <img 
          src={hoverStroke}
          alt=""
          className="creator-hover-stroke"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            opacity: 0,
            transition: 'opacity 0.4s ease-in-out',
            zIndex: 1,
          }}
        />
        <img 
          src={image} 
          alt={name}
          className="creator-photo"
          style={{
            width: '100%',
            display: 'block',
            aspectRatio: '1 / 1',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
            transition: 'filter 0.4s ease-in-out',
            position: 'relative',
            zIndex: 2,
          }}
        />
        {hoverTags.map((tag, index) => (
          <span 
            key={index}
            className="creator-hover-tag"
            style={{
              position: 'absolute',
              top: `${15 + index * 25}%`, // Example positioning for tags
              left: index % 2 === 0 ? '10%' : 'auto',
              right: index % 2 !== 0 ? '10%' : 'auto',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(5px)',
              padding: '0.3rem 0.8rem',
              borderRadius: '99px',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: '#333',
              opacity: 0,
              transition: 'opacity 0.4s 0.1s ease',
              zIndex: 3,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: '#1A1A1A' }}>{role}</h3>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem', color: '#555' }}>{name}</p>
          <p style={{ margin: '0.1rem 0 0 0', fontSize: '0.9rem', color: '#777' }}>{specialty}</p>
        </div>
        <div style={{ position: 'relative', width: '28px', height: '28px', flexShrink: 0 }}>
          <span className="arrow-default" style={{ position: 'absolute', opacity: 1, transition: 'opacity 0.3s' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#D1D1D1" strokeWidth="2"><circle cx="14" cy="14" r="13"/><path d="M12 9l5 5-5 5"/></svg>
          </span>
          <span className="arrow-hover" style={{ position: 'absolute', opacity: 0, transition: 'opacity 0.3s' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="#1A1A1A"><circle cx="14" cy="14" r="14"/><path d="M12 9l5 5-5 5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '4rem', fontFamily: 'sans-serif' }}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontWeight: 500 }}>PREVIOUS</button>
      <span style={{ padding: '0.5rem 0.75rem', background: '#F0F0F0', borderRadius: '4px', fontWeight: 600 }}>1</span>
      <span style={{ padding: '0.5rem 0.75rem', color: '#555' }}>2</span>
      <span style={{ padding: '0.5rem 0.75rem', color: '#555' }}>3</span>
      <span style={{ color: '#555' }}>...</span>
      <span style={{ padding: '0.5rem 0.75rem', color: '#555' }}>24</span>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A1A', fontWeight: 500 }}>NEXT</button>
    </div>
  );
};


// Main Creators Circle Section Component
export const CreatorsCircleSection: React.FC = () => {
  return (
    <section style={{ padding: '6rem 1.5rem', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#555', fontSize: '0.9rem', fontWeight: 500, textAlign: 'left', marginBottom: '0.5rem' }}>Meet our collaborators</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 500, color: '#1A1A1A', textAlign: 'left', marginBottom: '3rem' }}>
          The Creator's Circle
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {creators.map(creator => (
            <CreatorCard key={creator.name} {...creator} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};
