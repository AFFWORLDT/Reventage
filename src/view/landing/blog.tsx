"use client"
import { BlogCard } from "@/src/components/common/card"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

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
]

export function InsightsInspiration() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20 text-center">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-gray-800 mb-3 sm:mb-4 font-serif px-2">
            Latest <span className="text-[#c8b180]">Blogs</span>
          </h2>
          <p className="text-xs sm:text-sm font-extralight text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed tracking-wide px-2">
            Stay informed with the latest insights, trends, and expert advice from Dubai's premium real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div key={index}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        <div>
       <Link href={"/blog"} passHref>
        <Button className="w-40 sm:w-48 h-9 sm:h-11 bg-[#c8b180] hover:bg-[#a68b5b] text-white font-extralight tracking-wider py-2 px-3 sm:px-4 rounded-none transition-colors uppercase text-sm sm:text-base">
          Read All Blogs
          </Button>
       </Link>
        </div>
      </div>
    </section>
  )
}
