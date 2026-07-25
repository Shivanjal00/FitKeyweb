// src/store/gyms-store.ts
import { create } from "zustand";

export type SortOption =
  | "recommended"
  | "nearest"
  | "price-low"
  | "price-high"
  | "rating";

interface GymsFilterState {
  search: string;
  category: string;
  sort: SortOption;
  setSearch: (value: string) => void;
  setCategory: (value: string) => void;
  setSort: (value: SortOption) => void;
  reset: () => void;
}

export const useGymsStore = create<GymsFilterState>((set) => ({
  search: "",
  category: "All",
  sort: "recommended",
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  setSort: (sort) => set({ sort }),
  reset: () => set({ search: "", category: "All", sort: "recommended" }),
}));
