// src/components/about/team-card.tsx
"use client";

import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export function TeamCard({
  name,
  role,
  image,
  delay,
}: {
  name: string;
  role: string;
  image: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <TiltCard tiltStrength={4} glow={false} className="group">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-[15px] font-semibold text-foreground">
          {name}
        </h3>
        <p className="text-[13px] text-muted-foreground">{role}</p>
      </TiltCard>
    </Reveal>
  );
}
