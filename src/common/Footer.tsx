import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { SITE_CONFIG } from "./siteConfig";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Partners", to: "/partners" },
  { label: "Contact Us", to: "/contact-us" },
];

const serviceHighlights = [
  "Wholesale distribution",
  "Hospital supply support",
  "Retail pharmacy fulfillment",
  "Reliable last-mile coordination",
];

const socialLinks = [
  {
    href: SITE_CONFIG.socialLinks.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: SITE_CONFIG.socialLinks.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: SITE_CONFIG.socialLinks.whatsapp,
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
];

const linkClassName =
  "text-sm text-[#b5d6d0] transition-colors duration-200 hover:text-white";

const Footer = () => {
  const year = new Date().getFullYear();
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    const node = footerRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-white/5"
      style={{
        background:
          "linear-gradient(160deg, #071a14 0%, #0b1e1a 45%, #0d2420 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,181,165,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,181,165,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,181,165,0.14) 0%, transparent 72%)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(138,196,63,0.12) 0%, transparent 72%)",
        }}
      />

      <div className="relative border-b border-white/[0.08] py-10">
        <div
          className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
          }}
        >
          <div>
            <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-[3px] text-[#8ac43f]">
              Build With Medzy
            </p>
            <h2 className="font-heading text-[clamp(20px,3vw,30px)] font-bold tracking-tight text-white">
              Advancing healthcare supply with speed and trust
            </h2>
          </div>

          <Link to="/contact-us" className="inline-flex rounded-full">
            <Btn
              title="Get in Touch"
              text="text-white"
              bg="bg-[#00a9ae]"
              border="border-[#00a9ae]"
              hover="bg-[#8ac43f]"
              as="span"
            />
          </Link>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-6 py-10 md:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">
        <div
          className="transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(22px)",
            transitionDelay: "0.05s",
          }}
        >
          <img
            src="/img/MedzyLogo1.webp"
            alt="Medzy Healthcare"
            className="mb-4 h-auto w-[190px]"
            loading="lazy"
            width="190"
            height="48"
          />
          <p className="max-w-md text-sm leading-7 text-[#b5d6d0]">
            Medzy Healthcare helps manufacturers, hospitals, clinics, and
            pharmacies stay connected through responsive pharmaceutical
            distribution and dependable service.
          </p>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#d9f2ed] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00b5a5] hover:bg-[#0b3b37]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn
          title="Company"
          visible={visible}
          delay="0.12s"
          content={
            <ul className="flex list-none flex-col gap-3 p-0">
              {companyLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={linkClassName}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          }
        />

        <FooterColumn
          title="Services"
          visible={visible}
          delay="0.2s"
          content={
            <ul className="flex list-none flex-col gap-3 p-0">
              {serviceHighlights.map((item) => (
                <li key={item} className="text-sm text-[#b5d6d0]">
                  {item}
                </li>
              ))}
            </ul>
          }
        />

        <FooterColumn
          title="Contact"
          visible={visible}
          delay="0.28s"
          content={
            <div className="flex flex-col gap-4 text-sm text-[#b5d6d0]">
              <a href={SITE_CONFIG.phoneHref} className="flex items-start gap-3 hover:text-white">
                <PhoneIcon className="mt-0.5 text-[#8ac43f]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a href={SITE_CONFIG.emailHref} className="flex items-start gap-3 hover:text-white">
                <MailIcon className="mt-0.5 text-[#8ac43f]" />
                <span>{SITE_CONFIG.email}</span>
              </a>

              <a
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white"
              >
                <MapPinIcon className="mt-0.5 shrink-0 text-[#8ac43f]" />
                <address className="not-italic">
                  {SITE_CONFIG.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </a>
            </div>
          }
        />
      </div>

      <div
        className="relative mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] px-6 py-5 text-[12.5px] text-[#8cb9b1] transition-opacity duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "0.35s" }}
      >
        <p>{year} Medzy Healthcare Private Limited. All rights reserved.</p>
        <p>Serving pharmaceutical distribution needs across India.</p>
      </div>
    </footer>
  );
};

function FooterColumn({
  title,
  visible,
  delay,
  content,
}: {
  title: string;
  visible: boolean;
  delay: string;
  content: React.ReactNode;
}) {
  return (
    <div
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transitionDelay: delay,
      }}
    >
      <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[2.5px] text-white/55">
        {title}
      </h3>
      {content}
    </div>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      width="18"
      height="18"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      width="18"
      height="18"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      width="18"
      height="18"
    >
      <path d="M20 11.5A8.5 8.5 0 0 1 7.3 19l-4.3 1 1.2-4.1A8.5 8.5 0 1 1 20 11.5Z" />
      <path d="M9.4 8.9c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.4.6c-.1.2-.1.3 0 .5.4.7 1 1.3 1.8 1.8.2.1.3.1.5 0l.6-.4c.2-.1.4-.1.6 0l1.8.8c.3.1.4.3.4.5v.6c0 .3 0 .5-.5.7-.5.2-1.7.3-3.4-.5a9.4 9.4 0 0 1-4.4-4.4c-.8-1.7-.7-2.9-.5-3.4Z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      width="16"
      height="16"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 13.5 19.8 19.8 0 0 1 1.62 4.9 2 2 0 0 1 3.59 2.73h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11l-.94.73a16 16 0 0 0 6 6l.91-.92a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.73 2.02Z" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      width="16"
      height="16"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      width="16"
      height="16"
    >
      <path d="M12 21s-7-4.35-7-11a7 7 0 1 1 14 0c0 6.65-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default Footer;
