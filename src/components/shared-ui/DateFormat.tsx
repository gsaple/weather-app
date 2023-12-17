import { type FC } from "react";

interface DateFormatProps {
  dayAndMonth: string;
  weekDay: string;
  time?: string;
  className?: string;
}

const DateFormat: FC<DateFormatProps> = ({
  dayAndMonth,
  weekDay,
  time,
  className,
}) => {
  return (
    <div className={className}>
      {time ? (
        <div>{`${dayAndMonth}, ${weekDay} ${time}`}</div>
      ) : (
        <div>
          <div className="text-2xl font-semibold">{weekDay}</div>
          <p className="text-center text-sm text-zinc-800 font-medium">{dayAndMonth}</p>
        </div>
      )}
    </div>
  );
};

export default DateFormat;
