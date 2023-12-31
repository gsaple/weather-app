"use client";
import { type FC } from "react";
import { useState } from "react";

const SearchBar: FC = () => {
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
    <div className="flex lg:w-2/4">
      <div className="relative grow">
        <i className="nf nf-fa-search text-cadet-grey absolute left-1 top-2.5"></i>
        <input
          type="text"
          id="cityField"
          value={inputValue}
          autoComplete="off"
          onChange={handleInputChange}
          onFocus={() => {
            setShowCancel(true);
          }}
          placeholder="Search for a city"
          spellCheck={false}
          className="w-full rounded-lg py-2 pl-6 text-sm font-medium text-zinc-800 outline-none placeholder:font-medium placeholder:italic"
        />
        {inputValue && (
          <i
            className="nf nf-cod-chrome_close text-cadet-grey absolute right-1 top-2.5"
            onClick={onCloseClicked}
          ></i>
        )}
      </div>
      {showCancel && (
        <button
          className="text-cadet-grey ml-2 font-medium"
          onClick={onCancelClicked}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default SearchBar;
