"use client";
import { type FC } from "react";
import CurrentCity from "./current-city/CurrentCity";
import WeatherForecast from "./weather-forecast/WeatherForecast";
import SearchBar from "./search-bar/SearchBar";
import OtherCities from "./other-cities/OtherCities";
import { OneOtherCityProps } from "./other-cities/one-other-city/OneOtherCity";
import { CurrentCityProps } from "./current-city/CurrentCity";
import { OneDayForecastProps } from "./weather-forecast/one-day-forecast/OneDayForecast";

interface WeatherCardProps {
  weatherForCurrentCity: CurrentCityProps;
  forecastForCurrentCity: OneDayForecastProps[];
  weatherForOtherCities: OneOtherCityProps[];
}

const WeatherCard: FC<WeatherCardProps> = ({
  weatherForCurrentCity,
  forecastForCurrentCity,
  weatherForOtherCities,
}) => {
  return (
    <div className="z-10 mx-auto h-3/4 rounded-[3.0rem] bg-slate-50/90 sm:grid sm:max-h-[46.875rem] sm:min-h-[51.25rem] sm:w-[48.5rem] sm:grid-cols-2 sm:grid-rows-9 lg:min-h-[43.125rem] lg:w-4/5 lg:min-w-[72rem] lg:grid-cols-16 lg:grid-rows-6 sM:flex sM:min-h-[96rem] sM:w-[24.25rem] sM:flex-col sM:items-center sM:space-y-5 sM:rounded-[1.75rem]">
      <div className="mt-7 sm:col-span-1 sm:row-span-7 sm:justify-self-center lg:col-span-5 lg:row-span-6 lg:mb-7 lg:justify-self-end sM:mt-5">
        <CurrentCity {...weatherForCurrentCity} />
      </div>
      <div className="sm:col-span-1 sm:row-span-6 sm:mr-7 sm:content-between sm:self-end lg:col-span-11 lg:row-span-3 lg:mx-9 lg:self-center sM:w-[22.25rem]">
        <WeatherForecast forecastForCurrentCity={forecastForCurrentCity} />
      </div>
      <div className="sm:col-span-1 sm:row-span-1 sm:mr-7 sm:self-end lg:col-span-11 lg:row-span-1 lg:mx-9 sM:order-first sM:w-[22.25rem] sM:pt-2">
        <SearchBar />
      </div>
      <div className="mb-7 sm:col-span-2 sm:row-span-2 sm:mx-[0.8125rem] lg:col-span-11 lg:row-span-2 lg:mx-9 sM:w-[22.25rem]">
        <OtherCities weatherForOtherCities={weatherForOtherCities} />
      </div>
    </div>
  );
};

export default WeatherCard;
