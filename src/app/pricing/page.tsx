// src/app/pricing/page.tsx
import { Sparkles, Check } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { getPricingPlans } from "@/lib/data/pricing";
export const metadata = {
  title: "Pricing",
  description: "Simple, honest membership pricing for gyms across Delhi.",
};

export const revalidate = 60;

export default async function PricingPage() {
  const plans = await getPricingPlans();

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background py-24">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 text-center md:px-8">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Gymbym Pass
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.08] tracking-tight text-foreground md:text-[52px]">
            {plans.length === 0
              ? "Pricing is on its way."
              : "Choose your membership."}
          </h1>
        </Reveal>
        {plans.length === 0 && (
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-muted-foreground">
              We&apos;re finalizing simple, honest plans for our Delhi launch.
              Check back soon.
            </p>
          </Reveal>
        )}
      </div>

      {plans.length > 0 && (
        <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {plans.map((plan) => (
            <TiltCard
              key={plan.id}
              className={`rounded-[28px] border p-7 ${
                plan.highlighted
                  ? "border-foreground bg-foreground text-primary-foreground"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlighted && (
                <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground">
                  Most popular
                </span>
              )}
              <h3
                className={`mt-3 text-[13px] font-semibold uppercase tracking-wide ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}
              >
                {plan.duration}
              </h3>
              <div className="mt-2 text-[32px] font-semibold tracking-tight">
                ₹{plan.price}
              </div>
              <ul className="mt-5 space-y-2.5 text-[13.5px]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      )}
    </section>
  );
}
