"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhyInvest() {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0b1d36] leading-tight">
            Why Invest in <span className="text-[#c8b180] italic">Dubai Real Estate?</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Investing in Dubai’s real estate market offers a plethora of compelling reasons that make it an
            attractive option for investors worldwide.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md">
          <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px]">
            <Image
              src="/images/the-ultimate-guide-to-buying-a-luxury-home-in-dubai-villas-apartments-and-townhouses.webp"
              alt="Dubai skyline at sunset"
              fill
              priority={false}
              className="object-cover"
            />
            {/* Large decorative text overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/90 drop-shadow-md font-serif font-bold text-[18vw] sm:text-[14vw] md:text-[10vw] leading-none select-none">
                DUBAI
              </span>
            </div> */}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link href="/contactUs">
            <button className="px-6 sm:px-8 py-3 rounded-md bg-[#c8b180] text-white font-medium shadow hover:bg-[#a68b5b] transition">
              CONNECT WITH INVESTMENT ADVISOR
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


