// src/components/shared/location-search.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Loader2, X, LocateFixed } from "lucide-react";
import { useUserLocation } from "@/hooks/use-user-location";
import { Coordinates } from "@/lib/geo";

export function LocationSearch({
  onLocationChange,
}: {
  onLocationChange: (coords: Coordinates | null, label: string | null) => void;
}) {
  const { coords, status, requestLocation, setManualLocation, reset } =
    useUserLocation();
  const [query, setQuery] = useState("");
  const [label, setLabel] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  // Always call the latest callback without re-running the effect below.
  const callbackRef = useRef(onLocationChange);
  useEffect(() => {
    callbackRef.current = onLocationChange;
  });

  // Tell the parent whenever the location settles OR is cleared.
  const hadLocation = useRef(false);
  useEffect(() => {
    if (coords && status === "done" && label) {
      hadLocation.current = true;
      callbackRef.current(coords, label);
    } else if (!coords && hadLocation.current) {
      hadLocation.current = false;
      callbackRef.current(null, null);
    }
  }, [coords, status, label]);

  function handleUseGps() {
    setError("");
    setLabel("your current location");
    requestLocation();
  }

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setError("");
    setSearching(true);
    try {
      const res = await fetch(`/api/geocode?address=${encodeURIComponent(q)}`);
      if (!res.ok) {
        setError("We couldn’t find that area. Try a nearby landmark.");
        return;
      }
      const data = await res.json();
      setManualLocation(data.lat, data.lng);
      setLabel(q);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSearching(false);
    }
  }

  function handleClear() {
    reset();
    setQuery("");
    setLabel(null);
    setError("");
  }

  // Active state: one pill, same height as the inputs next to it.
  if (coords && label) {
    return (
      <div className="flex h-[46px] items-center justify-between gap-3 rounded-full border border-accent-secondary/30 bg-accent-secondary/5 pl-4 pr-2">
        <span className="flex min-w-0 items-center gap-2 text-[13px] font-medium text-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-accent-secondary" />
          <span className="truncate">Nearest to {label}</span>
        </span>
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear location"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <form onSubmit={handleSearch} className="relative min-w-0 flex-1">
          <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Area, e.g. Saket"
            aria-label="Search by area"
            className="h-[46px] w-full rounded-full border border-border bg-background pl-10 pr-16 text-[13.5px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          <button
            type="submit"
            disabled={searching || !query.trim()}
            className="absolute right-1.5 top-1/2 inline-flex h-8 min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-foreground px-3 text-[12.5px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-30"
          >
            {searching ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              "Go"
            )}
          </button>
        </form>

        <button
          type="button"
          onClick={handleUseGps}
          disabled={status === "loading"}
          title="Use my current location"
          className="inline-flex h-[46px] shrink-0 items-center gap-1.5 rounded-full border border-border bg-background px-4 text-[13px] font-semibold text-accent-secondary transition-colors hover:border-accent-secondary/50 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <LocateFixed className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">Near me</span>
        </button>
      </div>

      <div aria-live="polite">
        {error && <p className="mt-2 text-[12.5px] text-red-600">{error}</p>}
        {status === "error" && !error && (
          <p className="mt-2 text-[12.5px] text-red-600">
            We couldn’t get your location. Check your browser permission.
          </p>
        )}
      </div>
    </div>
  );
}
