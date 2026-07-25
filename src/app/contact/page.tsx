// src/app/contact/page.tsx
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Get in touch
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-[40px] font-semibold leading-[1.02] tracking-tight text-foreground md:text-[60px]">
              We&apos;d love to{" "}
              <span className="italic text-accent">hear from you.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
              Questions, partnership ideas, or just feedback on the app — drop
              us a line.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
