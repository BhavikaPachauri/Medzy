import useReveal from "../../../hooks/useReveal";

const styles = {
  section: {
    padding: "64px 5% 80px",
    background: "#f0fdfa",
  },
  container: {
    maxWidth: 960,
    margin: "0 auto",
    borderRadius: 28,
    overflow: "hidden",
    position: "relative" as const,
    boxShadow: "0 28px 72px rgba(13,148,136,.28)",
  },
  gradientBg: {
    position: "absolute" as const,
    inset: 0,
    background:
      "linear-gradient(135deg,#0a2523 0%,#0a6b63 60%,#14b8a6 100%)",
  },
  glowCircle: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    width: 240,
    height: 240,
    borderRadius: "50%",
    background: "rgba(255,255,255,.05)",
    transform: "translate(40%,-40%)",
    pointerEvents: "none" as const,
  },
  content: {
    position: "relative" as const,
    zIndex: 10,
    textAlign: "center" as const,
    padding: "64px 48px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    borderRadius: 100,
    padding: "6px 16px",
    background: "rgba(255,255,255,.1)",
    marginBottom: 16,
  },
  heading: {
    fontFamily: "'Cormorant Garamond',serif",
    fontSize: "clamp(2rem,4vw,3.2rem)",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.1,
    marginBottom: 14,
  },
  text: {
    fontFamily: "'Outfit',sans-serif",
    color: "rgba(255,255,255,.6)",
    fontSize: 14,
    lineHeight: 1.8,
    maxWidth: 420,
    margin: "0 auto 28px",
  },
  buttonGroup: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap" as const,
  },
  primaryBtn: {
    background: "#fff",
    color: "#0d9488",
    borderRadius: 100,
    padding: "12px 28px",
    fontSize: 13,
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  },
  secondaryBtn: {
    background: "rgba(255,255,255,.1)",
    color: "rgba(255,255,255,.85)",
    border: "1px solid rgba(255,255,255,.2)",
    borderRadius: 100,
    padding: "12px 28px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
  imageWrapper: {
    marginTop: 40,
    textAlign: "center" as const,
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
};

export default function PartnerCta() {
  const ref = useReveal<HTMLDivElement>(0);

  return (
    <section style={styles.section}>
      <div ref={ref} style={styles.container}>
        {/* Background */}
        <div style={styles.gradientBg} />
        <div style={styles.glowCircle} />

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.badge}>
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#2DD4BF",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: ".18em",
                color: "rgba(255,255,255,.75)",
                textTransform: "uppercase",
              }}
            >
              Partner With Us
            </span>
          </div>

          <h2 style={styles.heading}>
            Ready to Partner <br /> with Medzy?
          </h2>

          <p style={styles.text}>
            Join hundreds of healthcare institutions and pharmacies that trust
            Medzy for their pharmaceutical supply needs.
          </p>

          <div style={styles.buttonGroup}>
            <button style={styles.primaryBtn}>Contact Us Today</button>
            <button style={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
        
      </div>
       {/* Image */}
      <div style={styles.imageWrapper}>
        <img
          src="/img/partnerdummy.png"
          alt="Partner CTA"
          style={styles.image}
          loading="lazy"
          className=" md:hidden"
        />
      </div>

     
    </section>
  );
}
