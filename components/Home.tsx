import React from 'react';
import { View } from '../types';
import Hero from './Hero';
import AboutPlatform from './AboutPlatform';
import FeaturedEvents from './FeaturedEvents';
import LeadershipSection from './LeadershipSection';
import FaqSection from './FaqSection';
import CallToAction from './CallToAction';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      <Hero onNavigate={onNavigate} />
      <FeaturedEvents onNavigate={onNavigate} />
      <AboutPlatform onNavigate={onNavigate}/>
      <LeadershipSection />
      <FaqSection />
      <CallToAction onNavigate={onNavigate}/>
    </div>
  );
};

export default Home;