"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "../../common/SectionHeader";

interface Feature {
  id: number;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 2" opacity="0.3" />
    <path d="M12 24C12 24 16 16 24 16C32 16 36 24 36 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="10" cy="28" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="24" cy="12" r="4" fill="currentColor" />
    <circle cx="38" cy="28" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="24" cy="36" r="3" fill="currentColor" opacity="0.5" />
    <path d="M14 29L21 34M34 29L27 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
    <path d="M24 12V24L31 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    <path
      d="M24 8V6M36.5 11.5L38 10M40 24H42M36.5 36.5L38 38M24 40V42M11.5 36.5L10 38M8 24H6M11.5 11.5L10 10"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"
    />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <path d="M24 8L28 18H39L30 25L33 36L24 30L15 36L18 25L9 18H20L24 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.2" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
    <path d="M10 14C10 12.9 10.9 12 12 12H28C29.1 12 30 12.9 30 14V28C30 29.1 29.1 30 28 30H18L12 36V30H12C10.9 30 10 29.1 10 28V14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M30 18H36C37.1 18 38 18.9 38 20V34C38 35.1 37.1 36 36 36H36V42L30 36H22C20.9 36 20 35.1 20 34V30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" opacity="0.6" />
    <circle cx="17" cy="21" r="1.5" fill="currentColor" />
    <circle cx="21" cy="21" r="1.5" fill="currentColor" />
    <circle cx="25" cy="21" r="1.5" fill="currentColor" />
  </svg>
);

const features: Feature[] = [
  {
    id: 1,
    icon: <NetworkIcon />,
    tag: "NETWORK",
    title: "Pan-India Distribution",
    desc: "Seamless delivery across all major states with our extensive logistics infrastructure connecting every corner of India.",
    stat: "28+",
    statLabel: "States Covered",
  },
  {
    id: 2,
    icon: <ClockIcon />,
    tag: "DELIVERY",
    title: "Timely Fulfillment",
    desc: "Streamlined logistics powered by real-time tracking ensures your orders arrive exactly when promised, every single time.",
    stat: "98%",
    statLabel: "On-Time Rate",
  },
  {
    id: 3,
    icon: <StarIcon />,
    tag: "VALUE",
    title: "Competitive Pricing",
    desc: "Cost-effective pharmaceutical solutions without ever compromising on quality, giving you the best value for every rupee.",
    stat: "30%",
    statLabel: "Avg. Savings",
  },
  {
    id: 4,
    icon: <ChatIcon />,
    tag: "SUPPORT",
    title: "24/7 Customer Support",
    desc: "Dedicated support team available round the clock for all inquiries, order tracking, and assistance whenever you need it.",
    stat: "24/7",
    statLabel: "Always Available",
  },
];

function useIntersectionObserver(
  ref: React.RefObject<Element | null>,
  options?: IntersectionObserverInit
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  visible: boolean;
}

function FeatureCard({ feature, index, visible }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(0,178,169,0.12) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="relative bg-white rounded-2xl p-6 sm:p-7 h-full flex flex-col gap-4 overflow-hidden"
        style={{
          border: "1px solid #e5f7f5",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,178,169,0.12), 0 4px 20px rgba(0,0,0,0.06)"
            : "0 4px 24px rgba(0,0,0,0.05)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none transition-transform duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(0,178,169,0.08) 0%, transparent 60%)",
            transform: hovered ? "scale(1.4)" : "scale(1)",
          }}
        />

        {/* Top row: icon + tag */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-400"
            style={{
              background: hovered
                ? "linear-gradient(135deg, #00b2a9 0%, #00d4c8 100%)"
                : "linear-gradient(135deg, #e8faf9 0%, #d0f5f3 100%)",
              color: hovered ? "#ffffff" : "#00b2a9",
              transform: hovered ? "rotate(-4deg) scale(1.06)" : "rotate(0deg) scale(1)",
              transition: "all 0.4s ease",
            }}
          >
            {feature.icon}
          </div>

          <span
            className="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full font-body"
            style={{
              background: "linear-gradient(135deg, #e8faf9 0%, #d0f5f3 100%)",
              color: "#00958d",
              letterSpacing: "0.12em",
            }}
          >
            {feature.tag}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1.5">
          <h3
            className="text-lg font-bold text-gray-900 leading-snug font-heading"
            style={{ letterSpacing: "-0.01em" }}
          >
            {feature.title}
          </h3>
          <p
            className="text-gray-500 text-sm leading-relaxed font-body"
          >
            {feature.desc}
          </p>
        </div>

        {/* Stat row */}
        <div
          className="mt-auto flex items-center gap-3 pt-4"
          style={{ borderTop: "1px solid rgba(0,178,169,0.15)" }}
        >
          <span
            className="text-3xl font-black font-heading"
            style={{
              background: "linear-gradient(135deg, #00b2a9, #00d4c8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {feature.stat}
          </span>
          <span
            className="text-xs text-gray-400 font-medium uppercase tracking-wide font-body"
          >
            {feature.statLabel}
          </span>
          <div className="ml-auto">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: hovered ? "#00b2a9" : "transparent",
                border: `1.5px solid ${hovered ? "#00b2a9" : "rgba(0,178,169,0.35)"}`,
                color: hovered ? "#ffffff" : "#00b2a9",
              }}
            >
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseMedzy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
        ref={sectionRef}
        className="relative w-full overflow-hidden py-20 sm:py-28"
        style={{
          background: "linear-gradient(160deg, #f0fdfb 0%, #f8ffff 40%, #f0f9ff 100%)",
        }}
      >
        {/* Background blobs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,178,169,0.08) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,178,169,0.06) 0%, transparent 70%)",
            transform: "translate(20%, 20%)",
          }}
        />

   

        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
          

            <SectionHeader
              title={
                <>
                  Why Choose{" "}
                  <span
                    style={{
                  background: "linear-gradient(120deg, #00b2a9 0%, #00d4c8 50%, #00958d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                    }}
                  >
                    Medzy
                  </span>
                </>
              }
              subtitle="Reliable distribution, on-time fulfillment, competitive pricing, and proactive support for healthcare partners."
            />

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mt-8">
             
              <div
                className="h-px w-80 rounded-full"
                style={{ background: "linear-gradient(90deg,transparent, #00b2a9, transparent)" }}
              />
            </div>
          </div>

          {/* ── Feature Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} visible={visible} />
            ))}
          </div>

         

        </div>
    </section>
  );
}