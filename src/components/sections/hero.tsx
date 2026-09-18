// src/components/sections/hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Star, MapPin } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import Image from "next/image";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
];

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

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Now live in Bengaluru
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl text-[44px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[68px]">
            One key.{" "}
            <span className="italic text-accent">Hundreds of gyms.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
            Discover premium studios near you and unlock day, week or month
            passes. No memberships. No lock-ins. Just workouts, whenever
            you&apos;re ready.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/onboarding"
                className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Start training
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/gyms"
                className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3.5 text-[14px] font-semibold text-foreground transition-colors hover:border-foreground"
              >
                Browse gyms
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((src) => (
                  <div
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-background"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[13px] font-semibold text-foreground">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" /> 4.9
                </div>
                <div className="text-[12px] text-muted-foreground">
                  Loved by 20,000+ members
                </div>
              </div>
            </div>
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
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-border bg-background/90 p-3 pr-5 shadow-elevated backdrop-blur md:bottom-6 md:left-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-foreground text-primary-foreground text-[13px] font-bold">
                IA
              </div>
              <div>
                <div className="text-[13px] font-semibold text-foreground">
                  Iron Atelier
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
                  <MapPin className="h-3 w-3" /> 1.2 km ·{" "}
                  <Star className="h-3 w-3 fill-accent text-accent" /> 4.8
                </div>
              </div>
              <span className="ml-2 rounded-full bg-accent/10 px-2.5 py-1 text-[12px] font-semibold text-accent">
                ₹349
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
