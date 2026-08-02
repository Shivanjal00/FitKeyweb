// src/components/contact/contact-method-card.tsx
"use client";

import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

const iconMap = { mail: Mail, phone: Phone, chat: MessageCircle };

export function ContactMethodCard({
  icon,
  label,
  value,
  note,
  href,
  delay,
}: {
  icon: keyof typeof iconMap;
  label: string;
  value: string;
  note: string;
  href: string;
  delay: number;
}) {
  const Icon = iconMap[icon];

  return (
    <Reveal delay={delay}>
      <TiltCard
        tiltStrength={4}
        className="group h-full rounded-3xl border border-border bg-background p-7 transition-colors duration-500 hover:border-foreground/40 hover:shadow-elevated"
      >
        <div className="grid h-10 w-10 place-items-center rounded-full border border-accent/30 text-accent transition-colors group-hover:bg-accent group-hover:text-primary-foreground">
          <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
        </div>
        <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-1.5 text-[17px] font-semibold text-foreground">
          {value}
        </div>
        <p className="mt-1 text-[13px] text-muted-foreground">{note}</p>
        <a
          href={href}
          className="group/link mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-foreground"
        >
          Reach out
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </TiltCard>
    </Reveal>
  );
}
