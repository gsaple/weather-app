import WeatherCardWrapper from "@/components/WeatherCardWrapper";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";

export default function Home() {
  return (
    <div className="relative mx-auto flex h-screen max-w-[90rem] flex-col justify-center bg-gradient-to-br from-indigo-400 to-indigo-500 sm:min-h-[54.25rem] sm:min-w-[52rem] lg:min-h-[46.125rem] lg:min-w-[75.5rem] sM:min-h-[97.5rem] sM:min-w-[27.75rem]">
      <BackgroundImage
        className="absolute bottom-0 right-0 w-[14.25rem]"
        src="/backgrounds/app.png"
        alt="app background pic"
        originalWidth={264}
        originalHeight={255}
      />
      <WeatherCardWrapper />
    </div>
  );
}
