"use client";

import React from 'react';
import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 max-w-4xl mx-auto leading-relaxed font-serif">
            About Conveyancing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/buying-resize.webp"
                alt="Professional team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-bold text-blue-900 mb-8 font-sans">
              What you get
            </h3>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 font-sans">Smooth & Secure Property Transfers</h4>
                <p className="text-gray-700">We handle all legal aspects of buying or selling property, ensuring a safe and seamless transaction.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 font-sans">Expert Conveyancing You Can Trust</h4>
                <p className="text-gray-700">From contract to completion, our team ensures your transfer is legally sound and hassle-free.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 font-sans">Stress-Free Property Transactions</h4>
                <p className="text-gray-700">Professional conveyancing for buyers, sellers, and investors—transparent, timely, and efficient.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 font-sans">Your Legal Partner in Property Deals</h4>
                <p className="text-gray-700">We manage paperwork, legal checks, and compliance—so you can focus on your move or investment.</p>
              </div>
            </div>

            <a href="/conveyancing" className="inline-block">
              <button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
                Find out more →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
