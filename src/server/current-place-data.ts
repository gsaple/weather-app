import { CurrentCityProps } from "@/components/current-city/CurrentCity";
import { getWeatherData } from "./weather-api";
import { formattedWeatherCondition } from "@/util/weather-condition";

export async function getCurrentPlaceInfo(
  latitude: string,
  longitude: string,
): Promise<CurrentCityProps> {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.OpenWeatherApiKey}`;
  const pollutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.OpenWeatherApiKey}`;
  try {
    const [weatherData, pollutionData] = await Promise.all([
      getWeatherData(weatherURL),
      getWeatherData(pollutionURL),
    ]);
    return {
      mainCondition: formattedWeatherCondition(weatherData.weather[0].main),
      shiftsFromUTC: weatherData.timezone,
      cityName: weatherData.name,
      temperature: {
        value: Math.round(weatherData.main.temp),
        low: Math.round(weatherData.main.temp_min),
        high: Math.round(weatherData.main.temp_max),
      },
      otherMetrics: {
        humidity: `${weatherData.main.humidity} %`,
        windSpeed: `${Math.round(weatherData.wind.speed)} km/h`,
        airQuality: `${Math.round(
          pollutionData.list[0].components.pm2_5,
        )} μg/m³`,
        feelsLike: `${Math.round(weatherData.main.feels_like)}°`,
      },
    };
  } catch (error) {
    throw error;
  }
}
