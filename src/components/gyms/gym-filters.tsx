// src/components/gyms/gym-filters.tsx
"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useGymsStore, SortOption } from "@/store/gyms-store";
import { categories } from "@/lib/data/gyms";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "nearest", label: "Nearest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top rated" },
];

export function GymFilters() {
  const { search, category, sort, setSearch, setCategory, setSort } =
    useGymsStore();

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search gyms, studios, areas..."
            className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
        </div>

        <div className="relative sm:w-56">
          <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="w-full appearance-none rounded-full border border-border bg-surface py-3 pl-11 pr-4 text-[14px] text-foreground focus:border-foreground focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

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
