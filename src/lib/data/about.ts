// src/lib/data/about.ts
export const story = {
  eyebrow: "Our story",
  heading: ["Your fitness membership", "shouldn't limit where you train."],
  description:
    "Gymbym was created around a simple idea: your fitness membership shouldn't limit where you train. We're building a convenient fitness platform that connects people with participating gyms through a single subscription. We're starting in Delhi, working with local gyms and building a simpler way for people to stay consistent with their fitness routine.",
  images: [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
  ],
};

export const mission = {
  eyebrow: "Our mission",
  heading: "Make quality fitness more accessible, flexible and convenient.",
  description:
    "We believe fitness should meet you where your day is — not the other way around. One subscription, participating gyms across Delhi, and the freedom to train wherever fits your routine.",
};

export const values = [
  {
    icon: "heart" as const,
    title: "Members first",
    description: "Every decision starts with a real member and a real workout.",
  },
  {
    icon: "shield" as const,
    title: "Radical trust",
    description:
      "Transparent pricing, verified gyms, honest listings. No dark patterns.",
  },
  {
    icon: "check" as const,
    title: "Beautifully simple",
    description: "One subscription. Choose a gym. Check in. Train.",
  },
  {
    icon: "zap" as const,
    title: "Built for Delhi, first",
    description: "We're starting local and getting it right before we grow.",
  },
];
