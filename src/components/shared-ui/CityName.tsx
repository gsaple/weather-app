import { type FC } from "react";

interface CityNameProps {
  cityName: string;
  className?: string;
}

const CityName: FC<CityNameProps> = ({ cityName, className }) => {
  return <div className={className}>{cityName}</div>;
};

export default CityName;
