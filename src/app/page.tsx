import WeatherCard from "@/components/WeatherCard";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center max-w-[90rem] sM:min-w-[27.75rem] sm:min-w-[52rem] lg:min-w-[75.5rem] mx-auto bg-gradient-to-br from-indigo-400 to-indigo-500 relative h-screen sM:min-h-[97.5rem] sm:min-h-[54.25rem] lg:min-h-[46.125rem]">
      <BackgroundImage
        className="absolute bottom-0 right-0 w-[14.25rem]"
        src="/backgrounds/app.png"
        alt="app background pic"
        originalWidth={264}
        originalHeight={255}
      />
      <WeatherCard />
    </div>
  );
}
