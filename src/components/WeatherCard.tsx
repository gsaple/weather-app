"use client";
import { useState, type FC, useEffect, useCallback } from "react";
import CurrentCity from "./current-city/CurrentCity";
import WeatherForecast from "./weather-forecast/WeatherForecast";
import Search from "./search/Search";
import OtherCities from "./other-cities/OtherCities";
import { OneOtherCityProps } from "./other-cities/one-other-city/OneOtherCity";
import { CurrentCityProps } from "./current-city/CurrentCity";
import { OneDayForecastProps } from "./weather-forecast/one-day-forecast/OneDayForecast";
import Spinner from "./shared-ui/Spinner";
import CenterPortContainer from "./shared-ui/CenterPortContainer";

interface WeatherCardProps {
  weatherForCurrentCity: CurrentCityProps;
  forecastForCurrentCity: OneDayForecastProps[];
  weatherForOtherCities: OneOtherCityProps[];
}

export type GeoLocation = {
  latitude: string;
  longitude: string;
} | null;

const WeatherCard: FC<WeatherCardProps> = ({
  weatherForCurrentCity,
  forecastForCurrentCity,
  weatherForOtherCities,
}) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentCityProps>(
    weatherForCurrentCity,
  );
  const [weatherForecast, setWeatherForecast] = useState<OneDayForecastProps[]>(
    forecastForCurrentCity,
  );
  const [geoLocation, setGeoLocation] = useState<GeoLocation>(null);
  const [loadingOnUpdating, setLoadingOnUpdating] = useState<boolean>(false);

  const cachedSetGeoLocation = useCallback((coordinates: GeoLocation) => {
    setGeoLocation(coordinates);
  }, []);

  useEffect(() => {
    async function updateWeatherOnNewGeo() {
      if (!geoLocation) return;
      const { latitude, longitude } = geoLocation;
      setLoadingOnUpdating(true);
      const response = await fetch(
        `/api/update-weather?latitude=${latitude}&longitude=${longitude}`,
      );
      const [updatedWeather, updatedForecast] = await response.json();

      if (updatedWeather && updatedForecast) {
        setLoadingOnUpdating(false);
        setCurrentWeather(updatedWeather);
        setWeatherForecast(updatedForecast);
      }
    }
    updateWeatherOnNewGeo();
  }, [geoLocation]);

  return (
    <>
      <div className="z-10 mx-auto h-3/4 rounded-[3.0rem] bg-slate-50/90 sm:grid sm:max-h-[46.875rem] sm:min-h-[51.25rem] sm:w-[48.5rem] sm:grid-cols-2 sm:grid-rows-9 lg:min-h-[43.125rem] lg:w-4/5 lg:min-w-[72rem] lg:grid-cols-16 lg:grid-rows-6 sM:flex sM:min-h-[96rem] sM:w-[24.25rem] sM:flex-col sM:items-center sM:space-y-5 sM:rounded-[1.75rem]">
        <div className="mt-7 sm:col-span-1 sm:row-span-7 sm:justify-self-center lg:col-span-5 lg:row-span-6 lg:mb-7 lg:justify-self-end sM:mt-5">
          <CurrentCity {...currentWeather} />
        </div>
        <div className="sm:col-span-1 sm:row-span-6 sm:mr-7 sm:content-between sm:self-end lg:col-span-11 lg:row-span-3 lg:mx-9 lg:self-center sM:w-[22.25rem]">
          <WeatherForecast forecastForCurrentCity={weatherForecast} />
        </div>
        <div className="relative sm:col-span-1 sm:row-span-1 sm:mr-7 sm:self-end lg:col-span-11 lg:row-span-1 lg:mx-9 sM:order-first sM:w-[22.25rem] sM:pt-2">
          <Search setGeo={cachedSetGeoLocation} />
        </div>
        <div className="mb-7 sm:col-span-2 sm:row-span-2 sm:mx-[0.8125rem] lg:col-span-11 lg:row-span-2 lg:mx-9 sM:w-[22.25rem]">
          <OtherCities weatherForOtherCities={weatherForOtherCities} />
        </div>
      </div>
      {loadingOnUpdating && (
        <CenterPortContainer className="z-10">
          <Spinner className="h-20 w-20 text-zinc-800" />
        </CenterPortContainer>
      )}
    </>
  );
};

export default WeatherCard;
