"use client";
import HeroSection from "@/src/view/landing/hero-section";
import Feature from "@/src/view/landing/feature";
import Communities from "@/src/view/landing/Communities";
import Property from "@/src/view/landing/property";
import { InsightsInspiration } from "@/src/view/landing/blog";
import InstagramSection from "@/src/view/landing/instagram-section";
import { CallToAction } from "@/src/view/landing/call-to-action";
import PartnersSection from "../../view/landing/PartnersSection";
import Solutions from "../../view/landing/solutions";
import AboutRevantage from "@/src/view/landing/about-revantage";

export default function Home() {
  return (
    <div className="bg-[#fff]">
      <HeroSection />
      <PartnersSection />
      <Solutions/>
      <AboutRevantage />
      <Feature />
      <Communities />
      <Property />
      <InsightsInspiration />
      <InstagramSection />
      <CallToAction />
    </div>
  );
}
