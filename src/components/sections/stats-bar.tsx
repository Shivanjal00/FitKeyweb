// src/components/sections/stats-bar.tsx
import { MapPin, Sparkles, Handshake } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

const items = [
  {
    icon: MapPin,
    title: "Launching in Delhi",
    description: "Starting local, growing city by city.",
  },
  {
    icon: Sparkles,
    title: "Founding members opening soon",
    description: "Be among the first to join.",
  },
  {
    icon: Handshake,
    title: "Partner gyms joining Gymbym",
    description: "New studios added every week.",
  },
];

export function StatsBar() {
  return (
    <section className="border-b border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary-foreground/20 text-accent">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                  <div className="mt-0.5 text-[13px] text-primary-foreground/60">
                    {item.description}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
