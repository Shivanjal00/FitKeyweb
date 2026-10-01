// src/components/shared/location-search.tsx
"use client";

import { useState } from "react";
import { MapPin, Loader2, X } from "lucide-react";
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

  function handleUseGps() {
    setError("");
    setLabel("Your current location");
    requestLocation();
  }

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setError("");
    setSearching(true);
    try {
      const res = await fetch(
        `/api/geocode?address=${encodeURIComponent(query)}`,
      );
      if (!res.ok) {
        setError("Couldn't find that location.");
        setSearching(false);
        return;
      }
      const data = await res.json();
      setManualLocation(data.lat, data.lng);
      setLabel(data.formattedAddress || query);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setSearching(false);
    }
  }

  function handleClear() {
    reset();
    setQuery("");
    setLabel(null);
  }

  // propagate up whenever coords settle
  if (coords && status === "done" && label) {
    onLocationChange(coords, label);
  }

  if (coords && label) {
    return (
      <div className="flex items-center justify-between rounded-full border border-accent-secondary/30 bg-accent-secondary/5 px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[13px] font-medium text-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent-secondary" /> Near {label}
        </span>
        <button
          onClick={handleClear}
          className="grid h-6 w-6 place-items-center rounded-full text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by area, e.g. Nizamuddin East"
          className="flex-1 rounded-full border border-border bg-surface px-4 py-2.5 text-[13.5px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={searching}
          className="rounded-full border border-border bg-background px-4 py-2.5 text-[13px] font-medium text-foreground hover:border-foreground/40 disabled:opacity-60"
        >
          {searching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
        </button>
      </form>
      <button
        onClick={handleUseGps}
        disabled={status === "loading"}
        className="flex items-center gap-1.5 text-[13px] font-medium text-accent-secondary disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <MapPin className="h-3.5 w-3.5" />
        )}
        Use my current location
      </button>
      {error && <p className="text-[12.5px] text-red-500">{error}</p>}
      {status === "error" && !error && (
        <p className="text-[12.5px] text-red-500">
          Couldn't get your location.
        </p>
      )}
    </div>
  );
}
