import { type FC } from "react";

interface TemperatureRangeProps {
  low: number;
  high: number;
  className?: string;
}

const TemperatureRange: FC<TemperatureRangeProps> = ({
  low,
  high,
  className,
}) => {
  return <div className={className}>{`${low} ~ ${high}°`}</div>;
};

export default TemperatureRange;
