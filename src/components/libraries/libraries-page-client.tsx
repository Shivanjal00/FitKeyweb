// src/components/libraries/libraries-page-client.tsx
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  LibraryFilters,
  LibrarySort,
} from "@/components/libraries/library-filters";
import { LibraryCard } from "@/components/libraries/library-card";
import { LibraryCta } from "@/components/libraries/library-cta";
import { Library } from "@/lib/data/libraries";

export function LibrariesPageClient({
  libraries,
  categories,
}: {
  libraries: Library[];
  categories: string[];
}) {
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
  }, [libraries, search, category, sort]);

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <div className="max-w-xl">
            <LibraryFilters
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
