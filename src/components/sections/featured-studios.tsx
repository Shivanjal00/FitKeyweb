// src/components/sections/featured-studios.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { GymCard } from "@/components/gyms/gym-card";
import { getGyms } from "@/lib/data/gyms";

export async function FeaturedStudios() {
  const gyms = await getGyms();
  const featured = gyms.slice(0, 4);

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Featured studios
              </span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[48px]">
                Hand-picked, obsessively vetted.
              </h2>
            </div>
            <Link
              href="/gyms"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-foreground"
            >
              Explore all gyms
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((gym, i) => (
            <GymCard key={gym.id} gym={gym} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
