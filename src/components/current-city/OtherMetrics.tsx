import { type FC } from "react";
import MetricItem from "./other-metrics/MetricItem";

const OtherMetrics: FC = () => {
  return (
    <div className="flex">
      <MetricItem
        src="/weather-icons/humidity.svg"
        alt="cloudy icon"
        width={30}
        height={30}
        value="humidity value"
      />
      <MetricItem
        src="/weather-icons/humidity.svg"
        alt="cloudy icon"
        width={30}
        height={30}
        value="humidity value"
      />
      <MetricItem
        src="/weather-icons/humidity.svg"
        alt="cloudy icon"
        width={30}
        height={30}
        value="humidity value"
      />
      <MetricItem
        src="/weather-icons/humidity.svg"
        alt="cloudy icon"
        width={30}
        height={30}
        value="humidity value"
      />
    </div>
  );
};

export default OtherMetrics;
