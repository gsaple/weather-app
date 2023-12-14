import WeatherCard from "@/components/WeatherCard";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center mx-auto bg-gradient-to-br from-indigo-400 to-indigo-500 relative min-w-[375px] max-w-[1280px] h-screen min-h-[46.125rem]">
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
