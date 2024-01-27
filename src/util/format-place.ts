export function formattedPlace(
  suburb: string | undefined,
  city: string | undefined,
  state: string | undefined,
  country: string,
  postcode: string,
): string {
  const parts: string[] = [country, postcode];
  if (state) parts.unshift(state);
  if (city && city !== state) parts.unshift(city);
  if (suburb) parts.unshift(suburb);
  return parts.join(", ");
}
