import { type FC } from "react";
import CurrentCity from "./current-city/CurrentCity";
import WeatherForecast from "./weather-forecast/WeatherForecast";
import SearchBar from "./search-bar/SearchBar";
import OtherCities from "./other-cities/OtherCities";

const WeatherCard: FC = () => {
  return (
    <div>
      <CurrentCity />
      <WeatherForecast />
      <SearchBar />
      <OtherCities />
    </div>
  );
};

export default WeatherCard;
