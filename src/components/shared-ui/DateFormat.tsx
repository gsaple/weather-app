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
          <p>{weekDay}</p>
          <p>{dayAndMonth}</p>
        </div>
      )}
    </div>
  );
};

export default DateFormat;
