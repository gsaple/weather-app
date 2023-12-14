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
      <div className="text-slate-200 text-[5.25rem] leading-none font-semibold relative">
        {value}
        <span className="absolute top-0 left-[100%]">°</span>
      </div>
      <TemperatureRange
        low={low}
        high={high}
        className="text-white text-center"
      />
    </div>
  );
};

export default Temperature;
