// src/components/ui/Logo.tsx
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        className="h-9 w-auto object-contain drop-shadow-sm"
        fill="none"
        height="60"
        viewBox="0 0 240 60"
        width="240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(10, 10)">
          <path
            d="M20 2 C10 12, 5 24, 20 38 C35 24, 30 12, 20 2 Z"
            fill="none"
            stroke="#E5DEC9"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M20 10 C16 18, 14 26, 20 34"
            stroke="#B66D44"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <circle cx="20" cy="8" fill="#D4B896" r="2" />
        </g>
        <text
          fill="#F8F5EE"
          fontFamily="var(--font-cinzel), serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="4"
          x="58"
          y="32"
        >
          IBERÁ
        </text>
        <text
          fill="#C5B295"
          fontFamily="var(--font-plus-jakarta), sans-serif"
          fontSize="7.5"
          fontWeight="500"
          letterSpacing="4.5"
          x="59"
          y="44"
        >
          ECO-LODGE
        </text>
      </svg>
    </div>
  );
}