import { type FC, useState, useEffect } from "react";
import { dateFormat } from "@/util/date";

export interface DateFormatProps {
  shiftsFromUTC: number;
  showCurrentTime: boolean;
}

export interface TimeInfo {
  dayAndMonth: string;
  weekDay: string;
  time: string;
}

const DateFormat: FC<DateFormatProps> = ({
  shiftsFromUTC,
  showCurrentTime,
}) => {
  const [timeInfo, setTimeInfo] = useState<TimeInfo>(dateFormat(shiftsFromUTC));

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (showCurrentTime) {
      setTimeInfo(dateFormat(shiftsFromUTC));
      timerID = setInterval(() => {
        setTimeInfo(dateFormat(shiftsFromUTC));
      }, 1000);
    }
    return () => {
      if (showCurrentTime) {
        clearInterval(timerID);
      }
    };
  }, [shiftsFromUTC]);

  return showCurrentTime ? (
    <div className="z-10 ml-6 self-start text-white">
      <div>{`${timeInfo.dayAndMonth}, ${timeInfo.weekDay} ${timeInfo.time}`}</div>
    </div>
  ) : (
    <div>
      <div className="text-2xl font-semibold">{timeInfo.weekDay}</div>
      <p className="text-center text-sm font-medium text-zinc-800">
        {timeInfo.dayAndMonth}
      </p>
    </div>
  );
};

export default DateFormat;
