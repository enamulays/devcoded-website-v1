import React from "react";

const RightArrowIcon = ({strok}:{strok:string}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke={strok}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default RightArrowIcon;
