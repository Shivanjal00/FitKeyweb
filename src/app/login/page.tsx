// src/app/login/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Loader2, Globe, Dumbbell, Users } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { useAuth, UserRole } from "@/contexts/auth-context";
import { Reveal } from "@/components/effects/reveal";

export default function LoginPage() {
  const router = useRouter();
  const { user, role, loading, refreshRole } = useAuth();

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [chosenRole, setChosenRole] = useState<UserRole | null>(null);

  const needsProfile = !loading && !!user && !role;

  useEffect(() => {
    if (!loading && user && role) {
      router.push("/");
    }
  }, [loading, user, role, router]);

  async function handleGoogleSignIn() {
    setError("");
    setBusy(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch {
      setError("Google sign-in failed. Try again.");
    } finally {
      setBusy(false);
    }
  }

  async function handleCompleteProfile(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!user) return;
    if (!formName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formPhone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!chosenRole) {
      setError("Please choose whether you're a customer or an owner.");
      return;
    }

    setBusy(true);
    try {
      await setDoc(doc(db, "users", user.uid), {
        name: formName.trim(),
        email: formEmail.trim() || null,
        phone: formPhone.trim(),
        role: chosenRole,
        createdAt: serverTimestamp(),
      });
      await refreshRole();
      router.push("/");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  if (
    needsProfile &&
    formName === "" &&
    formEmail === "" &&
    formPhone === "" &&
    user
  ) {
    setTimeout(() => {
      setFormName(user.displayName || "");
      setFormEmail(user.email || "");
      setFormPhone(user.phoneNumber || "");
    }, 0);
  }

  if (needsProfile) {
    const emailLocked = !!user?.email;
    const phoneLocked = !!user?.phoneNumber;
    const nameLocked = !!user?.displayName;

    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-16">
        <Reveal>
          <h1 className="text-center text-[26px] font-semibold text-foreground">
            Complete your profile
          </h1>
          <p className="mt-2 text-center text-[14px] text-muted-foreground">
            Just a couple of details before you continue.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleCompleteProfile}
            className="mt-8 space-y-4 rounded-3xl border border-border bg-surface p-6"
          >
            <Field
              label="Full name"
              value={formName}
              onChange={setFormName}
              placeholder="Your name"
              locked={nameLocked}
            />
            <Field
              label="Email"
              value={formEmail}
              onChange={setFormEmail}
              placeholder="you@example.com"
              locked={emailLocked}
              type="email"
            />
            <Field
              label="Phone number"
              value={formPhone}
              onChange={setFormPhone}
              placeholder="+91 98765 43210"
              locked={phoneLocked}
              type="tel"
            />

            <div>
              <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
                I am a
              </label>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setChosenRole("customer")}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl border p-4 transition-colors ${
                    chosenRole === "customer"
                      ? "border-foreground bg-foreground text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-foreground/40"
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span className="text-[13px] font-medium">Customer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setChosenRole("owner")}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl border p-4 transition-colors ${
                    chosenRole === "owner"
                      ? "border-foreground bg-foreground text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-foreground/40"
                  }`}
                >
                  <Dumbbell className="h-5 w-5" />
                  <span className="text-[13px] font-medium">Owner</span>
                </button>
              </div>
            </div>

            {error && <p className="text-[13px] text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={busy}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue"}
            </button>
          </form>
        </Reveal>
      </div>
    );
  }

  if (!loading && user && role) {
    return null;
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-5">
      <Reveal>
        <h1 className="text-center text-[28px] font-semibold text-foreground">
          Sign in
        </h1>
        <p className="mt-2 text-center text-[14px] text-muted-foreground">
          Welcome back. Continue with Google to get started.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-3xl border border-border bg-surface p-6">
          <button
            onClick={handleGoogleSignIn}
            disabled={busy}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-[14px] font-semibold text-foreground transition-colors hover:border-foreground/40 disabled:opacity-70"
          >
            <Globe className="h-4 w-4" /> Continue with Google
          </button>

          {error && (
            <p className="mt-4 text-center text-[13px] text-red-500">{error}</p>
          )}
        </div>
      </Reveal>

      {/*
        Phone OTP sign-in is temporarily disabled — Firebase's web reCAPTCHA
        shows a visible challenge, and the SMS text can't be branded with
        our app name. Re-enable once a dedicated OTP provider (e.g. MSG91)
        with DLT registration is wired in.
      */}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  locked,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  locked: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}{" "}
        {locked && (
          <span className="normal-case text-muted-foreground/70">
            (from your account)
          </span>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={locked}
        className={`mt-1.5 w-full rounded-full border px-4 py-3 text-[14px] focus:outline-none ${
          locked
            ? "cursor-not-allowed border-border bg-surface text-muted-foreground"
            : "border-border bg-background text-foreground focus:border-foreground"
        }`}
      />
    </div>
  );
}
