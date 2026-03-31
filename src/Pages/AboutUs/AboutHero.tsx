"use client";
import { useVisible } from "../../hooks/useVisible";

export default function AboutHero() {
  const [heroRef, heroVisible] = useVisible(0.1);

  return (
    <section className="relative overflow-hidden bg-[url('/img/aboutBanner.webp')] bg-repeat bg-cover  pt-24 pb-20 px-5">

      {/* teal glow orb */}
      <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,181,165,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 -left-10 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,181,165,0.10) 0%, transparent 70%)" }} />

      {/* grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20" />

      <div
        ref={heroRef}
        className="relative max-w-[820px] mx-auto text-center transition-all duration-700"
        style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(28px)" }}
      >

        <h1 className="text-white text-[clamp(36px,6vw,64px)] font-bold leading-[1.1] tracking-tight mb-6">
          We Are<br />
          <span style={{ color: "#05f7c2" }}>Medzy Healthcare</span>
        </h1>

        <p className="text-white text-[16px] leading-[1.85] max-w-[600px] mx-auto">
          Trusted pharmaceutical distributor committed to delivering health and empowering lives across every corner of India.
        </p>
      </div>
    </section>

  );
}