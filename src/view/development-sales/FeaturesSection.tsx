"use client";

import React from 'react';
import { 
  Target, 
  Building2, 
  TrendingUp, 
  CheckCircle,
  BarChart3,
  Users
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "From Vision to Reality",
      description: "We guide property development from planning to sales, backed by expert consultancy at every stage."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Your Partner in Property Growth",
      description: "Strategic development, sales execution, and market consultancy under one roof."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Development, Seamless Sales",
      description: "Unlock the full potential of your property with our end-to-end development and advisory services."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Build, Sell, Succeed",
      description: "Comprehensive support for property developers—from concept to closing."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Real Estate Expertise You Can Rely On",
      description: "We offer professional guidance in property development, sales strategy, and market positioning."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Analysis & Strategy",
      description: "In-depth market research and feasibility studies to maximize your investment potential."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 font-serif">
            Our Development <span className="text-[#c8b180]">Advantages</span>
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

