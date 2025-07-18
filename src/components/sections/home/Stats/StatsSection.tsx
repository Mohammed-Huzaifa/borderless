import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';

interface StatItem {
  number: number;
  suffix: string;
  title: string;
  description: string;
}

const StatsSection: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startAnimation) {
            setStartAnimation(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [startAnimation]);

  const statsData: StatItem[] = [
    {
      number: 20,
      suffix: '+',
      title: 'Years of Experience',
      description: 'Decades of crafting, and experimenting, over great design'
    },
    {
      number: 5,
      suffix: '+',
      title: 'Design Segments',
      description: 'We play across multiple fields, and win at each one'
    },
    {
      number: 10,
      suffix: '+',
      title: 'Amazing Design Talents',
      description: 'A handpicked crew of designers who make creativity look easy'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-16 xl:px-20"
      style={{ backgroundColor: '#FEF1EB', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div
          className="flex flex-col md:flex-row justify-center items-stretch"
          style={{ gap: '64px' }}
        >
          {statsData.map((stat, index) => (
            <div
              key={stat.title}
              className="text-center md:text-left transform transition-all duration-700 ease-out"
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 200}ms`,
                width: '282px',
                fontFamily: 'Switzer, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Animated Number */}
              <div style={{ marginBottom: '16px', width: '100%' }}>
                <h3
                  className="font-normal tracking-tight leading-none tabular-nums"
                  style={{
                    fontSize: '72px',
                    color: '#1A1A1A',
                    lineHeight: '120%',
                    fontFamily: 'Switzer, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {startAnimation ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5 + index * 0.3}
                      suffix={stat.suffix}
                      useEasing={true}
                      separator=""
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </h3>
              </div>

              {/* Title */}
              <div style={{ marginBottom: '8px', width: '100%' }}>
                <h4
                  className="font-normal tracking-wide"
                  style={{
                    fontSize: '24px',
                    color: '#1A1A1A',
                    lineHeight: '140%',
                    fontFamily: 'Switzer, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {stat.title}
                </h4>
              </div>

              {/* Description */}
              <div style={{ width: '100%' }}>
                <p
                  className="font-normal leading-relaxed"
                  style={{
                    fontSize: '16px',
                    color: '#5F5F5F',
                    lineHeight: '150%',
                    fontFamily: 'Switzer, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
