import { type FC } from "react";
import { useEffect, useState, memo } from "react";
import SuggestionItem from "./suggestion/SuggestionItem";
import NonSuggestions from "./NonSuggestions";

interface SuggestedPlaceInfo {
  place: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

interface SuggestionProps {
  typedInput: string;
  setLoading: (loadingStatus: boolean) => void;
}

type StatusType = "" | "error" | "empty" | "success";

export const containerClass: string =
  "absolute top-[100%] z-10 mt-2 w-full rounded-lg py-1 font-medium";

const Suggestions: FC<SuggestionProps> = ({ typedInput, setLoading }) => {
  const [placeSuggestions, setPlaceSuggestions] = useState<
    SuggestedPlaceInfo[]
  >([]);
  const [responseStatus, setResponseStatus] = useState<StatusType>("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const abortController = new AbortController();
  const typingPause = 500; // test if user 'done' typing (i.e. pause for 500ms)

  useEffect(() => {
    async function fetchSuggestions() {
      if (typingTimeout) clearTimeout(typingTimeout);
      const newTypingTimeout = setTimeout(async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `/api/place-autocomplete?input=${typedInput}`,
            {
              signal: abortController.signal,
            },
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const placeSuggestionsFetched = await response.json();

          if (placeSuggestionsFetched.error)
            throw new Error("Possible Invalid Api Key");

          if (placeSuggestionsFetched.length === 0) {
            setResponseStatus("empty");
          } else {
            setResponseStatus("success");
          }
          setPlaceSuggestions(placeSuggestionsFetched);
        } catch (error: any) {
          if (error.name !== "AbortError") {
            setResponseStatus("error");
            console.error(error);
          }
        } finally {
          setLoading(false);
        }
      }, typingPause);
      setTypingTimeout(newTypingTimeout);
    }

    if (typedInput.length > 2) {
      fetchSuggestions();
    }

    return () => {
      abortController.abort();
    };
  }, [typedInput]);

  if (responseStatus === "error") {
    return (
      <NonSuggestions
        bgColor="bg-lavender-blush"
        textColor="text-old-brick"
        iconColor="text-salmon-pink"
        iconName="nf-md-close_network"
        message="network connection error"
      />
    );
  }

  if (responseStatus === "empty") {
    return (
      <NonSuggestions
        bgColor="bg-buttery-white"
        textColor="text-raw-umber"
        iconColor="text-ripe-lemon"
        iconName="nf-fa-warning"
        message="No Results"
      />
    );
  }

  if (responseStatus === "success") {
    return (
      <ul
        className={`${containerClass} overflow-x-auto whitespace-nowrap bg-dew-green`}
      >
        {placeSuggestions.map((item, index) => {
          const { place, timezone, latitude, longitude } = item;
          const suggestionItemProps = {
            typedInput: typedInput,
            suggestion: place,
            timezone: timezone,
            latitude: latitude,
            longitude: longitude,
          };
          return <SuggestionItem key={index} {...suggestionItemProps} />;
        })}
      </ul>
    );
  }

  return null;
};

export default memo(Suggestions);
