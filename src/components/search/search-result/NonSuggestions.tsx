import { type FC } from "react";
import ResultContainer from "./ResultContainer";

interface NonSuggestionsProps {
  bgColor: string;
  textColor: string;
  iconColor: string;
  iconName: string;
  message: string;
}

const NonSuggestions: FC<NonSuggestionsProps> = ({
  bgColor,
  textColor,
  iconColor,
  iconName,
  message,
}) => {
  return (
    <ResultContainer className={bgColor}>
      <i className={`nf mx-1 ${iconName} ${iconColor}`}></i>
      <span className={`pr-2 ${textColor}`}>{message}</span>
    </ResultContainer>
  );
};

export default NonSuggestions;
