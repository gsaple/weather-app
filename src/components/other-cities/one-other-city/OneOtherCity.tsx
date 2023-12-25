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
  bgColor: string;
  hoverShadowColor: string;
}

const OneOtherCity: FC<OneOtherCityProps> = ({
  iconSrc,
  iconAlt,
  cityBgSrc,
  cityBgAlt,
  low,
  high,
  cityName,
  bgColor,
  hoverShadowColor,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center relative sM:first:mb-4 sM:[&:nth-child(2)]:mb-4 w-[10.5rem] h-[8.125rem] rounded-[1.25rem] ${bgColor} hover:shadow-xl ${hoverShadowColor}`}
    >
      <BackgroundImage
        className="absolute top-0 left-0 -z-50"
        src={cityBgSrc}
        alt={cityBgAlt}
        originalWidth={168}
        originalHeight={130}
      />
      <WeatherIcon src={iconSrc} alt={iconAlt} width={50} height={50} />
      <div>
        <CityName
          cityName={cityName}
          className="text-white text-xl font-semibold"
        />
        <TemperatureRange
          low={low}
          high={high}
          className="text-white text-center text-sm"
        />
      </div>
    </div>
  );
};

export default OneOtherCity;
