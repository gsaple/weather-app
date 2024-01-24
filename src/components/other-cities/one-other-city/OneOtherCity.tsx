import { type FC } from "react";
import WeatherIcon from "../../shared-ui/WeatherIcon";
import TemperatureRange from "../../shared-ui/TemperatureRange";
import CityName from "../../shared-ui/CityName";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";
import { colorVariants } from "@/util/color-variants";

export interface OneOtherCityProps {
  mainCondition: string;
  cityName: string;
  temperature: { low: number; high: number };
}

const OneOtherCity: FC<OneOtherCityProps> = ({
  mainCondition,
  cityName,
  temperature,
}) => {
  return (
    <div
      className={`relative flex h-[8.125rem] w-[10.5rem] flex-col items-center justify-center rounded-[1.25rem] hover:shadow-xl sM:first:mb-4 sM:[&:nth-child(2)]:mb-4 ${colorVariants[mainCondition]}`}
    >
      <BackgroundImage
        className="absolute left-0 top-0 -z-50 w-full"
        src={`/backgrounds/${cityName}.png`}
        alt={`${cityName} bg`}
        originalWidth={168}
        originalHeight={130}
      />
      <WeatherIcon
        src={`/weather-icons/${mainCondition}.png`}
        alt={`${mainCondition} icon`}
        width={50}
        height={50}
      />
      <div>
        <CityName cityName={cityName} className="text-xl" />
        <TemperatureRange
          low={temperature.low}
          high={temperature.high}
          className="text-center text-sm text-white"
        />
      </div>
    </div>
  );
};

export default OneOtherCity;
