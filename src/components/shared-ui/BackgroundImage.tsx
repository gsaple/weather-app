import { type FC } from "react";
import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
  originalWidth: number;
  originalHeight: number;
  className: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({
  src,
  alt,
  originalWidth,
  originalHeight,
  className,
}) => {
  return (
    <div className={className}>
      <Image
        width={originalWidth}
        height={originalHeight}
        src={src}
        alt={alt}
        priority={true}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
