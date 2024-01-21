import { headers } from "next/headers";

export function getCurrentPlaceGeo() {
  const lat = headers().get("x-vercel-ip-latitude");
  const lon = headers().get("x-vercel-ip-longitude");
  if (lat && lon) return { latitude: lat, longitude: lon };
  return { latitude: "-37.8142", longitude: "144.9631" }; // Melbourne
}
