"use client";

import { useEffect, useRef, type JSX } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function LearnMoreButton({ title }: { title?: string }): JSX.Element {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const bgRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const bg = bgRef.current;

    if (!btn || !bg) return;

    // initial position
    gsap.set(bg, { x: "100%" });

    const hoverIn = () => {
      gsap.killTweensOf(bg);
      gsap.to(bg, {
        x: "0%",
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const hoverOut = () => {
      gsap.killTweensOf(bg);
      gsap.to(bg, {
        x: "100%",
        duration: 0.45,
        ease: "power3.inOut",
      });
    };

    btn.addEventListener("mouseenter", hoverIn);
    btn.addEventListener("mouseleave", hoverOut);
    btn.addEventListener("focus", hoverIn);
    btn.addEventListener("blur", hoverOut);

    return () => {
      btn.removeEventListener("mouseenter", hoverIn);
      btn.removeEventListener("mouseleave", hoverOut);
      btn.removeEventListener("focus", hoverIn);
      btn.removeEventListener("blur", hoverOut);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      className="relative flex overflow-hidden inline-flex items-center gap-2 py-1 ps-2 pe-1 rounded-full bg-[#00a9ae] text-white font-medium"
    >
      {/* sliding background */}
      <span
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #8ac43f 0%, #86dc5e 100%)",
          zIndex: 0,
          transform: "translateX(100%)",
        }}
      />

      {/* content */}
      <Link
        to="/partners"
        className="flex gap-2 px-4 justify-center items-center relative z-10"
      >
        {title}
      </Link>
    </button>
  );
}