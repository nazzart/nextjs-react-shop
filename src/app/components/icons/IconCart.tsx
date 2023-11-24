"use client";
import { Icon } from "@/models/icon.interface";
import { FC } from "react";

const IconCart: FC<Icon> = ({ size = 18, onClick, style }) => {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 20"
      fill="none"
      onClick={onClick}
      style={style}
    
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.9"
        d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
      />
    </svg>
  );
};
export default IconCart;
