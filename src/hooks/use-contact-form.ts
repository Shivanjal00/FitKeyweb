// src/hooks/use-contact-form.ts
"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialData: FormData = { name: "", email: "", subject: "", message: "" };

export function useContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Please enter your name";
    if (!data.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "That doesn't look like a valid email";
    if (!data.subject.trim()) next.subject = "Please add a subject";
    if (!data.message.trim() || data.message.trim().length < 10)
      next.message = "Message should be at least 10 characters";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // TODO: replace with a real API route, e.g. POST /api/contact
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setData(initialData);
    } catch {
      setStatus("error");
    }
  };

  return { data, errors, status, update, submit, setStatus };
}
