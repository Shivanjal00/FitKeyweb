// src/components/gyms/gyms-page-client.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { GymFilters, GymSort } from "@/components/gyms/gym-filters";
import { GymCard } from "@/components/gyms/gym-card";
import { StudioCta } from "@/components/gyms/studio-cta";
import { Gym } from "@/lib/data/gyms";

export function GymsPageClient({
  gyms,
  categories,
}: {
  gyms: Gym[];
  categories: string[];
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<GymSort>("recommended");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 200);
    return () => clearTimeout(timer);
  }, [search]);
  const filtered = useMemo(() => {
    let result = gyms.filter((gym) => {
      const matchesCategory = category === "All" || gym.category === category;
      const matchesSearch =
        debouncedSearch.trim() === "" ||
        gym.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        gym.area.toLowerCase().includes(debouncedSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    switch (sort) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
    }
    return result;
  }, [gyms, debouncedSearch, category, sort]);
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <div className="max-w-xl">
            <GymFilters
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              sort={sort}
              setSort={setSort}
              categories={categories}
            />
          </div>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Showing
          </p>
          <p className="mt-1 text-[15px] font-medium text-foreground">
            {filtered.length} {filtered.length === 1 ? "studio" : "studios"}
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((gym, i) => (
                <GymCard key={gym.id} gym={gym} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
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
