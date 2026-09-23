// src/app/gyms/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { getGymById } from "@/lib/data/gyms";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gym = await getGymById(id);
  if (!gym) return { title: "Gym not found" };
  return {
    title: gym.name,
    description:
      gym.about ||
      `${gym.name} in ${gym.area} — view pricing, hours and amenities.`,
  };
}

export default async function GymDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gym = await getGymById(id);

  if (!gym) notFound();

  const gallery =
    gym.gallery && gym.gallery.length > 0 ? gym.gallery : [gym.image];

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-5 pt-8 md:px-8">
          <Link
            href="/gyms"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to gyms
          </Link>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {gallery.slice(0, 4).map((url, i) => (
                <div
                  key={url}
                  className={`relative overflow-hidden rounded-3xl border border-border ${i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                >
                  {url ? (
                    <Image
                      src={url}
                      alt={gym.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface text-[13px] text-muted-foreground">
                      No photo
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 text-[11px] font-medium text-accent">
                    {gym.category}
                  </span>
                  <span
                    className={`flex items-center gap-1.5 text-[12px] font-medium ${gym.open ? "text-accent" : "text-muted-foreground"}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${gym.open ? "bg-accent" : "bg-border-strong"}`}
                    />
                    {gym.open ? "Open now" : "Closed"}
                  </span>
                </div>
                <h1 className="mt-3 text-[32px] font-semibold tracking-tight text-foreground md:text-[42px]">
                  {gym.name}
                </h1>
                <div className="mt-2 flex items-center gap-1.5 text-[14px] text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {gym.address || gym.area}
                  {gym.distance ? ` · ${gym.distance}` : ""}
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-[15px] font-semibold text-foreground">
                  {gym.rating}
                </span>
                {gym.reviews !== undefined && (
                  <span className="text-[13px] text-muted-foreground">
                    ({gym.reviews})
                  </span>
                )}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
            <Reveal delay={0.12}>
              <div className="space-y-8">
                {gym.about && (
                  <div>
                    <h2 className="text-[17px] font-semibold text-foreground">
                      About
                    </h2>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                      {gym.about}
                    </p>
                  </div>
                )}

                {gym.trainer && (
                  <div>
                    <h2 className="text-[17px] font-semibold text-foreground">
                      Trainers
                    </h2>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                      {gym.trainer}
                    </p>
                  </div>
                )}

                {gym.tags.length > 0 && (
                  <div>
                    <h2 className="text-[17px] font-semibold text-foreground">
                      Amenities
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {gym.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-[12.5px] text-foreground/80"
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
              <div className="space-y-4">
                <div className="rounded-3xl border border-border bg-surface p-5">
                  <div className="flex items-center gap-2 text-[13.5px] text-foreground">
                    <Clock className="h-4 w-4 text-muted-foreground" />{" "}
                    {gym.hours || "Hours not listed"}
                  </div>
                  {gym.phone && (
                    <div className="mt-2.5 flex items-center gap-2 text-[13.5px] text-foreground">
                      <Phone className="h-4 w-4 text-muted-foreground" />{" "}
                      {gym.phone}
                    </div>
                  )}
                </div>

                {gym.plans.length > 0 && (
                  <div className="rounded-3xl border border-border bg-surface p-5">
                    <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Passes
                    </h3>
                    <div className="mt-3 space-y-3">
                      {gym.plans.map((plan) => (
                        <div
                          key={plan.name}
                          className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                        >
                          <span className="text-[14px] text-foreground">
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
                    Ready to train here?
                  </p>
                  <Link
                    href="/login"
                    className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-background px-5 py-3 text-[13.5px] font-semibold text-foreground"
                  >
                    Unlock a pass
                    <ArrowUpRight className="h-3.5 w-3.5" />
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
