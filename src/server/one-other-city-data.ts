import { formattedWeatherCondition } from "@/util/weather-condition";
import { OneOtherCityProps } from "@/components/other-cities/one-other-city/OneOtherCity";
import { getWeatherData } from "./weather-api";
export async function getOneOtherCityInfo(
  latitude: number,
  longitude: number,
): Promise<OneOtherCityProps> {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.OpenWeatherApiKey}`;
  try {
    const data = await getWeatherData(apiURL);
    return {
      mainCondition: formattedWeatherCondition(data.weather[0].main),
      cityName: data.name,
      temperature: {
        low: Math.round(data.main.temp_min),
        high: Math.round(data.main.temp_max),
      },
    };
  } catch (error) {
    throw error;
  }
}
