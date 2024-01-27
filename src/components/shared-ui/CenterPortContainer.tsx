import { type FC } from "react";

interface CenterPortContainerProps {
  children: React.ReactNode;
  className: string;
}

const CenterPortContainer: FC<CenterPortContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${className}`}
    >
      {children}
    </div>
  );
};

export default CenterPortContainer;
