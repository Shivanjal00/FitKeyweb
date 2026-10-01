// src/components/sections/comparison.tsx
"use client";

import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export function Comparison() {
  const oldWay = [
    "Choose one gym",
    "Pay separately",
    "Locked to one location",
    "Travel becomes inconvenient",
  ];
  const gymbym = [
    "One subscription",
    "Choose any participating gym",
    "Train where convenient",
    "One account",
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Why Gymbym
            </span>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
              One subscription. Multiple gyms across Delhi.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <TiltCard className="h-full rounded-[28px] border border-border bg-surface p-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Traditional gym membership
              </div>
              <ul className="mt-5 space-y-3 text-[15px] text-foreground/80">
                {oldWay.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 text-[11px] font-semibold text-border-strong">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.12}>
            <TiltCard className="h-full rounded-[28px] border border-foreground bg-foreground p-8 text-primary-foreground">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
                Gymbym
              </div>
              <ul className="mt-5 space-y-3 text-[15px]">
                {gymbym.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 text-[11px] font-semibold text-accent">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
