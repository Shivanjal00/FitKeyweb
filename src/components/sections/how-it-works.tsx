"use client";

// src/components/sections/how-it-works.tsx
import { Search, CalendarCheck, DoorOpen } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { FeatureBlock } from "@/components/sections/feature-block";

export function HowItWorks() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            How it works
          </span>
          <h2 className="mt-4 max-w-2xl text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
            From &quot;I should work out&quot; to &quot;just did&quot; — in
            three taps.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            We built Gymbym so the friction between deciding to train and
            actually training disappears. No signup fees, no monthly minimum —
            just show up.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          <FeatureBlock
            index="01"
            icon={Search}
            title="Discover nearby"
            description="Browse curated studios around you — filter by category, distance and price."
            bullets={[
              "Real-time availability",
              "Editorial photos, not stock",
              "Honest reviews from real members",
            ]}
            image="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80"
          />
          <FeatureBlock
            index="02"
            icon={CalendarCheck}
            title="Unlock a pass"
            description="Pick a day, week or month pass. Pay in seconds via UPI, card or wallet."
            bullets={[
              "No joining fees",
              "Cancel anytime",
              "Instant confirmation",
            ]}
            image="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1400&q=80"
            reverse
          />
          <FeatureBlock
            index="03"
            icon={DoorOpen}
            title="Walk in and train"
            description="Show your digital QR pass at the studio. Get in, no repeat, anywhere."
            bullets={[
              "Works offline once loaded",
              "No printed passes needed",
              "Front desk scans in seconds",
            ]}
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
          />
        </div>
      </div>
    </section>
  );
}
