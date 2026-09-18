// src/app/pricing/page.tsx
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

export default function PricingPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-2xl px-5 text-center md:px-8">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Coming soon
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 text-[36px] font-semibold leading-[1.08] tracking-tight text-foreground md:text-[52px]">
            Pricing is on its way.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-muted-foreground">
            We&apos;re finalizing simple, honest plans for gyms and libraries.
            Check back soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// // src/app/pricing/page.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Sparkles } from "lucide-react";
// import { Reveal } from "@/components/effects/reveal";
// import { BillingToggle } from "@/components/pricing/billing-toggle";
// import { PricingCard } from "@/components/pricing/pricing-card";
// import { IncludesGrid } from "@/components/pricing/includes-grid";
// import { FaqAccordion } from "@/components/pricing/faq-accordion";
// import { pricingPlans, includes } from "@/lib/data/pricing";

// export default function PricingPage() {
//   const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

//   return (
//     <>
//       <section className="border-b border-border bg-background">
//         <div className="mx-auto max-w-3xl px-5 pb-16 pt-24 text-center md:px-8 md:pt-32">
//           <Reveal>
//             <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
//               <Sparkles className="h-3 w-3" /> Simple, honest pricing
//             </span>
//           </Reveal>
//           <Reveal delay={0.08}>
//             <h1 className="mt-6 text-[36px] font-semibold leading-[1.08] tracking-tight text-foreground md:text-[54px]">
//               One pass. Every studio.
//               <br />
//               <span className="text-accent">Priced for your pace.</span>
//             </h1>
//           </Reveal>
//           <Reveal delay={0.16}>
//             <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground">
//               Pick a rhythm that fits. Switch, pause or cancel anytime — no long
//               contracts, no fine print.
//             </p>
//           </Reveal>
//           <Reveal delay={0.24}>
//             <div className="mt-8">
//               <BillingToggle billing={billing} setBilling={setBilling} />
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       <section className="border-b border-border bg-background">
//         <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
//           <div className="grid gap-6 md:grid-cols-3">
//             {pricingPlans.map((plan, i) => (
//               <PricingCard
//                 key={plan.id}
//                 plan={plan}
//                 billing={billing}
//                 delay={i * 0.1}
//               />
//             ))}
//           </div>
//           <p className="mt-8 text-center text-[13px] text-muted-foreground">
//             All plans include GST. Cancel anytime. Prices in Indian Rupees.
//           </p>
//         </div>
//       </section>

//       <section className="border-b border-border bg-surface">
//         <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
//           <Reveal>
//             <div className="max-w-lg">
//               <h2 className="text-[28px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[36px]">
//                 What every pass includes.
//               </h2>
//               <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
//                 No matter which plan you choose, the essentials never change.
//                 Real access, real studios, real support.
//               </p>
//             </div>
//           </Reveal>
//           <div className="mt-10">
//             <IncludesGrid items={includes} />
//           </div>
//         </div>
//       </section>

//       <section className="border-b border-border bg-background">
//         <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
//           <Reveal>
//             <div className="mx-auto max-w-2xl text-center">
//               <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
//                 Questions
//               </span>
//               <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
//                 Everything you&apos;d want to ask.
//               </h2>
//             </div>
//           </Reveal>
//           <div className="mt-12">
//             <FaqAccordion />
//           </div>
//         </div>
//       </section>

//       <section className="bg-foreground text-primary-foreground">
//         <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
//           <Reveal>
//             <h2 className="text-[30px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
//               Start today. Cancel any time.
//             </h2>
//             <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-primary-foreground/70">
//               Your first workout is one tap away. Choose the pass that suits you
//               and step into your next studio tonight.
//             </p>
//             <div className="mt-8 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/onboarding"
//                 className="rounded-full bg-background px-6 py-3.5 text-[14px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
//               >
//                 Get the app
//               </Link>
//               <Link
//                 href="/gyms"
//                 className="rounded-full border border-primary-foreground/25 px-6 py-3.5 text-[14px] font-semibold transition-colors hover:border-primary-foreground/60"
//               >
//                 Browse gyms
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }
