import { TimeInfo } from "@/components/shared-ui/DateFormat";

export function dateFormat(shiftsFromUTC: number): TimeInfo {
  const localDate = new Date();

  // this offset is in minutes, this has the opposite sign to shiftsFromUTC received here
  const timezoneOffset = localDate.getTimezoneOffset();

  // number of milliseconds since the epoch, at the place of interest
  const utcTimeMilliseconds =
    localDate.getTime() + (timezoneOffset * 60 + shiftsFromUTC) * 1000;

  const dateFormatOfQueryPlace = new Date(utcTimeMilliseconds)
    .toLocaleString("default", {
      day: "numeric",
      month: "long",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
    .split(/, | at /);

  return {
    dayAndMonth: dateFormatOfQueryPlace[1],
    weekDay: dateFormatOfQueryPlace[0],
    time: dateFormatOfQueryPlace[2],
  };
}
