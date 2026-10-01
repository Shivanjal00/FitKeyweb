// src/app/api/geocode/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address");
  if (!address?.trim()) {
    return NextResponse.json({ error: "Missing address" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server not configured" },
      { status: 500 },
    );
  }

  try {
    const params = new URLSearchParams({
      address: `${address}, Delhi, India`,
      key: apiKey,
      region: "in",
    });
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?${params}`,
    );
    const data = await res.json();

    if (data.status !== "OK" || !data.results?.[0]) {
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 },
      );
    }

    const { lat, lng } = data.results[0].geometry.location;
    return NextResponse.json({
      lat,
      lng,
      formattedAddress: data.results[0].formatted_address,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Geocoding failed" }, { status: 500 });
  }
}
