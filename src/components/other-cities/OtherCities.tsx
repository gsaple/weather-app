import { type FC } from "react";
import OneOtherCity from "./one-other-city/OneOtherCity";
import { OneOtherCityResponse } from "@/api/one-other-city";
import { colorVariants } from "@/util/color-variants";

interface OtherCitiesProps {
  weatherForOtherCities: OneOtherCityResponse[];
}

const OtherCities: FC<OtherCitiesProps> = ({ weatherForOtherCities }) => {
  return (
    <div className="flex h-full flex-wrap items-end justify-between">
      {weatherForOtherCities.map((oneCity, index) => {
        return (
          <OneOtherCity
            key={index}
            iconSrc={`/weather-icons/${oneCity.mainCondition}.png`}
            iconAlt={`${oneCity.mainCondition} icon`}
            cityBgSrc={`/backgrounds/${oneCity.name}.png`}
            cityBgAlt={`${oneCity.name} bg`}
            low={oneCity.low}
            high={oneCity.high}
            cityName={oneCity.name}
            colorVariants={colorVariants[oneCity.mainCondition]}
          />
        );
      })}
    </div>
  );
};

export default OtherCities;
