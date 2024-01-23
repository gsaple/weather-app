import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

interface ApiResultRelevant {
  result_type: string;
  formatted: string;
  category: string;
  timezone: {
    name: string;
  };
  lon: number;
  lat: number;
}

export async function GET(request: NextRequest) {
  // e.g. /api/place-autocomplete?input=hello
  const input = request.nextUrl.searchParams.get("input");
  const countryCode = headers().get("x-vercel-ip-country")?.toLowerCase() ?? "au";
  const geoApiUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&limit=6&bias=countrycode:${countryCode}&apiKey=${process.env.GeoapifyApiKey}`;

  try {
    const response = await fetch(geoApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const suggestions = data.results
      .filter(
        (result: ApiResultRelevant) =>
          (result.result_type === "city" ||
            result.result_type === "suburb" ||
            result.result_type === "state" ||
            result.result_type == "district" ||
            result.result_type == "postcode") &&
          result.category !== "political",
      )
      .map((result: ApiResultRelevant) => {
        return {
          place: result.formatted,
          timezone: result.timezone.name,
          longitude: result.lon,
          latitude: result.lat,
        };
      });
    return NextResponse.json(suggestions);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data", status: 500 });
  }
}
