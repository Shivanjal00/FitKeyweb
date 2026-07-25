// src/components/pricing/pricing-card.tsx
"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { PricingPlan } from "@/lib/data/pricing";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export function PricingCard({
  plan,
  delay,
}: {
  plan: PricingPlan;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <TiltCard
        tiltStrength={5}
        className={`relative h-full rounded-[28px] border p-8 transition-colors duration-500 ${
          plan.highlighted
            ? "border-foreground bg-foreground text-primary-foreground shadow-elevated"
            : "border-border bg-background hover:border-foreground/40 hover:shadow-elevated"
        }`}
      >
        {plan.highlighted && (
          <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
            Most popular
          </span>
        )}

        <h3
          className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          {plan.name}
        </h3>

        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="text-[42px] font-semibold tracking-tight">
            ₹{plan.price}
          </span>
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

        <p
          className={`mt-3 text-[14px] leading-relaxed ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {plan.description}
        </p>

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
          Choose {plan.name}
        </Link>
      </TiltCard>
    </Reveal>
  );
}
