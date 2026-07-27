// src/lib/data/gyms.ts
export interface Gym {
  id: string;
  name: string;
  area: string;
  distanceKm: number;
  rating: number;
  pricePerDay: number;
  status: "open" | "closed";
  tags: string[];
  image: string;
}

export const gyms: Gym[] = [
  {
    id: "iron-atelier",
    name: "Iron Atelier",
    area: "Indiranagar",
    distanceKm: 0.8,
    rating: 4.9,
    pricePerDay: 249,
    status: "open",
    tags: ["Strength", "CrossFit"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "stillwater-yoga-house",
    name: "Stillwater Yoga House",
    area: "Koramangala",
    distanceKm: 1.4,
    rating: 4.8,
    pricePerDay: 199,
    status: "open",
    tags: ["Yoga", "Women Only"],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "northline-crossfit",
    name: "Northline CrossFit",
    area: "HSR Layout",
    distanceKm: 2.2,
    rating: 4.7,
    pricePerDay: 299,
    status: "closed",
    tags: ["CrossFit", "Cardio"],
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "meridian-fit-club",
    name: "Meridian Fit Club",
    area: "Whitefield",
    distanceKm: 3.6,
    rating: 4.6,
    pricePerDay: 349,
    status: "open",
    tags: ["Cardio", "Strength"],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "knockout-boxing-club",
    name: "Knockout Boxing Club",
    area: "Jayanagar",
    distanceKm: 4.2,
    rating: 4.8,
    pricePerDay: 279,
    status: "open",
    tags: ["Strength", "Cardio"],
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "zenspace-yoga",
    name: "ZenSpace Yoga & Breath",
    area: "JP Nagar",
    distanceKm: 4.9,
    rating: 4.9,
    pricePerDay: 219,
    status: "closed",
    tags: ["Yoga", "Women Only"],
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=80",
  },
];

export const categories = [
  "All",
  "Strength",
  "Yoga",
  "CrossFit",
  "Cardio",
  "Women Only",
] as const;
