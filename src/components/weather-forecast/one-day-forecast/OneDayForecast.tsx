import { type FC } from "react";
import DateFormat from "../../shared-ui/DateFormat";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";
import TemperatureRange from "../../shared-ui/TemperatureRange";

export interface OneDayForecastProps {
  mainCondition: string;
  shiftsFromUTC: number;
  temperature: { low: number; high: number };
}

const OneDayForecast: FC<OneDayForecastProps> = ({
  mainCondition,
  shiftsFromUTC,
  temperature,
}) => {
  return (
    <div className="flex flex-col items-center sm:first:pb-10 lg:pb-0 sM:first:pb-5 sm:[&:nth-child(2)]:pb-10 sM:[&:nth-child(2)]:pb-5">
      <DateFormat shiftsFromUTC={shiftsFromUTC} showCurrentTime={false} />
      <BackgroundImage
        src={`/weather-icons/${mainCondition}.png`}
        alt={`${mainCondition} icon`}
        originalWidth={196}
        originalHeight={196}
        className="sm:w-36 lg:w-[10.5rem] sM:w-[10.5rem]"
      />
      <TemperatureRange
        low={temperature.low}
        high={temperature.high}
        className="font-medium"
      />
    </div>
  );
};

export default OneDayForecast;
