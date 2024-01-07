import { type FC } from "react";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import SuggestionItem from "./suggestion/SuggestionItem";
import NonSuggestions from "./NonSuggestions";
import {
  SuggestedPlaceInfo,
  getPlaceSuggestions,
} from "../../api/place-suggestions";

interface SuggestionProps {
  typedInput: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const containerClass: string =
  "absolute top-[100%] z-10 mt-2 w-full rounded-lg py-1 font-medium";

const Suggestions: FC<SuggestionProps> = ({ typedInput, setLoading }) => {
  const [placeSuggestions, setPlaceSuggestions] = useState<
    SuggestedPlaceInfo[]
  >([]);
  const [networkError, setNetworkError] = useState<boolean>(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const abortController = new AbortController();
  const abortSignal = abortController.signal;

  const typingPause = 500; // test if user 'done' typing (i.e. pause for 500ms)

  useEffect(() => {
    async function fetchSuggestions() {
      if (typingTimeout) clearTimeout(typingTimeout);
      const newTypingTimeout = setTimeout(async () => {
        try {
          setLoading(true);
          setPlaceSuggestions(
            await getPlaceSuggestions(typedInput, abortSignal),
          );
        } catch (error: any) {
          if (error.name !== "AbortError") {
            setNetworkError(true);
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

  if (typedInput.length < 3) return null;

  if (networkError)
    return (
      <NonSuggestions
        bgColor="bg-lavender-blush"
        textColor="text-old-brick"
        iconColor="text-salmon-pink"
        iconName="nf-md-close_network"
        message="network connection error"
      />
    );

  if (placeSuggestions.length === 0) {
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
};

export default Suggestions;
