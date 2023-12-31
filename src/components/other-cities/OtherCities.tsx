import { type FC } from "react";
import OneOtherCity from "./one-other-city/OneOtherCity";

const OtherCities: FC = () => {
  return (
    <div className="flex h-full flex-wrap items-end justify-between">
      <OneOtherCity
        iconSrc="/weather-icons/sunny.png"
        iconAlt="sunny icon"
        cityBgSrc="/backgrounds/Sydney.png"
        cityBgAlt="Sydney bg pic"
        low={28}
        high={32}
        cityName="Sydney"
        bgColor="bg-sky-500/50"
        hoverShadowColor="hover:shadow-sky-500/50"
      />
      <OneOtherCity
        iconSrc="/weather-icons/cloudy.png"
        iconAlt="cloudy icon"
        cityBgSrc="/backgrounds/Shanghai.png"
        cityBgAlt="Shanghai bg pic"
        low={20}
        high={23}
        cityName="Shanghai"
        bgColor="bg-blue-600/50"
        hoverShadowColor="hover:shadow-blue-600/50"
      />
      <OneOtherCity
        iconSrc="/weather-icons/partly_cloudy.png"
        iconAlt="partly_cloudy icon"
        cityBgSrc="/backgrounds/New York.png"
        cityBgAlt="New York bg pic"
        low={18}
        high={20}
        cityName="New York"
        bgColor="bg-indigo-600/50"
        hoverShadowColor="hover:shadow-indigo-600/50"
      />
      <OneOtherCity
        iconSrc="/weather-icons/snow.png"
        iconAlt="snow icon"
        cityBgSrc="/backgrounds/London.png"
        cityBgAlt="London bg pic"
        low={0}
        high={2}
        cityName="London"
        bgColor="bg-violet-600/50"
        hoverShadowColor="hover:shadow-violet-600/50"
      />
    </div>
  );
};

export default OtherCities;
