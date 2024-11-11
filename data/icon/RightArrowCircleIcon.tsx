import React from "react";

const RightArrowCircleIcon = ({style}:{style:React.CSSProperties}) => {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_95_2938)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8235 10C18.8235 14.8659 14.8659 18.8235 10 18.8235C5.13411 18.8235 1.17647 14.8659 1.17647 10C1.17647 5.13411 5.13411 1.17647 10 1.17647C14.8659 1.17647 18.8235 5.13411 18.8235 10ZM0 10C0 15.5141 4.48589 20 10 20C15.5141 20 20 15.5141 20 10C20 4.48589 15.5141 0 10 0C4.48589 0 0 4.48589 0 10ZM13.2859 9.41177H4.70589V10.5882H13.2859L10.1729 13.7012L11.0047 14.5341L15.5376 10L11.0047 5.46589L10.1729 6.29882L13.2859 9.41176V9.41177Z"
            fill="#211F1E"
          />
        </g>
        <defs>
          <clipPath id="clip0_95_2938">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="matrix(0 -1 1 0 0 20)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default RightArrowCircleIcon;
