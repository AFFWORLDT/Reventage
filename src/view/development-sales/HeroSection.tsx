"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.webp"
          alt="Development Sales Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-white text-sm">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Services</span>
              <span className="mx-2">/</span>
              <span className="underline">Development Sales and Consultancy</span>
            </nav>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-left font-serif">
            From vision to <span className="text-[#c8b180]">reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed text-left">
            Strategic development, sales execution, and market consultancy under one roof.
          </p>

          {/* CTA Button */}
          <div className="text-left">
            <Button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

