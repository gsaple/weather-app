import { type FC } from "react";
import WeatherCard from "./WeatherCard";
import { getOneOtherCityInfo } from "@/server/one-other-city-data";
import { getCurrentPlaceGeo } from "@/server/current-place-geo";
import { getCurrentPlaceInfo } from "@/server/current-place-data";
import { getCurrentPlaceForecast } from "@/server/current-place-forecast";
import CenterPortContainer from "./shared-ui/CenterPortContainer";

const WeatherCardWrapper: FC = async () => {
  const queryForOtherCities = [
    { latitude: 1.2897, longitude: 103.8501 }, //Singapore
    { latitude: 31.2222, longitude: 121.4581 }, //Shanghai
    { latitude: 40.7143, longitude: -74.006 }, //New York
    { latitude: 51.5085, longitude: -0.1257 }, //London
  ];

  const otherCitiesPromises = queryForOtherCities.map((oneCity) =>
    getOneOtherCityInfo(oneCity.latitude, oneCity.longitude),
  );

  const { latitude, longitude } = getCurrentPlaceGeo();

  const currentPlaceWeatherPromise = getCurrentPlaceInfo(latitude, longitude);

  const currentPlaceForecastPromise = getCurrentPlaceForecast(
    latitude,
    longitude,
  );

  let initialData = undefined;

  try {
    initialData = await Promise.all([
      currentPlaceWeatherPromise,
      currentPlaceForecastPromise,
      ...otherCitiesPromises,
    ]);
  } catch (error) {
    console.error((error as Error).message);
  }

  if (initialData) {
    const [
      weatherForCurrentCity,
      forecastForCurrentCity,
      ...weatherForOtherCities
    ] = initialData;
    return (
      <WeatherCard
        weatherForCurrentCity={weatherForCurrentCity}
        forecastForCurrentCity={forecastForCurrentCity}
        weatherForOtherCities={weatherForOtherCities}
      />
    );
  }

  return (
    <CenterPortContainer className="whitespace-nowrap pr-1 text-xl font-semibold text-slate-200">
      <p>Failed to Get Weather Data</p>
      <i className="nf nf-md-emoticon_sad_outline absolute left-[100%] top-1"></i>
    </CenterPortContainer>
  );
};

export default WeatherCardWrapper;
