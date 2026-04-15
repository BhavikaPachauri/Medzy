"use client";

import { useEffect, useRef, useState } from "react";
import Btn from "../../common/Btn";
import { SITE_CONFIG } from "../../common/siteConfig";

const TEAL = "#019d90";
const NAVY = "#215758";

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 13.5 19.79 19.79 0 0 1 1.62 4.9 2 2 0 0 1 3.59 2.73h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PackageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l1.06 1.06L12 21.23l7.06-7.89 1.06-1.06a5.4 5.4 0 0 0 .3-7.7z" />
  </svg>
);

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const external = href?.startsWith("http");

  return (
    <div className="flex items-start gap-3 py-3" style={{ borderBottom: "1px solid rgba(0,184,169,0.08)" }}>
      <div
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
        style={{ background: "rgba(0,184,169,0.08)", color: TEAL }}
      >
        {icon}
      </div>
      <div>
        <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest" style={{ color: TEAL }}>
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-sm font-medium transition-all hover:underline"
            style={{ color: NAVY, textDecorationColor: TEAL }}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium" style={{ color: NAVY }}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

function ChannelCard({
  icon,
  title,
  email,
  phone,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  email?: string;
  phone?: string;
  note?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-3 rounded-2xl p-5 transition-all duration-300"
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
        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(0,184,169,0.09)", color: TEAL }}>
          {icon}
        </div>
        <h4 className="text-base font-bold" style={{ color: NAVY }}>
          {title}
        </h4>
      </div>

      {email ? (
        <div className="flex items-center gap-2 text-[#019d90]">
          <MailIcon />
          <a href={`mailto:${email}`} className="text-sm font-medium text-[#019d90]">
            {email}
          </a>
        </div>
      ) : null}

      {phone ? (
        <div className="flex items-center gap-2 text-[#019d90]">
          <PhoneIcon />
          <a href={`tel:${phone.replace(/\s+/g, "")}`} className="text-sm font-medium text-[#019d90]">
            {phone}
          </a>
        </div>
      ) : null}

      {note ? (
        <p className="rounded-lg px-3 py-2 text-xs" style={{ background: "rgba(0,184,169,0.06)", color: "#7A8FA6" }}>
          {note}
        </p>
      ) : null}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const base: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 12,
    border: `1.5px solid ${focused ? TEAL : "rgba(28,53,87,0.12)"}`,
    outline: "none",
    fontSize: 14,
    color: NAVY,
    background: focused ? "rgba(0,184,169,0.02)" : "#fafafa",
    transition: "all 0.2s",
    resize: textarea ? "vertical" : undefined,
    minHeight: textarea ? 110 : undefined,
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: TEAL }}>
        {label}
        {required ? <span style={{ color: "#E05A5A" }}> *</span> : null}
      </label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          style={base}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          style={base}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [heroRef, heroVisible] = useVisible(0.05);
  const [infoRef, infoVisible] = useVisible(0.08);
  const [formRef, formVisible] = useVisible(0.08);
  const [mapRef, mapVisible] = useVisible(0.05);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div style={{ background: "linear-gradient(170deg, #ffffff 0%, #F4FBFA 100%)", minHeight: "100vh" }}>
      <div
        ref={heroRef}
        className="relative h-[315px] w-full overflow-hidden rounded-b-[30%] bg-gradient-to-br from-teal-700 via-teal-600 to-teal-400 px-6 py-16"
        style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(-16px)",
          transition: "all 0.7s ease",
        }}
      >
        <div className="absolute inset-0 bg-[url('/img/contactUs.webp')] bg-cover opacity-20" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,184,169,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,169,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,184,169,0.12) 0%, transparent 65%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,184,169,0.07) 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="mt-5 mb-4 text-4xl font-extrabold leading-tight text-white font-heading">
            Get in Touch with <span className="font-heading text-4xl text-[#80ee72]">Medzy Healthcare</span>
          </h1>
          <p className="mx-auto hidden max-w-5xl text-sm leading-relaxed text-white md:block">
            Reach out for product inquiries, partnership opportunities, or general business support. Our team is ready to help you with responsive guidance and dependable follow-up.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14">
        <div
          ref={infoRef}
          className="grid grid-cols-1 gap-6 transition-all duration-700 md:grid-cols-2"
          style={{
            opacity: infoVisible ? 1 : 0,
            transform: infoVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgba(0,184,169,0.12)",
              background: "#fff",
              boxShadow: "0 4px 16px rgba(28,53,87,0.06)",
            }}
          >
            <div className="flex items-center gap-3 px-6 py-4" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
              <h3 className="font-heading text-base font-bold text-white">Corporate Office</h3>
            </div>
            <div className="flex flex-col px-6 py-4">
              <InfoRow icon={<MapPinIcon />} label="Address" value={SITE_CONFIG.fullAddress} />
              <InfoRow icon={<PhoneIcon />} label="Phone" value={SITE_CONFIG.phoneDisplay} href={SITE_CONFIG.phoneHref} />
              <InfoRow icon={<MailIcon />} label="Email" value={SITE_CONFIG.email} href={SITE_CONFIG.emailHref} />
              <InfoRow icon={<GlobeIcon />} label="Website" value="www.medzyhealthcare.com" href={SITE_CONFIG.url} />
              <InfoRow icon={<ClockIcon />} label="Business Hours" value="Mon-Sat: 9:00 AM - 6:00 PM | Sunday: Closed" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(0,184,169,0.12)",
                background: "#fff",
                boxShadow: "0 4px 16px rgba(28,53,87,0.06)",
              }}
            >
              <div className="flex items-center gap-3 px-6 py-4" style={{ background: `linear-gradient(90deg, ${NAVY},#019d90)` }}>
                <h3 className="font-heading text-base font-bold text-white">Warehouse Address</h3>
              </div>
              <div className="px-6 py-4">
                <InfoRow icon={<MapPinIcon />} label="Address" value={SITE_CONFIG.fullAddress} />
              </div>
            </div>

            <div
              className="overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(0,184,169,0.12)",
                background: "#fff",
                boxShadow: "0 4px 16px rgba(28,53,87,0.06)",
              }}
            >
              <div className="flex items-center gap-3 px-6 py-4" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
                <h3 className="font-heading text-base font-bold text-white">Contact Channels</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 px-6 py-5 sm:grid-cols-2">
                <ChannelCard
                  icon={<PackageIcon />}
                  title="Order Inquiries"
                  email={SITE_CONFIG.email}
                  phone={SITE_CONFIG.phoneDisplay}
                />
                <ChannelCard
                  icon={<HandshakeIcon />}
                  title="Partnership Inquiries"
                  note="Partnership team contact details will be updated soon."
                />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={formRef}
          className="transition-all duration-700"
          style={{
            opacity: formVisible ? 1 : 0,
            transform: formVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgba(0,184,169,0.12)",
              background: "#fff",
              boxShadow: "0 4px 20px rgba(28,53,87,0.06)",
            }}
          >
            <div className="flex items-center gap-3 px-6 py-5 md:px-10" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
              <h3 className="text-base font-bold text-white">Quick Contact Form</h3>
            </div>

            <div className="px-6 py-8 md:px-10">
              {submitted ? (
                <div className="fade-up flex flex-col items-center justify-center gap-4 py-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(0,184,169,0.10)", animation: "checkPop 0.4s ease" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: NAVY }}>
                    Message Sent!
                  </h4>
                  <p className="max-w-xs text-center text-sm" style={{ color: "#7A8FA6" }}>
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                    <Field label="Email Address" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required={false} />
                    <Field label="Subject" name="subject" placeholder="Order / Partnership / General" value={formData.subject} onChange={handleChange} />
                  </div>
                  <Field label="Message" name="message" placeholder="Tell us how we can help you..." value={formData.message} onChange={handleChange} textarea />

                  <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <p className="text-xs" style={{ color: "#a0adb8" }}>
                      <span style={{ color: "#E05A5A" }}>*</span> Required fields
                    </p>
                    <Btn title="Send Message" text="text-white" bg="bg-[#00a9ae]" border="border-[#00a9ae]" hover="bg-[#8ac43f]" type="submit" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <div
          ref={mapRef}
          className="transition-all duration-700"
          style={{
            opacity: mapVisible ? 1 : 0,
            transform: mapVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgba(0,184,169,0.12)",
              background: "#fff",
              boxShadow: "0 4px 20px rgba(28,53,87,0.06)",
            }}
          >
            <div className="flex items-center justify-between px-6 py-5 md:px-10" style={{ background: `linear-gradient(90deg, ${NAVY}, #019d90)` }}>
              <div>
                <h3 className="font-heading text-base font-bold text-white">Find Us on the Map</h3>
                <p className="text-xs text-white">Building No-1, Block-10, Near AIPL Joy Street, Gurugram</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="relative flex-1" style={{ minHeight: 360 }}>
                {mapVisible ? (
                  <iframe
                    title="Medzy Healthcare Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0!2d77.0848!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18681f478a8b%3A0x7bd8a9cb6b46e55b!2sAIPL%20Joy%20Street%2C%20Sector%2066%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0, minHeight: 360, display: "block", filter: "saturate(0.88) contrast(1.02)" }}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-[360px] items-center justify-center bg-gray-100">
                    <p className="text-sm text-gray-500">Loading map...</p>
                  </div>
                )}

                <div
                  className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.96)", boxShadow: "0 4px 16px rgba(28,53,87,0.14)" }}
                >
                  <span className="h-2.5 w-2.5 rounded-full animate-pulse" style={{ background: TEAL }} />
                  <span className="font-body text-xs font-semibold" style={{ color: NAVY }}>
                    Medzy Healthcare Pvt. Ltd.
                  </span>
                </div>
              </div>

              <div
                className="flex shrink-0 flex-col justify-between p-6 lg:w-72 lg:p-8"
                style={{ borderLeft: "1px solid rgba(0,184,169,0.10)", background: "linear-gradient(180deg, #f9fefe 0%, #ffffff 100%)" }}
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: TEAL }}>
                      Registered Address
                    </p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: NAVY, fontWeight: 500 }}>
                      Building No-1, Block-10,<br />Near AIPL Joy Street,<br />Village Ramgarh,<br />Gurugram, Haryana 122502
                    </p>
                  </div>

                  <div className="h-px w-full" style={{ background: "rgba(0,184,169,0.10)" }} />

                  <div className="font-body flex flex-col gap-3">
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: TEAL }}>
                      Quick Contact
                    </p>
                    <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2.5 text-sm font-medium transition-all hover:opacity-75" style={{ color: NAVY }}>
                      <span className="font-body flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(0,184,169,0.08)", color: TEAL }}>
                        <PhoneIcon />
                      </span>
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                    <a
                      href={SITE_CONFIG.emailHref}
                      className="flex items-center gap-2.5 text-sm font-medium transition-all hover:opacity-75"
                      style={{ color: NAVY }}
                      aria-label="Send email to Medzy Healthcare"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(0,184,169,0.08)", color: TEAL }}>
                        <MailIcon />
                      </span>
                      <span className="text-[#019d90]">{SITE_CONFIG.email}</span>
                    </a>
                    <div className="flex items-center gap-2.5 text-sm" style={{ color: "#7A8FA6" }}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#019d90]">
                        <ClockIcon />
                      </span>
                      <p className="text-[#019d90]">Mon-Sat: 9 AM - 6 PM</p>
                    </div>
                  </div>

                  <div className="h-px w-full" style={{ background: "rgba(0,184,169,0.10)" }} />

                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: TEAL }}>
                      Nearby Landmark
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#4ea49d" }}>
                      Near AIPL Joy Street, Sector 66 area, Gurugram - easily accessible via NH-48.
                    </p>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all hover:opacity-90"
                >
                  <Btn title="Open in Google Maps" text="text-white" bg="bg-[#00a9ae]" border="border-[#00a9ae]" hover="bg-[#8ac43f]" as="span" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
