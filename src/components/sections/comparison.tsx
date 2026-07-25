"use client";

import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export function Comparison() {
  const oldWay = [
    "12-month lock-in contracts",
    "One studio, one commute",
    "Cancellation via phone call",
    "Hidden joining fees",
    "Guest passes cost extra",
  ];
  const fitkey = [
    "Pay per day, week or month",
    "Hundreds of studios, one key",
    "Cancel in two taps",
    "Transparent pricing, always",
    "Bring a friend on eligible passes",
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Why FitKey
            </span>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
              Memberships are broken. This isn&apos;t.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <TiltCard
              tiltStrength={3}
              glow={false}
              className="h-full rounded-[28px] border border-border bg-surface p-8"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Old way
              </div>
              <ul className="mt-5 space-y-3 text-[15px] text-foreground/80">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-border-strong" />
                    <span className="line-through decoration-border-strong/60">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.12}>
            <TiltCard
              tiltStrength={3}
              className="h-full rounded-[28px] border border-foreground bg-foreground p-8 text-primary-foreground"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
                FitKey
              </div>
              <ul className="mt-5 space-y-3 text-[15px]">
                {fitkey.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>{" "}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
