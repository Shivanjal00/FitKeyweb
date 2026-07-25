// src/app/gyms/page.tsx
"use client";

import { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { GymFilters } from "@/components/gyms/gym-filters";
import { GymCard } from "@/components/gyms/gym-card";
import { useGymsStore } from "@/store/gyms-store";
import { gyms } from "@/lib/data/gyms";

export default function GymsPage() {
  const { search, category, sort } = useGymsStore();

  const filteredGyms = useMemo(() => {
    let result = gyms.filter((gym) => {
      const matchesCategory = category === "All" || gym.category === category;
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
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> {gyms.length} studios and
              counting
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-[40px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[56px]">
              Find your next{" "}
              <span className="italic text-accent">workout, unlocked.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <Reveal>
            <GymFilters />
          </Reveal>

          <p className="mt-6 text-[13px] text-muted-foreground">
            {filteredGyms.length} {filteredGyms.length === 1 ? "gym" : "gyms"}{" "}
            found
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredGyms.map((gym, i) => (
                <GymCard key={gym.id} gym={gym} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filteredGyms.length === 0 && (
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-20 text-center">
              <p className="text-[16px] font-medium text-foreground">
                No gyms match your search
              </p>
              <p className="mt-1 text-[14px] text-muted-foreground">
                Try a different area, category or keyword.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
