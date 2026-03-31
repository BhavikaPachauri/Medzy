import { useEffect, useRef } from "react";

export default function useReveal<T extends HTMLElement = HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .7s cubic-bezier(.22,1,.36,1) ${delay}ms`;

    if (typeof IntersectionObserver === "undefined") {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "none";
        io.disconnect();
      }
    }, { threshold: 0.12 });

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return ref;
}
