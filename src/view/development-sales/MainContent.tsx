"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight font-serif">
              Development Sales and <span className="text-[#c8b180]">Consultancy</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Our Development, Sales, and Consultancy division is built to support investors, developers, and property owners through every stage of the real estate journey.
              </p>
              
              <p>
                From initial planning and feasibility studies to project marketing and final sales, we bring deep market knowledge, regulatory expertise, and creative strategy to the table. Whether you're launching a new residential project, repositioning an asset, or entering a new market, our experienced team ensures smart development planning, effective go-to-market execution, and strong returns on investment.
              </p>
            </div>

            <Button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Get Consultation →
            </Button>

            <div className="pt-8">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight font-sans">
                What we offer as your development partner
              </h3>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/consultation-resize.webp"
                alt="Development Sales and Consultancy"
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

