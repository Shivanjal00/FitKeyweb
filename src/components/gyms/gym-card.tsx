// src/components/gyms/gym-card.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Gym } from "@/lib/data/gyms";
import { TiltCard } from "@/components/effects/tilt-card";
import { SmartImage } from "@/components/shared/smart-image";
import {
  RatingPill,
  OpenStatus,
  PriceTag,
} from "@/components/shared/listing-bits";
import { getFromPrice } from "@/lib/rating";
import Link from "next/link";

export function GymCard({
  gym,
  index,
  distanceOverride,
}: {
  gym: Gym;
  index: number;
  distanceOverride?: string;
}) {
  const distance = distanceOverride || gym.distance;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index, 8) * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/gyms/${gym.id}`}
        className="block rounded-3xl focus-visible:outline-offset-4"
      >
        <TiltCard
          data-cursor="View"
          className="group overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-elevated"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            {gym.image ? (
              <SmartImage
                src={gym.image}
                alt={gym.name}
                sizes="(max-width: 768px) 100vw, 50vw"
                frameRatio={4 / 3}
                className="transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[13px] text-muted-foreground">
                No photo yet
              </div>
            )}
            <span className="absolute left-3 top-3 z-20">
              <RatingPill rating={gym.rating} reviews={gym.reviews} />
            </span>
            <span className="absolute right-3 top-3 z-20">
              <PriceTag from={getFromPrice(gym.price, gym.plans)} />
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-1 text-[12.5px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">
                {gym.area || "Delhi"}
                {distance ? ` · ${distance}` : ""}
              </span>
            </div>
            <h3 className="mt-1 text-[17px] font-semibold leading-snug text-foreground">
              {gym.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="chip-accent">{gym.category}</span>
              {gym.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-foreground/75"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-[12.5px] text-muted-foreground">
              <span>{gym.hours || "Hours not listed"}</span>
              <OpenStatus open={gym.open} className="text-[12.5px]" />
            </div>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
