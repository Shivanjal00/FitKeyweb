// src/app/error.tsx
"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="hero-wash flex min-h-[70vh] items-center border-b border-border">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center md:px-8">
        <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground">
          Something went wrong
        </span>
        <h1 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-[56px]">
          We hit a <span className="mark-lime">snag.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-muted-foreground">
          This is on us, not you. Try again in a moment.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <RotateCcw className="h-4 w-4" /> Try again
          </button>
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
