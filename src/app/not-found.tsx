// src/app/not-found.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="hero-wash flex min-h-[70vh] items-center border-b border-border">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center md:px-8">
        <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground">
          Error 404
        </span>
        <h1 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[56px]">
          This rep <span className="mark-lime">didn’t count.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-muted-foreground">
          The page you’re looking for has moved or doesn’t exist. Let’s get you
          back to training.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/gyms"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Find a gym
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3.5 text-[14px] font-semibold text-foreground transition-colors hover:border-foreground"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
