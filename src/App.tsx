import React from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';
import WhoWeAre from './components/sections/home/About/WhoWeAre';
import { InteractiveNarrative } from './components/sections/home/InteractiveNarrative';
import { StatsSection } from './components/sections/home/Stats';
import { FeaturedWorkCarousel } from './components/sections/home/FeaturedWork';

function App() {
  return (
    <Layout>
      {/* Video Hero Section */}
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

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Interactive Narrative Section */}
      <InteractiveNarrative />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Work Carousel */}
      <FeaturedWorkCarousel />

    </Layout>
  );
}

export default App;
