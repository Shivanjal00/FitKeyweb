// src/components/contact/support-sidebar.tsx
"use client";

import { Clock, Building2, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export function SupportSidebar() {
  return (
    <div className="space-y-5">
      <Reveal>
        <TiltCard
          tiltStrength={3}
          className="rounded-3xl border border-border bg-surface p-6"
        >
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/30 text-accent">
              <Clock className="h-3.5 w-3.5" />
            </span>
            <div>
              <div className="text-[14px] font-semibold text-foreground">
                Support hours
              </div>
              <div className="text-[12.5px] text-muted-foreground">
                Monday to Saturday
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Weekdays
              </div>
              <div className="mt-1 text-[14px] font-semibold text-foreground">
                9:00 – 20:00 IST
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Saturday
              </div>
              <div className="mt-1 text-[14px] font-semibold text-foreground">
                10:00 – 17:00 IST
              </div>
            </div>
          </div>
        </TiltCard>
      </Reveal>

      <Reveal delay={0.08}>
        <TiltCard
          tiltStrength={3}
          className="rounded-3xl bg-foreground p-6 text-primary-foreground"
        >
          <div className="flex items-center gap-2.5">
            <Building2 className="h-4 w-4" />
            <span className="text-[14px] font-semibold">Partner a studio</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-primary-foreground/70">
            Run a studio and want to be listed? Get thousands of new visits a
            month with zero listing fees.
          </p>
          <a
            href="mailto:partners@fitkey.app"
            className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold"
          >
            partners@fitkey.app
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </TiltCard>
      </Reveal>
    </div>
  );
}
