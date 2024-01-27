import { type FC, memo } from "react";
import OneOtherCity from "./one-other-city/OneOtherCity";
import { OneOtherCityProps } from "./one-other-city/OneOtherCity";

interface OtherCitiesProps {
  weatherForOtherCities: OneOtherCityProps[];
}

const OtherCities: FC<OtherCitiesProps> = ({ weatherForOtherCities }) => {
  return (
    <div className="flex h-full flex-wrap items-end justify-between">
      {weatherForOtherCities.map((oneCity, index) => {
        return (
          <OneOtherCity
            key={index}
            mainCondition={oneCity.mainCondition}
            temperature={oneCity.temperature}
            cityName={oneCity.cityName}
          />
        );
      })}
    </div>
  );
};

export default memo(OtherCities);
