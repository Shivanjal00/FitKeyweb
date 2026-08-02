// src/components/pricing/includes-grid.tsx
"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

export function IncludesGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 0.04}>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-[14px] text-foreground/85">{item}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
