// src/components/about/milestone-timeline.tsx
"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/effects/reveal";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
        className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border"
      />
      <div className="space-y-10">
        {milestones.map((m, i) => (
          <Reveal key={m.year} delay={i * 0.1}>
            <div className="relative pl-8">
              <span className="absolute left-0 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-accent bg-background" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
                {m.year}
              </span>
              <h3 className="mt-1.5 text-[19px] font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-1.5 max-w-lg text-[14px] leading-relaxed text-muted-foreground">
                {m.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
