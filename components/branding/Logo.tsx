import React from "react";
import LogoSVG from "../../assets/branding/logo.svg";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width, height }: LogoProps) {
  return <LogoSVG className={className} width={width} height={height} />;
}

Logo.defaultProps = {
  className: "",
  width: 50,
  height: 50,
};
