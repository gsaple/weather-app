import { type FC } from "react";

interface TemperatureRangeProps {
  low?: number;
  high?: number;
  className?: string;
}

const TemperatureRange: FC<TemperatureRangeProps> = ({
  low,
  high,
  className,
}) => {
  return low ? <div className={className}>{`${low} ~ ${high}°`}</div> : null;
};

export default TemperatureRange;
