// src/components/pricing/billing-toggle.tsx
"use client";

import { motion } from "framer-motion";

export function BillingToggle({
  billing,
  setBilling,
}: {
  billing: "monthly" | "yearly";
  setBilling: (v: "monthly" | "yearly") => void;
}) {
  return (
    <div className="relative mx-auto inline-flex rounded-full border border-border bg-surface p-1">
      {(["monthly", "yearly"] as const).map((option) => (
        <button
          key={option}
          onClick={() => setBilling(option)}
          className="relative z-10 flex items-center gap-1.5 rounded-full px-5 py-2 text-[13.5px] font-medium capitalize transition-colors"
        >
          <span
            className={
              billing === option ? "text-primary-foreground" : "text-foreground"
            }
          >
            {option}
          </span>
          {option === "yearly" && (
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                billing === "yearly"
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-accent/10 text-accent"
              }`}
            >
              -17%
            </span>
          )}
          {billing === option && (
            <motion.span
              layoutId="billing-pill"
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="absolute inset-0 -z-10 rounded-full bg-foreground"
            />
          )}
        </button>
      ))}
    </div>
  );
}
