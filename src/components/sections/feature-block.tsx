"use client";

import { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

interface FeatureBlockProps {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
}

export function FeatureBlock({
  index,
  icon: Icon,
  title,
  description,
  bullets,
  image,
  reverse,
}: FeatureBlockProps) {
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden h-24 w-40 rounded-2xl border border-border bg-surface p-4 shadow-elevated md:block">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {index}
            </div>
            <div className="mt-1 text-[13px] font-semibold text-foreground">
              {title}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div>
          <div className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-foreground text-primary-foreground">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
            {description}
          </p>
          <ul className="mt-6 space-y-2 text-[14px] text-foreground/80">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
