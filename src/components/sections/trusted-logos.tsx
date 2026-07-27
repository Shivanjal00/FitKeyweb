// src/components/sections/trusted-logos.tsx
import { Reveal } from "@/components/effects/reveal";

const logos = [
  "LeMille",
  "F45",
  "Cult Fit Partners",
  "PowerLifting India",
  "ZumbaFit",
  "PureGym",
];

export function TrustedLogos() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Trusted by leading fitness brands
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[15px] font-semibold text-foreground/40">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
