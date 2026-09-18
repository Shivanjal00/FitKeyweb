"use client";

import { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

interface GridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureGrid({
  eyebrow,
  heading,
  description,
  items,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  items: GridItem[];
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {eyebrow}
              </span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
                {heading}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <TiltCard className="group h-full rounded-3xl border border-border bg-background p-6 transition-colors duration-500 hover:border-foreground/40 hover:shadow-elevated">
                  {" "}
                  <div className="inline-grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                    <item.icon
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </TiltCard>{" "}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
