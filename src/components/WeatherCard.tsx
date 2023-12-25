import { type FC } from "react";
import CurrentCity from "./current-city/CurrentCity";
import WeatherForecast from "./weather-forecast/WeatherForecast";
import SearchBar from "./search-bar/SearchBar";
import OtherCities from "./other-cities/OtherCities";

const WeatherCard: FC = () => {
  return (
    <div className="mx-auto bg-slate-50/90 z-10 rounded-[3.0rem] sM:w-[24.25rem] sm:w-[48.5rem] lg:w-4/5 lg:min-w-[72rem] sM:min-h-[96rem] h-3/4 sm:max-h-[46.875rem] sm:min-h-[51.25rem] lg:min-h-[43.125rem] sM:flex sM:flex-col sM:space-y-5 sM:items-center sm:grid sm:grid-cols-2 sm:grid-rows-9 lg:grid-cols-16 lg:grid-rows-6">
      <div className="sm:row-span-7 sm:col-span-1 lg:row-span-6 lg:col-span-5 sm:justify-self-center lg:justify-self-end mt-7 lg:mb-7">
        <CurrentCity />
      </div>
      <div className="sm:row-span-6 sm:col-span-1 lg:row-span-3 lg:col-span-11 sm:mr-7 lg:mx-9 lg:self-center sM:w-[22.25rem] sm:content-between sm:self-end">
        <WeatherForecast />
      </div>
      <div className="sm:row-span-1 sm:col-span-1 lg:row-span-1 lg:col-span-11 sm:mr-7 lg:mx-9 sM:w-[22.25rem] sm:self-end ">
        <SearchBar />
      </div>
      <div className="sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-11 sM:w-[22.25rem] sm:mx-[0.8125rem] lg:mx-9 mb-7">
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherCard;
