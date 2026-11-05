// src/components/gyms/gym-filters.tsx
"use client";

import { ReactNode } from "react";
import {
  ListingFilters,
  ListingSort,
} from "@/components/shared/listing-filters";

export type GymSort = ListingSort;

interface Props {
  locationSlot: ReactNode;
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  sort: GymSort;
  setSort: (v: GymSort) => void;
  categories: string[];
}

export function GymFilters(props: Props) {
  return (
    <ListingFilters
      {...props}
      searchPlaceholder="Studio name or neighbourhood"
    />
  );
}
