// src/app/gyms/page.tsx
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { getGyms, getGymCategories, Gym } from "@/lib/data/gyms";
import { GymsPageClient } from "@/components/gyms/gyms-page-client";

export const metadata = {
  title: "Gyms",
  description:
    "Browse verified gyms across Delhi NCR. Filter by category, compare pricing and unlock a pass instantly.",
};

export const revalidate = 60;

export default async function GymsPage() {
  let gyms: Gym[] = [];
  try {
    gyms = await getGyms();
  } catch (err) {
    console.error("Failed to load gyms:", err);
  }
  const categories = getGymCategories(gyms);

  return (
    <>
      <section className="hero-wash border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-24 md:px-8 md:pb-14 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Delhi NCR
              {gyms.length > 0 &&
                ` · ${gyms.length} ${gyms.length === 1 ? "studio" : "studios"} listed`}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-[40px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[56px]">
              Studios worth <span className="mark-lime">the walk over.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
              Every space here is vetted for quality, equipment and coaching.
              Search by area, compare passes and unlock one in a couple of
              taps.
            </p>
          </Reveal>
        </div>
      </section>

      <GymsPageClient gyms={gyms} categories={categories} />
    </>
  );
}
