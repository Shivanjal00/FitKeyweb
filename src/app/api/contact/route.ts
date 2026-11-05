// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getProdDb } from "@/lib/firebase-admin";

export const runtime = "nodejs";

// Light in-memory throttle: 5 messages / 10 min per IP (per server instance).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBJECTS = [
  "General question",
  "Membership support",
  "Partner a gym",
  "Press & media",
  "Careers",
];

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot filled in => bot. Pretend success so it learns nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (tooMany(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || name.length > 120)
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  if (!EMAIL_RE.test(email) || email.length > 200)
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  if (message.length < 10 || message.length > 5000)
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });

  try {
    await getProdDb()
      .collection("contactMessages")
      .add({
        name,
        email,
        subject: SUBJECTS.includes(subject) ? subject : "General question",
        message,
        status: "new",
        source: "website",
        createdAt: FieldValue.serverTimestamp(),
      });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact message save failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
