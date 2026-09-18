// src/app/page.tsx
import { Hero } from "@/components/sections/hero";
import { TrustedLogos } from "@/components/sections/trusted-logos";
import { HomeFeatureGrid } from "@/components/sections/home-feature-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeaturedStudios } from "@/components/sections/featured-studios";
import { StatsBar } from "@/components/sections/stats-bar";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <HomeFeatureGrid />
      <HowItWorks />
      <FeaturedStudios />
      <StatsBar />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
