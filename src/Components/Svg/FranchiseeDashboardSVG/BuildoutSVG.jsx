import React from "react";

export default function BuildoutSVG({fillColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M22.1666 25.6667V4.66672C22.1666 3.37805 21.122 2.33339 19.8333 2.33339L8.16665 2.33337C6.87798 2.33337 5.83331 3.37804 5.83331 4.66671V25.6667"
        stroke={fillColor || "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.5 25.6666H24.5"
        stroke={fillColor || "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9166 25.6667V21C16.9166 20.3557 16.3943 19.8334 15.75 19.8334H12.25C11.6057 19.8334 11.0833 20.3557 11.0833 21V25.6667"
        stroke={fillColor || "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.3334 7H11.6667M16.3334 11.0833H11.6667M16.3334 15.1667H11.6667"
        stroke={fillColor || "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
