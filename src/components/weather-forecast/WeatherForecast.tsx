import { type FC } from "react";
import OneDayForecast from "./one-day-forecast/OneDayForecast";
import { OneDayForecastProps } from "./one-day-forecast/OneDayForecast";

interface WeatherForecastProps {
  forecastForCurrentCity: OneDayForecastProps[];
}

const WeatherForecast: FC<WeatherForecastProps> = ({
  forecastForCurrentCity,
}) => {
  return (
    <div className="flex flex-wrap justify-between lg:pt-8">
      {forecastForCurrentCity.map((oneDayForecast, index) => (
        <OneDayForecast key={index} {...oneDayForecast} />
      ))}
    </div>
  );
};

export default WeatherForecast;
