import { useState } from "react";
import type { RefObject } from "react";
import usePartnerReveal from "../hooks/usePartnerReveal";
import { PARTNER_COLORS as B } from "../partnerTheme";

type Props = {
  formRef: RefObject<HTMLDivElement | null>;
};

type FormState = {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  location: string;
  message: string;
};

type FocusField = keyof FormState | null;

const INITIAL_FORM: FormState = {
  businessName: "",
  contactPerson: "",
  email: "",
  phone: "",
  businessType: "",
  location: "",
  message: "",
};

const FIELDS: Array<{ name: keyof FormState; label: string; placeholder: string; type: "text" | "email" | "tel" }> = [
  { name: "businessName", label: "Business Name *", placeholder: "Your company name", type: "text" },
  { name: "contactPerson", label: "Contact Person *", placeholder: "Full name", type: "text" },
  { name: "email", label: "Email *", placeholder: "you@company.com", type: "email" },
  { name: "phone", label: "Phone *", placeholder: "+91 00000 00000", type: "tel" },
];

export default function PartnerEnquiryForm({ formRef }: Props) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<FocusField>(null);
  const revealRef = usePartnerReveal<HTMLDivElement>(0);

  const inputStyle = (name: keyof FormState) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: 11,
    border: `1.5px solid ${focused === name ? B.p : B.border}`,
    fontSize: 14,
    color: B.text,
    background: focused === name ? B.pPale : B.bg,
    outline: "none",
    transition: "all .2s",
    fontFamily: "'Sora',sans-serif",
    boxShadow: focused === name ? `0 0 0 3px ${B.p}12` : "none",
  });

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: B.muted,
    marginBottom: 6,
  } as const;

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "64px 32px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: B.pLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <svg viewBox="0 0 32 32" fill="none" width="32">
            <circle cx="16" cy="16" r="14" stroke={B.p} strokeWidth="1.8" />
            <path d="M10 16l4 4 8-8" stroke={B.p} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Lora',serif", fontSize: 22, fontWeight: 600, color: B.dark, marginBottom: 10 }}>Request received!</h3>
        <p style={{ fontSize: 14, color: B.muted, lineHeight: 1.75, maxWidth: 280 }}>Our partnerships team will reach out within 48 hours. Welcome to the Medzy family.</p>
        <button onClick={() => setSubmitted(false)} style={{ marginTop: 24, fontSize: 13, fontWeight: 700, color: B.p, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <section style={{ padding: "80px 5% 88px", background: B.bg }} ref={formRef}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 600px", gap: 56, alignItems: "start" }}>
       

          <div style={{ borderRadius: 22, border: `1.5px solid ${B.border}`, background: B.white, padding: "36px 32px", boxShadow: `0 20px 60px ${B.p}0e` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, paddingBottom: 24, borderBottom: `1px solid ${B.border}` }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: B.pLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 20 20" fill="none" width="18" style={{ color: B.p }}>
                  <path d="M17.5 10H2.5M12.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: B.dark }}>Tell us about your business</h3>
                <p style={{ fontSize: 12, color: B.subtle }}>Takes under 3 minutes - All fields marked * are required</p>
              </div>
            </div>

            <div className="field-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label style={labelStyle}>{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    placeholder={field.placeholder}
                    onChange={(event) => setForm((prev) => ({ ...prev, [field.name]: event.target.value }))}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    style={inputStyle(field.name)}
                  />
                </div>
              ))}
            </div>

            <div className="field-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>Business Type *</label>
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={(event) => setForm((prev) => ({ ...prev, businessType: event.target.value }))}
                  onFocus={() => setFocused("businessType")}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle("businessType"), appearance: "none" }}
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="manufacturer">Pharmaceutical Manufacturer</option>
                  <option value="hospital">Hospital / Institution</option>
                  <option value="retailer">Retail Pharmacy</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Location *</label>
                <input
                  name="location"
                  value={form.location}
                  placeholder="City, State"
                  onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))}
                  onFocus={() => setFocused("location")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("location")}
                />
              </div>
            </div>

            <div style={{ marginBottom: 22 }}>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={form.message}
                rows={4}
                placeholder="Tell us about your business and what you're looking for..."
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                style={{ ...inputStyle("message"), resize: "none" }}
              />
            </div>

            <button
              onClick={() => setSubmitted(true)}
              style={{ width: "100%", background: B.p, color: "#fff", border: "none", borderRadius: 12, padding: "15px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: `0 8px 28px ${B.p}35`, transition: "all .2s" }}
              onMouseEnter={(event) => {
                event.currentTarget.style.background = B.pDark;
                event.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background = B.p;
                event.currentTarget.style.transform = "none";
              }}
            >
              <svg viewBox="0 0 18 18" fill="none" width="16">
                <path d="M15.5 9H2.5M10.5 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Submit Partnership Request
            </button>

            <p style={{ textAlign: "center", fontSize: 11.5, color: B.subtle, marginTop: 14 }}>We respond within 48 hours - No obligation - Fully confidential</p>
          </div>
        </div>
      </div>
    </section>
  );
}
