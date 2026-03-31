import useReveal from "../../../hooks/useReveal";

export default function ServiceCta() {
  const ref = useReveal<HTMLDivElement>(0);

  return (
    <section style={{ padding: "64px 5% 80px", background: "#f0fdfa" }}>
      <div ref={ref} style={{ maxWidth: 960, margin: "0 auto", borderRadius: 28, overflow: "hidden", position: "relative", boxShadow: "0 28px 72px rgba(13,148,136,.28)" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=70" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.1 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0a2523 0%,#0a6b63 60%,#14b8a6 100%)" }} />
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,.05)", transform: "translate(40%,-40%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "64px 48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 100, padding: "6px 16px", background: "rgba(255,255,255,.1)", marginBottom: 16 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2DD4BF" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 600, letterSpacing: ".18em", color: "rgba(255,255,255,.75)", textTransform: "uppercase" }}>Partner With Us</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 14 }}>
            Ready to Partner
            <br />
            with Medzy?
          </h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.8, maxWidth: 400, margin: "0 auto 28px" }}>
            Join hundreds of healthcare institutions and pharmacies that trust Medzy for their pharmaceutical supply needs.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "#fff", color: "#0d9488", borderRadius: 100, padding: "12px 28px", fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none", fontFamily: "'Outfit',sans-serif", boxShadow: "0 4px 16px rgba(0,0,0,.15)" }}>
              Contact Us Today
            </button>
            <button style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.85)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 100, padding: "12px 28px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>
       
      </div>
    </section>

  );
}
