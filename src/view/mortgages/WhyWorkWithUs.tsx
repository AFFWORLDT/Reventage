"use client";

import React from 'react';
import { 
  Home, 
  Camera, 
  TrendingUp, 
  Check, 
  BarChart3, 
  FileCheck 
} from 'lucide-react';

export default function WhyWorkWithUs() {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Tailored Financing Options",
      description: "Customized mortgage solutions designed around your budget, property type, and goals."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Quick Pre-Approvals",
      description: "Fast-track pre-approvals so you can secure the right property without delays."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Access to Leading Lenders",
      description: "We secure competitive rates and flexible terms through top banks and institutions."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Dedicated Expert Guidance",
      description: "Advisors support you from consultation to final approval—clear, stress-free, transparent."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
            Why Choose Our Mortgage Assistance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible solutions, faster approvals, top lenders, and guidance at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#c8b180] rounded-full flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">
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
