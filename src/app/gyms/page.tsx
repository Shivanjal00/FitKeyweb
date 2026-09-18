// src/app/gyms/page.tsx
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { getGyms, getGymCategories } from "@/lib/data/gyms";
import { GymsPageClient } from "@/components/gyms/gyms-page-client";

export const revalidate = 60;

export default async function GymsPage() {
  const gyms = await getGyms();
  const categories = getGymCategories(gyms);

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <MapPin className="h-3 w-3" /> Delhi NCR · {gyms.length}+ places
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-[38px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[54px]">
              Studios worth{" "}
              <span className="italic text-accent">the walk over.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
              Every space here is vetted for quality, equipment and coaching.
              Browse, favourite, and unlock a pass — all in a couple of taps.
            </p>
          </Reveal>
        </div>
      </section>

      <GymsPageClient gyms={gyms} categories={categories} />
    </>
  );
}
