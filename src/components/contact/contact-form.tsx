// src/components/contact/contact-form.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useContactForm } from "@/hooks/use-contact-form";
import { subjectOptions } from "@/lib/data/contact";

export function ContactForm() {
  const { data, errors, status, update, submit, setStatus } = useContactForm();

  return (
    <div className="rounded-[28px] border border-border bg-surface p-8 md:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
            <h3 className="mt-4 text-[19px] font-semibold text-foreground">
              Message sent
            </h3>
            <p className="mt-1.5 max-w-sm text-[14px] text-muted-foreground">
              Thanks for reaching out — a real person will get back to you
              within one business day.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full border border-border px-5 py-2.5 text-[13px] font-medium text-foreground hover:border-foreground"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={submit}
            noValidate
          >
            <h2 className="text-[24px] font-semibold tracking-tight text-foreground">
              Send us a message
            </h2>
            <p className="mt-1.5 text-[14px] text-muted-foreground">
              We read every one. Expect a reply within one business day.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field
                label="Your name"
                value={data.name}
                error={errors.name}
                onChange={(v) => update("name", v)}
                placeholder="Ananya Sharma"
              />
              <Field
                label="Email"
                value={data.email}
                error={errors.email}
                onChange={(v) => update("email", v)}
                placeholder="you@company.com"
                type="email"
              />
            </div>

            <div className="mt-5">
              <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
                What&apos;s this about?
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {subjectOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => update("subject", option)}
                    className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                      data.subject === option
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border bg-background text-foreground/80 hover:border-foreground/40"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
                Message
              </label>
              <textarea
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us a bit about what you need..."
                rows={5}
                className={`mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none ${
                  errors.message
                    ? "border-red-400 focus:border-red-400"
                    : "border-border focus:border-foreground"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1 text-[12.5px] text-red-500">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-[12.5px] text-muted-foreground">
                By sending, you agree to our{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  privacy policy
                </Link>
                .
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>

            {status === "error" && (
              <p className="mt-4 flex items-center gap-1.5 text-[13px] text-red-500">
                <AlertCircle className="h-4 w-4" /> Something went wrong. Please
                try again.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-full border bg-background px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none ${
          error
            ? "border-red-400 focus:border-red-400"
            : "border-border focus:border-foreground"
        }`}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-[12.5px] text-red-500">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}
