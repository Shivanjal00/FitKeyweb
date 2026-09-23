// src/components/libraries/library-card.tsx
"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Armchair } from "lucide-react";
import { Library } from "@/lib/data/libraries";
import { TiltCard } from "@/components/effects/tilt-card";
import Image from "next/image";
import Link from "next/link";

export function LibraryCard({
  library,
  index,
}: {
  library: Library;
  index: number;
}) {
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
      <Link href={`/libraries/${library.id}`}>
        <TiltCard
          data-cursor="View"
          className="group overflow-hidden rounded-3xl border border-border bg-background transition-colors duration-500 hover:border-foreground/40 hover:shadow-elevated"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            {library.image ? (
              <Image
                src={library.image}
                alt={library.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[13px] text-muted-foreground">
                No photo yet
              </div>
            )}
            <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[12px] font-semibold text-foreground backdrop-blur">
              <Star className="h-3 w-3 fill-accent text-accent" />{" "}
              {library.rating}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[12px] font-semibold text-foreground backdrop-blur">
              From ₹{library.price}
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-1 text-[12.5px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {library.area}
              {library.distance ? ` · ${library.distance}` : ""}
            </div>
            <h3 className="mt-1 text-[17px] font-semibold text-foreground">
              {library.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {library.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-y-2 border-t border-border pt-4 text-[12.5px] text-muted-foreground">
              {library.seats !== undefined && (
                <span className="flex items-center gap-1.5">
                  <Armchair className="h-3.5 w-3.5" /> {library.seats} seats
                </span>
              )}
              <span>{library.hours || "Hours not listed"}</span>
              <span
                className={`flex items-center gap-1.5 font-medium ${library.open ? "text-accent" : "text-muted-foreground"}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${library.open ? "bg-accent" : "bg-border-strong"}`}
                />
                {library.open ? "Open" : "Closed"}
              </span>
            </div>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
