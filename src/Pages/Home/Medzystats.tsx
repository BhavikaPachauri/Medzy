"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "../../common/SectionHeader";

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  decimals?: number;
  accentColor: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Healthcare Partners",
    sublabel: "Trusted by clinics, hospitals & pharmacies across India",
    accentColor: "#00c4b8",
  },
  {
    id: 2,
    value: 2,
    suffix: "+",
    label: "States Covered",
    sublabel: "Current active distribution coverage with planned rapid expansion",
    accentColor: "#00e0d3",
  },
  {
    id: 3,
    value: 99.5,
    suffix: "%",
    label: "On-Time Delivery Rate",
    sublabel: "Industry-leading fulfilment accuracy, every single order",
    decimals: 1,
    accentColor: "#00f0e0",
  },
];

/* ---------------- Hooks ---------------- */

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return visible;
}

function useCounter(
  target: number,
  duration: number,
  active: boolean,
  decimals = 0
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(parseFloat((eased * target).toFixed(decimals)));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, duration, decimals]);

  return count.toFixed(decimals);
}

/* ---------------- Card ---------------- */

function StatCard({
  stat,
  index,
  active,
}: {
  stat: Stat;
  index: number;
  active: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const count = useCounter(stat.value, 2200, active, stat.decimals ?? 0);

  return (
    <div
      className="relative transition-all duration-700"
      style={{
        opacity: active ? 1 : 0,
        transform: active
          ? "translateY(0)"
          : "translateY(56px)",
        transitionDelay: `${index * 0.18}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow border */}
      <div
        className={`absolute -inset-[2px] rounded-[28px] transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `linear-gradient(135deg, ${stat.accentColor}55, transparent 60%, ${stat.accentColor}33)`,
        }}
      />

      <div
        className={`relative rounded-[26px] overflow-hidden h-full p-10 flex flex-col gap-16 backdrop-blur-xl border transition-all duration-300 ${
          hovered
            ? "bg-white/15 border-white/40 shadow-[0_32px_80px_rgba(0,0,0,0.2)] -translate-y-1.5"
            : "bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
        }`}
      >
        {/* shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-50" />

        {/* glow circle */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full transition-transform duration-500"
          style={{
            background: `radial-gradient(circle, ${stat.accentColor}30 0%, transparent 65%)`,
            transform: hovered ? "scale(1.3)" : "scale(1)",
          }}
        />

        <div>
          {/* number */}
          <div className="flex items-end gap-3 mb-2">
            <span className="text-5xl font-extrabold text-white tracking-tight">
              {count}
            </span>
            <span className="text-2xl font-extrabold text-white/70 mb-1">
              {stat.suffix}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-1 font-heading">
            {stat.label}
          </h3>

          <p className="text-sm text-white/60 section-paragraph">
            {stat.sublabel}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main ---------------- */

export default function MedzyStats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const active = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-[clamp(3.5rem,8vw,6rem)] bg-[linear-gradient(145deg,#0bbf9a_0%,#00a884_25%,#008c76_50%,#006b63_75%,#004d47_100%)]"
    >
      {/* rotating circle */}
      <div className="absolute -top-[120px] -left-[120px] w-[420px] h-[420px] rounded-full border border-white/10 animate-rotate-slow" />

      <div className="absolute -top-[80px] -left-[80px] w-[320px] h-[320px] rounded-full border border-white/20" />

      <div className="absolute -bottom-[160px] -right-[160px] w-[500px] h-[500px] rounded-full border border-white/10" />

      {/* blobs */}
      <div className="absolute top-[10%] left-[30%] w-[500px] h-[500px] rounded-full blur-[60px] bg-[radial-gradient(circle,rgba(0,240,224,0.12)_0%,transparent_65%)]" />

      <div className="absolute bottom-[5%] right-[20%] w-[400px] h-[400px] rounded-full blur-[70px] bg-[radial-gradient(circle,rgba(0,30,28,0.4)_0%,transparent_65%)]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Impact"
          title="Numbers That Build Trust"
          subtitle="Medzy powers healthcare delivery with strong network reach, consistent fulfillment, and measurable reliability."
          className="mb-12 sm:mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}