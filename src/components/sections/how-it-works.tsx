"use client";

// src/components/sections/how-it-works.tsx
import { Search, CreditCard, QrCode, Dumbbell } from "lucide-react";
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
            Find, subscribe, check in, train.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            No separate gym memberships, no long-term lock-in — just a simple
            flow that gets you training.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          <FeatureBlock
            index="01"
            icon={Search}
            title="Find"
            description="Search gyms around you — filter by area, category and amenities."
            bullets={[
              "Real, verified gym listings",
              "Actual photos of the space",
              "Honest availability",
            ]}
            image="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80"
          />
          <FeatureBlock
            index="02"
            icon={CreditCard}
            title="Subscribe"
            description="Choose your Gymbym plan. Pay in seconds via UPI, card or wallet."
            bullets={[
              "No joining fees",
              "Cancel anytime",
              "Transparent pricing",
            ]}
            image="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1400&q=80"
            reverse
          />
          <FeatureBlock
            index="03"
            icon={QrCode}
            title="Check in"
            description="Use your Gymbym pass at the gym. Flash the code, you're in."
            bullets={[
              "Digital check-in",
              "No printed passes needed",
              "Works across participating gyms",
            ]}
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
          />
          <FeatureBlock
            index="04"
            icon={Dumbbell}
            title="Train"
            description="Workout without the usual membership hassle."
            bullets={[
              "No gym-hopping paperwork",
              "Same subscription, any partner gym",
              "Just show up",
            ]}
            image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80"
          />
        </div>
      </div>
    </section>
  );
}
