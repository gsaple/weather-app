export async function getWeatherData(url: string) {
  const response = await fetch(url, {
    next: { revalidate: process.env.NODE_ENV === "production" ? 60 : 86400 },
  });
  if (!response.ok) {
    throw new Error(
      `weather API request failed with status ${response.status}`,
    );
  }
  const data = await response.json();
  return data;
}
