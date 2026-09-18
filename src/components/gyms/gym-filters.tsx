// src/components/gyms/gym-filters.tsx
"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type GymSort =
  | "recommended"
  | "nearest"
  | "price-low"
  | "price-high"
  | "rating";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  sort: GymSort;
  setSort: (v: GymSort) => void;
  categories: string[];
}

const sortOptions: { value: GymSort; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "nearest", label: "Nearest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top rated" },
];

export function GymFilters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}: Props) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search studios, neighbourhoods..."
          className="w-full rounded-full border border-border bg-surface py-3.5 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
        />
      </div>

      <button
        onClick={() => setFiltersOpen((v) => !v)}
        className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface py-3.5 text-[14px] font-medium text-foreground transition-colors hover:border-foreground/40"
      >
        <SlidersHorizontal className="h-4 w-4" /> Filters
        <ChevronDown
          className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl border border-border bg-surface p-4">
              <label className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">
                Sort by
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as GymSort)}
                className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[14px] text-foreground focus:border-foreground focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
              category === cat
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border bg-surface text-foreground/80 hover:border-foreground/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
