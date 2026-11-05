// src/components/shared/listing-filters.tsx
"use client";

import { ReactNode } from "react";
import { Search, X, ChevronDown } from "lucide-react";

export type ListingSort =
  | "recommended"
  | "nearest"
  | "price-low"
  | "price-high"
  | "rating";

const sortOptions: { value: ListingSort; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "nearest", label: "Nearest first" },
  { value: "price-low", label: "Price: low to high" },
  { value: "price-high", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

/**
 * One horizontal toolbar that sits on top of the results:
 *   [ area + near me ]  [ search ]  [ sort ]
 *   [ category chips ...................... ]
 */
export function ListingFilters({
  locationSlot,
  search,
  setSearch,
  searchPlaceholder,
  category,
  setCategory,
  categories,
  sort,
  setSort,
}: {
  locationSlot: ReactNode;
  search: string;
  setSearch: (v: string) => void;
  searchPlaceholder: string;
  category: string;
  setCategory: (v: string) => void;
  categories: string[];
  sort: ListingSort;
  setSort: (v: ListingSort) => void;
}) {
  return (
    <div className="space-y-4 rounded-[28px] border border-border bg-surface p-4 shadow-soft md:p-5">
      <div className="grid items-start gap-3 lg:grid-cols-[1.25fr_1fr_210px]">
        <div>{locationSlot}</div>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label="Search by name or neighbourhood"
            className="h-[46px] w-full rounded-full border border-border bg-background pl-10 pr-10 text-[13.5px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as ListingSort)}
            aria-label="Sort results"
            className="h-[46px] w-full appearance-none rounded-full border border-border bg-background pl-4 pr-10 text-[13.5px] font-medium text-foreground focus:border-foreground focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4">
          {categories.map((cat) => {
            const active = category === cat;
            return (
              <button
                type="button"
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "border-foreground bg-foreground text-primary-foreground"
                    : "border-border bg-background text-foreground/80 hover:border-foreground/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
