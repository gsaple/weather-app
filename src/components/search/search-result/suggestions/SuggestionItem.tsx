import { type FC } from "react";
import { type GeoLocation } from "@/components/WeatherCard";

export interface SuggestionItemProps {
  typedInput: string;
  suggestion: string;
  latitude: number;
  longitude: number;
  setGeo: (coordinates: GeoLocation) => void;
  setInput: (input: string) => void;
  setShowCancel: (showCancel: boolean) => void;
}

const SuggestionItem: FC<SuggestionItemProps> = ({
  typedInput,
  suggestion,
  latitude,
  longitude,
  setGeo,
  setInput,
  setShowCancel,
}) => {
  const typedInputStartIndex: number = suggestion
    .toLowerCase()
    .indexOf(typedInput.toLowerCase());

  const typedInputFound: boolean = typedInputStartIndex !== -1;

  return (
    <li
      className="min-w-max hover:bg-silver-sand"
      onClick={() => {
        setGeo({
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        });
        setInput("");
        setShowCancel(false);
      }}
    >
      <i className="nf nf-md-map_marker_radius mx-1 text-algae-green"></i>
      {typedInputFound ? (
        <>
          {typedInputStartIndex > 0 && (
            <span className="text-spring-green">
              {suggestion.substring(0, typedInputStartIndex)}
            </span>
          )}
          <span className="font-semibold text-spruce-green">
            {suggestion.substring(
              typedInputStartIndex,
              typedInputStartIndex + typedInput.length,
            )}
          </span>
          <span className="pr-2 text-spring-green">
            {suggestion.substring(typedInputStartIndex + typedInput.length)}
          </span>
        </>
      ) : (
        <span className="text-spring-green">{suggestion}</span>
      )}
    </li>
  );
};

export default SuggestionItem;
