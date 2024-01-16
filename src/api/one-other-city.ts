import { formattedWeatherCondition } from "@/util/weather-condition";

export interface OneOtherCityResponse {
  low: number;
  high: number;
  mainCondition: string;
}

export async function getOneOtherCityInfo(
  latitude: number,
  longitude: number,
): Promise<OneOtherCityResponse> {
  try {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.OpenWeatherApiKey}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(
        `weather API request failed with status ${response.status}`,
      );
    }
    const data = await response.json();
    return {
      low: Math.round(data.main.temp_min),
      high: Math.round(data.main.temp_max),
      mainCondition: formattedWeatherCondition(data.weather[0].main),
    };
  } catch (error) {
    throw error;
  }
}
