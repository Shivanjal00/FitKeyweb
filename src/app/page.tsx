"use client";

// src/app/page.tsx
import {
  MapPin,
  CalendarCheck,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { TrustedLogos } from "@/components/sections/trusted-logos";
import { FeatureGrid } from "@/components/sections/feature-grid";
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
      <FeatureGrid
        eyebrow="Why FitKey"
        heading="Fitness that fits the way you actually live."
        description="No annual contracts. No guilt. Just great workouts on your schedule."
        items={[
          {
            icon: MapPin,
            title: "Discover in seconds",
            description:
              "Search premium gyms and studios by category, distance, price and vibe.",
          },
          {
            icon: CalendarCheck,
            title: "Book any time",
            description:
              "Reserve day, week or month passes instantly. Pay by UPI, card or wallet.",
          },
          {
            icon: KeyRound,
            title: "One pass, everywhere",
            description:
              "Walk into 400+ studios with one QR pass. No paperwork, no contracts.",
          },
          {
            icon: ShieldCheck,
            title: "Verified partners",
            description:
              "Every studio is vetted for equipment, staff and hygiene before joining.",
          },
          {
            icon: Sparkles,
            title: "Personalised for you",
            description:
              "Smart recommendations based on your goals, past visits and ratings.",
          },
          {
            icon: Users,
            title: "For teams too",
            description:
              "Give your team flexible fitness benefits. Simple billing, real usage.",
          },
        ]}
      />
      <HowItWorks />
      <FeaturedStudios />
      <StatsBar />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
