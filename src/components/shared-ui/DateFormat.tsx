import { type FC } from "react";

interface DateFormatProps {
  dayAndMonth: string;
  weekDay: string;
  time?: string;
}

const DateFormat: FC<DateFormatProps> = ({ dayAndMonth, weekDay, time }) => {
  return (
    <>
      {time ? (
        <div>{`${dayAndMonth}, ${weekDay} ${time}`}</div>
      ) : (
        <div>
          <p>{weekDay}</p>
          <p>{dayAndMonth}</p>
        </div>
      )}
    </>
  );
};

export default DateFormat;
