// src/app/about/page.tsx
"use client";

import { Link2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/effects/reveal";
import { StoryCollage } from "@/components/about/story-collage";
import { ValueCard } from "@/components/about/value-card";
import { MilestoneTimeline } from "@/components/about/milestone-timeline";
import { TeamCard } from "@/components/about/team-card";
import { StatGrid } from "@/components/about/stat-counter";
import {
  story,
  mission,
  values,
  milestones,
  stats,
  team,
} from "@/lib/data/about";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <Link2 className="h-3 w-3" /> {story.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-[36px] font-semibold leading-[1.08] tracking-tight text-foreground md:text-[52px]">
              {story.heading[0]}
              <br />
              <span className="text-accent">{story.heading[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
              {story.description}
            </p>
          </Reveal>

          <div className="mt-12">
            <Reveal delay={0.2}>
              <StoryCollage images={story.images} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {mission.eyebrow}
              </span>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
                {mission.heading}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                {mission.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              What we stand for
            </span>
            <h2 className="mt-4 max-w-xl text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
              Four values. Every product decision.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <ValueCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                description={v.description}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Milestones
              </span>
              <h2 className="mx-auto mt-4 max-w-md text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
                A short story, still being written.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14">
            <MilestoneTimeline milestones={milestones} />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <StatGrid stats={stats} cols={2} />
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              The team
            </span>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
              Small team. Big obsessions.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
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

      <section className="bg-foreground text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal>
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-tight md:text-[42px]">
              Come train with us.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/onboarding"
                className="group inline-flex items-center gap-1.5 rounded-full bg-background px-5 py-3 text-[13.5px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Get the app
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-primary-foreground/25 px-5 py-3 text-[13.5px] font-semibold transition-colors hover:border-primary-foreground/60"
              >
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
