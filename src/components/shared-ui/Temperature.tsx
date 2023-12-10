import { type FC } from "react";

interface TemperatureProps {
  value: number;
  className?: string;
}

const Temperature: FC<TemperatureProps> = ({ value, className }) => {
  return <div className={className}>{value}°</div>;
};

export default Temperature;
