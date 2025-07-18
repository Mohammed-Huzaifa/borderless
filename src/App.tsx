// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import WhoWeAre from './components/sections/home/About/WhoWeAre';
import { InteractiveNarrative } from './components/sections/home/InteractiveNarrative';
import { StatsSection } from './components/sections/home/Stats';
import { FeaturedWorkCarousel } from './components/sections/home/FeaturedWork';
import { CtaSection } from './components/sections/home/CtaSection'; // <-- Import the new section
import AboutUsPage from './pages/AboutUsPage';

function HomePage() {
  return (
    <>
      {/* Video Hero Section... */}
      <section className="h-screen w-full relative overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/stories-animation.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-black"></div>
        </video>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      <WhoWeAre />
      <InteractiveNarrative />
      <StatsSection />
      <FeaturedWorkCarousel />
      <CtaSection /> {/* <-- ADD THIS LINE */}
    </>
  );
}


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
