"use client";
import React from 'react';
import HeroSection from '../../../view/list-property/HeroSection';
import WhyRevantage from '../../../view/list-property/WhyEvidProperties';
import HowItWorks from '../../../view/list-property/HowItWorks';
import ClientTestimonials from '../../../view/list-property/ClientTestimonials';
import ContactForm from '../../../view/list-property/ContactForm';
import NewsletterSection from '../../../view/list-property/NewsletterSection';

export default function ListYourPropertyPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyRevantage />
      <HowItWorks />
      <ClientTestimonials />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
