import { type FC } from "react";
import MetricItem from "./other-metrics/MetricItem";

const OtherMetrics: FC = () => {
  return (
    <div className="flex justify-between bg-slate-50 rounded-2xl w-5/6 p-4">
      <MetricItem
        src="/weather-icons/humidity.svg"
        alt="cloudy icon"
        width={30}
        height={30}
        value="85%"
      />
      <MetricItem
        src="/weather-icons/wind.svg"
        alt="wind icon"
        width={30}
        height={30}
        value="9 km/h"
      />
      <MetricItem
        src="/weather-icons/air_quality.svg"
        alt="air quality icon"
        width={30}
        height={30}
        value="75 μg"
      />
      <MetricItem
        src="weather-icons/feel_like.svg"
        alt="feel like icon"
        width={30}
        height={30}
        value="26°"
      />
    </div>
  );
};

export default OtherMetrics;
