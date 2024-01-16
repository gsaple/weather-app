import { type FC } from "react";
import OneOtherCity from "./one-other-city/OneOtherCity";
import {
  getOneOtherCityInfo,
  OneOtherCityResponse,
} from "@/api/one-other-city";
import { colorVariants } from "@/util/color-variants";

const queryForOtherCities = [
  { name: "Singapore", latitude: 1.2897, longitude: 103.8501 },
  { name: "Shanghai", latitude: 31.2222, longitude: 121.4581 },
  { name: "New York", latitude: 40.7143, longitude: -74.006 },
  { name: "London", latitude: 51.5085, longitude: -0.1257 },
];

const OtherCities: FC = async () => {
  let resForOtherCities: OneOtherCityResponse[] | undefined = undefined;

  const otherCitiesPromises = queryForOtherCities.map((oneCity) =>
    getOneOtherCityInfo(oneCity.latitude, oneCity.longitude),
  );

  try {
    resForOtherCities = await Promise.all(otherCitiesPromises);
  } catch (error) {
    console.error((error as Error).message);
  }

  return (
    <div className="flex h-full flex-wrap items-end justify-between">
      {resForOtherCities === undefined
        ? queryForOtherCities.map((defaultCity, index) => (
            <OneOtherCity
              key={index}
              iconSrc=""
              iconAlt=""
              cityBgSrc={`/backgrounds/${defaultCity.name}.png`}
              cityBgAlt={`${defaultCity.name} bg`}
              cityName={defaultCity.name}
              colorVariants={colorVariants[404]}
            />
          ))
        : resForOtherCities.map((oneCity, index) => {
            const cityName = queryForOtherCities[index].name;
            return (
              <OneOtherCity
                key={index}
                iconSrc={`/weather-icons/${oneCity.mainCondition}.png`}
                iconAlt={`${oneCity.mainCondition} icon`}
                cityBgSrc={`/backgrounds/${cityName}.png`}
                cityBgAlt={`${cityName} bg`}
                low={oneCity.low}
                high={oneCity.high}
                cityName={cityName}
                colorVariants={colorVariants[oneCity.mainCondition]}
              />
            );
          })}
    </div>
  );
};

export default OtherCities;
