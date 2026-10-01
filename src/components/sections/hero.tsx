// src/components/sections/hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[68px]">
            One membership.{" "}
            <span className="italic text-accent-secondary">Multiple gyms.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
            Access participating gyms across Delhi with one simple Gymbym
            subscription. No long-term gym-hopping hassle. Just choose a gym,
            check in and train.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/gyms"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore gyms
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3.5 text-[14px] font-semibold text-foreground transition-colors hover:border-foreground"
            >
              View memberships
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-6 flex items-center gap-2 text-[13px] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Delhi · Multiple neighbourhoods ·
            One subscription
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="relative mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[32px] border border-border md:aspect-[16/6]">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
              alt="Gym floor"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
