import { type FC } from "react";
import WeatherIcon from "../../shared-ui/WeatherIcon";
import { Inter_Tight } from "next/font/google";
interface MetricItemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  value: string;
}

const inter = Inter_Tight({ subsets: ["latin"] });

const MetricItem: FC<MetricItemProps> = ({
  src,
  alt,
  width,
  height,
  value,
}) => {
  return (
    <div className={`flex flex-col items-center ${inter.className}`}>
      <WeatherIcon src={src} alt={alt} width={width} height={height} />
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
};

export default MetricItem;
