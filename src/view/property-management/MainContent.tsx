"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight font-serif">
              Property Management
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Managing a property requires time, knowledge, and a hands-on approach. Our property management
                services are designed to simplify ownership and optimize your returns. We handle every aspect—from
                listing and leasing to tenant communication, repairs, and financial reporting. With a dedicated team
                and technology-driven solutions, we ensure your property is well-maintained and consistently
                profitable.
              </p>

              <p>
                Whether you're a first-time landlord or a seasoned investor, we provide customized strategies to
                meet your goals and reduce your workload.
              </p>
            </div>

            <Button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Learn more →
            </Button>

            <div className="pt-8">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight font-sans">
                Explore what we do as your trusted property manager
              </h3>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/buying-resize.webp"
                alt="Property Management Team Consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
