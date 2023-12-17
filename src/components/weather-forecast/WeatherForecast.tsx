import { type FC } from "react";
import OneDayForecast from "./one-day-forecast/OneDayForecast";

const WeatherForecast: FC = () => {
  return (
    <div className="flex px-4 py-8 justify-between absolute -left-5">
      <OneDayForecast
        dayAndMonth="24 July"
        weekDay="Monday"
        iconSrc="/weather-icons/rainy.png"
        alt="rainy icon"
        low={30}
        high={32}
      />
      <OneDayForecast
        dayAndMonth="25 July"
        weekDay="Tuesday"
        iconSrc="/weather-icons/partly_cloudy.png"
        alt="partly_cloudy icon"
        low={30}
        high={32}
      />
      <OneDayForecast
        dayAndMonth="10 November"
        weekDay="Wednesday"
        iconSrc="/weather-icons/cloudy.png"
        alt="cloudy icon"
        low={30}
        high={32}
      />
      <OneDayForecast
        dayAndMonth="10 December"
        weekDay="Thursday"
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
      />
    </div>
  );
};

export default WeatherForecast;
