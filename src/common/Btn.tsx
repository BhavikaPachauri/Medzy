"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type BtnProps = {
  title?: string;
  text?: string;
  bg?: string;
  border?: string;
  hover?: string;
  onClick?: () => void;
  as?: "button" | "span";
  type?: "button" | "submit" | "reset";
};

export default function LearnMoreButton({ title, text, bg, border, hover, onClick, as = "button", type = "button" }: BtnProps) {
  const btnRef = useRef<HTMLElement | null>(null);
  const circleRef = useRef<HTMLSpanElement | null>(null);
  const Component = as;

  useEffect(() => {
    const btn = btnRef.current;
    const circle = circleRef.current;

    if (!btn || !circle) return;

    const DIAMETER = 240;

    gsap.set(circle, {
      width: DIAMETER,
      height: DIAMETER,
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
      pointerEvents: "none",
    });

    const getScaleToCover = (
      bw: number,
      bh: number,
      cx: number,
      cy: number
    ): number => {
      const dist1 = Math.hypot(cx, cy);
      const dist2 = Math.hypot(cx - bw, cy);
      const dist3 = Math.hypot(cx, cy - bh);
      const dist4 = Math.hypot(cx - bw, cy - bh);

      const farthest = Math.max(dist1, dist2, dist3, dist4);
      const requiredRadius = farthest;
      const circleRadius = DIAMETER / 2;

      return (requiredRadius / circleRadius) * 1.05;
    };

    const enter = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect();

      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      gsap.set(circle, { left: cx, top: cy });

      const scale = getScaleToCover(rect.width, rect.height, cx, cy);

      gsap.killTweensOf(circle);
      gsap.to(circle, {
        scale,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.killTweensOf(circle);
      gsap.to(circle, {
        scale: 0,
        duration: 0.45,
        ease: "power3.inOut",
      });
    };

    const handleFocus = () => {
      const rect = btn.getBoundingClientRect();

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      gsap.set(circle, { left: cx, top: cy });

      const scale = getScaleToCover(rect.width, rect.height, cx, cy);

      gsap.killTweensOf(circle);
      gsap.to(circle, {
        scale,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    // Events
    btn.addEventListener("pointerenter", enter);
    btn.addEventListener("pointerleave", leave);
    btn.addEventListener("focus", handleFocus);
    btn.addEventListener("blur", leave);

    return () => {
      btn.removeEventListener("pointerenter", enter);
      btn.removeEventListener("pointerleave", leave);
      btn.removeEventListener("focus", handleFocus);
      btn.removeEventListener("blur", leave);
    };
  }, []);

  return (
    <Component
      ref={btnRef}
      {...(as === "button" ? { type } : {})}
      {...(onClick ? { onClick } : {})}
      className={ `${bg} ${text || 'text-white'} relative overflow-hidden inline-flex items-center gap-2 px-6 py-2 rounded-full border ${border || 'border-[#017d77]'} font-medium transition-colors duration-300` }
    >
      {/* Animated circle */}
      <span
        ref={circleRef}
        aria-hidden="true"
        className={` ${hover} absolute rounded-full  z-0` }
      />

      {/* Content */}
      <span className="relative z-10">{title}</span>
    </Component>
  );
}
