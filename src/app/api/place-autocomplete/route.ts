import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { formattedPlace } from "@/util/format-place";

interface ApiResultRelevant {
  suburb?: string;
  city?: string;
  state?: string;
  country: string;
  postcode?: string;
  lon: number;
  lat: number;
}

export async function GET(request: NextRequest) {
  // e.g. /api/place-autocomplete?input=hello
  const input = request.nextUrl.searchParams.get("input");
  const countryCode =
    headers().get("x-vercel-ip-country")?.toLowerCase() ?? "au";
  const geoApiUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&limit=6&bias=countrycode:${countryCode}&apiKey=${process.env.GeoapifyApiKey}`;

  try {
    const response = await fetch(geoApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const suggestions = data.results.map((result: ApiResultRelevant) => {
      return {
        place: formattedPlace(
          result.suburb,
          result.city,
          result.state,
          result.country,
          result.postcode,
        ),
        longitude: result.lon,
        latitude: result.lat,
      };
    });
    return NextResponse.json(suggestions);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data", status: 500 });
  }
}
