import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Search } from "lucide-react";

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
      className="relative h-screen md:h-[115vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] overflow-hidden px-2 sm:px-4"
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
        {isLoading ? (
          <Image
            src="/images/bgImage.webp"
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
        ) : (
          <div className="relative w-full h-full">
            {/* Hero Video Background - Optimized for mobile */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload={isMobile ? "metadata" : "auto"}
              className="absolute inset-0 w-full h-full object-cover z-0"
              style={{
                filter: isMobile ? 'brightness(1.1) contrast(1.05)' : 'brightness(1.2) contrast(1.1) saturate(1.1)'
              }}
              poster="/images/bgImage.webp"
            >
              <source src="/her.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support video */}
              <Image
                src="/images/bgImage.webp"
                alt="Luxury Living in Dubai"
                fill
                className="object-cover"
                style={{
                  filter: isMobile ? 'brightness(1.1) contrast(1.05)' : 'brightness(1.2) contrast(1.1) saturate(1.1)'
                }}
                quality={isMobile ? 60 : 80}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </video>
          </div>
        )}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />
      
      {/* Cinematic Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-15" />

      {/* Hero Content with Search Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-serif leading-tight">
            Find Your Dream Home
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-serif">
            With Revantage Real Estate
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-lg shadow-2xl p-4 md:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Transaction Type */}
            <Select value={transactionType} onValueChange={setTransactionType}>
              <SelectTrigger className="w-full bg-white border-gray-300">
                <SelectValue placeholder="Buy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
              </SelectContent>
            </Select>

            {/* Location */}
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-white border-gray-300"
            />

            {/* Property Type */}
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-full bg-white border-gray-300">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full bg-white border-gray-300">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500000">Up to AED 500K</SelectItem>
                <SelectItem value="500000-1000000">AED 500K - 1M</SelectItem>
                <SelectItem value="1000000-2000000">AED 1M - 2M</SelectItem>
                <SelectItem value="2000000-5000000">AED 2M - 5M</SelectItem>
                <SelectItem value="5000000+">AED 5M+</SelectItem>
              </SelectContent>
            </Select>

            {/* Bedrooms */}
            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger className="w-full bg-white border-gray-300">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
                <SelectItem value="5+">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>

            {/* Search Button */}
            <Button className="bg-[#c8b180] hover:bg-[#b8a070] text-white w-full flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              <span className="font-semibold">Search</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
