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
    <div className="relative flex flex-col items-center justify-around rounded-[1.75rem] bg-blue-500 sm:h-full sm:w-[20.625rem] sM:h-[37.5rem] sM:w-[22.25rem]">
      <BackgroundImage
        className="absolute right-0 top-0"
        src="/backgrounds/sunny.png"
        alt="sunny background pic"
        originalWidth={330}
        originalHeight={602}
      />
      <DateFormat
        dayAndMonth={dateString[1]}
        weekDay={dateString[0]}
        time={dateString[2]}
        className="ml-6 self-start text-white"
      />
      <CityName
        cityName="Sydney"
        className="text-2xl font-semibold text-white"
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
