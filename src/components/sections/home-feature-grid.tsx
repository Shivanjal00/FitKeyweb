// src/components/sections/home-feature-grid.tsx
"use client";

import { MapPin, Building2, RefreshCw, SlidersHorizontal } from "lucide-react";
import { FeatureGrid } from "@/components/sections/feature-grid";

export function HomeFeatureGrid() {
  return (
    <FeatureGrid
      eyebrow="Why Gymbym"
      heading="Your gym should fit your life."
      description="Instead of adapting to one gym, choose based on what your day actually looks like."
      items={[
        {
          icon: MapPin,
          title: "Near home",
          description: "Find gyms around where you live.",
        },
        {
          icon: Building2,
          title: "Near college or work",
          description: "Train wherever your day takes you.",
        },
        {
          icon: RefreshCw,
          title: "Different gyms",
          description: "Change locations without buying another membership.",
        },
        {
          icon: SlidersHorizontal,
          title: "Flexible plans",
          description: "Choose the subscription that fits your routine.",
        },
      ]}
    />
  );
}
