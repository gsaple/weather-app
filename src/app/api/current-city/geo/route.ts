import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const lat = req.geo?.latitude;
  const lon = req.geo?.longitude;
  if (lat && lon) return NextResponse.json({ latitude: lat, longitude: lon });
  return NextResponse.json({ latitude: "-37.8142", longitude: "144.9631" }); // Melbourne
}
