// src/hooks/use-contact-form.ts
"use client";

import { useState } from "react";
import { subjectOptions } from "@/lib/data/contact";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useContactForm(initialSubject?: string) {
  const startData: FormData = {
    name: "",
    email: "",
    subject:
      initialSubject && subjectOptions.includes(initialSubject)
        ? initialSubject
        : subjectOptions[0],
    message: "",
    website: "",
  };

  const [data, setData] = useState<FormData>(startData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (field !== "subject" && errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Please enter your name";
    if (!data.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      next.email = "That doesn’t look like a valid email";
    if (data.message.trim().length < 10)
      next.message = "Message should be at least 10 characters";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // This used to be a fake 1.2s timeout, so no message was ever delivered.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          subject: data.subject,
          message: data.message.trim(),
          website: data.website,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setData({ ...startData, subject: data.subject });
    } catch {
      setStatus("error");
    }
  };

  return { data, errors, status, update, submit, setStatus };
}
