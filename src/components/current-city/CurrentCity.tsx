import { type FC } from "react";
import DateFormat from "../shared-ui/DateFormat";
import { dateFormat } from "../../util/date";
import CityName from "../shared-ui/CityName";
import Temperature from "./Temperature";
import WeatherIcon from "../shared-ui/WeatherIcon";
import BackgroundImage from "../shared-ui/BackgroundImage";
import OtherMetrics from "./OtherMetrics";

const CurrentCity: FC = () => {
  const dateString: string[] = dateFormat(new Date());

  return (
    <div className="flex flex-col items-center justify-around bg-blue-500 rounded-[1.75rem] h-full relative">
      <BackgroundImage
        className="absolute top-0 right-0"
        src="/backgrounds/sunny.png"
        alt="sunny background pic"
        originalWidth={330}
        originalHeight={602}
      />
      <DateFormat
        dayAndMonth={dateString[1]}
        weekDay={dateString[0]}
        time={dateString[2]}
        className="text-white self-start ml-6"
      />
      <CityName
        cityName="Sydney"
        className="text-white text-2xl font-semibold"
      />
      <Temperature value={32} low={28} high={32} />
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
