// src/components/libraries/library-cta.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export function LibraryCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Reveal>
          <TiltCard className="relative overflow-hidden rounded-[32px] bg-foreground p-10 text-primary-foreground md:p-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/50">
              Run a library?
            </span>
            <h3 className="mt-4 max-w-lg text-[28px] font-semibold leading-[1.1] tracking-tight md:text-[36px]">
              List your reading room and fill empty seats every hour of the day.
            </h3>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-background px-5 py-3 text-[13.5px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Partner with us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/gyms"
                className="inline-flex items-center rounded-full border border-primary-foreground/25 px-5 py-3 text-[13.5px] font-semibold transition-colors hover:border-primary-foreground/60"
              >
                Browse gyms
              </Link>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
