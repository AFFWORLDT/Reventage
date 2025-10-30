"use client";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative py-20 sm:py-24 md:py-36 overflow-hidden bg-[#F8F5EF]">
      {/* Background image with subtle overlay for readability */}
      <div className="absolute inset-0">
        <Image
          src="/images/properties-for-rent-in-dubai-your-guide-to-the-best-deals.webp"
          alt="Luxury properties background"
          fill
          className="object-cover"
          style={{ objectPosition: 'right top' }}
          priority={false}
        />
        {/* Soft beige tint to match brand */}
        <div className="absolute inset-0 bg-[#F8F5EF]/20" />
        {/* Readability overlay: darker on left, fades to transparent on right to keep face visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,22,45,0.55) 0%, rgba(5,22,45,0.35) 35%, rgba(5,22,45,0.15) 60%, rgba(5,22,45,0) 85%)",
          }}
        />
      </div>



      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs sm:text-sm uppercase text-[#1A1A1A]/70 font-extralight tracking-wider mb-2">
            JOIN THE ELITE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-serif px-2">
            Elevate Your Real Estate <span className="text-[#c8b180] font-serif">Journey</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-extralight max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed text-[#333] px-2">
            Ready to embark on a luxurious real estate experience tailored just
            for you? Take the first step towards unparalleled living.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/contactUs"}>
              <Button className="w-40 sm:w-48 h-9 sm:h-11 bg-[#c8b180] hover:bg-[#a68b5b] text-white font-extralight tracking-wider py-2 px-3 sm:px-4 rounded-none transition-colors uppercase text-sm sm:text-base">
                CONTACT US
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
