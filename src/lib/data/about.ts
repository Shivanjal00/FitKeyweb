// src/lib/data/about.ts
export const story = {
  eyebrow: "Our story",
  heading: ["Fitness, without the friction.", "Built by people who train."],
  description:
    "We started FitKey because signing up for a gym felt harder than the workout itself. Long contracts, hidden fees, and buildings that never quite matched the brochure. So we built a single pass — and a promise to make every studio worth walking into.",
  images: [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
  ],
};

export const mission = {
  eyebrow: "Our mission",
  heading: "Make the next workout the easiest one.",
  description:
    "We believe fitness should meet you where your day is — not the other way around. A morning yoga class near work. A boxing session across town on a Friday. A quiet swim on Sunday. One key, hundreds of studios, zero friction. Behind every unlock is a small team obsessed with the details: the seamless entry, the fair pricing, the studio that finally lives up to its photos.",
};

export const values = [
  {
    icon: "heart" as const,
    title: "Members first",
    description:
      "Every decision starts with a real member and a real workout. If it doesn't help them show up, it doesn't ship.",
  },
  {
    icon: "shield" as const,
    title: "Radical trust",
    description:
      "Transparent pricing, verified studios, honest reviews. No dark patterns, no surprise renewals.",
  },
  {
    icon: "check" as const,
    title: "Beautifully simple",
    description:
      "Great software feels invisible. We obsess over the small moments — the tap, the swipe, the pass.",
  },
  {
    icon: "zap" as const,
    title: "Move quickly, carefully",
    description:
      "We ship weekly, listen faster, and treat quality as a feature — not an afterthought.",
  },
];

export const milestones = [
  {
    year: "2023",
    title: "The first pass",
    description:
      "Two founders, four studios in Bengaluru, one shared belief — fitness should feel like a city, not a contract.",
  },
  {
    year: "2024",
    title: "50 studios, one app",
    description:
      "Expanded to Mumbai and Pune. Introduced the Elite Annual and launched instant QR entry.",
  },
  {
    year: "2025",
    title: "A national network",
    description:
      "200+ studios across 8 cities. First corporate wellness partners. NPS crosses 72.",
  },
  {
    year: "2026",
    title: "Recovery & wellness",
    description:
      "Spa, physio and nutrition partners join the pass. Launched member-only events and coaching.",
  },
];

export const stats = [
  { label: "Partner studios", value: 200, suffix: "+", decimals: 0 },
  { label: "Cities live", value: 8, suffix: "", decimals: 0 },
  { label: "Sessions booked", value: 180, suffix: "k", decimals: 0 },
  { label: "Member NPS", value: 72, suffix: "", decimals: 0 },
];

export const team = [
  {
    name: "Aarav Menon",
    role: "Co-founder & CEO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Isha Kapoor",
    role: "Co-founder & Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rohan Shetty",
    role: "Head of Studios",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Meera Nair",
    role: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
];
