import { type FC } from "react";
import WeatherCard from "./WeatherCard";
import {
  getOneOtherCityInfo,
  OneOtherCityResponse,
} from "@/server/one-other-city";
import { getCurrentPlaceGeo } from "@/server/current-place-geo";

const WeatherCardWrapper: FC = async () => {
  const queryForOtherCities = [
    { latitude: 1.2897, longitude: 103.8501 }, //Singapore
    { latitude: 31.2222, longitude: 121.4581 }, //Shanghai
    { latitude: 40.7143, longitude: -74.006 }, //New York
    { latitude: 51.5085, longitude: -0.1257 }, //London
  ];

  const otherCitiesPromises = queryForOtherCities.map((oneCity) =>
    getOneOtherCityInfo(oneCity.latitude, oneCity.longitude),
  );

  let resForOtherCities: OneOtherCityResponse[] | undefined = undefined;

  try {
    resForOtherCities = await Promise.all(otherCitiesPromises);
  } catch (error) {
    console.error((error as Error).message);
  }

  return resForOtherCities ? (
    <WeatherCard weatherForOtherCities={resForOtherCities} />
  ) : (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pr-1 text-xl font-semibold text-slate-200">
      <p>Failed to Get Weather Data</p>
      <i className="nf nf-md-emoticon_sad_outline absolute left-[100%] top-1"></i>
    </div>
  );
};

export default WeatherCardWrapper;
