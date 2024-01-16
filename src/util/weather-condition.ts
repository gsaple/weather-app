export function formattedWeatherCondition(condition: string): string {
  const commonCondition = [
    "Clear",
    "Clouds",
    "Snow",
    "Rain",
    "Drizzle",
    "Thunderstorm",
  ];

  if (commonCondition.includes(condition)) {
    return condition.toLocaleLowerCase();
  }

  const atmosphereCondition = [
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ];

  if (atmosphereCondition.includes(condition)) {
    return "atmosphere";
  }

  return "404";
}
