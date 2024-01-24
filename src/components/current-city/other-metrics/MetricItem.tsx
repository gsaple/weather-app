import { type FC } from "react";
import WeatherIcon from "../../shared-ui/WeatherIcon";
import { Inter_Tight } from "next/font/google";
interface MetricItemProps {
  iconName: string;
  value: string;
}

const inter = Inter_Tight({ subsets: ["latin"] });

const MetricItem: FC<MetricItemProps> = ({ iconName, value }) => {
  return (
    <div className={`flex flex-col items-center ${inter.className}`}>
      <WeatherIcon
        src={`/weather-icons/${iconName}.svg`}
        alt={`${iconName} icon`}
        width={30}
        height={30}
      />
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
};

export default MetricItem;
