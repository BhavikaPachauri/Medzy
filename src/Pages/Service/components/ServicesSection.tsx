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
  const {  color, bg, acc, label, title, desc, kpis, img } = svc;

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
         
        
        </div>
        <h3 className="font-heading" style={{  fontSize: isActive ? 22 : 18, fontWeight: 700, color: "#0a2523", lineHeight: 1.15, margin: `0 0 ${isActive ? 6 : 0}px`, transition: "font-size .3s" }}>
          {title}
        </h3>
        <div className="sexp" style={{ maxHeight: isActive ? 320 : 0, opacity: isActive ? 1 : 0 }}>

          <p className="font-body" style={{  fontSize: 13, color: "#6b9e98", lineHeight: 1.78, marginBottom: 14 }}>{desc}</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: 12,
              marginTop: 10,
            }}
          >
            {kpis.map(({ v }, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 16,
                  padding: "16px 10px",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #00a9ae, #003f42)",
                  color: "#fff",
                  
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
              
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
              
                }}
              >
                <div className="font-body" style={{ fontSize: 12, fontWeight: 100 }}>{v}</div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceMobileCard({ svc, isActive, onClick }: ServiceCardProps) {
  const {  color, bg, acc, label, title, desc, kpis, img } = svc;

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
        
        <div style={{ flex: 1 }}>
          {/* <div className="font-body" style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".12em", color: isActive ? color : "#bbb", textTransform: "uppercase" }}>{label}</div> */}
          <div className="font-heading" style={{ fontSize: 17, fontWeight: 700, color: "#0a2523", lineHeight: 1.2 }}>{title}</div>
        </div>
        <div style={{ color: "#9dbdba", fontSize: 18, transform: isActive ? "rotate(90deg)" : "none", transition: "transform .3s" }}>{">"}</div>
      </div>

      <div
        style={{
          maxHeight: isActive ? 420 : 0,
          opacity: isActive ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .4s cubic-bezier(.22,1,.36,1), opacity .25s ease",
        }}
      >
        <div style={{ padding: "0 16px 18px" }}>
          <p className="font-body" style={{ fontSize: 13, color: "#6b9e98", lineHeight: 1.75, marginBottom: 14 }}>
            {desc}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
            {kpis.map(({ v }, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 14,
                  padding: "12px 10px",
                  background: "linear-gradient(135deg, #00a9ae, #003f42)",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <div className="font-body" style={{ fontSize: 12, lineHeight: 1.45 }}>
                  {v}
                </div>
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
    <section id="core-services" style={{ background: "#fff", padding: "72px 5%", scrollMarginTop: "96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={ref} style={{ marginBottom: 36 }}>
          <h2 className="font-heading" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0a2523", lineHeight: 1.05, margin: 0 }}>Our Core Services</h2>
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
      
      </div>
    </section>
  );
}
