"use client";

import { useEffect, useRef, useState } from "react";

/* ── tiny hook for scroll-reveal ── */
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
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



export default function About() {
  const [heroRef, heroVisible] = useVisible(0.1);
  const [bodyRef, bodyVisible] = useVisible(0.1);
  const [teamRef, teamVisible] = useVisible(0.1);

  return (
    <main className="bg-[#F7FAFA] min-h-screen" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1A2E44] pt-24 pb-20 px-5">

        {/* teal glow orb */}
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,181,165,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-10 w-[260px] h-[260px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,181,165,0.10) 0%, transparent 70%)" }} />

        {/* grid texture */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,181,165,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,181,165,0.05) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />

        <div
          ref={heroRef}
          className="relative max-w-[820px] mx-auto text-center transition-all duration-700"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(28px)" }}
        >
          <p className="text-[#00B5A5] text-[11px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            About Us
          </p>
          <h1 className="text-white text-[clamp(36px,6vw,64px)] font-bold leading-[1.1] tracking-tight mb-6">
            We Are<br />
            <span style={{ color: "#00B5A5" }}>Medzy Healthcare</span>
          </h1>
          <div className="w-12 h-[3px] rounded-full mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #00B5A5, transparent)" }} />
          <p className="text-[rgba(200,225,220,0.80)] text-[16px] leading-[1.85] max-w-[600px] mx-auto"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            Trusted pharmaceutical distributor committed to delivering health and empowering lives across every corner of India.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* image */}
          <div
            ref={bodyRef}
            className="transition-all duration-700"
            style={{ opacity: bodyVisible ? 1 : 0, transform: bodyVisible ? "translateX(0)" : "translateX(-28px)" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop"
                alt="Medzy Healthcare team"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
             
             
            </div>
          </div>

          {/* text */}
          <div
            className="transition-all duration-700 delay-150"
            style={{ opacity: bodyVisible ? 1 : 0, transform: bodyVisible ? "translateX(0)" : "translateX(28px)", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            <h2 className="text-[#1A2E44] text-4xl font-bold leading-[1.15] tracking-tight mb-4">
              Revolutionizing Pharmaceutical Distribution
            </h2>
            <div className="w-10 h-[3px] rounded-full mb-6" style={{ background: "linear-gradient(90deg, #00B5A5, #1A2E44)" }} />

            <p className="text-[#59606C] text-[15.5px] leading-[1.85] mb-5">
              Medzy Healthcare Pvt Ltd is a trusted and rapidly growing pharmaceutical distributor committed to delivering health and empowering lives. Founded with a vision to revolutionize pharmaceutical distribution in India, we provide genuine healthcare products under a robust regulatory framework—ensuring reliability, safety, and complete customer satisfaction.
            </p>
            <p className="text-[#59606C] text-[15.5px] leading-[1.85] mb-8">
              Our state-of-the-art warehousing facilities, robust supply chain network, and experienced team enable us to serve diverse healthcare needs with precision and care.
            </p>

           
          </div>
        </div>
      </section>

      

      {/* ── DIRECTOR ─────────────────────────────────────────── */}
      <section className="py-20 px-5" style={{ background: "#63b658" }}>
        <div
          ref={teamRef}
          className="max-w-[900px] mx-auto transition-all duration-700"
          style={{ opacity: teamVisible ? 1 : 0, transform: teamVisible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="text-center mb-10" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
            <h2 className="text-white text-[clamp(26px,3.5vw,38px)] font-bold tracking-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              Meet Our Director
            </h2>
          </div>

          {/* Director card */}
          <div className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg"
            style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid #ffffff80" }}>

            

            <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              <h3 className="text-white text-[22px] font-bold mb-1"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                Mr. Tushar Bhatia
              </h3>
              <p className="text-white text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
                Director, Medzy Healthcare Pvt Ltd
              </p>
              <div className="w-50 h-[1px] rounded-full mb-5"
                style={{ background: "linear-gradient(90deg, #fff, transparent)" }} />
              <p className="text-[rgba(200,225,220,0.75)] text-[15px] leading-[1.85]">
                Led by a simple but powerful belief — quality healthcare products should reach every corner of the country efficiently and affordably. Under Mr. Bhatia's leadership, Medzy Healthcare continues to expand its pan-India footprint through trusted partnerships, regulatory excellence, and an unwavering commitment to patient welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,181,165,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(0,181,165,0); }
        }
      `}</style>
    </main>
  );
}