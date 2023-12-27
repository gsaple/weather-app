"use client";
import { type FC } from "react";
import { useState } from "react";
import WeatherIcon from "../shared-ui/WeatherIcon";

const BarUI: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showCancel, setShowCancel] = useState<boolean>(false);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const onCloseClicked = () => {
    setInputValue("");
    document.getElementById("cityField")?.focus();
  };
  const onCancelClicked = () => {
    setInputValue("");
    setShowCancel(false);
  };

  return (
    <div className="flex sM:w-full sm:w-full lg:w-2/4">
      <div className="relative grow">
        <span className="absolute left-1 top-1.5">
          <WeatherIcon
            src="/weather-icons/search.svg"
            alt="search icon"
            width={24}
            height={24}
          />
        </span>
        <input
          type="text"
          id="cityField"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => {
            setShowCancel(true);
          }}
          placeholder="Search for a city"
          spellCheck={false}
          className="py-2 pl-8 outline-none text-sm text-zinc-800 rounded-lg placeholder:italic placeholder:font-medium w-full"
        />
        {inputValue && (
          <button className="absolute right-1 top-1.5" onClick={onCloseClicked}>
            <WeatherIcon
              src="/weather-icons/close.svg"
              alt="search icon"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {showCancel && (
        <button
          className="text-zinc-500 font-medium ml-2"
          onClick={onCancelClicked}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default BarUI;
