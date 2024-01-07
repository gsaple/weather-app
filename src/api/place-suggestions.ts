export interface SuggestedPlaceInfo {
  place: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

export async function getPlaceSuggestions(
  input: string,
  signal: AbortSignal,
): Promise<SuggestedPlaceInfo[]> {
  try {
    const apiURL =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_BackendURL
        : "http://localhost:5173";

    const response = await fetch(`${apiURL}/weather/suggestions/${input}`, {
      signal,
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const getPlaceSuggestions = await response.json();
    return getPlaceSuggestions;
  } catch (error) {
    throw error;
  }
}
