"use client";

import { useState, useRef, useEffect } from "react";

/* ── brand tokens ── */
const TEAL = "#019d90";
const NAVY = "#019d90";

/* ── scroll reveal ── */
function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

/* ── icons ── */
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 13.5 19.79 19.79 0 0 1 1.62 4.9 2 2 0 0 1 3.59 2.73h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PackageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const HandshakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l1.06 1.06L12 21.23l7.06-7.89 1.06-1.06a5.4 5.4 0 0 0 .3-7.7z"/>
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const NavigationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);


/* ── info row component ── */
function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-3 py-3" style={{ borderBottom: "1px solid rgba(0,184,169,0.08)" }}>
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: "rgba(0,184,169,0.08)", color: TEAL }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: TEAL,  }}>
          {label}
        </p>
        {href ? (
          <a href={href} className="text-sm font-medium hover:underline transition-all" style={{ color: NAVY,  textDecorationColor: TEAL }}>
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium" style={{ color: NAVY}}>{value}</p>
        )}
      </div>
    </div>
  );
}

/* ── channel card ── */
function ChannelCard({ icon, title, email, phone, note }: { icon: React.ReactNode; title: string; email?: string; phone?: string; note?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300"
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "rgba(0,184,169,0.30)" : "rgba(0,184,169,0.12)"}`,
        boxShadow: hovered ? "0 10px 28px rgba(28,53,87,0.10)" : "0 2px 8px rgba(28,53,87,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,184,169,0.09)", color: TEAL }}>
          {icon}
        </div>
        <h4 className="font-bold text-base" style={{ color: NAVY, fontFamily: "'Syne', sans-serif" }}>{title}</h4>
      </div>
      {email && (
        <div className="flex items-center gap-2 text-[#019d90]">
          <MailIcon />
          <a href={`mailto:${email}`} className="text-sm font-medium text-[#019d90]" >{email}</a>
        </div>
      )}
      {phone && (
        <div className="flex items-center gap-2 text-[#019d90]">
          <PhoneIcon />
          <a href={`tel:${phone}`} className="text-sm font-medium text-[#019d90]" >
            {phone}
          </a>
        </div>
      )}
      {note && (
        <p className="text-xs px-3 py-2 rounded-lg" style={{ background: "rgba(0,184,169,0.06)", color: "#7A8FA6", fontFamily: "'DM Sans', sans-serif" }}>
          {note}
        </p>
      )}
    </div>
  );
}

/* ── form input ── */
function Field({
  label, name, type = "text", placeholder, value, onChange, required = true, textarea = false,
}: {
  label: string; name: string; type?: string; placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean; textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const base: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 12,
    border: `1.5px solid ${focused ? TEAL : "rgba(28,53,87,0.12)"}`,
    outline: "none",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    color: NAVY,
    background: focused ? "rgba(0,184,169,0.02)" : "#fafafa",
    transition: "all 0.2s",
    resize: textarea ? "vertical" : undefined,
    minHeight: textarea ? 110 : undefined,
  };
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: TEAL, fontFamily: "'DM Sans', sans-serif" }}>
        {label}{required && <span style={{ color: "#E05A5A" }}> *</span>}
      </label>
      {textarea ? (
        <textarea
          name={name} placeholder={placeholder} value={value} onChange={onChange}
          required={required} style={base}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
          required={required} style={base}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

/* ══ MAIN PAGE ════════════════════════════════════════════════════ */
export default function Contact() {
  const [heroRef, heroVisible] = useVisible(0.05);
  const [infoRef, infoVisible] = useVisible(0.08);
  const [formRef, formVisible] = useVisible(0.08);
  const [mapRef, mapVisible] = useVisible(0.05);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <div  style={{ background: "linear-gradient(170deg, #ffffff 0%, #F4FBFA 100%)", minHeight: "100vh" }}>
        
        <div
          ref={heroRef}
          className="relative overflow-hidden py-16 px-6 w-full h-[315px] bg-gradient-to-br from-teal-700 via-teal-600 to-teal-400 rounded-b-[30%]"
          style={{
           
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(-16px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="absolute inset-0 bg-[url('./img/contactUs.jpg')] bg-cover opacity-20"></div>
          {/* grid texture */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(0,184,169,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,169,0.04) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }} />
          {/* glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,184,169,0.12) 0%, transparent 65%)" }} />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,184,169,0.07) 0%, transparent 65%)" }} />

          <div className="relative max-w-5xl mx-auto text-center">
           
            <h1
              className="font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", color: "#fff" }}
            >
              Get in Touch with{" "}
              <span style={{ color: "#80ee72" }}>Medzy Healthcare</span>
            </h1>
            <p
              className="max-w-5xl mx-auto text-sm leading-relaxed"
              style={{ color: "white", fontFamily: "'DM Sans', sans-serif" }}
            >
             We're here to serve you. Reach out for product inquiries, partnership opportunities, or general information. Whether you need assistance with our products, customer support, or partnership opportunities, our team is ready to assist you. 
            </p>

            
          </div>
        </div>

        {/* ── CONTENT ─────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-5 py-14 flex flex-col gap-10">

          {/* ── ROW 1: Corporate + Warehouse ── */}
          <div
            ref={infoRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700"
            style={{ opacity: infoVisible ? 1 : 0, transform: infoVisible ? "translateY(0)" : "translateY(24px)" }}
          >
            {/* Corporate */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,184,169,0.12)", background: "#fff", boxShadow: "0 4px 16px rgba(28,53,87,0.06)" }}>
              {/* card header */}
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
                
                <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Corporate Office</h3>
              </div>
              <div className="px-6 py-4 flex flex-col">
                {/* company name banner */}
                <div className="mb-4 px-4 py-2.5 rounded-xl flex items-center gap-2"
                  style={{ background: "rgba(0,184,169,0.06)", border: "1px solid rgba(0,184,169,0.12)" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: TEAL }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: NAVY, fontFamily: "'Syne', sans-serif" }}>
                    MEDZY HEALTHCARE PRIVATE LIMITED
                  </span>
                </div>
                <InfoRow icon={<MapPinIcon />} label="Address" value="Building No-1, Block-10, Near AIPL Joy Street, Village Ramgarh, Gurugram, Haryana – 122502" />
                <InfoRow icon={<PhoneIcon />} label="Phone" value="+91-9599773746" href="tel:+919599773746" />
                <InfoRow icon={<MailIcon />} label="Email" value="info@medzyhealthcare.com" href="mailto:info@medzyhealthcare.com" />
                <InfoRow icon={<GlobeIcon />} label="Website" value="www.medzyhealthcare.com" href="https://www.medzyhealthcare.com" />
                <InfoRow icon={<ClockIcon />} label="Business Hours" value="Mon–Sat: 9:00 AM – 6:00 PM  |  Sunday: Closed" />
              </div>
            </div>

            {/* Warehouse + Channels stacked */}
            <div className="flex flex-col gap-5">
              {/* Warehouse */}
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,184,169,0.12)", background: "#fff", boxShadow: "0 4px 16px rgba(28,53,87,0.06)" }}>
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: `linear-gradient(90deg, ${NAVY},#019d90)` }}>
                  
                  <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Warehouse Address</h3>
                </div>
                <div className="px-6 py-4">
                  <div className="flex items-start gap-3 py-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,184,169,0.08)", color: TEAL }}>
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: TEAL, fontFamily: "'DM Sans', sans-serif" }}>Location</p>
                      <p className="text-xs px-3 py-2 rounded-lg italic" style={{ background: "rgba(0,184,169,0.05)", color: "#7A8FA6", fontFamily: "'DM Sans', sans-serif", border: "1px dashed rgba(0,184,169,0.20)" }}>
                        To be updated — warehouse address to be confirmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,184,169,0.12)", background: "#fff", boxShadow: "0 4px 16px rgba(28,53,87,0.06)" }}>
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
                 
                  <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Contact </h3>
                </div>
                <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ChannelCard
                    icon={<PackageIcon />}
                    title="Order Inquiries"
                    email="info@medzyhealthcare.com"
                    phone="+91-9599773746"
                  />
                  <ChannelCard
                    icon={<HandshakeIcon />}
                    title="Partnership Inquiries"
                    note="Partnership team contact details — To be updated soon."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── ROW 2: Contact Form ── */}
          <div
            ref={formRef}
            className="transition-all duration-700"
            style={{ opacity: formVisible ? 1 : 0, transform: formVisible ? "translateY(0)" : "translateY(24px)" }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,184,169,0.12)", background: "#fff", boxShadow: "0 4px 20px rgba(28,53,87,0.06)" }}>
              {/* form header */}
              <div className="px-6 md:px-10 py-5 flex items-center gap-3" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
                
                <div>
                  <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Quick Contact Form</h3>
                 
                </div>
              </div>

              <div className="px-6 md:px-10 py-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 gap-4 fade-up">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(0,184,169,0.10)", animation: "checkPop 0.4s ease" }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg" style={{ color: NAVY, fontFamily: "'Syne', sans-serif" }}>Message Sent!</h4>
                    <p className="text-sm text-center max-w-xs" style={{ color: "#7A8FA6", fontFamily: "'DM Sans', sans-serif" }}>
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                      <Field label="Email Address" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Phone Number" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required={false} />
                      <Field label="Subject" name="subject" placeholder="Order / Partnership / General" value={formData.subject} onChange={handleChange} />
                    </div>
                    <Field label="Message" name="message" placeholder="Tell us how we can help you..." value={formData.message} onChange={handleChange} textarea />

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                      <p className="text-xs" style={{ color: "#a0adb8", fontFamily: "'DM Sans', sans-serif" }}>
                        <span style={{ color: "#E05A5A" }}>*</span> Required fields
                      </p>
                      <button
                        type="submit"
                        className="flex items-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{
                          background: `linear-gradient(120deg, ${TEAL} 0%, #0097a7 100%)`,
                          fontFamily: "'DM Sans', sans-serif",
                          boxShadow: "0 6px 20px rgba(0,184,169,0.28)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        <SendIcon />
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>


          {/* ── ROW 3: Find Us Map ── */}
          <div
            ref={mapRef}
            className="transition-all duration-700"
            style={{ opacity: mapVisible ? 1 : 0, transform: mapVisible ? "translateY(0)" : "translateY(24px)" }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,184,169,0.12)", background: "#fff", boxShadow: "0 4px 20px rgba(28,53,87,0.06)" }}>
              {/* header */}
              <div className="px-6 md:px-10 py-5 flex items-center justify-between" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
                <div className="flex items-center gap-3">
                  
                  <div>
                    <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Find Us on the Map</h3>
                    <p className="text-xs" style={{ color: "white", fontFamily: "'DM Sans', sans-serif" }}>Building No-1, Block-10, Near AIPL Joy Street, Gurugram</p>
                  </div>
                </div>
              
              </div>

              {/* map + info side layout */}
              <div className="flex flex-col lg:flex-row">
                {/* Google Maps embed */}
                <div className="relative flex-1" style={{ minHeight: 360 }}>
                  <iframe
                    title="Medzy Healthcare Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0!2d77.0848!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18681f478a8b%3A0x7bd8a9cb6b46e55b!2sAIPL%20Joy%20Street%2C%20Sector%2066%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 360, display: "block", filter: "saturate(0.88) contrast(1.02)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* live dot badge */}
                  <div
                    className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.96)", boxShadow: "0 4px 16px rgba(28,53,87,0.14)" }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: TEAL }} />
                    <span className="text-xs font-semibold" style={{ color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>Medzy Healthcare Pvt. Ltd.</span>
                  </div>
                </div>

                {/* side info panel */}
                <div
                  className="flex flex-col justify-between p-6 lg:p-8 lg:w-72 shrink-0"
                  style={{ borderLeft: "1px solid rgba(0,184,169,0.10)", background: "linear-gradient(180deg, #f9fefe 0%, #ffffff 100%)" }}
                >
                  <div className="flex flex-col gap-5">
                    {/* address */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: TEAL, fontFamily: "'DM Sans', sans-serif" }}>Registered Address</p>
                      <p className="text-sm leading-relaxed" style={{ color: NAVY, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                        Building No-1, Block-10,<br />Near AIPL Joy Street,<br />Village Ramgarh,<br />Gurugram, Haryana – 122502
                      </p>
                    </div>
                    <div className="h-px w-full" style={{ background: "rgba(0,184,169,0.10)" }} />
                    {/* quick contacts */}
                    <div className="flex flex-col gap-3">
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: TEAL, fontFamily: "'DM Sans', sans-serif" }}>Quick Contact</p>
                      <a href="tel:+919599773746" className="flex items-center gap-2.5 text-sm font-medium hover:opacity-75 transition-all" style={{ color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,184,169,0.08)", color: TEAL }}><PhoneIcon /></span>
                        +91-9599773746
                      </a>
                      <a href="mailto:info@medzyhealthcare.com" className="flex items-center gap-2.5 text-sm font-medium hover:opacity-75 transition-all" style={{ color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,184,169,0.08)", color: TEAL }}><MailIcon /></span>
                       <p className="text-[#019d90]">info@medzyhealthcare.com</p> 
                      </a>
                      <div className="flex items-center gap-2.5 text-sm" style={{ color: "#7A8FA6", fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[#019d90]" ><ClockIcon /></span>
                        <p className="text-[#019d90]">  Mon–Sat: 9 AM – 6 PM</p>
                      </div>
                    </div>
                    <div className="h-px w-full" style={{ background: "rgba(0,184,169,0.10)" }} />
                    {/* landmark */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: TEAL, fontFamily: "'DM Sans', sans-serif" }}>Nearby Landmark</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#7A8FA6", fontFamily: "'DM Sans', sans-serif" }}>
                        Near AIPL Joy Street, Sector 66 area, Gurugram — easily accessible via NH-48.
                      </p>
                    </div>
                  </div>
                  {/* CTA */}
                  <a
                    href="https://maps.google.com/?q=AIPL+Joy+Street+Village+Ramgarh+Gurugram+Haryana+122502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(120deg, ${TEAL} 0%, #0097a7 100%)`, color: "#fff", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 6px 20px rgba(0,184,169,0.24)" }}
                  >
                    <NavigationIcon />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
