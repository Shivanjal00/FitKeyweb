// src/components/libraries/library-card.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Armchair } from "lucide-react";
import { Library } from "@/lib/data/libraries";
import { TiltCard } from "@/components/effects/tilt-card";
import { SmartImage } from "@/components/shared/smart-image";
import {
  RatingPill,
  OpenStatus,
  PriceTag,
} from "@/components/shared/listing-bits";
import { getFromPrice } from "@/lib/rating";
import Link from "next/link";

export function LibraryCard({
  library,
  index,
  distanceOverride,
}: {
  library: Library;
  index: number;
  distanceOverride?: string;
}) {
  const distance = distanceOverride || library.distance;

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
        href={`/libraries/${library.id}`}
        className="block rounded-3xl focus-visible:outline-offset-4"
      >
        <TiltCard
          data-cursor="View"
          className="group overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-elevated"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            {library.image ? (
              <SmartImage
                src={library.image}
                alt={library.name}
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
              <RatingPill rating={library.rating} />
            </span>
            <span className="absolute right-3 top-3 z-20">
              <PriceTag from={getFromPrice(library.price, library.plans)} />
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-1 text-[12.5px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">
                {library.area || "Delhi"}
                {distance ? ` · ${distance}` : ""}
              </span>
            </div>
            <h3 className="mt-1 text-[17px] font-semibold leading-snug text-foreground">
              {library.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {library.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-foreground/75"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-border pt-4 text-[12.5px] text-muted-foreground">
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {library.seats !== undefined && library.seats > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Armchair className="h-3.5 w-3.5" /> {library.seats} seats
                  </span>
                )}
                <span>{library.hours || "Hours not listed"}</span>
              </span>
              <OpenStatus open={library.open} className="text-[12.5px]" />
            </div>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
