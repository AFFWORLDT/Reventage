import { BlogCard } from "@/src/components/common/card";
import React from "react";

const blogPosts = [
  {
    imageSrc: "/images/smart-homes-in-dubai-how-technology-is-transforming-apartments-villas.webp",
    date: "Oct 24, 2025",
    title: "Smart Homes in Dubai: How Technology is Transforming Apartments & Villas",
    description: "Discover how smart technology is revolutionizing modern living in Dubai, combining convenience, security, and energy efficiency in apartments and villas...",
    href: "/blog/details/smart-homes-in-dubai",
  },
  {
    imageSrc: "/images/why-millennials-and-gen-z-are-investing-in-dubai-real-estate.webp",
    date: "Sep 10, 2025",
    title: "Why Millennials and Gen Z Are Investing in Dubai Real Estate",
    description: "Explore why the younger generation is flocking to Dubai's real estate market for smart investments and lifestyle opportunities...",
    href: "/blog/details/why-millennials-gen-z-investing-dubai",
  },
  {
    imageSrc: "/images/properties-for-rent-in-dubai-your-guide-to-the-best-deals.webp",
    date: "Jun 8, 2025",
    title: "Properties for Rent in Dubai – Your Guide to the Best Deals",
    description: "Navigate Dubai's rental market with expert insights on finding the best deals for apartments and villas in prime locations...",
    href: "/blog/details/properties-for-rent-dubai",
  },
  {
    imageSrc: "/images/exploring-dubais-luxury-real-estate-market-a-guide-to-buying-villas-and-apartments.webp",
    date: "Jun 5, 2025",
    title: "Exploring Dubai's Luxury Real Estate Market: A Guide to Buying Villas and Apartments",
    description: "A comprehensive guide to Dubai's luxury property market, covering key considerations for purchasing high-end villas and apartments...",
    href: "/blog/details/exploring-dubai-luxury-real-estate",
  },
  {
    imageSrc: "/images/the-ultimate-guide-to-buying-a-luxury-home-in-dubai-villas-apartments-and-townhouses.webp",
    date: "Apr 25, 2025",
    title: "The Ultimate Guide to Buying a Luxury Home in Dubai: Villas, Apartments, and Townhouses",
    description: "Everything you need to know about purchasing luxury properties in Dubai, from villas to townhouses, with expert tips and insights...",
    href: "/blog/details/ultimate-guide-buying-luxury-home-dubai",
  },
];

function Blog() {
  return (
    <div>
      <section className="pt-32 pb-12 px-4 bg-white">
        <div className="mx-auto text-center">
          <h1 className="text-5xl font-light mb-6 text-black font-serif">
            Blogs
          </h1>
          <div className="w-44 h-1 bg-gradient-to-r from-[#c8b180] to-[#a68b5b] mx-auto mb-8"></div>
        </div>
      </section>
      
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto px-4 md:px-6 lg:px-8 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <div key={index}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
