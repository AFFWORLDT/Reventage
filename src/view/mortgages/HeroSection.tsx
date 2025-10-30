"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.webp"
          alt="Mortgages Background"
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
              <span className="underline">Mortgages</span>
            </nav>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-left font-serif">
            Mortgage Made Easy
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed text-left">
            Whether you're a first-time homebuyer or looking to invest, our expert mortgage consultants guide you
            through pre-approvals, competitive rates, and documentation—so you can focus on finding your dream
            property.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 text-left">
            <Link href="/mortgages">
              <Button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
                Get pre-approved now!
              </Button>
            </Link>
            <Link href="/mortgages#calculator">
              <Button variant="outline" className="bg-white hover:bg-gray-50 text-gray-800 border-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
                Mortgage Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
