import * as React from "react";

export const LogoApp = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.044}
      y={0.044}
      width={29.913}
      height={29.913}
      rx={2.794}
      fill="url(#a)"
      stroke="url(#b)"
      strokeWidth={0.087}
    />
    <path
      d="M10.403 21v-2.49h2.912v-5.158l-2.912 1.404v-3.088l7.49-3.595V21h-7.49Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={26.842}
        y1={30}
        x2={0}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B2" />
        <stop offset={1} stopColor="#5AA62B" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={26.842}
        y1={30}
        x2={0}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B2" />
        <stop offset={1} stopColor="#5AA62B" />
      </linearGradient>
    </defs>
  </svg>
);
