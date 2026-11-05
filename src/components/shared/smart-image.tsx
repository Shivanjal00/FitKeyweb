// src/components/shared/smart-image.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Photo that never crops a logo in half.
 *
 * Real photos fill the frame (object-cover). When the uploaded image's shape is
 * very different from the frame (a square logo in a 16:9 hero, a tall poster in
 * a 4:3 card) we show it whole (object-contain) over a soft blurred copy of
 * itself, so it still looks intentional.
 */
export function SmartImage({
  src,
  alt,
  sizes,
  frameRatio = 4 / 3,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  /** width / height of the frame this image sits in */
  frameRatio?: number;
  priority?: boolean;
  className?: string;
}) {
  const [fit, setFit] = useState<"cover" | "contain">("cover");

  return (
    <>
      {fit === "contain" && (
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          sizes="25vw"
          className="scale-125 object-cover blur-2xl brightness-[0.45] saturate-150"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onLoad={(e) => {
          const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
          if (!w || !h) return;
          const ratio = w / h / frameRatio;
          setFit(ratio < 0.78 || ratio > 1.3 ? "contain" : "cover");
        }}
        className={cn(
          fit === "contain" ? "object-contain" : "object-cover",
          className,
        )}
      />
    </>
  );
}
