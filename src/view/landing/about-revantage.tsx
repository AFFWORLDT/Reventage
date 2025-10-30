"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function AboutRevantage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs sm:text-sm tracking-widest uppercase text-[#a68b5b] mb-3 font-light">
              About Revantage
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A202C] mb-6 leading-tight">
              <span className="font-normal">Who</span>{" "}
              <span className="text-[#c8b180] font-serif">We Are</span>
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Welcome to Revantage Real Estate Brokerage, a leading full-service boutique
                brokerage and advisory firm in the UAE. We specialize in connecting properties
                with the right people, driven by our commitment to delivering the highest
                standards of real estate service.
              </p>
              <p>
                At Revantage, every property listed with us receives the utmost attention and
                care. Our dedicated agents are experts in guiding clients through the complexities
                of the market, ensuring a smooth journey from the initial search to the final
                sales agreement. We take pride in our team, who tirelessly work to find the
                perfect home for each client, going above and beyond to exceed expectations.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about">
                <Button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-3 rounded-lg transition-colors">
                  Read More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-80 sm:h-96 md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-ceo.webp"
              alt="Revantage leadership"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


