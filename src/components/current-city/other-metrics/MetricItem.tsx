import { type FC } from "react";
import WeatherIcon from "../../shared-ui/WeatherIcon";

interface MetricItemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  value: string;
}

const MetricItem: FC<MetricItemProps> = ({
  src,
  alt,
  width,
  height,
  value,
}) => {
  return (
    <div>
      <WeatherIcon src={src} alt={alt} width={width} height={height} />
      {value}
    </div>
  );
};

export default MetricItem;
