// src/app/pricing/page.tsx
"use client";

import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { PricingCard } from "@/components/pricing/pricing-card";
import { FaqAccordion } from "@/components/pricing/faq-accordion";
import { CTA } from "@/components/sections/cta";
import { pricingPlans } from "@/lib/data/pricing";

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32 text-center">
          <Reveal>
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Simple, honest pricing
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-6 max-w-3xl text-[40px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[60px]">
              Pay for what you use.{" "}
              <span className="italic text-accent">Nothing more.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground md:text-[18px]">
              No contracts, no hidden fees, no surprise renewals. Pick a pass
              that matches how often you train.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Questions
              </span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[44px]">
                Frequently asked.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
