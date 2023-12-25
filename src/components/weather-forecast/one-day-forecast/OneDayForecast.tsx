import { type FC } from "react";
import DateFormat from "../../shared-ui/DateFormat";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";
import TemperatureRange from "../../shared-ui/TemperatureRange";

interface OneDayForecastProps {
  dayAndMonth: string;
  weekDay: string;
  iconSrc: string;
  alt: string;
  low: number;
  high: number;
}

const OneDayForecast: FC<OneDayForecastProps> = ({
  dayAndMonth,
  weekDay,
  iconSrc,
  alt,
  low,
  high,
}) => {
  return (
    <div className="flex flex-col items-center sM:first:pb-5 sM:[&:nth-child(2)]:pb-5 sm:first:pb-10 sm:[&:nth-child(2)]:pb-10 lg:pb-0">
      <DateFormat dayAndMonth={dayAndMonth} weekDay={weekDay} />
      <BackgroundImage
        src={iconSrc}
        alt={alt}
        originalWidth={196}
        originalHeight={196}
        className="sM:w-[10.5rem] sm:w-36 lg:w-[10.5rem]"
      />
      <TemperatureRange low={low} high={high} className="font-medium" />
    </div>
  );
};

export default OneDayForecast;
