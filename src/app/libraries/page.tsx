// src/app/libraries/page.tsx
import { BookOpen } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { getLibraries, getLibraryCategories } from "@/lib/data/libraries";
import { LibrariesPageClient } from "@/components/libraries/libraries-page-client";

export const metadata = {
  title: "Libraries",
  description:
    "Find silent study rooms, 24x7 reading spaces and coworking libraries across Delhi NCR.",
};

export const revalidate = 60;

export default async function LibrariesPage() {
  const libraries = await getLibraries();
  const categories = getLibraryCategories(libraries);

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <BookOpen className="h-3 w-3" /> Delhi NCR · {libraries.length}+
              reading rooms
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-[38px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[54px]">
              Quiet rooms for{" "}
              <span className="italic text-accent">long, deep work.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
              Silent libraries, 24×7 study lofts and coworking reading rooms —
              vetted for Wi-Fi, seating and vibe. Unlock by the hour, day or
              month.
            </p>
          </Reveal>
        </div>
      </section>

      <LibrariesPageClient libraries={libraries} categories={categories} />
    </>
  );
}
