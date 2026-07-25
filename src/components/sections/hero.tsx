// src/components/sections/hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Now live in your city
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[68px]">
            One key. Every gym.{" "}
            <span className="italic text-accent">Just show up and train.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
            FitKey unlocks hundreds of premium gyms and studios with a single
            pass — no memberships, no lock-ins, no awkward front-desk calls.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/onboarding"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get the app
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3.5 text-[14px] font-semibold text-foreground transition-colors hover:border-foreground"
            >
              See how it works
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
