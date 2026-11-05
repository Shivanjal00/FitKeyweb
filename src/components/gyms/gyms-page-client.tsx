// src/components/gyms/gyms-page-client.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";
import { GymFilters, GymSort } from "@/components/gyms/gym-filters";
import { GymCard } from "@/components/gyms/gym-card";
import { StudioCta } from "@/components/gyms/studio-cta";
import { Gym } from "@/lib/data/gyms";

import { LocationSearch } from "@/components/shared/location-search";
import { distanceKm, formatDistance, Coordinates } from "@/lib/geo";

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
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [locationLabel, setLocationLabel] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 200);
    return () => clearTimeout(timer);
  }, [search]);

  const filtered = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    let result = gyms
      .filter((gym) => {
        const matchesCategory = category === "All" || gym.category === category;
        const matchesSearch =
          q === "" ||
          gym.name.toLowerCase().includes(q) ||
          gym.area.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
      })
      .map((gym) => ({
        ...gym,
        computedDistanceKm:
          userLocation && gym.location
            ? distanceKm(userLocation, gym.location)
            : undefined,
      }));

    switch (sort) {
      case "nearest":
        result = [...result].sort((a, b) => {
          if (a.computedDistanceKm == null) return 1;
          if (b.computedDistanceKm == null) return -1;
          return a.computedDistanceKm - b.computedDistanceKm;
        });
        break;
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
    // userLocation was missing here, so distances/sorting never refreshed
    // after the visitor picked a location.
  }, [gyms, debouncedSearch, category, sort, userLocation]);

  function handleLocationChange(
    coords: Coordinates | null,
    label: string | null,
  ) {
    setUserLocation(coords);
    setLocationLabel(label);
    // Sensible default: once we know where you are, show what's nearest.
    if (coords) setSort((s) => (s === "recommended" ? "nearest" : s));
    else setSort((s) => (s === "nearest" ? "recommended" : s));
  }

  const hasFilters = search !== "" || category !== "All";

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
          <GymFilters
            locationSlot={
              <LocationSearch onLocationChange={handleLocationChange} />
            }
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
            categories={categories}
          />

          <div className="mt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[15px] font-semibold text-foreground">
                {filtered.length} {filtered.length === 1 ? "studio" : "studios"}
                {locationLabel && (
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    · sorted near {locationLabel}
                  </span>
                )}
              </p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                  className="text-[13px] font-medium text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  Clear filters
                </button>
              )}
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((gym, i) => (
                  <GymCard
                    key={gym.id}
                    gym={gym}
                    index={i}
                    distanceOverride={
                      gym.computedDistanceKm != null
                        ? formatDistance(gym.computedDistanceKm)
                        : undefined
                    }
                  />
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="mt-6 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border-strong py-20 text-center">
                <SearchX className="h-8 w-8 text-muted-foreground" />
                <p className="mt-4 text-[16px] font-semibold text-foreground">
                  {gyms.length === 0
                    ? "Studios are being added"
                    : "No studios match your search"}
                </p>
                <p className="mt-1 max-w-xs text-[14px] text-muted-foreground">
                  {gyms.length === 0
                    ? "We’re verifying gyms across Delhi. Check back very soon."
                    : "Try a different area, category or keyword."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <StudioCta />
    </>
  );
}
