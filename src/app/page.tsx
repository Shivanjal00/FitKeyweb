// src/app/page.tsx
import { Hero } from "@/components/sections/hero";
import { TrustBadges } from "@/components/sections/trust-badges";
import { HomeFeatureGrid } from "@/components/sections/home-feature-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeaturedStudios } from "@/components/sections/featured-studios";
import { StatsBar } from "@/components/sections/stats-bar";
import { FinalCTA } from "@/components/sections/final-cta";

// Refresh the featured studios every minute instead of freezing them at build time.
export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <HomeFeatureGrid />
      <HowItWorks />
      <FeaturedStudios />
      <StatsBar />
      <FinalCTA />
    </>
  );
}
