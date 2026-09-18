// src/components/admin/admin-gate.tsx
"use client";

import { useState } from "react";
import { Lock, Loader2 } from "lucide-react";

export function AdminGate({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Incorrect password");
        setLoading(false);
        return;
      }

      onSuccess();
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="mt-24 rounded-3xl border border-border bg-surface p-8 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-accent/30 text-accent">
        <Lock className="h-5 w-5" />
      </div>
      <h1 className="mt-4 text-[20px] font-semibold text-foreground">
        Restricted access
      </h1>
      <p className="mt-1 text-[13.5px] text-muted-foreground">
        Enter the password to continue.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          className="w-full rounded-full border border-border bg-background px-4 py-3 text-center text-[14px] text-foreground focus:border-foreground focus:outline-none"
        />
        {error && <p className="text-[12.5px] text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Checking...
            </>
          ) : (
            "Enter"
          )}
        </button>
      </form>
    </div>
  );
}
