import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

const TEAL = "#00B8A9";
const NAVY = "#1C3557";
const LIGHT = "#F4FBFA";

const values = [
  {
    id: "01",
    title: "Reliability",
    tagline: "Delivered. Every time.",
    description:
      "Trust is the foundation of every relationship we build. We ensure hassle-free distribution of healthcare products to providers and patients—every single time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Excellence",
    tagline: "Highest standards, always.",
    description:
      "Maintaining the highest standards of quality and professionalism, we ensure our pharmaceutical distribution is handled with the utmost care and attention.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Integrity",
    tagline: "Transparent. Honest. Accountable.",
    description:
      "We believe in transparency, honesty, and accountability—forging strong, lasting relationships with healthcare providers, suppliers, and manufacturers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Innovation",
    tagline: "Forward-thinking healthcare.",
    description:
      "We embrace technology and forward-thinking practices to continuously improve healthcare access and our operational efficiency.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6H8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Compliance",
    tagline: "Regulation is our standard.",
    description:
      "Strict adherence to regulatory standards is not a checkbox—it is a core part of how we do business, every day.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function PurposeValues() {
  const [hdrRef, hdrVisible] = useVisible(0.1);
  const [gridRef, gridVisible] = useVisible(0.1);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      className="relative overflow-hidden py-20 px-5"
      style={{ background: `linear-gradient(170deg, #ffffff 0%, ${LIGHT} 100%)` }}
    >
      {/* subtle bg decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(0,184,169,0.06) 0%, transparent 70%)` }} />
      <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(28,53,87,0.04) 0%, transparent 70%)` }} />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div
          ref={hdrRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: hdrVisible ? 1 : 0, transform: hdrVisible ? "translateY(0)" : "translateY(24px)" }}
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(0,184,169,0.10)", color: TEAL, fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            Who We Are
          </span>
          <h2
            className="font-bold text-4xl leading-tight mb-4"
            style={{ fontFamily: "'Georgia', serif", color: NAVY }}
          >
            Our Purpose &amp; <span style={{ color: TEAL }}>Values</span>
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-48 rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)` }} />
          </div>
        </div>

        {/* Grid — 5 equal cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700"
          style={{ opacity: gridVisible ? 1 : 0, transform: gridVisible ? "translateY(0)" : "translateY(24px)" }}
        >
          {values.map((v) => {
            const isH = hovered === v.id;
            return (
              <div
                key={v.id}
                className="relative rounded-2xl cursor-default overflow-hidden"
                style={{
                  background: "#fff",
                  border: `1px solid ${isH ? "rgba(0,184,169,0.30)" : "rgba(0,184,169,0.10)"}`,
                  boxShadow: isH ? "0 12px 32px rgba(28,53,87,0.10)" : "0 2px 8px rgba(28,53,87,0.04)",
                  transform: isH ? "translateY(-3px)" : "translateY(0)",
                  transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
                }}
                onMouseEnter={() => setHovered(v.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${TEAL}, transparent)` }} />

            

                <div className="relative p-6" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                  {/* icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: isH ? "rgba(0,184,169,0.12)" : "rgba(0,184,169,0.07)",
                      border: `1px solid rgba(0,184,169,${isH ? "0.28" : "0.12"})`,
                      color: TEAL,
                      transition: "all 0.22s",
                    }}
                  >
                    {v.icon}
                  </div>

                  {/* tagline */}
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: TEAL }}>
                    {v.tagline}
                  </p>

                  {/* title */}
                  <h3
                    className="font-bold mb-2 tracking-tight"
                    style={{ fontFamily: "'Georgia', serif", fontSize: "17px", color: NAVY }}
                  >
                    {v.title}
                  </h3>

                  {/* body */}
                  <p className="text-sm leading-relaxed" style={{ color: "#5A6A7E" }}>
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}