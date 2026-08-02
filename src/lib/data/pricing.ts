// src/lib/data/pricing.ts
export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  unit: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "daily",
    name: "Daily Pass",
    tagline: "Try before you commit",
    monthlyPrice: 249,
    yearlyPrice: 249,
    unit: "/day",
    features: [
      "One-day access to any studio",
      "Book same-day slots",
      "Full facility access",
      "Free cancellation up to 2h",
    ],
    cta: "Start with a day",
  },
  {
    id: "monthly",
    name: "Monthly Pass",
    tagline: "For the everyday athlete",
    monthlyPrice: 3499,
    yearlyPrice: 2899,
    unit: "/mo",
    features: [
      "Unlimited daily bookings",
      "Access to 200+ studios",
      "Priority slot booking",
      "Guest pass every month",
      "Wellness partner discounts",
    ],
    highlighted: true,
    cta: "Choose Monthly",
  },
  {
    id: "elite",
    name: "Elite Annual",
    tagline: "Best value, all in",
    monthlyPrice: 2499,
    yearlyPrice: 2499,
    unit: "/mo",
    features: [
      "Everything in Monthly",
      "Free personal training / mo",
      "Nutritionist consultation",
      "Recovery & spa access",
      "Concierge support",
    ],
    cta: "Go Elite",
  },
];

export const includes = [
  "Verified partner studios",
  "Live slot availability",
  "In-app entry pass with QR",
  "Secure UPI payments",
  "Instant booking receipts",
  "24/7 human support",
  "Wellness partner perks",
  "Progress & streak tracking",
];

export const faqs = [
  {
    q: "Can I cancel or pause my pass anytime?",
    a: "Yes. Daily passes simply expire — no action needed. Monthly and Elite passes can be cancelled or paused anytime from the app with no penalty.",
  },
  {
    q: "How many gyms can I visit in a day?",
    a: "As many as you like on Monthly and Elite passes — there's no per-day visit cap, only fair-use limits on identical back-to-back bookings at the same studio.",
  },
  {
    q: "Do you offer corporate plans?",
    a: "Yes, we offer team billing with usage-based invoicing for companies wanting to give employees flexible fitness benefits. Reach out via Contact for details.",
  },
  {
    q: "What if a gym is fully booked?",
    a: "You'll see real-time slot availability before booking, so a studio showing as bookable always has a guaranteed spot waiting.",
  },
  {
    q: "Are there hidden fees?",
    a: "None. The price shown is the price you pay — no joining fees, no cancellation penalties, no surprise renewals.",
  },
];
