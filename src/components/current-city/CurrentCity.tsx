import { type FC } from "react";
import DateFormat from "../shared-ui/DateFormat";
import CityName from "../shared-ui/CityName";
import Temperature from "./Temperature";
import WeatherIcon from "../shared-ui/WeatherIcon";
import BackgroundImage from "../shared-ui/BackgroundImage";
import OtherMetrics from "./OtherMetrics";
import { colorVariantsWithoutShadow } from "@/util/color-variants";
import { OtherMetricsProps } from "./OtherMetrics";

export interface CurrentCityProps {
  mainCondition: string;
  shiftsFromUTC: number;
  cityName: string;
  temperature: { value: number; low: number; high: number };
  otherMetrics: OtherMetricsProps;
}

const CurrentCity: FC<CurrentCityProps> = ({
  mainCondition,
  shiftsFromUTC,
  cityName,
  temperature,
  otherMetrics,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-around rounded-[1.75rem] sm:h-full sm:w-[20.625rem] sM:h-[37.5rem] sM:w-[22.25rem] ${colorVariantsWithoutShadow[mainCondition]}`}
    >
      {!["404", "atmosphere"].includes(mainCondition) && (
        <BackgroundImage
          className="absolute right-0 top-0 w-full"
          src={`/backgrounds/${mainCondition}.png`}
          alt={`${mainCondition} bg image`}
          originalWidth={330}
          originalHeight={602}
        />
      )}
      <DateFormat shiftsFromUTC={shiftsFromUTC} showCurrentTime={true} />
      <CityName cityName={cityName} className="z-10 text-2xl" />
      <Temperature {...temperature} />
      <WeatherIcon
        src={`/weather-icons/${mainCondition}.png`}
        alt={`${mainCondition} icon`}
        width={196}
        height={196}
      />
      <OtherMetrics {...otherMetrics} />
    </div>
  );
};

export default CurrentCity;
