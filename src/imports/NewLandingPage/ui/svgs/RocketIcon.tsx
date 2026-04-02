import React from "react";

const RocketIcon = ({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.75 13.85L10.15 16.25M7.75 13.85C7.75 13.85 9.167 10.308 11.184 7.85M7.75 13.85C2.531 12.545 7.22 7.85 11.184 7.85M10.15 16.25C10.15 16.25 13.692 14.833 16.15 12.816M10.15 16.25C11.455 21.468 16.15 16.78 16.15 12.816M11.184 7.85C13.224 5.364 16.587 4.25 19.75 4.25C19.75 7.413 18.636 10.775 16.15 12.816M14.45 9.457L15.157 8.75M5.519 16.576C4.567 17.377 4.25 19.755 4.25 19.755C4.25 19.755 6.622 19.437 7.421 18.483C7.871 17.949 7.865 17.129 7.364 16.633C7.11631 16.4002 6.79207 16.2659 6.45229 16.2554C6.1125 16.2449 5.78059 16.3589 5.519 16.576Z"
        stroke="#6C3403"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RocketIcon;
