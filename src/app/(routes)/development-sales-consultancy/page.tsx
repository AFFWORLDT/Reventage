"use client";

import React from 'react';
import HeroSection from '@/src/view/development-sales/HeroSection';
import MainContent from '@/src/view/development-sales/MainContent';
import FeaturesSection from '@/src/view/development-sales/FeaturesSection';
import ClientTestimonials from '@/src/view/list-property/ClientTestimonials';
import ContactForm from '@/src/view/list-property/ContactForm';
import NewsletterSection from '@/src/view/list-property/NewsletterSection';

export default function DevelopmentSalesConsultancyPage() {
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
