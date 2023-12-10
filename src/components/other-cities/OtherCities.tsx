import { type FC } from "react";
import OneOtherCity from "./one-other-city/OneOtherCity";

const OtherCities: FC = () => {
  return (
    <div className="flex">
      <OneOtherCity
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
        cityName="Sydney"
      />
      <OneOtherCity
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
        cityName="Sydney"
      />
      <OneOtherCity
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
        cityName="Sydney"
      />
      <OneOtherCity
        iconSrc="/weather-icons/sunny.png"
        alt="sunny icon"
        low={30}
        high={32}
        cityName="Sydney"
      />
    </div>
  );
};

export default OtherCities;
