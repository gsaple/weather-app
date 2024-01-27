import { type FC } from "react";
import { containerClass } from "../SearchResult";

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
    <div className={`${containerClass} ${bgColor}`}>
      <i className={`nf mx-1 ${iconName} ${iconColor}`}></i>
      <span className={`pr-2 ${textColor}`}>{message}</span>
    </div>
  );
};

export default NonSuggestions;
