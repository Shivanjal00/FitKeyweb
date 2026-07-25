"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
export function CTA() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <TiltCard
            tiltStrength={2}
            className="relative overflow-hidden rounded-[36px] border border-border bg-background p-10 md:p-16"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h3 className="text-[32px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[44px]">
                  Try it once. You&apos;ll never go back to a membership.
                </h3>
                <p className="mt-3 text-[15px] text-muted-foreground md:text-[16px]">
                  Download the app, unlock your first gym and see what a
                  frictionless workout day feels like.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/onboarding"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get the app
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3.5 text-[14px] font-semibold text-foreground transition-colors hover:border-foreground"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
