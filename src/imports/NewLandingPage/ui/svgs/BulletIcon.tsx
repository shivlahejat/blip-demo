import React from "react";

interface BulletIconProps {
  color?: string;
}

const BulletIcon = ({ color = "#FFB7A2" }: BulletIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
    >
      <circle cx="3.47852" cy="3.47852" r="3.47852" fill={color} />
    </svg>
  );
};

export default BulletIcon;
