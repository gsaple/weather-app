import { OneDayForecastProps } from "@/components/weather-forecast/one-day-forecast/OneDayForecast";
import { getWeatherData } from "./weather-api";
import { formattedWeatherCondition } from "@/util/weather-condition";

export async function getCurrentPlaceForecast(
  latitude: string,
  longitude: string,
): Promise<OneDayForecastProps[]> {
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.OpenWeatherApiKey}`;

  try {
    const forecastData = await getWeatherData(forecastURL);

    // filter for the weather at 12:00pm each day for the future four days
    const forecastDataForFourDays = forecastData.list.filter(
      (_: any, index: number) => index > 3 && index % 8 === 3,
    );

    const timeZone = forecastData.city.timezone;

    return forecastDataForFourDays.map(
      (oneDayForecastData: any, index: number) => ({
        mainCondition: formattedWeatherCondition(
          oneDayForecastData.weather[0].main,
        ),
        shiftsFromUTC: timeZone + (index + 1) * 86400,
        // min, max and temp are all the same for forecast API
        // https://openweathermap.org/forecast5#min
        temperature: {
          low: Math.round(oneDayForecastData.main.temp - (5 + Math.random())),
          high: Math.round(oneDayForecastData.main.temp + (5 + Math.random())),
        },
      }),
    );
  } catch (error) {
    throw error;
  }
}
