// src/components/contact/offices-grid.tsx
"use client";

import { MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { offices } from "@/lib/data/contact";

export function OfficesGrid() {
  return (
    <div className="space-y-4">
      {offices.map((office, i) => (
        <Reveal key={office.city} delay={i * 0.08}>
          <TiltCard
            tiltStrength={3}
            className="rounded-3xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-[17px] font-semibold text-foreground">
                {office.city}
              </h3>
              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {office.tag}
              </span>
            </div>
            <div className="mt-3 flex items-start gap-2 text-[13.5px] text-muted-foreground">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />{" "}
              {office.address}
            </div>
            <div className="mt-2 flex items-center gap-2 text-[13.5px] text-muted-foreground">
              <Clock className="h-3.5 w-3.5 shrink-0" /> {office.hours}
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}
