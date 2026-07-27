// src/components/sections/final-cta.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

export function FinalCTA() {
  return (
    <section className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[34px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">
              Your next workout is three taps away.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/70 md:text-[16px]">
              Join 25,000+ people who&apos;ve stopped choosing between
              memberships and started actually working out.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/onboarding"
                className="group inline-flex items-center gap-1.5 rounded-full bg-background px-6 py-3.5 text-[14px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Get started free
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-primary-foreground/20 px-6 py-3.5 text-[14px] font-semibold transition-colors hover:border-primary-foreground/50"
              >
                See how it works
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-10">
              <div>
                <div className="text-[22px] font-semibold">25,000+</div>
                <div className="mt-1 text-[12px] text-primary-foreground/50">
                  Active members
                </div>
              </div>
              <div>
                <div className="text-[22px] font-semibold">400+</div>
                <div className="mt-1 text-[12px] text-primary-foreground/50">
                  Partner studios
                </div>
              </div>
              <div>
                <div className="text-[22px] font-semibold">60 sec</div>
                <div className="mt-1 text-[12px] text-primary-foreground/50">
                  Average unlock time
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
