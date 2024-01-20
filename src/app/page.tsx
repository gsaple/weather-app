import WeatherCardWrapper from "@/components/WeatherCardWrapper";
import BackgroundImage from "@/components/shared-ui/BackgroundImage";
import { Suspense } from "react";

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
      <Suspense
        fallback={
          <div className="fixed left-1/2 top-1/2 mx-1 w-screen max-w-sm -translate-x-1/2 -translate-y-1/2 transform rounded-md p-4 shadow">
            <div className="flex animate-pulse items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-slate-200"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-slate-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  </div>
                  <div className="h-2 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <WeatherCardWrapper />
      </Suspense>
    </div>
  );
}
