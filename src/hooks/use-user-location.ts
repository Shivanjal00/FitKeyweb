// src/hooks/use-user-location.ts
"use client";

import { useState } from "react";
import { Coordinates } from "@/lib/geo";

export function useUserLocation() {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  function requestLocation() {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus("done");
      },
      () => setStatus("error"),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  function setManualLocation(lat: number, lng: number) {
    setCoords({ lat, lng });
    setStatus("done");
  }

  function reset() {
    setCoords(null);
    setStatus("idle");
  }

  return { coords, status, requestLocation, setManualLocation, reset };
}
