// src/components/sections/stats-bar.tsx
"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Reveal } from "@/components/effects/reveal";

const stats = [
  { label: "Partner studios", value: 400, suffix: "+", decimals: 0 },
  { label: "Cities across India", value: 12, suffix: "", decimals: 0 },
  { label: "Active members", value: 25, suffix: "k", decimals: 0 },
  { label: "App store rating", value: 4.9, suffix: "★", decimals: 1 },
];

function AnimatedNumber({
  value,
  decimals,
}: {
  value: number;
  decimals: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 70 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest.toFixed(decimals);
    });
  }, [springValue, decimals]);

  return <span ref={ref}>0</span>;
}

export function StatsBar() {
  return (
    <section className="border-b border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="text-[36px] font-semibold tracking-tight md:text-[48px]">
                  <AnimatedNumber value={stat.value} decimals={stat.decimals} />
                  {stat.suffix}
                </div>
                <div className="mt-1 text-[13px] text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
