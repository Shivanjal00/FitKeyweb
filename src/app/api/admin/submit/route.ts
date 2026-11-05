// src/app/api/admin/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getProdDb, getDevDb } from "@/lib/firebase-admin";
import { GeoPoint } from "firebase-admin/firestore";
import { ADMIN_COOKIE, isAdminSession } from "@/lib/admin-auth";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function POST(req: NextRequest) {
  if (!isAdminSession(req.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  interface ListingPayload {
    name?: string;
    area?: string;
    location?: { lat?: number; lng?: number };
    [key: string]: unknown;
  }
  let body: { type?: string; data?: ListingPayload };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { type, data } = body;

  if (type !== "gym" && type !== "library") {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }
  if (!data?.name?.trim() || !data?.area?.trim()) {
    return NextResponse.json(
      { error: "Name and area are required" },
      { status: 400 },
    );
  }

  const docId = slugify(`${data.name}-${data.area}`);
  const collectionName = type === "gym" ? "gyms" : "libraries";

  // Convert plain {lat, lng} into a real Firestore GeoPoint
  const { location, ...rest } = data;
  const payload: Record<string, unknown> = { ...rest };
  if (location?.lat != null && location?.lng != null) {
    payload.location = new GeoPoint(location.lat, location.lng);
  }

  try {
    const prodDb = getProdDb();
    await prodDb.collection(collectionName).doc(docId).set(payload);

    // Best-effort mirror into development — never blocks or fails the main save
    try {
      const devDb = getDevDb();
      await devDb.collection(collectionName).doc(docId).set(payload);
    } catch (devErr) {
      console.error("Dev mirror write failed (non-fatal):", devErr);
    }

    return NextResponse.json({ ok: true, id: docId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
