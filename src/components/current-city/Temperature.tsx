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
        {value}
        <span className="absolute left-[100%] top-0">°</span>
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
