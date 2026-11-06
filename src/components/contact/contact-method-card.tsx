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
      <TiltCard className="group h-full rounded-3xl border border-border bg-background p-7 transition-colors duration-500 hover:border-foreground/40 hover:shadow-elevated">
        <div className="icon-badge h-11 w-11 rounded-full">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
        </div>
        <div className="mt-5 text-[12px] font-semibold text-muted-foreground">
          {label}
        </div>
        <div className="mt-1.5 text-[17px] font-semibold text-foreground">
          {value}
        </div>
        <p className="mt-1 text-[13px] text-muted-foreground">{note}</p>
        <a
          href={href}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="group/link mt-4 rounded-full after:absolute after:inset-0 after:content-[''] inline-flex items-center gap-1 text-[13.5px] font-semibold text-foreground"
        >
          Reach out
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </TiltCard>
    </Reveal>
  );
}
