import { FC, useState, useCallback, memo } from "react";
import { GeoLocation } from "../WeatherCard";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

interface SearchProps {
  setGeo: (coordinates: GeoLocation) => void;
}

const Search: FC<SearchProps> = ({ setGeo }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showCancel, setShowCancel] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const cachedSetInputValue = useCallback((inputValue: string) => {
    setInputValue(inputValue);
  }, []);

  const cachedSetIsSearching = useCallback((isSearching: boolean) => {
    setIsSearching(isSearching);
  }, []);

  const cachedSetShowCancel = useCallback((showCancel: boolean) => {
    setShowCancel(showCancel);
  }, []);

  return (
    <>
      <SearchBar
        inputValue={inputValue}
        showCancel={showCancel}
        setShowCancel={cachedSetShowCancel}
        setInputValue={cachedSetInputValue}
        isSearching={isSearching}
      />
      <SearchResult
        typedInput={inputValue}
        setIsSearching={cachedSetIsSearching}
        setGeo={setGeo}
        setInput={cachedSetInputValue}
        setShowCancel={cachedSetShowCancel}
      />
    </>
  );
};

export default memo(Search);
