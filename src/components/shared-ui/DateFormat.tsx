import { type FC } from "react";
import { dateFormat } from "@/util/date";

export interface DateFormatProps {
  shiftsFromUTC: number;
  showCurrentTime: boolean;
}

const DateFormat: FC<DateFormatProps> = ({
  shiftsFromUTC,
  showCurrentTime,
}) => {
  const { dayAndMonth, weekDay, time } = dateFormat(shiftsFromUTC);
  return showCurrentTime ? (
    <div className="z-10 ml-6 self-start text-white">
      <div>{`${dayAndMonth}, ${weekDay} ${time}`}</div>
    </div>
  ) : (
    <div>
      <div className="text-2xl font-semibold">{weekDay}</div>
      <p className="text-center text-sm font-medium text-zinc-800">
        {dayAndMonth}
      </p>
    </div>
  );
};

export default DateFormat;
