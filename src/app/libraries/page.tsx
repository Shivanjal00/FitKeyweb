// src/app/libraries/page.tsx
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import {
  LibraryFilters,
  LibrarySort,
} from "@/components/libraries/library-filters";
import { LibraryCard } from "@/components/libraries/library-card";
import { LibraryCta } from "@/components/libraries/library-cta";
import { libraries } from "@/lib/data/libraries";

export default function LibrariesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<LibrarySort>("recommended");

  const filtered = useMemo(() => {
    let result = libraries.filter((lib) => {
      const matchesCategory = category === "All" || lib.tags.includes(category);
      const matchesSearch =
        search.trim() === "" ||
        lib.name.toLowerCase().includes(search.toLowerCase()) ||
        lib.area.toLowerCase().includes(search.toLowerCase());
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
              <BookOpen className="h-3 w-3" /> Bengaluru · {libraries.length}+
              reading rooms
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-[38px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[54px]">
              Quiet rooms for{" "}
              <span className="italic text-accent">long, deep work.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
              Silent libraries, 24×7 study lofts and coworking reading rooms —
              vetted for Wi-Fi, seating and vibe. Unlock by the hour, day or
              month.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 max-w-xl">
              <LibraryFilters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
              />
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
            {filtered.length} {filtered.length === 1 ? "library" : "libraries"}
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((lib, i) => (
                <LibraryCard key={lib.id} library={lib} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-20 text-center">
              <p className="text-[16px] font-medium text-foreground">
                No libraries match your search
              </p>
              <p className="mt-1 text-[14px] text-muted-foreground">
                Try a different area, category or keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      <LibraryCta />
    </>
  );
}
