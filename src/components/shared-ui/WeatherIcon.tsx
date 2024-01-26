import { type FC } from "react";
import Image from "next/image";

interface WeatherIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const WeatherIcon: FC<WeatherIconProps> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default WeatherIcon;
