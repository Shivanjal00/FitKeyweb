// src/app/gyms/page.tsx
"use client";

import { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { GymFilters } from "@/components/gyms/gym-filters";
import { GymCard } from "@/components/gyms/gym-card";
import { StudioCta } from "@/components/gyms/studio-cta";
import { useGymsStore } from "@/store/gyms-store";
import { gyms } from "@/lib/data/gyms";

export default function GymsPage() {
  const { search, category, sort } = useGymsStore();

  const filteredGyms = useMemo(() => {
    let result = gyms.filter((gym) => {
      const matchesCategory = category === "All" || gym.tags.includes(category);
      const matchesSearch =
        search.trim() === "" ||
        gym.name.toLowerCase().includes(search.toLowerCase()) ||
        gym.area.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    switch (sort) {
      case "nearest":
        result = [...result].sort((a, b) => a.distanceKm - b.distanceKm);
        break;
      case "price-low":
        result = [...result].sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
    }
    return result;
  }, [search, category, sort]);

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <MapPin className="h-3 w-3" /> Bengaluru · {gyms.length}+ places
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-[38px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[54px]">
              Studios worth{" "}
              <span className="italic text-accent">the walk over.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
              Every space here is vetted for quality, equipment and coaching.
              Browse, favourite, and unlock a pass — all in a couple of taps.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 max-w-xl">
              <GymFilters />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Showing
          </p>
          <p className="mt-1 text-[15px] font-medium text-foreground">
            {filteredGyms.length}{" "}
            {filteredGyms.length === 1 ? "studio" : "studios"}
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredGyms.map((gym, i) => (
                <GymCard key={gym.id} gym={gym} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filteredGyms.length === 0 && (
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-20 text-center">
              <p className="text-[16px] font-medium text-foreground">
                No studios match your search
              </p>
              <p className="mt-1 text-[14px] text-muted-foreground">
                Try a different area, category or keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      <StudioCta />
    </>
  );
}
