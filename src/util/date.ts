export function dateFormat(date: Date): string[] {
  return date
    .toLocaleString("default", {
      day: "numeric",
      month: "long",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    })
    .split(/, | at /);
}
