// src/lib/rating.ts
// One place that decides whether a rating is trustworthy enough to show.
// Rule: no fake stats. A listing with no reviews is "New", not "4.5".
export function getRatingDisplay(rating: number, reviews?: number) {
  const hasRating = rating > 0 && (reviews === undefined || reviews > 0);
  return {
    hasRating,
    label: hasRating ? rating.toFixed(1) : "New",
  };
}

// "From ₹X": lowest plan price, or null if nothing is priced yet.
export function getFromPrice(price: number, plans: { price: number }[]) {
  const prices = plans.map((p) => p.price).filter((p) => p > 0);
  if (prices.length > 0) return Math.min(...prices);
  return price > 0 ? price : null;
}
