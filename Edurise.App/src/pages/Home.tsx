import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import MeetTheTeamSection from '../components/home/MeetTheTeamSection';

const HERO_IMAGE = '/images/landing_page.png';

export default function Home() {
  return (
    <>
      <HeroSection heroImage={HERO_IMAGE} />
      <MeetTheTeamSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}