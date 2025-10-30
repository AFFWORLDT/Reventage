"use client";

import React from 'react';
import Image from 'next/image';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/buying-resize.webp"
                alt="Professional mortgage consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-[#4a3f2c] mb-6 font-serif">
              Flexible Mortgage Solutions Tailored for You
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Whether you're a first-time homebuyer or looking to invest, our expert mortgage consultants
                ensure a seamless financing journey.
              </p>
              <p>
                We guide you through pre-approvals, competitive interest rates, and documentation—so you can
                focus on finding your dream property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
