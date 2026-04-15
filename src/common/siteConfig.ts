export const SITE_URL = "https://www.medzyhealthcare.com";

export const SITE_CONFIG = {
  name: "Medzy Healthcare",
  legalName: "Medzy Healthcare Private Limited",
  url: SITE_URL,
  defaultTitle: "Medzy Healthcare | Pharmaceutical Distribution Across India",
  defaultDescription:
    "Medzy Healthcare connects manufacturers, hospitals, clinics, and pharmacies through dependable pharmaceutical distribution and supply chain support across India.",
  defaultImage: `${SITE_URL}/img/banner.webp`,
  phoneDisplay: "+91 9599773746",
  phoneHref: "tel:+919599773746",
  email: "info@medzyhealthcare.com",
  emailHref: "mailto:info@medzyhealthcare.com",
  addressLines: [
    "Building No-1, Block-10",
    "Near AIPL Joy Street, Village Ramgarh",
    "Gurugram, Haryana 122502",
  ],
  fullAddress:
    "Building No-1, Block-10, Near AIPL Joy Street, Village Ramgarh, Gurugram, Haryana 122502",
  mapsUrl:
    "https://maps.google.com/?q=AIPL+Joy+Street+Village+Ramgarh+Gurugram+Haryana+122502",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/medzypharmadistributor/",
    instagram: "https://www.instagram.com/medzyhealthcare?igsh=Z3o2d2k2aHAxeHpn",
    whatsapp: "https://wa.me/919599773746",
  },
} as const;

export const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.legalName,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/img/MedzyLogo1.webp`,
  description: SITE_CONFIG.defaultDescription,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building No-1, Block-10, Near AIPL Joy Street, Village Ramgarh",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122502",
    addressCountry: "IN",
  },
  sameAs: Object.values(SITE_CONFIG.socialLinks),
};
