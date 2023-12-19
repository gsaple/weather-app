import { type FC } from "react";
import CurrentCity from "./current-city/CurrentCity";
import WeatherForecast from "./weather-forecast/WeatherForecast";
import SearchBar from "./search-bar/SearchBar";
import OtherCities from "./other-cities/OtherCities";

const WeatherCard: FC = () => {
  return (
    <div className="container mx-auto bg-slate-50/90 z-10 rounded-[3.0rem] w-4/5 h-3/4 min-h-[43.125rem] max-h-[46.875rem] grid grid-cols-16 grid-rows-6 ">
      <div className="row-span-6 col-span-5 my-7 ml-7">
        <CurrentCity />
      </div>
      <div className="row-span-3 col-span-11 my-7 mx-9 relative">
        <WeatherForecast />
      </div>
      <div className="row-span-1 col-span-11 self-end mx-9">
        <SearchBar />
      </div>
      <div className="row-span-2 col-span-11 mb-7 mx-9">
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherCard;
