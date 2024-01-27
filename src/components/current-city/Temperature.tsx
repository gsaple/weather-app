import { type FC } from "react";
import TemperatureRange from "../shared-ui/TemperatureRange";

interface TemperatureProps {
  value: number;
  low: number;
  high: number;
}

const Temperature: FC<TemperatureProps> = ({ value, low, high }) => {
  return (
    <div>
      <div className="relative text-[5.25rem] font-semibold leading-none text-slate-200">
        {Math.abs(value)}
        <span className="absolute left-[100%] top-0">°</span>
        {value < 0 && (
          <span className="absolute right-[100%] top-1/2 -translate-y-1/2 transform">
            -
          </span>
        )}
      </div>
      <TemperatureRange
        low={low}
        high={high}
        className="text-center text-white"
      />
    </div>
  );
};

export default Temperature;
