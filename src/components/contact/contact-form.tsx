// src/components/contact/contact-form.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";

export function ContactForm() {
  const { data, errors, status, update, submit, setStatus } = useContactForm();

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-border bg-surface px-8 py-16 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
            <h3 className="mt-4 text-[19px] font-semibold text-foreground">
              Message sent
            </h3>
            <p className="mt-1.5 max-w-sm text-[14px] text-muted-foreground">
              Thanks for reaching out — our team will get back to you within one
              business day.
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
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                value={data.name}
                error={errors.name}
                onChange={(v) => update("name", v)}
                placeholder="Your full name"
              />
              <Field
                label="Email"
                value={data.email}
                error={errors.email}
                onChange={(v) => update("email", v)}
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <Field
              label="Subject"
              value={data.subject}
              error={errors.subject}
              onChange={(v) => update("subject", v)}
              placeholder="What's this about?"
            />

            <div>
              <label className="text-[13px] font-medium text-foreground">
                Message
              </label>
              <textarea
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us how we can help..."
                rows={5}
                className={`mt-1.5 w-full rounded-2xl border bg-surface px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none ${
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

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>

            {status === "error" && (
              <p className="flex items-center gap-1.5 text-[13px] text-red-500">
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
      <label className="text-[13px] font-medium text-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-1.5 w-full rounded-full border bg-surface px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none ${
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
