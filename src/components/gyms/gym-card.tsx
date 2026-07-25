// src/components/gyms/gym-card.tsx
"use client";

import { motion } from "framer-motion";
import { Star, MapPin, ShieldCheck } from "lucide-react";
import { Gym } from "@/lib/data/gyms";
import { TiltCard } from "@/components/effects/tilt-card";

export function GymCard({ gym, index }: { gym: Gym; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <TiltCard className="group overflow-hidden rounded-3xl border border-border bg-background transition-colors duration-500 hover:border-foreground/40 hover:shadow-elevated">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gym.image}
            alt={gym.name}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
            {gym.category}
          </span>
          {gym.verified && (
            <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-background/90 text-accent backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[16px] font-semibold text-foreground">
              {gym.name}
            </h3>
            <div className="flex shrink-0 items-center gap-1 text-[13px] font-medium text-foreground">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              {gym.rating}
            </div>
          </div>

          <div className="mt-1.5 flex items-center gap-1 text-[13px] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {gym.area} · {gym.distanceKm} km away
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {gym.amenities.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-foreground/70"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <div>
              <span className="text-[18px] font-semibold text-foreground">
                ₹{gym.pricePerDay}
              </span>
              <span className="text-[13px] text-muted-foreground">
                {" "}
                / day pass
              </span>
            </div>
            <button className="rounded-full bg-foreground px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-transform group-hover:-translate-y-0.5">
              Unlock
            </button>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
