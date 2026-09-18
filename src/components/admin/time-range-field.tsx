// src/components/admin/time-range-field.tsx
"use client";

import { Clock } from "lucide-react";

export function formatTime12h(value: string) {
  if (!value) return "";
  const [h, m] = value.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}

export function TimeRangeField({
  openTime,
  setOpenTime,
  closeTime,
  setCloseTime,
  is24h,
  setIs24h,
}: {
  openTime: string;
  setOpenTime: (v: string) => void;
  closeTime: string;
  setCloseTime: (v: string) => void;
  is24h: boolean;
  setIs24h: (v: boolean) => void;
}) {
  return (
    <div>
      <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
        Hours
      </label>

      <label className="mt-2 flex items-center gap-2 text-[13px] text-foreground">
        <input
          type="checkbox"
          checked={is24h}
          onChange={(e) => setIs24h(e.target.checked)}
        />
        Open 24 hours
      </label>

      {!is24h && (
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="relative">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="time"
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-[13.5px] text-foreground focus:border-foreground focus:outline-none"
            />
          </div>
          <div className="relative">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="time"
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-[13.5px] text-foreground focus:border-foreground focus:outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
