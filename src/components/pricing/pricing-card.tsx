// src/components/pricing/pricing-card.tsx
"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { PricingPlan } from "@/lib/data/pricing";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export function PricingCard({
  plan,
  billing,
  delay,
}: {
  plan: PricingPlan;
  billing: "monthly" | "yearly";
  delay: number;
}) {
  const price = billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <Reveal delay={delay}>
      <TiltCard
        className={`relative h-full rounded-[28px] border p-8 transition-colors duration-500 ${
          plan.highlighted
            ? "border-foreground bg-foreground text-primary-foreground shadow-elevated"
            : "border-border bg-background hover:border-foreground/40 hover:shadow-elevated"
        }`}
      >
        {plan.highlighted && (
          <span className="absolute right-8 top-8 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
            Most loved
          </span>
        )}

        <h3
          className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          {plan.name}
        </h3>
        <p
          className={`mt-1 text-[13.5px] ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          {plan.tagline}
        </p>

        <div className="mt-5 flex items-baseline gap-1.5">
          <AnimatePresence mode="wait">
            <motion.span
              key={price}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-[40px] font-semibold tracking-tight"
            >
              ₹{price.toLocaleString("en-IN")}
            </motion.span>
          </AnimatePresence>
          <span
            className={
              plan.highlighted
                ? "text-primary-foreground/60"
                : "text-muted-foreground"
            }
          >
            {plan.unit}
          </span>
        </div>

        <ul className="mt-6 space-y-3 text-[14px]">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className={plan.highlighted ? "" : "text-foreground/80"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/onboarding"
          className={`mt-8 block w-full rounded-full px-6 py-3.5 text-center text-[14px] font-semibold transition-transform hover:-translate-y-0.5 ${
            plan.highlighted
              ? "bg-background text-foreground"
              : "bg-foreground text-primary-foreground"
          }`}
        >
          {plan.cta}
        </Link>
      </TiltCard>
    </Reveal>
  );
}
