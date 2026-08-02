// src/components/about/value-card.tsx
"use client";

import { Heart, ShieldCheck, CircleCheck, Zap, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  shield: ShieldCheck,
  check: CircleCheck,
  zap: Zap,
};

export function ValueCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  delay: number;
}) {
  const Icon = iconMap[icon];

  return (
    <Reveal delay={delay}>
      <TiltCard
        tiltStrength={5}
        className="h-full rounded-3xl border border-border bg-surface p-7"
      >
        <div className="grid h-10 w-10 place-items-center rounded-full border border-accent/30 text-accent">
          <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
        </div>
        <h3 className="mt-5 text-[16px] font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      </TiltCard>
    </Reveal>
  );
}
