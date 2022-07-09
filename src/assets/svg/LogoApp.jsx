import * as React from "react";

export const LogoApp = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={5} fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.333 11.11a2 2 0 0 0-2 2v15.168a2 2 0 0 0 2 2h19.334a2 2 0 0 0 2-2V13.11a2 2 0 0 0-2-2H10.333Zm2.375 12.362c-.575 0-1.041.466-1.041 1.042v.277a1.042 1.042 0 0 0 2.083 0v-.277c0-.576-.466-1.042-1.042-1.042Zm2.57-2.986a1.042 1.042 0 0 1 2.083 0v4.305a1.042 1.042 0 1 1-2.083 0v-4.305Zm4.652.903c-.575 0-1.041.466-1.041 1.041v2.361a1.042 1.042 0 0 0 2.083 0v-2.36c0-.576-.466-1.042-1.042-1.042Zm2.57-3.264a1.042 1.042 0 0 1 2.083 0v6.666a1.042 1.042 0 0 1-2.083 0v-6.666Zm4.653-2.43c-.576 0-1.042.465-1.042 1.04v8.056a1.042 1.042 0 0 0 2.083 0v-8.055c0-.576-.466-1.042-1.041-1.042Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={35.789}
        y1={40}
        x2={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B2" />
        <stop offset={1} stopColor="#5AA62B" />
      </linearGradient>
    </defs>
  </svg>
);
