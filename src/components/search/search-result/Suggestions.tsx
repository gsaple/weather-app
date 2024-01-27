import { type FC } from "react";
import ResultContainer from "./ResultContainer";
import SuggestionItem from "./suggestions/SuggestionItem";
import { SuggestionItemProps } from "./suggestions/SuggestionItem";

export interface SuggestionsProps {
  suggestionsProps: SuggestionItemProps[];
}

const Suggestions: FC<SuggestionsProps> = ({ suggestionsProps }) => {
  return (
    <ResultContainer className="overflow-x-auto whitespace-nowrap bg-dew-green">
      <ul>
        {suggestionsProps.map((suggestionItemProps, index) => {
          return <SuggestionItem key={index} {...suggestionItemProps} />;
        })}
      </ul>
    </ResultContainer>
  );
};

export default Suggestions;
