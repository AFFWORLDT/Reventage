"use client";

import React from 'react';
import HeroSection from '@/src/view/property-valuation/HeroSection';
import MainContent from '@/src/view/property-valuation/MainContent';
import FeaturesSection from '@/src/view/property-valuation/FeaturesSection';
import ClientTestimonials from '@/src/view/list-property/ClientTestimonials';
import ContactForm from '@/src/view/list-property/ContactForm';
import NewsletterSection from '@/src/view/list-property/NewsletterSection';

export default function PropertyValuationPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <MainContent />
      <FeaturesSection />
      <ClientTestimonials />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
