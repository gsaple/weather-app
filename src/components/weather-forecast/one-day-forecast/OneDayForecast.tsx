import { type FC } from "react";
import DateFormat from "../../shared-ui/DateFormat";
import WeatherIcon from "../../shared-ui/WeatherIcon";
import TemperatureRange from "../../shared-ui/TemperatureRange";

interface OneDayForecastProps {
  dayAndMonth: string;
  weekDay: string;
  iconSrc: string;
  alt: string;
  low: number;
  high: number;
}

const OneDayForecast: FC<OneDayForecastProps> = ({
  dayAndMonth,
  weekDay,
  iconSrc,
  alt,
  low,
  high,
}) => {
  return (
    <div>
      <DateFormat dayAndMonth={dayAndMonth} weekDay={weekDay} />
      <WeatherIcon src={iconSrc} alt={alt} width={196} height={196} />
      <TemperatureRange low={low} high={high} />
    </div>
  );
};

export default OneDayForecast;
