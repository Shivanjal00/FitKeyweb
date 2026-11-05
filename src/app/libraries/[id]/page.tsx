// src/app/libraries/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Armchair,
  Clock,
  ArrowLeft,
  ArrowUpRight,
  Navigation,
} from "lucide-react";
import { getLibraryById } from "@/lib/data/libraries";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { SmartImage } from "@/components/shared/smart-image";
import { RatingPill, OpenStatus } from "@/components/shared/listing-bits";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const library = await getLibraryById(id);
  if (!library) return { title: "Library not found" };
  return {
    title: library.name,
    description:
      library.about ||
      `${library.name} in ${library.area} — view pricing, hours and seats.`,
  };
}

export default async function LibraryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const library = await getLibraryById(id);

  if (!library) notFound();

  const directionsHref = library.location
    ? `https://www.google.com/maps/search/?api=1&query=${library.location.lat},${library.location.lng}`
    : null;

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 pt-8 md:px-8">
          <Link
            href="/libraries"
            className="inline-flex items-center gap-1.5 rounded-full text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to libraries
          </Link>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-5 py-6 md:px-8 md:py-8">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-surface">
              {library.image ? (
                <SmartImage
                  src={library.image}
                  alt={library.name}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  frameRatio={16 / 9}
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[13px] text-muted-foreground">
                  No photo yet
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <OpenStatus
                  open={library.open}
                  openLabel="Open now"
                  className="text-[12.5px]"
                />
                <h1 className="mt-3 text-[32px] font-semibold leading-tight tracking-tight text-foreground md:text-[44px]">
                  {library.name}
                </h1>
                <div className="mt-2 flex items-start gap-1.5 text-[14px] text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {library.area}
                    {library.distance ? ` · ${library.distance}` : ""}
                  </span>
                </div>
              </div>
              <div className="rounded-full border border-border bg-surface p-1">
                <RatingPill rating={library.rating} size="md" />
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
            <Reveal delay={0.12}>
              <div className="space-y-8">
                {library.about && (
                  <div>
                    <h2 className="text-[18px] font-semibold text-foreground">
                      About
                    </h2>
                    <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                      {library.about}
                    </p>
                  </div>
                )}

                {library.tags.length > 0 && (
                  <div>
                    <h2 className="text-[18px] font-semibold text-foreground">
                      Amenities
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {library.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[12.5px] text-foreground/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="space-y-4 md:sticky md:top-24 md:self-start">
                <div className="rounded-3xl border border-border bg-surface p-5">
                  <div className="flex items-center gap-2.5 text-[13.5px] text-foreground">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {library.hours || "Hours not listed"}
                  </div>
                  {library.seats !== undefined && library.seats > 0 && (
                    <div className="mt-3 flex items-center gap-2.5 text-[13.5px] text-foreground">
                      <Armchair className="h-4 w-4 text-muted-foreground" />
                      {library.seats} seats
                    </div>
                  )}
                  {directionsHref && (
                    <a
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-[13px] font-semibold text-foreground transition-colors hover:border-foreground"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Get directions
                    </a>
                  )}
                </div>

                {library.plans.length > 0 && (
                  <div className="rounded-3xl border border-border bg-surface p-5">
                    <h3 className="text-[13px] font-semibold text-foreground">
                      Passes
                    </h3>
                    <div className="mt-3 space-y-3">
                      {library.plans.map((plan, i) => (
                        <div
                          key={`${plan.name}-${i}`}
                          className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                        >
                          <span className="text-[14px] text-foreground/85">
                            {plan.name}
                          </span>
                          <span className="text-[15px] font-semibold text-foreground">
                            ₹{plan.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <TiltCard className="rounded-3xl bg-foreground p-5 text-primary-foreground">
                  <p className="text-[13.5px] text-primary-foreground/80">
                    Ready to study here?
                  </p>
                  <Link
                    href="/login"
                    className="group mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-3 text-[13.5px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Unlock a pass
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
