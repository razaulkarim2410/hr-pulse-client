import React from 'react';
import Banner from '../Banner/Banner';
import HRFeaturesSection from '../HRFeaturesSection/HRFeaturesSection ';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import StatsSection from '../StatsSection/StatsSection';
import AudienceSupportSection from '../../AudienceSupportSection/AudienceSupportSection';
import { Helmet } from 'react-helmet-async';
import HowItWorks from '../HowItWorks/HowItWorks';
import { SecurityCompliance } from './SecurityCompliance/SecurityCompliance';
import PricingPlans from './Pricing/Pricing';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <HRFeaturesSection></HRFeaturesSection>
      <TestimonialsSection></TestimonialsSection>
      <SecurityCompliance></SecurityCompliance>
      <StatsSection></StatsSection>
      <PricingPlans></PricingPlans>
      <AudienceSupportSection></AudienceSupportSection>
    </div>
  );
};

export default Home;