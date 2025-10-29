"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function MainContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/analysis.webp"
                alt="Property Valuation Analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight font-serif">
              Property Valuation <span className="text-[#c8b180]">Services</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Whether you're planning to sell, buy, rent, or invest, understanding your property's accurate market value is essential. Our certified property valuation services combine industry expertise, local market knowledge, and real-time data to deliver precise, transparent reports.
              </p>
              
              <p>
                We assess all critical factors—from location and condition to market trends and legal status—to ensure you receive a fair and informed valuation. Ideal for homeowners, investors, developers, and financial institutions.
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Get Your Valuation →
            </Button>

            <div className="pt-8">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                Why choose our valuation services
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

