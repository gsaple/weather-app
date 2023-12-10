import { type FC } from "react";
import WeatherIcon from "../../shared-ui/WeatherIcon";
import TemperatureRange from "../../shared-ui/TemperatureRange";
import CityName from "../../shared-ui/CityName";

interface OneOtherCityProps {
  iconSrc: string;
  alt: string;
  low: number;
  high: number;
  cityName: string;
}

const OneOtherCity: FC<OneOtherCityProps> = ({
  iconSrc,
  alt,
  low,
  high,
  cityName,
}) => {
  return (
    <div>
      <WeatherIcon src={iconSrc} alt={alt} width={30} height={30} />
      <CityName cityName={cityName} />
      <TemperatureRange low={low} high={high} />
    </div>
  );
};

export default OneOtherCity;
