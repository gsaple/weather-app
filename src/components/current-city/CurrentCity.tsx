import { type FC } from "react";
import DateFormat from "../shared-ui/DateFormat";
import { dateFormat } from "../../util/date";
import CityName from "../shared-ui/CityName";
import Temperature from "../shared-ui/Temperature";
import TemperatureRange from "../shared-ui/TemperatureRange";
import WeatherIcon from "../shared-ui/WeatherIcon";
import OtherMetrics from "./OtherMetrics";

const CurrentCity: FC = () => {
  const dateString: string[] = dateFormat(new Date());

  return (
    <div>
      <DateFormat
        dayAndMonth={dateString[1]}
        weekDay={dateString[0]}
        time={dateString[2]}
      />
      <CityName cityName="Melbourne" />
      <Temperature value={32} />
      <TemperatureRange low={10} high={30} />
      <WeatherIcon
        src="/weather-icons/sunny.png"
        alt="sunny icon"
        width={196}
        height={196}
      />
      <OtherMetrics />
    </div>
  );
};

export default CurrentCity;
