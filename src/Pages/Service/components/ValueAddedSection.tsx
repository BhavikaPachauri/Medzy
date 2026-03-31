import { useState } from "react";
import useReveal from "../../../hooks/useReveal";
import { VALUE_ADDED, type ValueAddedItem } from "../serviceData";

type ValueCardProps = {
  item: ValueAddedItem;
  isLast: boolean;
};

function ValueAddedCard({ item, isLast }: ValueCardProps) {
  const ref = useReveal<HTMLDivElement>(80);
  const [isHovered, setIsHovered] = useState(false);
  const { num, title, subtitle, desc, tags, img, flip, accent } = item;

  return (
    <div style={{ marginBottom: isLast ? 0 : 14 }}>
      <div
        ref={ref}
        className="valcard"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          flexDirection: flip ? "row-reverse" : "row",
          boxShadow: isHovered ? `0 20px 56px ${accent}1a` : "0 2px 14px rgba(0,0,0,.05)",
        }}
      >
        <div className="vimgcol" style={{ position: "relative", flexShrink: 0, overflow: "hidden", minHeight: 240, width: "38%" }}>
          <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .5s", transform: isHovered ? "scale(1.05)" : "scale(1)" }} />
          <div style={{ position: "absolute", inset: 0, background: flip ? "linear-gradient(to right,transparent 42%,rgba(248,255,254,.96) 100%)" : "linear-gradient(to left,transparent 42%,rgba(248,255,254,.96) 100%)" }} />
          <div
            style={{
              position: "absolute",
              top: 14,
              display: "flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 100,
              padding: "5px 13px",
              border: `1px solid ${accent}30`,
              background: "rgba(255,255,255,.92)",
              backdropFilter: "blur(8px)",
              [flip ? "right" : "left"]: 14,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0, animation: "dblink 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 600, letterSpacing: ".14em", color: accent, textTransform: "uppercase" }}>{subtitle}</span>
          </div>
          <div style={{ position: "absolute", bottom: 4, [flip ? "right" : "left"]: 10, fontFamily: "'Cormorant Garamond',serif", fontSize: "5rem", fontWeight: 700, color: `${accent}15`, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
            {num}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "28px 36px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 700, color: "#0a2523", lineHeight: 1.15, marginBottom: 10 }}>{title}</h3>
          <div style={{ height: 2.5, borderRadius: 2, background: accent, width: isHovered ? 52 : 24, transition: "width .3s", marginBottom: 12 }} />
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13.5, color: "#6b9e98", lineHeight: 1.8, marginBottom: 16, maxWidth: 400 }}>{desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {tags.map((tag) => (
              <span key={tag} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, padding: "5px 13px", borderRadius: 100, background: `${accent}0e`, color: accent, border: `1px solid ${accent}22`, letterSpacing: ".05em" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ValueAddedSection() {
  const ref = useReveal<HTMLDivElement>(0);

  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "72px 5%", background: "linear-gradient(160deg,#f0fdfb 0%,#e6faf7 100%)" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,rgba(20,184,166,.12) 0%,transparent 70%)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div ref={ref} style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0a2523", lineHeight: 1.05, margin: 0 }}>
            Value-Added <em style={{ fontStyle: "italic", color: "#0d9488" }}>Services</em>
          </h2>
        </div>
        {VALUE_ADDED.map((item, i) => (
          <ValueAddedCard key={item.num} item={item} isLast={i === VALUE_ADDED.length - 1} />
        ))}
      </div>
    </section>
  );
}
