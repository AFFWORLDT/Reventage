"use client";

import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Award, 
  FileText,
  Home,
  LineChart
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Know Your Property's True Worth",
      description: "Accurate, expert valuations for sales, rentals, investments, or legal purposes."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Property Valuation Services",
      description: "Get a market-driven valuation backed by data, experience, and local insights."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliable Valuations You Can Trust",
      description: "We provide detailed property assessments to guide your decisions with confidence."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Maximize Value, Minimize Guesswork",
      description: "Whether buying, selling, or leasing—our valuations give you a clear picture of your property's worth."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Expert Valuations for Every Property Type",
      description: "Residential, commercial, or off-plan—we deliver precise reports aligned with market trends."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Comprehensive Reporting",
      description: "Detailed reports with market analysis, comparable properties, and strategic recommendations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 font-serif">
            Our Valuation <span className="text-[#c8b180]">Advantages</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#c8b180] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

