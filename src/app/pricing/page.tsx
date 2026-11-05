// src/app/pricing/page.tsx
import { Sparkles, Check } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { getPricingPlans, PricingPlan } from "@/lib/data/pricing";
export const metadata = {
  title: "Pricing",
  description: "Simple, honest membership pricing for gyms across Delhi.",
};

export const revalidate = 60;

export default async function PricingPage() {
  let plans: PricingPlan[] = [];
  try {
    plans = await getPricingPlans();
  } catch (err) {
    console.error("Failed to load plans:", err);
  }

  return (
    <section className="hero-wash relative flex min-h-[70vh] flex-col items-center overflow-hidden border-b border-border py-24">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 text-center md:px-8">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[12px] font-medium text-muted-foreground">
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
        <div className="relative mx-auto mt-14 grid w-full max-w-5xl gap-6 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
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
                <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-foreground">
                  Most popular
                </span>
              )}
              <h3 className="mt-3 text-[18px] font-semibold">{plan.name}</h3>
              <p
                className={`text-[13px] ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {plan.duration}
              </p>
              <div className="mt-2 text-[32px] font-semibold tracking-tight">
                ₹{plan.price}
              </div>
              <ul className="mt-5 space-y-2.5 text-[13.5px]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="icon-badge mt-0.5 h-4 w-4 shrink-0 rounded-full">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
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
