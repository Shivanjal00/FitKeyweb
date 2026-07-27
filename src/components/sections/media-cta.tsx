// src/components/sections/media-cta.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

export function MediaCta({
  image,
  heading,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  image: string;
  heading: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-border md:aspect-[16/7]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <h2 className="max-w-lg text-[26px] font-semibold leading-[1.1] tracking-tight text-white md:text-[38px]">
                {heading}
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/70 md:text-[15px]">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={primaryHref}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-3 text-[13.5px] font-semibold text-black transition-transform hover:-translate-y-0.5"
                >
                  {primaryLabel}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:border-white/70"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
