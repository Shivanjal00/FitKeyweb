"use client";

import {
  Search,
  CalendarCheck,
  QrCode,
  MapPin,
  CreditCard,
  Heart,
  Bell,
  Clock,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { FeatureBlock } from "@/components/sections/feature-block";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Comparison } from "@/components/sections/comparison";
import { CTA } from "@/components/sections/cta";

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Features
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[68px]">
              Everything you need to just{" "}
              <span className="italic text-accent">show up and train.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
              We designed FitKey around one idea — remove every step between
              wanting to work out and unlocking a studio you love.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="space-y-24 md:space-y-40">
            <FeatureBlock
              index="01"
              icon={Search}
              title="Smart discovery"
              description="Filter by vibe, distance, price and amenities. Editorial cards show you what a place actually feels like before you go."
              bullets={[
                "Built for one-hand, on-the-go use",
                "Works offline once your key is loaded",
                "Zero friction cancellations",
              ]}
              image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80"
            />
            <FeatureBlock
              index="02"
              icon={CalendarCheck}
              title="Book in seconds"
              description="Pick a day, choose a slot, pay. Daily, weekly or monthly passes — no memberships, no lock-ins, no awkward calls."
              bullets={[
                "Built for one-hand, on-the-go use",
                "Works offline once your key is loaded",
                "Zero friction cancellations",
              ]}
              image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
              reverse
            />
            <FeatureBlock
              index="03"
              icon={QrCode}
              title="Walk in with a QR"
              description="Your key lives in the app. Flash the code at the desk and you're in. It's the fastest check-in you'll ever have."
              bullets={[
                "Built for one-hand, on-the-go use",
                "Works offline once your key is loaded",
                "Zero friction cancellations",
              ]}
              image="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="The little things"
        heading="Details that make the difference."
        description="Every screen, every tap, every reminder — considered. Because a fitness app should feel as good as the workout."
        items={[
          {
            icon: MapPin,
            title: "Nearby-first",
            description:
              "See what's within a 10 minute walk before anything else.",
          },
          {
            icon: CreditCard,
            title: "UPI + cards",
            description:
              "Pay with UPI, cards or wallet. Receipts land in your inbox.",
          },
          {
            icon: Heart,
            title: "Favourites",
            description: "Save studios you love and jump back in with one tap.",
          },
          {
            icon: Bell,
            title: "Gentle reminders",
            description: "Nudges before your slot so you never miss a session.",
          },
          {
            icon: Clock,
            title: "Flexible windows",
            description:
              "Morning, midday, evening — book the time that fits your day.",
          },
          {
            icon: Users,
            title: "Bring a friend",
            description:
              "Add a plus-one on eligible passes and train together.",
          },
          {
            icon: ShieldCheck,
            title: "Verified studios",
            description: "Every gym is vetted for quality, hygiene and staff.",
          },
          {
            icon: Sparkles,
            title: "Curated picks",
            description:
              "Weekly editorial drops — the best of the city, hand-picked.",
          },
        ]}
      />

      <Comparison />
      <CTA />
    </>
  );
}
