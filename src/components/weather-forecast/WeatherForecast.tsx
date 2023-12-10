import { type FC } from "react";
import OneDayForecast from "./one-day-forecast/OneDayForecast";

const WeatherForecast: FC = () => {
  return (
    <div className="flex">
      <OneDayForecast
        dayAndMonth="10 December"
        weekDay="Sunday"
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
      />
      <OneDayForecast
        dayAndMonth="10 December"
        weekDay="Sunday"
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
      />
      <OneDayForecast
        dayAndMonth="10 December"
        weekDay="Sunday"
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
      />
      <OneDayForecast
        dayAndMonth="10 December"
        weekDay="Sunday"
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
      />
    </div>
  );
};

export default WeatherForecast;
