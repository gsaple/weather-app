import { type FC } from "react";
import WeatherIcon from "../../shared-ui/WeatherIcon";
import TemperatureRange from "../../shared-ui/TemperatureRange";
import CityName from "../../shared-ui/CityName";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";

interface OneOtherCityProps {
  iconSrc: string;
  iconAlt: string;
  cityBgSrc: string;
  cityBgAlt: string;
  low: number;
  high: number;
  cityName: string;
  colorVariants: string;
}

const OneOtherCity: FC<OneOtherCityProps> = ({
  iconSrc,
  iconAlt,
  cityBgSrc,
  cityBgAlt,
  low,
  high,
  cityName,
  colorVariants,
}) => {
  return (
    <div
      className={`relative flex h-[8.125rem] w-[10.5rem] flex-col items-center justify-center rounded-[1.25rem] hover:shadow-xl sM:first:mb-4 sM:[&:nth-child(2)]:mb-4 ${colorVariants}`}
    >
      <BackgroundImage
        className="absolute left-0 top-0 -z-50 w-full"
        src={cityBgSrc}
        alt={cityBgAlt}
        originalWidth={168}
        originalHeight={130}
      />
      <WeatherIcon src={iconSrc} alt={iconAlt} width={50} height={50} />
      <div>
        <CityName
          cityName={cityName}
          className="text-xl font-semibold text-white"
        />
        <TemperatureRange
          low={low}
          high={high}
          className="text-center text-sm text-white"
        />
      </div>
    </div>
  );
};

export default OneOtherCity;
