// src/app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getProdStorage } from "@/lib/firebase-admin";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const session = req.cookies.get("fk_admin_session")?.value;
  if (!session || session !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { files } = await req.json();
  if (!Array.isArray(files) || files.length === 0) {
    return NextResponse.json({ error: "No files provided" }, { status: 400 });
  }

  try {
    const bucket = getProdStorage();
    const urls: string[] = [];

    for (const file of files) {
      const matches = file.data.match(/^data:(image\/\w+);base64,(.+)$/);
      if (!matches) continue;
      const contentType = matches[1];
      const buffer = Buffer.from(matches[2], "base64");
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
