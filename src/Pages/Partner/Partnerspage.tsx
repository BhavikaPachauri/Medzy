"use client";

import { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Partner {
  id: string;
  num: string;
  label: string;
  headline: string;
  longDesc: string;
  offers: string[];
  models: string[];
  color: string;
  colorLight: string;
  colorText: string;
  colorBorder: string;
}

interface FormState {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  location: string;
  message: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PARTNERS: Partner[] = [
  {
    id: "manufacturer",
    num: "01",
    label: "Pharmaceutical Manufacturers",
    headline: "Scale your reach across India",
    longDesc:
      "Partner with Medzy's established distribution network to unlock new markets faster. We bring proven logistics, deep retailer relationships, and sales muscle so you can focus on what you do best — manufacturing.",
    offers: [
      "Extensive pan-India distribution network",
      "Proven market penetration track record",
      "Strong retailer & hospital relationships",
      "Efficient inventory & logistics management",
      "Sales and marketing support",
    ],
    models: [
      "Exclusive distribution agreements",
      "C&F agency partnerships",
      "Super stockist arrangements",
      "Regional distribution rights",
    ],
    color: "#0BA37F",
    colorLight: "#E6F7F2",
    colorText: "#0BA37F",
    colorBorder: "#A7E3D4",
  },
  {
    id: "hospital",
    num: "02",
    label: "Hospitals & Healthcare Institutions",
    headline: "Zero-gap supply for uninterrupted care",
    longDesc:
      "From IPD/OPD pharmacy management to emergency procurement, Medzy keeps your institution fully stocked with the right medicines at the right time — every time.",
    offers: [
      "Dedicated account management",
      "Comprehensive product portfolio",
      "IPD/OPD pharmacy management",
      "Competitive institutional pricing",
      "Emergency procurement support",
      "Flexible credit terms",
    ],
    models: [],
    color: "#0EA5E9",
    colorLight: "#E0F4FE",
    colorText: "#0284C7",
    colorBorder: "#7DD3F8",
  },
  {
    id: "retail",
    num: "03",
    label: "Retail Pharmacies",
    headline: "Everything your pharmacy needs, simplified",
    longDesc:
      "One partner for your complete stock needs. Medzy gives retail pharmacies unmatched product access, competitive margins, and a seamless digital ordering experience so you can focus on your patients.",
    offers: [
      "Wide product range under one roof",
      "Competitive margins and schemes",
      "Regular & reliable stock availability",
      "Easy digital ordering platform",
      "Fast delivery & logistics",
      "Business growth support",
    ],
    models: [],
    color: "#F59E0B",
    colorLight: "#FEF3C7",
    colorText: "#D97706",
    colorBorder: "#FCD34D",
  },
];

const STATS = [
  { value: "5,200+", label: "Active partners" },
  { value: "200+", label: "Hospital networks" },
  { value: "99%", label: "Order fill rate" },
  { value: "24h", label: "Avg. delivery time" },
];

const PROCESS = [
  {
    num: "01",
    title: "Submit enquiry",
    desc: "Fill in your business details — takes under 3 minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Consultation call",
    desc: "Our team reaches out within 48 hours to understand your needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Agreement finalised",
    desc: "Customised partnership terms agreed upon collaboratively.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Go live",
    desc: "Quick onboarding with a dedicated support manager by your side.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const TRUST = [
  "No upfront commitment required",
  "Dedicated onboarding manager",
  "Customised partnership terms",
  "Pan-India logistics backbone",
  "Digital ordering & tracking",
  "Flexible credit facilities",
];

// ─── Icons ────────────────────────────────────────────────────────────────────
function CheckIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill={color} fillOpacity="0.12" />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Stat Card with intersection observer ─────────────────────────────────────
function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}ms` }}>
      <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">{value}</div>
      <div className="text-xs font-semibold uppercase tracking-widest text-white/50">{label}</div>
    </div>
  );
}

// ─── Partner Selector ─────────────────────────────────────────────────────────
function PartnerSelector({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-3">
      {PARTNERS.map((p, i) => (
        <button key={p.id} onClick={() => setActive(i)} className="w-full text-left group">
          <div className="relative overflow-hidden rounded-2xl border transition-all duration-300 p-5"
            style={{
              borderColor: active === i ? p.colorBorder : "#E5E7EB",
              backgroundColor: active === i ? p.colorLight : "#fff",
              boxShadow: active === i ? `0 4px 20px ${p.color}20` : "none",
            }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-xs tracking-wider transition-all duration-200"
                style={{ backgroundColor: active === i ? p.color : "#F3F4F6", color: active === i ? "#fff" : "#9CA3AF" }}>
                {p.num}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-0.5 transition-colors"
                  style={{ color: active === i ? p.colorText : "#9CA3AF" }}>{p.label}</p>
                <p className="text-sm font-bold text-slate-800 leading-snug">{p.headline}</p>
              </div>
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 transition-transform duration-200"
                style={{ color: active === i ? p.colorText : "#D1D5DB", transform: active === i ? "translateX(2px)" : "none" }}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

// ─── Partner Detail ───────────────────────────────────────────────────────────
function PartnerDetail({ p, formRef }: { p: Partner; formRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="rounded-3xl border overflow-hidden transition-all duration-300"
      style={{ borderColor: p.colorBorder, boxShadow: `0 8px 40px ${p.color}15` }}>
      {/* Header strip */}
      <div className="px-8 py-7 flex items-center justify-between" style={{ backgroundColor: p.color }}>
        <div>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{p.label}</p>
          <h3 className="text-xl font-black text-white leading-snug">{p.headline}</h3>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
          <span className="text-white font-black text-xl">{p.num}</span>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white p-8">
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{p.longDesc}</p>

        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">What we offer</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {p.offers.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckIcon color={p.color} />
                <span className="text-sm text-slate-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {p.models.length > 0 && (
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Partnership models</p>
            <div className="flex flex-wrap gap-2">
              {p.models.map((m, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{ color: p.colorText, backgroundColor: p.colorLight, borderColor: p.colorBorder }}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}

        <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ backgroundColor: p.color, color: "#fff" }}>
          Apply as partner
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Enquiry Form ─────────────────────────────────────────────────────────────
function EnquiryForm() {
  const [form, setForm] = useState<FormState>({
    businessName: "", contactPerson: "", email: "", phone: "",
    businessType: "", location: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%", padding: "12px 16px", borderRadius: "12px",
    border: `1.5px solid ${focused === name ? "#0BA37F" : "#E5E7EB"}`,
    fontSize: "14px", color: "#111827",
    backgroundColor: focused === name ? "#F0FBF8" : "#F9FAFB",
    outline: "none", transition: "all 0.2s", fontFamily: "inherit",
  });

  const label: React.CSSProperties = {
    display: "block", fontSize: "11px", fontWeight: 700,
    letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "6px",
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#E6F7F2" }}>
          <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" style={{ color: "#0BA37F" }}>
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">Request received!</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
          Our partnerships team will reach out within 48 hours. Welcome to the Medzy family.
        </p>
        <button onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-bold underline underline-offset-4 transition-colors"
          style={{ color: "#0BA37F" }}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { name: "businessName", label: "Business Name *", placeholder: "Your company name", type: "text" },
          { name: "contactPerson", label: "Contact Person *", placeholder: "Full name", type: "text" },
          { name: "email", label: "Email *", placeholder: "you@company.com", type: "email" },
          { name: "phone", label: "Phone *", placeholder: "+91 00000 00000", type: "tel" },
        ].map((field) => (
          <div key={field.name}>
            <label style={label}>{field.label}</label>
            <input name={field.name} type={field.type}
              value={form[field.name as keyof FormState]}
              onChange={handleChange}
              onFocus={() => setFocused(field.name)}
              onBlur={() => setFocused(null)}
              placeholder={field.placeholder}
              style={inputStyle(field.name)} />
          </div>
        ))}
        <div>
          <label style={label}>Business Type *</label>
          <select name="businessType" value={form.businessType} onChange={handleChange}
            onFocus={() => setFocused("businessType")} onBlur={() => setFocused(null)}
            style={{ ...inputStyle("businessType"), appearance: "none" as const }}>
            <option value="" disabled>Select type</option>
            <option value="manufacturer">Pharmaceutical Manufacturer</option>
            <option value="hospital">Hospital / Institution</option>
            <option value="retailer">Retail Pharmacy</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label style={label}>Location *</label>
          <input name="location" value={form.location} onChange={handleChange}
            onFocus={() => setFocused("location")} onBlur={() => setFocused(null)}
            placeholder="City, State" style={inputStyle("location")} />
        </div>
      </div>
      <div>
        <label style={label}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange}
          onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
          rows={4} placeholder="Tell us about your business and what you're looking for..."
          style={{ ...inputStyle("message"), resize: "none" }} />
      </div>
      <button onClick={() => setSubmitted(true)}
        className="w-full font-black text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ backgroundColor: "#0BA37F", color: "#fff" }}>
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
          <path d="M17.5 10H2.5M12.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Submit Partnership Request
      </button>
      <p className="text-center text-xs text-slate-400">We respond within 48 hours · No obligation · Fully confidential</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PartnersPage() {
  const [activePartner, setActivePartner] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#F8FAF9" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        .mz-heading { font-family: 'Playfair Display', serif; letter-spacing: -0.02em; }
        ::placeholder { color: #9CA3AF; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .fadein { animation: fadeUp 0.35s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

     
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#f8fffd_0%,#f1faf8_50%,#ffffff_100%)]">
        {/* Dot grid bg */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
          style={{ backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 15% 60%, #0BA37F16 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, #0EA5E916 0%, transparent 55%)" }} />
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full pointer-events-none blur-3xl"
          style={{ background: "rgba(11,163,127,0.18)" }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-20 lg:pt-32 lg:pb-24">
          <div className="max-w-4xl">
           
            <h1 className="mz-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6" style={{ color: "#0D1B16" }}>
              Become a{" "}
              <span className="relative inline-block" style={{ color: "#0BA37F" }}>
                Medzy
             
              </span>
              {" "}Partner
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
              Join one of India's fastest-growing pharmaceutical distributors. Whether you're a
              manufacturer, retailer, or healthcare institution — unlock growth, reliability,
              and lasting success.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 text-sm font-black px-7 py-4 rounded-2xl text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(120deg, #0BA37F 0%, #08916f 100%)", boxShadow: "0 10px 30px #0BA37F3D" }}>
                Start Partnership
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="flex items-center gap-2 text-sm font-black px-7 py-4 rounded-2xl border-2 border-[#bde7db] text-slate-700 bg-white hover:border-[#0BA37F] transition-all">
                Explore services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0D2B22 0%, #0A1F1A 50%, #093027 100%)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {STATS.map((st, i) => (
              <div key={i} className="lg:px-12 first:lg:pl-0 last:lg:pr-0">
                <StatCard value={st.value} label={st.label} delay={i * 100} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER CATEGORIES ───────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#0BA37F" }}>
                Who we work with
              </p>
              <h2 className="mz-heading text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]" style={{ color: "#0D1B16" }}>
                A partnership for<br />every stakeholder
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Select your category to explore what Medzy offers and how we can build a
              partnership that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-start">
            <PartnerSelector active={activePartner} setActive={setActivePartner} />
            <div className="fadein" key={activePartner}>
              <PartnerDetail p={PARTNERS[activePartner]} formRef={formRef} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-28 bg-white border-y border-[#d9eee8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#0BA37F" }}>How it works</p>
            <h2 className="mz-heading text-4xl sm:text-5xl font-black tracking-tight" style={{ color: "#0D1B16" }}>
              Simple. Fast. Transparent.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, i) => (
              <div key={i} className="relative group">
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px -translate-x-8 z-0"
                    style={{ background: "linear-gradient(to right, #0BA37F40, transparent)" }} />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-200 group-hover:scale-110"
                    style={{ backgroundColor: "#E6F7F2", color: "#0BA37F" }}>
                    {step.icon}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "#0BA37F" }}>
                    Step {step.num}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "#F8FAF9" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRUST.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white rounded-2xl px-4 py-4 border border-slate-100 shadow-sm">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#E6F7F2" }}>
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                    <path d="M2 6l2.5 2.5L10 4" stroke="#0BA37F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[linear-gradient(180deg,#f8faf9_0%,#ffffff_100%)]" ref={formRef}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_600px] gap-16 items-start">

            {/* Left sticky */}
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#0BA37F" }}>Get started</p>
              <h2 className="mz-heading text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6" style={{ color: "#0D1B16" }}>
                Partnership<br />enquiry form
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm">
                Simple registration, quick onboarding, and dedicated support from day one.
                Our team will reach out within 48 hours.
              </p>

              {/* Testimonial */}
              <div className="rounded-2xl border p-6" style={{ backgroundColor: "#E6F7F2", borderColor: "#A7E3D4" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                    style={{ backgroundColor: "#0BA37F" }}>RK</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Rajesh Kumar</p>
                    <p className="text-xs text-slate-500">MD, Krishna Pharma</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "Partnering with Medzy transformed our distribution reach. Within 3 months,
                  we were serving 8 new districts we couldn't reach before."
                </p>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-3xl border p-8 sm:p-10 bg-white"
              style={{ borderColor: "#E5E7EB", boxShadow: "0 20px 60px rgba(11,163,127,0.08)" }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#E6F7F2" }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" style={{ color: "#0BA37F" }}>
                    <path d="M17.5 10H2.5M12.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Tell us about your business</h3>
                  <p className="text-xs text-slate-400">Takes under 3 minutes</p>
                </div>
              </div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}