// src/lib/data/gyms.ts
export interface Gym {
  id: string;
  name: string;
  area: string;
  city: string;
  category: "Gym" | "Yoga" | "CrossFit" | "Pilates" | "Boxing" | "Swimming";
  rating: number;
  distanceKm: number;
  pricePerDay: number;
  image: string;
  amenities: string[];
  verified: boolean;
}

export const gyms: Gym[] = [
  {
    id: "cult-fit-koramangala",
    name: "Iron Works Studio",
    area: "Koramangala",
    city: "Bengaluru",
    category: "Gym",
    rating: 4.8,
    distanceKm: 1.2,
    pricePerDay: 349,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    amenities: ["AC", "Showers", "Parking"],
    verified: true,
  },
  {
    id: "flow-yoga-indiranagar",
    name: "Flow Yoga House",
    area: "Indiranagar",
    city: "Bengaluru",
    category: "Yoga",
    rating: 4.9,
    distanceKm: 2.4,
    pricePerDay: 299,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    amenities: ["Mats provided", "Showers"],
    verified: true,
  },
  {
    id: "forge-crossfit-hsr",
    name: "The Forge CrossFit",
    area: "HSR Layout",
    city: "Bengaluru",
    category: "CrossFit",
    rating: 4.7,
    distanceKm: 3.1,
    pricePerDay: 449,
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
    amenities: ["Coach-led", "Showers", "Parking"],
    verified: true,
  },
  {
    id: "corepilates-whitefield",
    name: "Core Pilates Studio",
    area: "Whitefield",
    city: "Bengaluru",
    category: "Pilates",
    rating: 4.6,
    distanceKm: 5.6,
    pricePerDay: 399,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    amenities: ["Reformer beds", "AC"],
    verified: false,
  },
  {
    id: "knockout-boxing-jayanagar",
    name: "Knockout Boxing Club",
    area: "Jayanagar",
    city: "Bengaluru",
    category: "Boxing",
    rating: 4.8,
    distanceKm: 4.2,
    pricePerDay: 379,
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    amenities: ["Gloves provided", "Showers"],
    verified: true,
  },
  {
    id: "wavepool-swimming-btm",
    name: "WavePool Aquatics",
    area: "BTM Layout",
    city: "Bengaluru",
    category: "Swimming",
    rating: 4.5,
    distanceKm: 3.8,
    pricePerDay: 299,
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    amenities: ["Heated pool", "Lockers"],
    verified: true,
  },
  {
    id: "elevate-gym-marathahalli",
    name: "Elevate Strength Lab",
    area: "Marathahalli",
    city: "Bengaluru",
    category: "Gym",
    rating: 4.4,
    distanceKm: 6.1,
    pricePerDay: 329,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    amenities: ["Free weights", "Parking"],
    verified: false,
  },
  {
    id: "zenspace-yoga-jpnagar",
    name: "ZenSpace Yoga & Breath",
    area: "JP Nagar",
    city: "Bengaluru",
    category: "Yoga",
    rating: 4.9,
    distanceKm: 4.9,
    pricePerDay: 279,
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80",
    amenities: ["Mats provided", "AC"],
    verified: true,
  },
];

export const categories = [
  "All",
  "Gym",
  "Yoga",
  "CrossFit",
  "Pilates",
  "Boxing",
  "Swimming",
] as const;
