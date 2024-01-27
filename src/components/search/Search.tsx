import { FC, useState, useCallback, memo } from "react";
import { GeoLocation } from "../WeatherCard";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

interface SearchProps {
  setGeo: (coordinates: GeoLocation) => void;
}

const Search: FC<SearchProps> = ({ setGeo }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const cachedSetInputValue = useCallback((inputValue: string) => {
    setInputValue(inputValue);
  }, []);

  const cachedSetIsSearching = useCallback((isSearching: boolean) => {
    setIsSearching(isSearching);
  }, []);

  return (
    <>
      <SearchBar
        inputValue={inputValue}
        setInputValue={cachedSetInputValue}
        isSearching={isSearching}
      />
      <SearchResult
        typedInput={inputValue}
        setIsSearching={cachedSetIsSearching}
        setGeo={setGeo}
        setInput={cachedSetInputValue}
      />
    </>
  );
};

export default memo(Search);
