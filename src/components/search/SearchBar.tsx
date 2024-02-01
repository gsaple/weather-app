import { type FC, useState, memo } from "react";
import Spinner from "../shared-ui/Spinner";

interface SearchBarProps {
  inputValue: string;
  isSearching: boolean;
  showCancel: boolean;
  setShowCancel: (showCancel: boolean) => void;
  setInputValue: (inputValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  inputValue,
  isSearching,
  showCancel,
  setShowCancel,
  setInputValue,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputText = event.currentTarget.value;
    const alphabetPattern = /^[A-Za-z\s]*$/;
    if (alphabetPattern.test(inputText)) {
      setInputValue(inputText);
    }
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
        {isSearching ? (
          <Spinner className="absolute left-1 top-2.5 h-4 w-4 text-crystal-blue" />
        ) : (
          <i className="nf nf-fa-search absolute left-1 top-2.5 text-cadet-grey"></i>
        )}
        <input
          type="text"
          id="cityField"
          value={inputValue}
          autoComplete="off"
          onChange={handleInputChange}
          onFocus={() => {
            setShowCancel(true);
          }}
          placeholder="Search for a place"
          spellCheck={false}
          className="tap-highlight-none w-full rounded-lg py-2 pl-6 text-sm font-medium text-zinc-800 outline-none placeholder:font-medium placeholder:italic"
        />
        {inputValue && (
          <i
            className="nf nf-md-close_outline absolute right-1 top-2.5 text-cadet-grey"
            onClick={onCloseClicked}
          ></i>
        )}
      </div>
      {showCancel && (
        <button
          className="tap-highlight-none ml-2 font-medium text-cadet-grey"
          onClick={onCancelClicked}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default memo(SearchBar);
