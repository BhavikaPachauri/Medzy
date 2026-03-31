"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "../../common/SectionHeader";

/* ── Intersection hook ── */
function useInView(ref: React.RefObject<Element | null>, threshold = 0.15): boolean {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ── Icons ── */
const VisionIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="20" cy="20" r="3" fill="currentColor" />
    <path d="M20 4C20 4 8 12 8 20C8 28 20 36 20 36C20 36 32 28 32 20C32 12 20 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.35" />
    <path d="M4 20H8M32 20H36M20 4V8M20 32V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MissionIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
    <path d="M20 4L24 14H34L26 20L29 30L20 24L11 30L14 20L6 14H16L20 4Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <circle cx="20" cy="18" r="3" fill="currentColor" opacity="0.4" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
    <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.12" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Data ── */
const visionPoints: string[] = [
  "India's most trusted pharmaceutical distributor",
  "Uncompromising quality across every delivery",
  "Full regulatory compliance at every step",
  "Deep-rooted customer satisfaction culture",
];

const missionPoints: string[] = [
  "Efficient delivery of essential healthcare products",
  "Highest standards of product safety maintained",
  "Strict adherence to regulatory requirements",
  "Reliable supply chain from source to patient",
];

/* ── Card ── */
interface CardProps {
  type: "vision" | "mission";
  icon: React.ReactNode;
  tag: string;
  heading: string;
  body: string;
  points: string[];
  delay: number;
  visible: boolean;
}

function Card({ type, icon, tag, heading, body, points, delay, visible }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const isVision = type === "vision";

  return (
    <div
      className="relative flex flex-col h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <div
        className="relative flex flex-col gap-6 h-full rounded-3xl p-8 overflow-hidden border transition-all duration-400"
        style={{
          background: isVision
            ? hovered ? "linear-gradient(145deg,#ffffff,#f2fdfb)" : "#ffffff"
            : hovered ? "linear-gradient(145deg,#00b2a9,#00958d)" : "linear-gradient(145deg,#00b2a9,#009e96)",
          borderColor: isVision
            ? hovered ? "rgba(0,178,169,0.35)" : "rgba(0,178,169,0.14)"
            : "transparent",
          boxShadow: hovered
            ? isVision
              ? "0 24px 64px rgba(0,178,169,0.13), 0 4px 16px rgba(0,0,0,0.05)"
              : "0 24px 64px rgba(0,150,140,0.35)"
            : isVision
              ? "0 4px 32px rgba(0,0,0,0.05)"
              : "0 8px 40px rgba(0,150,140,0.25)",
        }}
      >
        {/* Decorative bg circle */}
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none transition-transform duration-500"
          style={{
            background: isVision
              ? "radial-gradient(circle, rgba(0,178,169,0.06) 0%, transparent 65%)"
              : "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)",
            transform: hovered ? "scale(1.4)" : "scale(1)",
          }}
        />
        {/* Dot grid texture */}
        {!isVision && (
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        )}

        {/* Tag row */}
        <div className="flex items-center gap-3 relative z-10">
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-400"
            style={{
              background: isVision
                ? hovered ? "linear-gradient(135deg,#00b2a9,#00d4c8)" : "linear-gradient(135deg,#e6faf9,#ccf5f2)"
                : "rgba(255,255,255,0.2)",
              color: isVision ? (hovered ? "#ffffff" : "#00958d") : "#ffffff",
              transform: hovered ? "rotate(-5deg) scale(1.08)" : "none",
            }}
          >
            {icon}
          </div>
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: isVision ? "rgba(0,178,169,0.1)" : "rgba(255,255,255,0.18)",
              color: isVision ? "#00958d" : "rgba(255,255,255,0.9)",
              letterSpacing: "0.12em",
            }}
          >
            {tag}
          </span>
        </div>

        {/* Heading + body */}
        <div className="relative z-10 flex flex-col gap-3">
          <h3
            className="text-2xl font-black leading-snug font-heading"
            style={{
              color: isVision ? "#0f1a19" : "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {heading}
          </h3>
          <p
            className="text-sm leading-relaxed font-body"
            style={{
              color: isVision ? "#5f6b6a" : "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
            }}
          >
            {body}
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px rounded-full relative z-10"
          style={{
            background: isVision ? "rgba(0,178,169,0.14)" : "rgba(255,255,255,0.2)",
          }}
        />

        {/* Points */}
        <ul className="relative z-10 flex flex-col gap-3">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-3">
              <span style={{ color: isVision ? "#00b2a9" : "rgba(255,255,255,0.9)", marginTop: 2 }}>
                <CheckIcon />
              </span>
              <span
                className="text-sm font-body"
                style={{
                  color: isVision ? "#374847" : "rgba(255,255,255,0.88)",
                  lineHeight: 1.6,
                }}
              >
                {pt}
              </span>
            </li>
          ))}
        </ul>

    
       
      </div>
    </div>
  );
}

/* ── Main export ── */
export default function VisionMission() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visible = useInView(sectionRef);

  return (
    <section
        ref={sectionRef}
        className="relative w-full overflow-hidden py-20 sm:py-28"
        style={{ background: "linear-gradient(160deg,#f0fdfb 0%,#f8ffff 45%,#e8f9f7 100%)" }}
      >
        {/* Soft blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,178,169,0.07) 0%, transparent 70%)",
            transform: "translate(25%,-30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,178,169,0.05) 0%, transparent 70%)",
            transform: "translate(-20%,20%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            
            title="Vision & Mission"
  
            className="mb-12 sm:mb-14"
          />

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Card
              type="vision"
              icon={<VisionIcon />}
              tag="Our Vision"
              heading="India's Most Trusted Pharma Partner"
              body="To become India's most trusted pharmaceutical distribution partner, known for quality, compliance, and unwavering customer satisfaction across every touchpoint."
              points={visionPoints}
              delay={0.1}
              visible={visible}
            />
            <Card
              type="mission"
              icon={<MissionIcon />}
              tag="Our Mission"
              heading="Delivering Healthcare With Purpose"
              body="To deliver essential healthcare products efficiently while maintaining the highest standards of quality, safety, and regulatory compliance — every single day."
              points={missionPoints}
              delay={0.25}
              visible={visible}
            />
          </div>

         
        </div>
    </section>
  );
}