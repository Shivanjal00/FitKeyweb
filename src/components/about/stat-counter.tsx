// src/components/about/stat-counter.tsx
"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Reveal } from "@/components/effects/reveal";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  decimals: number;
}

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
  const springValue = useSpring(motionValue, {
    damping: 24,
    stiffness: 70,
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals);
      }
    });
  }, [springValue, decimals]);

  return <span ref={ref}>0</span>;
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08}>
          <div className="text-center md:text-left">
            <div className="text-[36px] font-semibold tracking-tight text-foreground md:text-[48px]">
              <AnimatedNumber value={stat.value} decimals={stat.decimals} />
              {stat.suffix}
            </div>
            <div className="mt-1 text-[13px] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
