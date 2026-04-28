'use client';

import { type JSX } from 'react';

export default function Ticker(): JSX.Element {
  const items = [
    "Wholesale Distribution",
    "Hospital Supply",
    "Retail Pharmacy",
    "Custom Packaging",
    "Market Intelligence",
    "Regulatory Assistance",
  ];

  const allItems = [...items, ...items];

  return (
    <>
      {/* Ticker */}
      <div className="bg-teal-400 overflow-hidden py-5">
        <div
          className="flex gap-16 w-max hover:[animation-play-state:paused]"
          style={{
            animation: "ticker 30s linear infinite",
          }}
        >
          {allItems.map((item, index) => (
            <span
              key={index}
              className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-90"
            >
              {item}
              {/* <span className="opacity-40 ml-4"> ◆ </span> */}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
