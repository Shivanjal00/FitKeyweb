// src/lib/data/pricing.ts
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "day",
    name: "Day Pass",
    price: 349,
    unit: "/ day",
    description: "Perfect for trying a new studio or a one-off session.",
    features: [
      "Access to any single studio",
      "Valid for 24 hours",
      "No commitment",
      "Instant QR unlock",
    ],
  },
  {
    id: "week",
    name: "Week Pass",
    price: 1499,
    unit: "/ week",
    description: "For travelers, guests, or short training blocks.",
    features: [
      "Unlimited visits for 7 days",
      "Access across all partner studios",
      "Bring a friend (2 visits)",
      "Priority booking slots",
    ],
    highlighted: true,
  },
  {
    id: "month",
    name: "Month Pass",
    price: 3999,
    unit: "/ month",
    description: "The best value for a consistent training habit.",
    features: [
      "Unlimited visits for 30 days",
      "Access across all partner studios",
      "Bring a friend (unlimited)",
      "Priority booking slots",
      "Free cancellation anytime",
    ],
  },
];

export const faqs = [
  {
    q: "Can I use one pass across multiple gyms?",
    a: "Yes. Every FitKey pass works across all partner studios in your city — switch gyms as often as you like within your pass period.",
  },
  {
    q: "Is there a joining fee?",
    a: "No joining fees, no hidden charges. The price you see is the price you pay.",
  },
  {
    q: "Can I cancel or pause my pass?",
    a: "Day and Week passes simply expire — no action needed. Month passes can be cancelled anytime from the app with no penalty.",
  },
  {
    q: "What happens if a gym is full?",
    a: "You'll see real-time capacity before booking, so you always know a slot is guaranteed before you head out.",
  },
];
