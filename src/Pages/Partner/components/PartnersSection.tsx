import { useState } from "react";
import type { RefObject } from "react";
import { PARTNERS_DATA, type PartnerItem } from "../partnerData";
import usePartnerReveal from "../hooks/usePartnerReveal";
import { PARTNER_COLORS as B } from "../partnerTheme";
import Btn from "../../../common/Btn";

type SharedProps = {
  formRef: RefObject<HTMLElement | null>;
};

type PartnerTabProps = {
  partner: PartnerItem;
  isActive: boolean;
  onClick: () => void;
};

function PartnerTab({ partner, isActive, onClick }: PartnerTabProps) {
  const { label, headline, color, colorLight } = partner;

  return (
    <button onClick={onClick} style={{ width: "100%", textAlign: "left", border: "none", cursor: "pointer", background: "none", padding: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "16px 18px",
          borderRadius: 14,
          border: `1.5px solid ${isActive ? `${color}60` : B.border}`,
          background: isActive ? colorLight : B.white,
          boxShadow: isActive ? `0 4px 20px ${color}18` : "none",
          transition: "all .3s cubic-bezier(.22,1,.36,1)",
        }}
      >

        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="selector-label text-gray-500" style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: isActive ? color : B.subtle, marginBottom: 2, transition: "color .3s" }}>
            {label}
          </p>
          <p
            className="font-body"
            style={{
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 1.4,
              color: isActive ? B.dark : B.muted,
              margin: 0,
              transition: "color .3s",
            }}
          >
            {headline}
          </p>
        </div>
        <svg viewBox="0 0 14 14" fill="none" width="14" style={{ flexShrink: 0, color: isActive ? color : B.border, transform: isActive ? "translateX(2px)" : "none", transition: "all .3s" }}>
          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}

type PartnerDetailProps = SharedProps & {
  partner: PartnerItem;
};

function PartnerDetail({ partner, formRef }: PartnerDetailProps) {
  const { label, headline, desc, offers, models, color, colorLight, colorMid } = partner;

  return (
    <div style={{ borderRadius: 22, overflow: "hidden", border: `1.5px solid ${colorMid}`, boxShadow: `0 12px 48px ${color}15` }}>
      <div style={{ background: color, padding: "28px 32px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>{label}</p>
          <h3 className="font-heading" style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 100, color: "#fff", lineHeight: 1.25 }}>{headline}</h3>
        </div>

      </div>

      <div style={{ background: B.white, padding: "28px 32px" }}>
        <p className="font-body" style={{ fontSize: 14, color: B.muted, lineHeight: 1.82, marginBottom: 24 }}>{desc}</p>

        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: B.subtle, marginBottom: 14 }}>What we offer</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px", marginBottom: 24 }}>
          {offers.map((offer, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: colorLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                <svg viewBox="0 0 12 12" fill="none" width="10">
                  <path d="M2 6l2.5 2.5L10 3.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-body" style={{ fontSize: 13, color: B.text, lineHeight: 1.5 }}>{offer}</span>
            </div>
          ))}
        </div>

        {models.length > 0 && (
          <>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: B.subtle, marginBottom: 12 }}>Partnership Models</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {models.map((model, i) => (
                <span key={i} className="font-body" style={{ fontSize: 12, fontWeight: 600, padding: "6px 13px", borderRadius: 99, background: colorLight, color, border: `1px solid ${colorMid}` }}>
                  {model}
                </span>
              ))}
            </div>
          </>
        )}


        <Btn
          title="Apply as Partner"
          text="text-white"
          bg="bg-[#37a996]"
          border="border-[#37a996]"
          hover="bg-[#8ac43f]"
          onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
        />


      </div>
    </div>
  );
}

export default function PartnersSection({ formRef }: SharedProps) {
  const [active, setActive] = useState(0);
  const ref = usePartnerReveal<HTMLDivElement>(0);

  return (
    <section style={{ padding: "88px 5% 80px", background: B.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
          <div className="group">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[color:var(--dark)] leading-[1.1]">
              A partnership for 
              every stakeholder
            </h2>

            <div className="h-[3px] rounded-full bg-gradient-to-r from-[#00b2a9] via-[#00958d] to-[#8ac43f] w-[120px] md:group-hover:w-[570px]  duration-500 ease-out mt-3 shadow-sm"></div>
          </div>
        </div>

        <div className="partners-grid" style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 20, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PARTNERS_DATA.map((partner, i) => (
              <PartnerTab key={partner.id} partner={partner} isActive={active === i} onClick={() => setActive(i)} />
            ))}
          </div>

          <div key={active} style={{ animation: "fadeUp .38s cubic-bezier(.22,1,.36,1) both" }}>
            <PartnerDetail partner={PARTNERS_DATA[active]} formRef={formRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
