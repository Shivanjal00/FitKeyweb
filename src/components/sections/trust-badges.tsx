// src/components/sections/trust-badges.tsx
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

const badges = [
  "Verified gyms",
  "Transparent pricing",
  "Secure payments",
  "Digital check-in",
  "No hidden joining fee",
];

export function TrustBadges() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-[13.5px] font-medium text-foreground/80"
              >
                <CheckCircle2 className="h-4 w-4 text-accent-secondary" />{" "}
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
