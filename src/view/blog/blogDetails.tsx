import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { Calendar, Clock, Share2, BookOpen, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Blog data - each post with its content and image
const blogPosts = {
  "smart-homes-in-dubai": {
    title: "Smart Homes in Dubai: How Technology is Transforming Apartments & Villas",
    subtitle: "Discover how smart technology is revolutionizing modern living in Dubai, combining convenience, security, and energy efficiency in apartments and villas...",
    featuredImage: "/images/smart-homes-in-dubai-how-technology-is-transforming-apartments-villas.webp",
    date: "October 24, 2025",
    content: `
    <h2>Smart Home Technology in Dubai</h2>
    <p>Dubai has rapidly emerged as a global leader in smart city initiatives, and this technological advancement is transforming the residential real estate sector. Smart homes in Dubai are setting new benchmarks for modern living, combining cutting-edge technology with luxury and sustainability.</p>
    <p>From voice-activated lighting systems to automated climate control, smart homes in Dubai offer residents unparalleled convenience and energy efficiency. These technological integrations are particularly prominent in luxury apartments and villas across prime locations.</p>

    <h2>Key Smart Home Features</h2>
    <p>Modern smart homes in Dubai typically feature integrated smart systems including security cameras with mobile monitoring, automated lighting that adjusts based on occupancy and natural light, and intelligent climate control systems that optimize energy consumption.</p>
    <p>Smart appliances, automated curtain systems, and integrated home entertainment are becoming standard in new developments. These features not only enhance the living experience but also contribute to substantial energy savings.</p>

    <h2>Investment Value</h2>
    <p>Properties equipped with smart technology tend to have higher market values and rental yields. The demand for smart homes continues to grow as residents seek more connected, efficient, and secure living spaces.</p>
    <p><strong>Ready to explore smart homes in Dubai?</strong> Contact Revantage to discover luxury properties equipped with the latest smart technology.</p>
  `,
  },
  "why-millennials-gen-z-investing-dubai": {
    title: "Why Millennials and Gen Z Are Investing in Dubai Real Estate",
    subtitle: "Explore why the younger generation is flocking to Dubai's real estate market for smart investments and lifestyle opportunities...",
    featuredImage: "/images/why-millennials-and-gen-z-are-investing-in-dubai-real-estate.webp",
    date: "September 10, 2025",
    content: `
    <h2>A New Generation of Real Estate Investors</h2>
    <p>Millennials and Gen Z are increasingly recognizing Dubai as a premier destination for real estate investment. This generation values lifestyle, sustainability, and financial opportunity, all of which Dubai's property market offers in abundance.</p>
    <p>The younger generation approaches real estate investment differently - they seek properties that align with their values, offer strong returns, and provide access to a vibrant lifestyle.</p>

    <h2>Affordability and Payment Plans</h2>
    <p>Dubai developers are offering flexible payment plans that make property ownership accessible to younger buyers. These innovative financing options, combined with competitive prices, make it easier for millennials and Gen Z to enter the property market.</p>
    <p>Many developments offer installment plans where payments are spread over several years, requiring minimal upfront investment. This accessibility has opened the market to a broader demographic of young professionals and entrepreneurs.</p>

    <h2>High Rental Yields</h2>
    <p>Dubai's rental yields are among the highest globally, attracting young investors who see property as both a home and an investment opportunity. Areas like Dubai Marina, Business Bay, and Palm Jumeirah offer particularly attractive returns.</p>
    <p>Young investors appreciate the dual benefits of potential capital appreciation and steady rental income, making Dubai real estate an appealing portfolio addition.</p>

    <h2>Lifestyle and Work-Life Balance</h2>
    <p>Dubai's modern infrastructure, world-class amenities, and tax-free environment make it attractive to young professionals and digital nomads. The city's vibrant lifestyle, excellent connectivity, and diverse cultural scene resonate with millennial and Gen Z values.</p>
    <p><strong>Ready to start your investment journey?</strong> Contact Revantage to discover properties that match your lifestyle and financial goals.</p>
  `,
  },
  "properties-for-rent-dubai": {
    title: "Properties for Rent in Dubai – Your Guide to the Best Deals",
    subtitle: "Navigate Dubai's rental market with expert insights on finding the best deals for apartments and villas in prime locations...",
    featuredImage: "/images/properties-for-rent-in-dubai-your-guide-to-the-best-deals.webp",
    date: "June 8, 2025",
    content: `
    <h2>Finding the Perfect Rental Property</h2>
    <p>Dubai's rental market offers an extensive range of options, from luxurious waterfront apartments to spacious family villas. Understanding the market dynamics and knowing where to look can help you find the best deals while securing a property that meets your needs and lifestyle.</p>
    <p>Key areas like Dubai Marina, Downtown Dubai, JBR, and Palm Jumeirah offer premium living experiences with a variety of rental options to suit different budgets and preferences.</p>

    <h2>What to Consider When Renting</h2>
    <p>When searching for rental properties in Dubai, consider factors such as proximity to your workplace, access to public transport, nearby amenities, school zones for families, and the community's overall vibe and lifestyle offerings.</p>
    <p>Additionally, review the building's facilities, maintenance services, and the terms of the lease agreement including utility costs, parking arrangements, and renewal conditions.</p>

    <h2>Working with a Professional Agent</h2>
    <p>Partnering with a knowledgeable real estate agent like Revantage can streamline your property search. We have extensive knowledge of Dubai's rental market and can help you find properties that match your budget, location preferences, and lifestyle needs.</p>
    <p><strong>Looking for your ideal rental property?</strong> Contact Revantage today to explore the best rental deals in Dubai's most sought-after locations.</p>
  `,
  },
  "exploring-dubai-luxury-real-estate": {
    title: "Exploring Dubai's Luxury Real Estate Market: A Guide to Buying Villas and Apartments",
    subtitle: "A comprehensive guide to Dubai's luxury property market, covering key considerations for purchasing high-end villas and apartments...",
    featuredImage: "/images/exploring-dubais-luxury-real-estate-market-a-guide-to-buying-villas-and-apartments.webp",
    date: "June 5, 2025",
    content: `
    <h2>Dubai's Luxury Real Estate Landscape</h2>
    <p>Dubai's luxury real estate market continues to attract discerning investors and homeowners from around the world. With exceptional developments across prestigious locations, the city offers an unparalleled selection of luxury villas and apartments designed to the highest international standards.</p>
    <p>From beachfront apartments on Palm Jumeirah to sprawling villas in Emirates Hills, Dubai's luxury property market caters to the most sophisticated tastes and lifestyle requirements.</p>

    <h2>Prime Luxury Locations</h2>
    <p>Dubai's most prestigious residential areas include Palm Jumeirah, Emirates Hills, Jumeirah Golf Estates, Dubai Hills Estate, and Downtown Dubai. These communities offer world-class amenities, stunning architecture, and exclusivity.</p>
    <p>Each location has its unique character - from the beach lifestyle of Palm Jumeirah to the golf course living in Emirates Hills - ensuring there's a luxury property to match every preference.</p>

    <h2>Investment Potential</h2>
    <p>Luxury properties in Dubai offer strong investment potential with high rental yields and solid capital appreciation prospects. The tax-free environment, coupled with world-class infrastructure and connectivity, makes Dubai luxury real estate a compelling investment opportunity.</p>
    <p><strong>Ready to explore luxury properties in Dubai?</strong> Contact Revantage to view exclusive listings of the finest villas and apartments in Dubai's most prestigious neighborhoods.</p>
  `,
  },
  "ultimate-guide-buying-luxury-home-dubai": {
    title: "The Ultimate Guide to Buying a Luxury Home in Dubai: Villas, Apartments, and Townhouses",
    subtitle: "Everything you need to know about purchasing luxury properties in Dubai, from villas to townhouses, with expert tips and insights...",
    featuredImage: "/images/the-ultimate-guide-to-buying-a-luxury-home-in-dubai-villas-apartments-and-townhouses.webp",
    date: "April 25, 2025",
    content: `
    <h2>Your Complete Guide to Luxury Home Ownership</h2>
    <p>Buying a luxury home in Dubai is a significant investment that requires careful planning, market knowledge, and the right guidance. This comprehensive guide covers everything you need to know about purchasing your dream property in one of the world's most dynamic real estate markets.</p>
    <p>Whether you're considering a waterfront villa, a high-rise apartment with panoramic views, or a luxury townhouse in a gated community, understanding the Dubai market is essential for making the right investment decision.</p>

    <h2>Understanding Property Types</h2>
    <p>Luxury villas in Dubai offer the ultimate in privacy and space, typically featuring private pools, expansive gardens, and premium finishes. Areas like Emirates Hills and Palm Jumeirah are known for their exclusive villa communities.</p>
    <p>Luxury apartments provide a different lifestyle with stunning city or sea views, world-class facilities, and concierge services. Downtown Dubai and Dubai Marina are home to some of the most prestigious residential towers.</p>
    <p>Luxury townhouses offer the perfect balance between apartments and villas, providing more space than apartments while being more affordable than standalone villas. Dubai Hills Estate and Arabian Ranches are popular for luxury townhouse developments.</p>

    <h2>Key Considerations for Buyers</h2>
    <p>When purchasing a luxury home in Dubai, consider factors such as location, developer reputation, amenities, payment plans, maintenance fees, and long-term value appreciation potential.</p>
    <p>Working with an experienced real estate agent is crucial for navigating the luxury market, understanding developer offerings, negotiating favorable terms, and ensuring a smooth transaction process.</p>

    <h2>The Buying Process</h2>
    <p>The process typically involves selecting your property, making an initial deposit, securing financing if needed, conducting due diligence, signing the Sales and Purchase Agreement (SPA), and eventually taking possession of your new home.</p>
    <p><strong>Ready to find your luxury home?</strong> Contact Revantage to explore our curated selection of Dubai's finest luxury properties.</p>
  `,
  },
  "is-buying-off-plan-property-in-dubai-worth-it-in-2025": {
    title: "Is Buying Off-Plan Property in Dubai Worth It in 2025?",
    subtitle: "A complete look at what off-plan means, pros, cons, key factors, and whether it fits your goals in 2025.",
    featuredImage: "/images/is-buying-off-plan-property-in-dubai-worth-it-in-2025.webp",
    date: "October 29, 2025",
    content: `
    <h2>What is \"Off-Plan Property\" in Dubai?</h2>
    <p>An off-plan property is purchased before completion, often at a lower entry price with staged payments across construction milestones and final handover.</p>

    <h2>Why people are asking in 2025</h2>
    <p>With many launches and handovers, demand remains strong—but timing, price trends, and handover windows matter for returns and liquidity.</p>

    <h2>The Advantages (Pros)</h2>
    <ul>
      <li>Lower entry prices and early-bird incentives</li>
      <li>Flexible payment plans, including post-handover in some cases</li>
      <li>Modern features and smart homes</li>
      <li>Capital appreciation potential by completion</li>
      <li>High rental yield potential upon handover</li>
      <li>Buyer protections via escrow and strong regulation</li>
    </ul>

    <h2>The Disadvantages (Cons)</h2>
    <ul>
      <li>No immediate rental income until handover</li>
      <li>Potential project delays and developer risk</li>
      <li>Market fluctuations during construction</li>
      <li>Financing complexity linked to milestones</li>
      <li>Expectation vs reality variances</li>
      <li>Oversupply risk at mass handovers</li>
    </ul>

    <h2>Key Factors to Consider</h2>
    <ul>
      <li>Developer reputation and delivery record</li>
      <li>Location, infrastructure, and demand drivers</li>
      <li>Payment plan structure and escrow safeguards</li>
      <li>Your horizon and exit plan (sell, rent, or hold)</li>
      <li>Supply/demand in comparable projects</li>
    </ul>

    <h2>Is it worth it in 2025?</h2>
    <p>If you can wait 3–5 years, pick strong locations and reputable developers, and accept interim volatility, off-plan can be compelling. If you need immediate cash flow or want a quick flip, consider ready units instead.</p>

    <p><em>Reference: <a href="https://revantagedxb.com/blog/is-buying-off-plan-property-in-dubai-worth-it-in-2025-1" target="_blank" rel="noopener">Source article</a></em></p>
    `,
  },
  "how-to-buy-off-plan-property-in-dubai-step-by-step-guide-2025": {
    title: "How to Buy Off-Plan Property in Dubai – Step-by-Step Guide (2025)",
    subtitle: "A practical walkthrough of definitions, payment plans, legal steps, and risk checks.",
    featuredImage: "/images/how-to-buy-off-plan-property-in-dubai-step-by-step-guide-2025.webp",
    date: "October 29, 2025",
    content: `
    <h2>What Is Off-Plan Property?</h2>
    <p>Buying before completion—typically with lower early pricing, modern specs, and flexible payment schedules.</p>

    <h2>Step 1: Define Your Goals</h2>
    <p>Capital appreciation, rental income, or personal use will shape location, unit type, and payment plan.</p>

    <h2>Step 2: Research the Market</h2>
    <p>Focus on areas with demand, new infrastructure, and strong master plans (e.g., Dubai Hills Estate, Business Bay, Dubai Creek Harbour).</p>

    <h2>Step 3: Choose a Reputable Developer</h2>
    <p>Assess track record, delivery timelines, and customer satisfaction.</p>

    <h2>Step 4: Understand Payment Plans</h2>
    <p>Milestone-based and post-handover options affect cash flow and financing.</p>

    <h2>Step 5: Complete the Process</h2>
    <p>Reservation, SPA, escrow payments, and ongoing milestone releases.</p>

    <h2>Step 6: Inspect Contracts & Legal</h2>
    <p>Confirm escrow, penalties for delay, and specification schedules.</p>

    <h2>Step 7: Handover & Post-Purchase</h2>
    <p>Snagging, service charge setup, DLD procedures, and leasing/sale strategy.</p>

    <h2>FAQs</h2>
    <ul>
      <li>Typical upfront: 10–20%</li>
      <li>Foreigners can buy in freehold areas</li>
      <li>Delays happen—ensure SPA protections</li>
      <li>Post-handover plans ease cash flow</li>
      <li>Key risks: oversupply, market swings, developer reliability</li>
    </ul>

    <p><em>Reference: <a href="https://revantagedxb.com/blog/how-to-buy-off-plan-property-in-dubai-step-by-step-guide-2025" target="_blank" rel="noopener">Source article</a></em></p>
    `,
  },
  "top-5-off-plan-projects-in-dubai-for-2025": {
    title: "Top 5 Off-Plan Projects in Dubai for 2025",
    subtitle: "A curated shortlist of standout off-plan development opportunities for the year.",
    featuredImage: "/images/top-5-off-plan-projects-in-dubai-for-2025.webp",
    date: "October 29, 2025",
    content: `
    <h2>Projects to Watch</h2>
    <p>Our 2025 shortlist highlights prime-located, reputable-developer launches with strong amenity mixes and demand drivers. Speak to our team for current availability, payment plans, and launch timelines.</p>

    <ul>
      <li>Project 1 – Flagship community with waterfront or skyline views</li>
      <li>Project 2 – Family-focused master plan near schools and parks</li>
      <li>Project 3 – City-core lifestyle with high rental appeal</li>
      <li>Project 4 – Boutique luxury with limited inventory</li>
      <li>Project 5 – Value-led with attractive post-handover plan</li>
    </ul>

    <p><em>Reference: <a href="https://revantagedxb.com/blog/top-5-off-plan-projects-in-dubai-for-2025" target="_blank" rel="noopener">Source overview</a></em></p>
    `,
  },
};

export default function DetailsBlog({ slug }: { slug: string }) {
  // Get the blog post based on slug, or use default
  const currentSlug = slug || "smart-homes-in-dubai";
  const blogPost = blogPosts[currentSlug as keyof typeof blogPosts] || blogPosts["smart-homes-in-dubai"];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-12 px-4 bg-[#141442]">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 text-white font-serif font-bold">
            Blog
          </h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <h1 className="text-center text-4xl font-serif font-bold">
          {blogPost.title}
        </h1>
        <p className="text-center text-xl font-mono mt-11">{blogPost.date}</p>
      </div>
      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-6 mt-8 mb-12">
        <div className="relative rounded-none overflow-hidden ">
          <Image
            src={blogPost.featuredImage}
            alt={blogPost.title}
            width={0}
            height={0}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-4">
        <article className="prose prose-lg prose-slate max-w-none">
          <div
            className="text-slate-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          />
        </article>
      </main>
    </div>
  );
}
