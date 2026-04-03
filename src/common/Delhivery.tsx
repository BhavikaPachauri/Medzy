import  { useState } from "react";

function Delhivery() {


  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        fixed top-1/2 right-0 -translate-y-1/2 z-[9999] cursor-pointer
        flex flex-col items-center justify-center gap-[11px]
        py-[16px] px-[5px] w-[40px] min-h-[168px]
        rounded-l-[16px]
        bg-[#9ee856]
        hover:bg-[#00B5BF]
        hover:shadow-[-2px_0_0_0_#007A83,-8px_0_28px_rgba(0,180,190,0.55)]
        transition-all duration-200 ease-in-out
      "
    >
      {/* Delivery */}
      <span
        className="
          font-black text-white text-[12px] md:text-[15px] tracking-[0.14em] uppercase leading-none
          [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180
        "
      >
        Delivery
      </span>

      {/* One Day */}
      <span
        className="
           text-white text-[12px] md:text-[15px] tracking-[0.14em] uppercase leading-none
          [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180
        "
      >
        One Day
      </span>
    </div>
  );
}

export default Delhivery;