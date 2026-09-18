// src/components/admin/location-field.tsx
"use client";

import { useState } from "react";
import { MapPin, Loader2, CheckCircle2 } from "lucide-react";

export function LocationField({
  onCapture,
}: {
  onCapture: (lat: number, lng: number) => void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  function capture() {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setCoords({ lat, lng });
        onCapture(lat, lng);
        setStatus("done");
      },
      () => setStatus("error"),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  return (
    <div>
      <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
        Location
      </label>
      <button
        type="button"
        onClick={capture}
        disabled={status === "loading"}
        className="mt-1.5 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-background px-4 py-3 text-[13.5px] font-medium text-foreground transition-colors hover:border-foreground/40 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "done" && <CheckCircle2 className="h-4 w-4 text-accent" />}
        {status === "idle" && <MapPin className="h-4 w-4" />}
        {status === "loading" && "Getting your location..."}
        {status === "done" &&
          coords &&
          `Captured: ${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`}
        {status === "idle" && "Use current location"}
        {status === "error" && "Couldn't get location — tap to retry"}
      </button>
    </div>
  );
}
