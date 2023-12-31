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
          <p className="text-center text-sm font-medium text-zinc-800">
            {dayAndMonth}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateFormat;
