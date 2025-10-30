"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero / Breadcrumb */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aboutbg (1).webp"
            alt="About Revantage"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          <nav className="text-white text-sm mb-4">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="underline">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">About <span className="text-[#c8b180] font-serif">Us</span></h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="text-xs sm:text-sm tracking-widest uppercase text-[#a68b5b] mb-3 font-light">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A202C] mb-6 leading-tight">
              Welcome to <span className="text-[#c8b180] font-serif">Revantage Real Estate</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                At Revantage Real Estate Brokerage, we don&apos;t just deal in properties; we create
                pathways to better living. Founded with the belief that real estate should feel
                personal, we make sure every home we find carries meaning, comfort, and possibility.
              </p>
              <p>
                Our team is a blend of seasoned professionals and fresh talent, united by a common
                goal: to help you find not just a house, but a home. Every client we work with is
                treated like family. From the first search to the final key handover, we ensure a
                smooth, transparent journey filled with care.
              </p>
              <p>
                At Revantage, property isn&apos;t just about square footage or price tags; it&apos;s about
                people, stories, and building a future you&apos;ll love coming home to.
              </p>
            </div>
          </div>
          <div className="relative h-80 sm:h-96 md:h-[460px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/about-ceo.webp" alt="About Revantage" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-6 md:gap-10">
          {/* Mission Card */}
          <div className="flex items-start gap-6 bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="w-20 h-20 rounded-full bg-[#c8b180]/15 flex items-center justify-center text-[#c8b180] flex-shrink-0">
              <Target className="w-10 h-10" />
            </div>
            <div className="pl-6 border-l-2 border-[#c8b180]/30">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: to make real estate feel less transactional and more personal. We
                want every client to feel heard, understood, and supported as they make one of life&apos;s
                biggest decisions. Through dedication, creativity, and genuine care, we deliver
                experiences that go beyond expectations—guided by integrity and what&apos;s best for you.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex items-start gap-6 bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="w-20 h-20 rounded-full bg-[#c8b180]/15 flex items-center justify-center text-[#c8b180] flex-shrink-0">
              <Award className="w-10 h-10" />
            </div>
            <div className="pl-6 border-l-2 border-[#c8b180]/30">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                We envision a Dubai real estate market where trust comes first and every transaction feels
                seamless. Our goal isn&apos;t to be the biggest, but the most trusted—known for treating every
                client like family and every journey as our own, setting a new benchmark for what real estate
                should feel like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">A Message from Our <span className="text-[#c8b180] font-serif">CEO</span></h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Coming from a family of entrepreneurs in India, I grew up with business in my blood
                and a passion for creating something meaningful. Dubai&apos;s dynamic real estate market
                taught me its rhythm and possibilities.
              </p>
              <p>
                With Revantage, I wanted to build something that goes beyond transactions—matching
                people with spaces that bring joy, comfort, and a sense of belonging. Luxury isn&apos;t
                just beautiful spaces; it&apos;s the happiness that comes with them.
              </p>
              <p className="font-semibold">- Rahul Guwlani, CEO</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-96 md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/ceo.webp" alt="CEO of Revantage" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      {/* Co-Founder Message */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative h-96 md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/newpartner.webp" alt="Co-Founder" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">Co-Founder &amp; Managing Director&apos;s <span className="text-[#c8b180] font-serif">Message</span></h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                My journey into real estate began with people. With a background in HR and deep
                knowledge of UAE labour laws, I&apos;ve learned that trust and transparency are the
                foundation of every meaningful relationship.
              </p>
              <p>
                Every client we meet comes with a unique dream. Our responsibility is to help make
                that dream real—guiding with honesty and ensuring they always feel supported and
                valued.
              </p>
              <p className="font-semibold">- Saba Shaikh, Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey (no team section as requested) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">Our Journey</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              The story of Revantage is also the story of Rahul and Saba, a husband-and-wife team who wanted to build something meaningful together.
            </p>
            <p>
              Rahul&apos;s roots in a respected business family in India gave him a natural understanding of entrepreneurship and drive. Over a decade in Dubai&apos;s real estate market honed his expertise and built the industry relationships that today form the backbone of Revantage.
            </p>
            <p>
              Saba brought her own strength to the table, an HR background and deep knowledge of UAE labour laws, coupled with 11 years of experience across real estate and retail. She understood the value of people, trust, and systems that put clients first.
            </p>
            <p>
              Together, they realised Dubai needed more than another brokerage. It needed a space where clients weren&apos;t just numbers or files, but individuals with dreams. And so, Revantage was born, out of a shared vision for honesty, excellence, and care.
            </p>
            <p>
              Every milestone we&apos;ve achieved since has been built on this foundation. Our journey isn&apos;t just about real estate; it&apos;s about creating experiences where clients feel valued, supported, and inspired to step into their next chapter.
            </p>
          </div>

          {/* Key Stats */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 items-start gap-8 md:gap-0 text-left">
            <div className="md:pr-10">
              <div className="text-5xl md:text-6xl font-serif text-[#1A202C]">200+</div>
              <div className="mt-2 text-gray-600">Luxury Villas Sold</div>
            </div>
            <div className="md:px-10 md:border-l md:border-r md:border-gray-200">
              <div className="text-5xl md:text-6xl font-serif text-[#1A202C]">15+</div>
              <div className="mt-2 text-gray-600">Years of Experience</div>
            </div>
            <div className="md:pl-10">
              <div className="text-5xl md:text-6xl font-serif text-[#1A202C]">500+</div>
              <div className="mt-2 text-gray-600">Apartments Sold</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


