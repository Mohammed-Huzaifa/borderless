// src/pages/AboutUsPage.tsx

import React from 'react';
import { HeroSection } from '../components/sections/about/HeroSection';
import { TeamSection } from '../components/sections/about/TeamSection';
import { OnboardingSection } from '../components/sections/about/OnboardingSection';
import { CreatorsCircleSection } from '../components/sections/about/CreatorsCircleSection';
import { ValuesSection } from '../components/sections/about/ValuesSection'; // <-- Import the new section

const AboutUsPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <OnboardingSection />
      <CreatorsCircleSection />
      <ValuesSection /> {/* <-- Add the new section here */}
    </>
  );
};

export default AboutUsPage;
