"use client";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";

const Footer = () => {
  const year = new Date().getFullYear();
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #071a14 0%, #0b1e1a 45%, #0d2420 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,181,165,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,181,165,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glowing orb top-right */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-80px", right: "-80px",
          width: "360px", height: "360px",
          background: "radial-gradient(circle, rgba(0,181,165,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Glowing orb bottom-left */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-60px", left: "-60px",
          width: "280px", height: "280px",
          background: "radial-gradient(circle, rgba(0,181,165,0.07) 0%, transparent 70%)",
        }}
      />

      {/* CTA Banner */}
      <div className="relative border-b border-white/[0.07] py-10">
        <div
          className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-5 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div>
            <p className="text-[#00B5A5] text-[12px] font-semibold uppercase tracking-[3px] mb-1.5">
              Partner with us
            </p>
            <h2 className="font-heading  text-white font-bold m-0 tracking-tight text-[clamp(20px,3vw,28px)]">
              Advancing Healthcare Together
            </h2>
          </div>
          <Link
            to="/contactus"
            className="inline-flex items-center rounded-lg text-white font-semibold text-sm tracking-wide whitespace-nowrap no-underline transition-all duration-200"
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <Btn title=" Get in Touch " text="text-white" bg="bg-[#00a9ae]" border="border-[#00a9ae]" hover="bg-[#8ac43f]" as="span" />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-8 grid gap-12 relative"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        {/* Brand Column */}
        <div
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: "0.1s" }}
        >
          <img
            src="/img/MedzyLogo.png"
            alt="Medzy Logo"
            className="mb-4 brightness-110"
            style={{ width: "200px" }}
          />
          <p className="font-body text-sm leading-7 m-0 mb-6" style={{ color: "rgba(180,210,205,0.75)" }}>
            Delivering innovation in healthcare with trust, precision, and quality.
          </p>

          {/* Divider */}
          <div
            className="mb-5 rounded-full"
            style={{ width: "32px", height: "2px", background: "linear-gradient(90deg, #00B5A5, transparent)" }}
          />

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { href: "#", src: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/DOTMGYA1eh.webp", label: "Social" },
              { href: "mailto:info@medzyhealthcare.com", src: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/FdxrYWtXRA.webp", label: "Email" },
              { href: "tel:+91-9599773746", src: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/v7IfkPAIci.webp", label: "Phone" },
            ].map(({ href, src, label }) => (
              <Link
                key={label}
                to={href}
                aria-label={label}
                className="flex items-center justify-center w-[38px] h-[38px] rounded-lg transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,181,165,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,181,165,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <img src={src} alt={label} className="w-[18px] opacity-85" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <NavColumn
          title="Company"
          visible={visible}
          delay="0.2s"
          links={[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/aboutus" },
            { label: "Services", to: "/services" },
            { label: "Partners", to: "/partners" },
            { label: "Contact Us", to: "/contactus" },
          ]}
          isRouter
        />

        {/* Support */}
        <NavColumn
          title="Services"
          visible={visible}
          delay="0.3s"
          links={[
            { label: "Wholesale Distribution", to: "/" },
            { label: "Hospital Supply", to: "/" },
            { label: "Retail Support", to: "/" },
            { label: "C&F Services", to: "/" },
          ]}
        />

        {/* Contact */}
        <div
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: "0.4s" }}
        >
          <h3 className="text-white text-[13px] font-semibold tracking-[2.5px] uppercase mb-6 opacity-50">
            Contact
          </h3>
          <div className="flex flex-col gap-4">
            <ContactItem
              icon={
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/></svg>
              }
              href="tel:+91-9599773746"
              text="+91 9599773746"
            />
            <ContactItem
              icon={
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
              }
              href="mailto:info@medzyhealthcare.com"
              text="info@medzyhealthcare.com"
            />
            <div className="flex gap-3 items-start hover:text-[#00B5A5]">
              <span className="mt-0.5 shrink-0 text-[#00B5A5]">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
              </span>
              <Link to="https://www.google.com/maps?q=AIPL+Joy+Street+Village+Ramgarh+Gurugram+Haryana+122502" className="text-[rgba(180,210,205,0.65)]  text-[13px] leading-[1.65] m-0 hover:text-[#00B5A5] " >
                Building No-1, Block-10, Near AIPL Joy Street, Village Ramgarh,<br />
                 Gurugram, Haryana – 122502
                
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t border-white/[0.07] py-5 px-6 max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-3 transition-opacity duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "0.5s" }}
      >
        <p className="text-[12.5px] m-0" style={{ color: "rgba(160,200,195,0.5)" }}>
          © {year} MEDZY HEALTHCARE PRIVATE LIMITED. All rights reserved.
        </p>
        {/* <div className="flex gap-6">
        
          {[
            { label: "Terms & Conditions", to: "/terms" },
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Refund Policy", to: "/refund" },
            { label: "Disclaimer", to: "/disclaimer" },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[12.5px] no-underline transition-colors duration-200"
              style={{ color: "rgba(160,200,195,0.5)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(0,181,165,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(160,200,195,0.5)")}
            >
              {label}
            </Link>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

/* ── Sub-components ─────────────────────────────────────────── */

type LinkItem = {
  label: string;
  to?: string;
  href?: string;
  isRouter?: boolean;
};

const NavColumn = ({
  title,
  links,
  visible,
  delay,
  isRouter,
}: {
  title: string;
  links: LinkItem[];
  visible: boolean;
  delay: string;
  isRouter?: boolean;
}) => (
  <div
    className="transition-all duration-700"
    style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: delay }}
  >
    <h3 className="text-white text-[13px] font-semibold tracking-[2.5px] uppercase mb-6 opacity-50">
      {title}
    </h3>
    <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
      {links.map(({ label, to, href, isRouter: itemRouter }) => {
        const isLink = isRouter || itemRouter;
        const baseStyle: React.CSSProperties = { color: "rgba(180,210,205,0.7)", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s, gap 0.2s" };
        const hoverIn = (e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(0,181,165,1)";
          (e.currentTarget as HTMLElement).style.gap = "9px";
        };
        const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(180,210,205,0.7)";
          (e.currentTarget as HTMLElement).style.gap = "6px";
        };
        const arrow = <span style={{ fontSize: "10px", opacity: 0.6 }}>›</span>;

        return (
          <li key={label}>
            {isLink && to ? (
              <Link to={to} style={baseStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                {arrow} {label}
              </Link>
            ) : (
              <a href={href} style={baseStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                {arrow} {label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

const ContactItem = ({
  icon,
  href,
  text,
}: {
  icon: React.ReactNode;
  href: string;
  text: string;
}) => (
  <Link
    to={href}
    className="flex items-center gap-3 no-underline text-[13.5px] transition-colors duration-200"
    style={{ color: "rgba(180,210,205,0.75)" }}
    onMouseEnter={e => (e.currentTarget.style.color = "rgba(0,181,165,1)")}
    onMouseLeave={e => (e.currentTarget.style.color = "rgba(180,210,205,0.75)")}
  >
    <span className="shrink-0 text-[#00B5A5]">{icon}</span>
    {text}
  </Link>
);

export default Footer;
