"use client";

import React from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Professional Care for Your Property",
    description: "End-to-end management services to protect your property and keep your rental income steady.",
    image: "/images/account-manager.jpg"
  },
  {
    id: 2,
    title: "Your Property, Our Priority",
    description: "We handle tenants, maintenance, and everything in between so you don’t have to.",
    image: "/images/tenant-management.jpg"
  },
  {
    id: 3,
    title: "Stress-Free Property Ownership",
    description: "From rent collection to 24/7 maintenance—let us manage your property with care and expertise.",
    image: "/images/legal-guidance.jpg"
  },
  {
    id: 4,
    title: "Maximize Returns, Minimize Hassle",
    description: "Trusted property management that increases value while saving you time.",
    image: "/images/smart-portal.jpg"
  },
  {
    id: 5,
    title: "Expert Management, Exceptional Results",
    description: "We treat your property like it’s our own—with transparency, efficiency, and professionalism.",
    image: "/images/maintenance.jpg"
  },
  {
    id: 6,
    title: "Connect with a Real Estate Expert",
    description: "Speak to our Dubai specialists for tailored advice and a seamless start.",
    image: "/images/inspection.jpg"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c8b180] flex items-center justify-center mt-1">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4a3f2c] mb-2">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
