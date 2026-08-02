// src/app/contact/page.tsx — replace just the top hero section
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { ContactMethodCard } from "@/components/contact/contact-method-card";
import { ContactForm } from "@/components/contact/contact-form";
import { SupportSidebar } from "@/components/contact/support-sidebar";
import { OfficesGrid } from "@/components/contact/offices-grid";
import { contactMethods } from "@/lib/data/contact";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-24 text-center md:px-8 md:pt-32">
          <Reveal>
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <MessageCircle className="h-3 w-3" /> We&apos;re here to help
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[36px] font-semibold leading-[1.08] tracking-tight text-foreground md:text-[54px]">
              Let&apos;s talk.{" "}
              <span className="italic text-accent">However works best.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground">
              Support, partnerships, press or something else entirely — send a
              note and a real person will get back to you, usually within a few
              hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {contactMethods.map((method, i) => (
              <ContactMethodCard
                key={method.label}
                {...method}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>
            <SupportSidebar />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Offices
            </span>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
              Find us across India.
            </h2>
          </Reveal>
          <div className="mt-10">
            <OfficesGrid />
          </div>
        </div>
      </section>

      <section className="bg-foreground text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
          <Reveal>
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
              Skip the form. Just start training.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-primary-foreground/70">
              Download the app, unlock hundreds of studios, and book your first
              session in under a minute.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/onboarding"
                className="rounded-full bg-background px-6 py-3.5 text-[14px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Get the app
              </Link>
              <Link
                href="/gyms"
                className="rounded-full border border-primary-foreground/25 px-6 py-3.5 text-[14px] font-semibold transition-colors hover:border-primary-foreground/60"
              >
                Browse studios
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
