// src/app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getProdStorage } from "@/lib/firebase-admin";
import { randomUUID } from "crypto";
import { ADMIN_COOKIE, isAdminSession } from "@/lib/admin-auth";

const MAX_FILES = 10;
const MAX_BYTES = 8 * 1024 * 1024; // 8 MB per photo
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export async function POST(req: NextRequest) {
  if (!isAdminSession(req.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let files: { data: string }[];
  try {
    ({ files } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!Array.isArray(files) || files.length === 0) {
    return NextResponse.json({ error: "No files provided" }, { status: 400 });
  }
  if (files.length > MAX_FILES) {
    return NextResponse.json(
      { error: `Upload at most ${MAX_FILES} photos at a time` },
      { status: 400 },
    );
  }

  try {
    const bucket = getProdStorage();
    const urls: string[] = [];

    for (const file of files) {
      const matches = String(file?.data ?? "").match(
        /^data:(image\/[a-z+.-]+);base64,(.+)$/i,
      );
      if (!matches) continue;
      const contentType = matches[1].toLowerCase();
      if (!ALLOWED.includes(contentType)) continue;
      const buffer = Buffer.from(matches[2], "base64");
      if (buffer.length > MAX_BYTES) {
        return NextResponse.json(
          { error: "Each photo must be under 8 MB" },
          { status: 413 },
        );
      }
      const ext = contentType.split("/")[1] || "jpg";
      const path = `listings/${randomUUID()}.${ext}`;

      const fileRef = bucket.file(path);
      await fileRef.save(buffer, { metadata: { contentType } });
      urls.push(`https://storage.googleapis.com/${bucket.name}/${path}`);
    }

    return NextResponse.json({ urls });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
