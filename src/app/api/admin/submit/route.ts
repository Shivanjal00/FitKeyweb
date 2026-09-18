// src/app/api/admin/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getProdDb, getDevDb } from "@/lib/firebase-admin";
import { GeoPoint } from "firebase-admin/firestore";
function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function POST(req: NextRequest) {
  const session = req.cookies.get("fk_admin_session")?.value;
  if (!session || session !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
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
  const payload = { ...data };
  if (payload.location?.lat != null && payload.location?.lng != null) {
    payload.location = new GeoPoint(payload.location.lat, payload.location.lng);
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
