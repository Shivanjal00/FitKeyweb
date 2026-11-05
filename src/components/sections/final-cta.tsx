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
            <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/75 md:text-[16px]">
              One Gymbym subscription, participating gyms across Delhi. Pick a
              studio, check in and train — no long-term gym-hopping hassle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/gyms"
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore gyms
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full border border-primary-foreground/25 px-6 py-3.5 text-[14px] font-semibold transition-colors hover:border-primary-foreground/60"
              >
                See membership
              </Link>
            </div>

            <ul className="mt-14 grid gap-4 border-t border-primary-foreground/10 pt-10 text-left sm:grid-cols-3">
              {[
                ["Delhi first", "Launching with verified local gyms."],
                ["Transparent pricing", "Every pass price shown up front."],
                ["Digital check-in", "Your pass on your phone. Just show up."],
              ].map(([title, text]) => (
                <li key={title}>
                  <div className="text-[15px] font-semibold text-accent">
                    {title}
                  </div>
                  <div className="mt-1 text-[13px] leading-relaxed text-primary-foreground/70">
                    {text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
