// src/app/partner/page.tsx
import Link from "next/link";
import {
  Search,
  TrendingUp,
  LayoutDashboard,
  Banknote,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export const metadata = {
  title: "Partner with Gymbym",
  description:
    "Turn empty gym capacity into new customers. List your gym on Gymbym.",
};

const benefits = [
  {
    icon: Search,
    title: "Get discovered",
    description: "Reach people searching for gyms nearby.",
  },
  {
    icon: TrendingUp,
    title: "Fill unused capacity",
    description: "Convert off-peak availability into additional revenue.",
  },
  {
    icon: LayoutDashboard,
    title: "Manage members",
    description: "One dashboard for subscriptions and check-ins.",
  },
  {
    icon: Banknote,
    title: "Get paid",
    description: "Transparent settlements.",
  },
  {
    icon: Rocket,
    title: "Grow",
    description: "Reach customers who may otherwise never discover your gym.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-24 text-center md:px-8 md:pt-32">
          <Reveal>
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              For gym owners
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[36px] font-semibold leading-[1.08] tracking-tight text-foreground md:text-[54px]">
              Turn empty gym capacity{" "}
              <span className="italic text-accent-secondary">
                into new customers.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground">
              Gymbym helps gyms get discovered, fill off-peak hours and manage
              members — all in one place.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Become a Gymbym Partner
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
              Gymbym helps gyms:
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <TiltCard className="h-full rounded-3xl border border-border bg-surface p-7">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-accent-secondary/30 text-accent-secondary">
                    <b.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
          <Reveal>
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
              Become a Gymbym Partner
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-primary-foreground/70">
              List your gym, reach more members, and turn unused capacity into
              revenue.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
