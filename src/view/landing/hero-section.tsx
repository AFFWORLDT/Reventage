import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Search, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [transactionType, setTransactionType] = useState("buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  // Check if mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized loading for mobile vs desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isMobile ? 1000 : 2000); // Faster loading on mobile

    return () => clearTimeout(timer);
  }, [isMobile]);


  return (
    <section 
      className="relative min-h-[90vh] sm:min-h-[100vh] md:h-[115vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] overflow-hidden px-2 sm:px-4 pt-20 pb-10 sm:pt-24 sm:pb-12"
    >
      {/* Luxury Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute inset-0 z-50 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#c8b180]/30 border-t-[#c8b180] rounded-full mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#c8b180] font-light text-sm sm:text-lg tracking-wider"
            >
              REVANTAGE
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Optimized Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image (video disabled) */}
        <Image
          src="/images/banner.webp"
          alt="Luxury Living in Dubai"
          fill
          className="object-cover z-0"
          style={{
            filter: isMobile ? 'brightness(1.1) contrast(1.05)' : 'brightness(1.2) contrast(1.1) saturate(1.1)'
          }}
          quality={isMobile ? 60 : 80}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      {/* Custom brand gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(78.29deg, #05162d 17.15%, rgba(9, 30, 58, 0.19) 81.21%, rgba(7, 26, 51, 0) 103.32%)",
          opacity: 0.6,
        }}
      />

      {/* Hero Content with Search Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-left mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 font-serif leading-tight">
            Find Luxury Properties <span className="text-[#c8b180] font-serif italic">in Dubai</span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white font-serif max-w-3xl">
            Explore our curated selection of exquisite properties and investment opportunities, tailored to exceed your expectations.
          </h2>
        </motion.div>

        {/* Slim Search Bar (left-aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <div className="flex-1 h-14 rounded-md bg-white/10 backdrop-blur-[2px] border border-white/20 px-4 flex items-center">
              <Search className="w-5 h-5 text-white/80 mr-3" />
              <Input
                type="text"
                placeholder="Type Project Name, Developer or Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-12 bg-transparent border-0 text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Link href={`/offPlans`} aria-label="Search">
              <button className="h-14 w-28 md:w-36 bg-white text-blue-950 rounded-md flex items-center justify-center shadow-lg hover:bg-white/90 transition">
                <ArrowRight className="w-7 h-7" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom stats */}
        <div className="mt-10 md:mt-16 grid grid-cols-3 gap-6 max-w-xl text-left">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white">200+</div>
            <div className="text-white/80 mt-2">Luxury Villas Sold</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white">15+</div>
            <div className="text-white/80 mt-2">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white">500+</div>
            <div className="text-white/80 mt-2">Apartments Sold</div>
          </div>
        </div>
      </div>
    </section>
  );
}
