"use client";
import { useVisible } from "../../hooks/useVisible";

export default function DirectorSection() {
  const [teamRef, teamVisible] = useVisible(0.1);

  return (
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
                Under the leadership of Mr. Tushar Bhatia, Medzy Healthcare has grown into a reliable and forward-thinking pharmaceutical distribution company. His vision for quality, compliance, and customer-first service drives the company's mission and culture at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
}