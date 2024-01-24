import { type FC } from "react";
import MetricItem from "./other-metrics/MetricItem";

export interface OtherMetricsProps {
  humidity: string;
  windSpeed: string;
  airQuality: string;
  feelsLike: string;
}

const OtherMetrics: FC<OtherMetricsProps> = ({
  humidity,
  windSpeed,
  airQuality,
  feelsLike,
}) => {
  const metrics = [
    { iconName: "humidity", value: humidity },
    { iconName: "wind_speed", value: windSpeed },
    { iconName: "air_quality", value: airQuality },
    { iconName: "feels_like", value: feelsLike },
  ];

  return (
    <div className="flex w-5/6 justify-between rounded-2xl bg-slate-50/90 p-4">
      {metrics.map((metric, index) => (
        <MetricItem key={index} {...metric} />
      ))}
    </div>
  );
};

export default OtherMetrics;
