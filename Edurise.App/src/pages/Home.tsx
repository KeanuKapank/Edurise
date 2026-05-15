import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HERO_IMAGE = '/images/landingImage.png';

export default function Home() {
  return (
    <>
      <HeroSection heroImage={HERO_IMAGE} />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}