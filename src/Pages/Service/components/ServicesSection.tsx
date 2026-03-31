import type { KeyboardEvent } from "react";
import { useState } from "react";
import useReveal from "../../../hooks/useReveal";
import { SERVICES, type ServiceItem } from "../serviceData";

type ServiceCardProps = {
  svc: ServiceItem;
  isActive: boolean;
  onClick: () => void;
};

function handleCardKeyDown(event: KeyboardEvent<HTMLDivElement>, onClick: () => void) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onClick();
  }
}

function ServiceDesktopCard({ svc, isActive, onClick }: ServiceCardProps) {
  const { Icon, color, bg, acc, label, title, tagline, desc, kpis, img } = svc;

  return (
    <div
      className={`scard${isActive ? " sa" : ""}`}
      onClick={onClick}
      onKeyDown={(event) => handleCardKeyDown(event, onClick)}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={`${title} service details`}
      style={{
        flex: isActive ? "2.2 1 0" : "1 1 0",
        background: isActive ? bg : "#fff",
        border: `1.5px solid ${isActive ? `${color}50` : "#e0eeec"}`,
        boxShadow: isActive ? `0 20px 56px ${color}20` : "0 2px 12px rgba(0,0,0,.05)",
      }}
    >
      <div className="simgw" style={{ height: isActive ? 200 : 130 }}>
        <img src={img} alt={title} />
      </div>
      <div style={{ padding: isActive ? "22px 20px" : "18px 16px", flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ position: "absolute", top: -28, right: -28, width: 88, height: 88, borderRadius: "50%", background: acc, opacity: isActive ? 1 : 0, transition: "opacity .4s", pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", background: isActive ? acc : "#f0f0f0", transition: "background .3s", flexShrink: 0 }}>
            <Icon />
          </div>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 600, letterSpacing: ".14em", color: isActive ? color : "#bbb", textTransform: "uppercase", transition: "color .3s" }}>
            {label}
          </span>
        </div>
        <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isActive ? 22 : 18, fontWeight: 700, color: "#0a2523", lineHeight: 1.15, margin: `0 0 ${isActive ? 6 : 0}px`, transition: "font-size .3s" }}>
          {title}
        </h3>
        <div className="sexp" style={{ maxHeight: isActive ? 320 : 0, opacity: isActive ? 1 : 0 }}>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, color, marginBottom: 10 }}>{tagline}</p>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "#6b9e98", lineHeight: 1.78, marginBottom: 14 }}>{desc}</p>
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {kpis.map(({ v, l }) => (
              <div key={l} style={{ flex: 1, borderRadius: 12, padding: "10px 6px", textAlign: "center", background: "rgba(255,255,255,.9)", border: `1px solid ${color}22` }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color, lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "#9dbdba", marginTop: 3, letterSpacing: ".07em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
          <button style={{ background: color, color: "#fff", border: "none", borderRadius: 100, padding: "8px 18px", fontSize: 11, fontWeight: 700, fontFamily: "'Outfit',sans-serif", cursor: "pointer" }}>
            Learn More -&gt;
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceMobileCard({ svc, isActive, onClick }: ServiceCardProps) {
  const { Icon, color, bg, acc, label, title, desc, kpis, img } = svc;

  return (
    <div
      onClick={onClick}
      onKeyDown={(event) => handleCardKeyDown(event, onClick)}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={`${title} service details`}
      style={{
        borderRadius: 18,
        overflow: "hidden",
        marginBottom: 12,
        cursor: "pointer",
        background: isActive ? bg : "#fff",
        border: `1.5px solid ${isActive ? `${color}50` : "#e0eeec"}`,
        boxShadow: isActive ? `0 10px 32px ${color}18` : "0 2px 8px rgba(0,0,0,.05)",
        transition: "all .4s",
      }}
    >
      <div style={{ height: isActive ? 180 : 110, overflow: "hidden", transition: "height .4s" }}>
        <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s", transform: isActive ? "scale(1.04)" : "scale(1)" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: isActive ? acc : "#f0f0f0", flexShrink: 0, transition: "background .3s" }}>
          <Icon />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 600, letterSpacing: ".12em", color: isActive ? color : "#bbb", textTransform: "uppercase" }}>{label}</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: "#0a2523" }}>{title}</div>
        </div>
        <div style={{ color: "#9dbdba", fontSize: 18, transform: isActive ? "rotate(90deg)" : "none", transition: "transform .3s" }}>{">"}</div>
      </div>
      <div style={{ overflow: "hidden", maxHeight: isActive ? 300 : 0, transition: "max-height .45s" }}>
        <div style={{ padding: "0 16px 16px" }}>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "#6b9e98", lineHeight: 1.75, marginBottom: 12 }}>{desc}</p>
          <div style={{ display: "flex", gap: 8 }}>
            {kpis.map(({ v, l }) => (
              <div key={l} style={{ flex: 1, borderRadius: 12, padding: "10px 4px", textAlign: "center", background: "rgba(255,255,255,.85)", border: `1px solid ${color}22` }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color, lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "#9dbdba", marginTop: 3, letterSpacing: ".06em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLDivElement>(0);

  return (
    <section style={{ background: "#fff", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={ref} style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0a2523", lineHeight: 1.05, margin: 0 }}>Our Core Services</h2>
        </div>

        <div className="sdtop" style={{ display: "flex", gap: 14, alignItems: "stretch", minHeight: 440 }}>
          {SERVICES.map((svc) => (
            <ServiceDesktopCard key={svc.id} svc={svc} isActive={active === svc.id} onClick={() => setActive(svc.id)} />
          ))}
        </div>
        <div className="smob">
          {SERVICES.map((svc) => (
            <ServiceMobileCard key={svc.id} svc={svc} isActive={active === svc.id} onClick={() => setActive(svc.id)} />
          ))}
        </div>
        <div className="sdtop" style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
          {SERVICES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show service ${i + 1}`}
              aria-pressed={active === i}
              style={{ height: 5, borderRadius: 100, cursor: "pointer", width: active === i ? 24 : 5, background: active === i ? "#0d9488" : "#d0ede9", transition: "all .3s", border: "none", padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
