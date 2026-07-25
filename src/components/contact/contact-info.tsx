// src/components/contact/contact-info.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";

const items = [
  { icon: Mail, label: "Email us", value: "hello@fitkey.app" },
  { icon: Phone, label: "Call us", value: "+91 80 4567 8900" },
  { icon: MapPin, label: "Visit us", value: "Koramangala, Bengaluru, India" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.08}>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground text-primary-foreground">
              <item.icon className="h-4 w-4" strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">
                {item.label}
              </div>
              <div className="mt-0.5 text-[14.5px] font-medium text-foreground">
                {item.value}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
