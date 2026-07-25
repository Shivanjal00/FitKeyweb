// src/app/about/page.tsx
"use client";

import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { StatGrid } from "@/components/about/stat-counter";
import { TeamCard } from "@/components/about/team-card";
import { CTA } from "@/components/sections/cta";
import { stats, values, team } from "@/lib/data/about";
import { TiltCard } from "@/components/effects/tilt-card";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> About FitKey
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[68px]">
              We&apos;re building the{" "}
              <span className="italic text-accent">key to every gym.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
              FitKey started with a simple frustration — why does staying fit
              require signing a contract? We&apos;re fixing that, one studio at
              a time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <StatGrid stats={stats} />
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                What we believe
              </span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
                A few things we won&apos;t compromise on.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <TiltCard
                  tiltStrength={5}
                  className="h-full rounded-3xl border border-border bg-surface p-8"
                >
                  <div className="text-[13px] font-semibold text-accent">
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 text-[19px] font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                The team
              </span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
                Small team. Big obsession with the details.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
