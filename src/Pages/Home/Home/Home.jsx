import React from 'react';
import Banner from '../Banner/Banner';
import HRFeaturesSection from '../HRFeaturesSection/HRFeaturesSection ';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import StatsSection from '../StatsSection/StatsSection';
import AudienceSupportSection from '../../AudienceSupportSection/AudienceSupportSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HRFeaturesSection></HRFeaturesSection>
      <TestimonialsSection></TestimonialsSection>
      <StatsSection></StatsSection>
      <AudienceSupportSection></AudienceSupportSection>
    </div>
  );
};

export default Home;