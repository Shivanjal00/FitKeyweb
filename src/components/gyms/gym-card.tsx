// src/components/gyms/gym-card.tsx
"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
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
      <TiltCard
        data-cursor="View"
        className="group overflow-hidden rounded-3xl border border-border bg-background transition-colors duration-500 hover:border-foreground/40 hover:shadow-elevated"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gym.image}
            alt={gym.name}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[12px] font-semibold text-foreground backdrop-blur">
            <Star className="h-3 w-3 fill-accent text-accent" /> {gym.rating}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[12px] font-semibold text-foreground backdrop-blur">
            From ₹{gym.pricePerDay}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1 text-[12.5px] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {gym.area} · {gym.distanceKm} km
          </div>
          <h3 className="mt-1 text-[17px] font-semibold text-foreground">
            {gym.name}
          </h3>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {gym.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span
              className={`flex shrink-0 items-center gap-1.5 text-[12px] font-medium ${gym.status === "open" ? "text-accent" : "text-muted-foreground"}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${gym.status === "open" ? "bg-accent" : "bg-border-strong"}`}
              />
              {gym.status === "open" ? "Open now" : "Closed"}
            </span>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
