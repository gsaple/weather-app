import { type NextRequest, NextResponse } from "next/server";
import { getCurrentPlaceInfo } from "@/server/current-place-data";
import { getCurrentPlaceForecast } from "@/server/current-place-forecast";

export async function GET(request: NextRequest) {
  const latitude = request.nextUrl.searchParams.get("latitude");
  const longitude = request.nextUrl.searchParams.get("longitude");

  if (!latitude || !longitude) {
    return NextResponse.json({
      error: "Cannot find params 'latitude' or 'longitude'",
    });
  }

  try {
    const updatedData = await Promise.all([
      getCurrentPlaceInfo(latitude, longitude),
      getCurrentPlaceForecast(latitude, longitude),
    ]);
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.json({ error: "Error updating weather data" });
  }
}
