import { PROCESS_STEPS } from "../partnerData";
import usePartnerReveal from "../hooks/usePartnerReveal";
import { PARTNER_COLORS as B } from "../partnerTheme";

export default function PartnerHowItWorks() {
  const ref = usePartnerReveal<HTMLDivElement>(0);

  return (
    <section style={{ padding: "80px 5%", background: B.white, borderTop: `1px solid ${B.border}`, borderBottom: `1px solid ${B.border}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, ${B.a}, ${B.p})` }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: B.aLight, border: `1px solid ${B.aMid}`, borderRadius: 9, padding: "5px 14px", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: B.aDark }}>How it works</span>
          </div>
          <h2 style={{  fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, color: B.dark, lineHeight: 1.1 }}>Simple. Fast. Transparent.</h2>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, position: "relative" }}>
          <div style={{ position: "absolute", top: 28, left: "12.5%", right: "12.5%", height: 1, background: `linear-gradient(to right, ${B.pMid}, ${B.aMid})`, zIndex: 0, pointerEvents: "none" }} />

          {PROCESS_STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const stepRef = usePartnerReveal<HTMLDivElement>(index * 100);

  return (
    <div ref={stepRef} className="reveal" style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{ width: 56, height: 56, borderRadius: 16, background: index % 2 === 0 ? B.pLight : B.aLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: index % 2 === 0 ? B.p : B.aDark, border: `1.5px solid ${index % 2 === 0 ? B.pMid : B.aMid}`, boxShadow: `0 4px 16px ${index % 2 === 0 ? B.p : B.aDark}18`, transition: "transform .2s" }}
        onMouseEnter={(event) => {
          event.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.transform = "none";
        }}
      >
        {step.icon}
      </div>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: index % 2 === 0 ? B.p : B.aDark, marginBottom: 6 }}>Step {step.num}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: B.dark, marginBottom: 8 }}>{step.title}</h3>
      <p style={{ fontSize: 13, color: B.muted, lineHeight: 1.72 }}>{step.desc}</p>
    </div>
  );
}
