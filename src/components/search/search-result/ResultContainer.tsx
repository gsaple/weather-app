import { type FC } from "react";

interface ResultContainerProps {
  children: React.ReactNode;
  className: string;
}

const ResultContainer: FC<ResultContainerProps> = ({ className, children }) => {
  return (
    <div
      className={`absolute top-[100%] z-10 mt-2 w-full rounded-lg py-1 font-medium lg:w-2/4 sM:z-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default ResultContainer;
