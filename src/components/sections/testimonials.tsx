// src/components/sections/testimonials.tsx
import { Quote } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Loved by members
            </span>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
              Real people. Real workouts. Real results.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TiltCard className="h-full rounded-3xl border border-border bg-surface p-7">
                <Quote className="h-6 w-6 text-accent" />
                <p className="mt-4 text-[14.5px] leading-relaxed text-foreground/85">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[13.5px] font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
