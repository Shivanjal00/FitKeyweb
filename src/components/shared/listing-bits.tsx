// src/components/shared/listing-bits.tsx
// Small shared pieces used by gym + library cards and detail pages.
import { Star } from "lucide-react";
import { getRatingDisplay } from "@/lib/rating";

export function RatingPill({
  rating,
  reviews,
  size = "sm",
}: {
  rating: number;
  reviews?: number;
  size?: "sm" | "md";
}) {
  const { hasRating, label } = getRatingDisplay(rating, reviews);
  const star = size === "md" ? "h-4 w-4" : "h-3 w-3";

  if (!hasRating) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[12px] font-semibold text-foreground">
        New
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[12px] font-semibold text-foreground backdrop-blur">
      <Star
        className={`${star} fill-[#B8F23D] text-foreground`}
        strokeWidth={1.5}
      />
      {label}
      {reviews !== undefined && reviews > 0 && (
        <span className="font-normal text-muted-foreground">({reviews})</span>
      )}
    </span>
  );
}

export function OpenStatus({
  open,
  openLabel = "Open",
  className = "",
}: {
  open: boolean;
  openLabel?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold ${
        open ? "status-open" : "text-muted-foreground"
      } ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          open ? "status-dot-open" : "bg-border-strong"
        }`}
      />
      {open ? openLabel : "Closed"}
    </span>
  );
}

export function PriceTag({ from }: { from: number | null }) {
  return (
    <span className="rounded-full bg-background/90 px-2.5 py-1 text-[12px] font-semibold text-foreground backdrop-blur">
      {from === null ? "Pricing soon" : `From ₹${from}`}
    </span>
  );
}
