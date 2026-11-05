// src/components/libraries/library-filters.tsx
"use client";

import { ReactNode } from "react";
import {
  ListingFilters,
  ListingSort,
} from "@/components/shared/listing-filters";

export type LibrarySort = ListingSort;

interface Props {
  locationSlot: ReactNode;
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  sort: LibrarySort;
  setSort: (v: LibrarySort) => void;
  categories: string[];
}

export function LibraryFilters(props: Props) {
  return (
    <ListingFilters
      {...props}
      searchPlaceholder="Library name or neighbourhood"
    />
  );
}
