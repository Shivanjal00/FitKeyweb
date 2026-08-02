// src/lib/data/libraries.ts
export interface Library {
  id: string;
  name: string;
  area: string;
  distanceKm: number;
  rating: number;
  pricePerDay: number;
  seats: number;
  hours: string;
  status: "open" | "closed";
  tags: string[];
  image: string;
}

export const libraries: Library[] = [
  {
    id: "the-quiet-quarter",
    name: "The Quiet Quarter",
    area: "Indiranagar",
    distanceKm: 0.6,
    rating: 4.9,
    pricePerDay: 149,
    seats: 84,
    hours: "7:00 AM – 11:00 PM",
    status: "open",
    tags: ["Silent Study", "Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "atlas-reading-room",
    name: "Atlas Reading Room",
    area: "Koramangala",
    distanceKm: 1.2,
    rating: 4.8,
    pricePerDay: 199,
    seats: 120,
    hours: "24 hours",
    status: "open",
    tags: ["24x7", "Coworking"],
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "meridian-scholars-library",
    name: "Meridian Scholars' Library",
    area: "HSR Layout",
    distanceKm: 2.4,
    rating: 4.7,
    pricePerDay: 129,
    seats: 96,
    hours: "8:00 AM – 10:00 PM",
    status: "closed",
    tags: ["Exam Prep", "Silent Study"],
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "northlight-study-studio",
    name: "Northlight Study Studio",
    area: "Whitefield",
    distanceKm: 3.8,
    rating: 4.6,
    pricePerDay: 179,
    seats: 60,
    hours: "6:00 AM – 12:00 AM",
    status: "open",
    tags: ["Coworking", "Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
];

export const libraryCategories = [
  "All",
  "Silent Study",
  "24x7",
  "Coworking",
  "Exam Prep",
  "Wi-Fi",
] as const;
