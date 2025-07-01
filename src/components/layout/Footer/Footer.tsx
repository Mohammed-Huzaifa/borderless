import React, { useEffect, useRef } from 'react';

const socialLinks = [
  { label: 'EMAIL US', href: 'mailto:design@borderlesscreatives.ca', icon: '/assets/images/branding/icons/email.png' },
  { label: 'CONTACT', href: '/contact', icon: '/assets/images/branding/icons/contact.png' },
  { label: 'TIK TOK', href: 'https://tiktok.com', icon: '/assets/images/branding/icons/tiktok.png' },
  { label: 'INSTAGRAM', href: 'https://instagram.com', icon: '/assets/images/branding/icons/instagram.png' },
  { label: 'LINKEDIN', href: 'https://linkedin.com', icon: '/assets/images/branding/icons/linkedin.png' },
  { label: 'THREADS', href: 'https://threads.net', icon: '/assets/images/branding/icons/threads.png' }
];

const loopingSocials = [...socialLinks, ...socialLinks];

const Footer: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollRight {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .footer-social-track {
        animation: scrollRight 40s linear infinite;
      }
      .footer-social-track:hover {
        animation-play-state: paused;
      }
      .footer-pill {
        transition: all 0.25s cubic-bezier(.4,0,.2,1);
        position: relative;
        overflow: hidden;
      }
      .footer-pill .footer-pill-icon {
        opacity: 0;
        transform: translateX(-8px);
        transition: opacity 0.25s, transform 0.25s;
        display: inline-flex;
        vertical-align: middle;
        margin-left: 0.5em;
        height: 1em;
        width: 1em;
      }
      .footer-pill:hover .footer-pill-icon,
      .footer-pill:focus .footer-pill-icon {
        opacity: 1;
        transform: translateX(0);
      }
      .footer-cta {
        transition: all 0.25s cubic-bezier(.4,0,.2,1);
        position: relative;
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
      }
      .footer-cta .footer-cta-arrow {
        opacity: 0;
        transform: translateX(-8px);
        transition: opacity 0.25s, transform 0.25s;
        height: 1em;
        width: 1em;
      }
      .footer-cta:hover .footer-cta-arrow,
      .footer-cta:focus .footer-cta-arrow {
        opacity: 1;
        transform: translateX(0);
      }
      .footer-cta:hover,
      .footer-cta:focus {
        padding-right: 2.5em !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <footer style={{ width: '100%', marginTop: 0 }}>
      {/* Gradient + Ribbon */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          background: 'linear-gradient(180deg, #1B326D 0%, #000 100%)',
          padding: '5.5rem 0 3.5rem 0',
          minHeight: '370px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          flexDirection: 'column'
        }}
      >
        {/* Ribbon SVG Left */}
        <svg
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '55%',
            zIndex: 1
          }}
          viewBox="0 0 600 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M100,250 Q250,50 500,200"
            stroke="#3557A5"
            strokeWidth="18"
            fill="none"
            opacity="0.18"
          />
          <path
            d="M0,300 Q180,120 600,280"
            stroke="#3557A5"
            strokeWidth="10"
            fill="none"
            opacity="0.1"
          />
        </svg>

        {/* Content Center-Right */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            marginLeft: 'auto',
            marginRight: '7vw',
            width: 'min(600px, 60vw)',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <h2
            style={{
              fontWeight: 400,
              fontSize: '2.5rem',
              lineHeight: 1.15,
              color: '#fff',
              marginBottom: '1rem',
              letterSpacing: '-0.01em'
            }}
          >
            Ready to build without borders,<br />
            create without limits?
          </h2>
          <p
            style={{
              color: '#B8C5E8',
              fontWeight: 400,
              fontSize: '1.125rem',
              lineHeight: 1.5,
              marginBottom: '2.5rem'
            }}
          >
            Ready to build Without Borders. Create Without Limits
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
              className="footer-cta"
              style={{
                background: '#fff',
                color: '#111',
                border: 'none',
                borderRadius: '100px',
                padding: '0.9rem 2.2rem',
                fontWeight: 500,
                fontSize: '1.08rem',
                cursor: 'pointer',
                boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)'
              }}
            >
              WANT TO HIRE US?
              <span className="footer-cta-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
              </span>
            </button>
            <button
              className="footer-cta"
              style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '100px',
                padding: '0.9rem 2.2rem',
                fontWeight: 500,
                fontSize: '1.08rem',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s'
              }}
            >
              LET'S COLLABORATE!
              <span className="footer-cta-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>
        </div>

        {/* Social Carousel and Address */}
        <div style={{ width: '100%', marginTop: '4.5rem' }}>
          {/* Social Carousel */}
          <div
            style={{
              overflow: 'hidden',
              width: '100%',
              margin: '0 auto'
            }}
          >
            <div
              ref={trackRef}
              className="footer-social-track"
              style={{
                display: 'flex',
                gap: '1.2rem',
                willChange: 'transform',
                width: 'max-content',
                margin: '0 auto'
              }}
            >
              {loopingSocials.map((link, idx) => (
                <a
                  key={`${link.label}-${idx}`}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="footer-pill"
                  style={{
                    border: '1.5px solid #4E5471',
                    color: '#e0e2e6',
                    padding: '0.5rem 1.3rem',
                    borderRadius: '999px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'transparent',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{link.label}</span>
                  <span className="footer-pill-icon" aria-hidden="true">
                    <img
                      src={link.icon}
                      alt={link.label}
                      style={{
                        width: '1em',
                        height: '1em',
                        objectFit: 'contain',
                        display: 'inline-block',
                        verticalAlign: 'middle'
                      }}
                      onError={e => { e.currentTarget.style.display = 'none'; }}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
          {/* Address */}
          <div
            style={{
              marginTop: '2.5rem',
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#b8c5e8',
              fontSize: '1rem',
              lineHeight: 1.5,
              letterSpacing: '0.01em',
              textAlign: 'left'
            }}
          >
            <div style={{ marginBottom: '0.2rem' }}>
              Apt-1135, 77 Quebec Ave , Toronto, Ontario. M6P 2T4
            </div>
            <div>
              design@borderlesscreatives.ca
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
