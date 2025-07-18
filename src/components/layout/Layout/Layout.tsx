import React from 'react';
import { Navigation } from '../Navigation';
// import { Footer } from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <Navigation />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
