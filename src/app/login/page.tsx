// src/app/login/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Loader2, Dumbbell, Users } from "lucide-react";
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
    } catch (err) {
      const code = (err as { code?: string })?.code;
      // Closing the popup is not an error worth shouting about.
      if (
        code !== "auth/popup-closed-by-user" &&
        code !== "auth/cancelled-popup-request"
      ) {
        setError("Google sign-in failed. Please try again.");
      }
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

  // Pre-fill once from the Google account (this used to run during render).
  const prefilled = useRef(false);
  useEffect(() => {
    if (needsProfile && user && !prefilled.current) {
      prefilled.current = true;
      setFormName(user.displayName || "");
      setFormEmail(user.email || "");
      setFormPhone(user.phoneNumber || "");
    }
  }, [needsProfile, user]);

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
              <label className="text-[12px] font-semibold text-foreground">
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

            {error && <p className="text-[13px] text-red-600">{error}</p>}

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
        <div className="mt-8 rounded-3xl border border-border bg-surface p-6 shadow-soft">
          <button
            onClick={handleGoogleSignIn}
            disabled={busy}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-[14px] font-semibold text-foreground transition-colors hover:border-foreground/40 disabled:opacity-70"
          >
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <GoogleG />
            )}
            Continue with Google
          </button>

          {error && (
            <p className="mt-4 text-center text-[13px] text-red-600">{error}</p>
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
      <label className="text-[12px] font-semibold text-foreground">
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

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-[18px] w-[18px]" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.87.92 7.52 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
