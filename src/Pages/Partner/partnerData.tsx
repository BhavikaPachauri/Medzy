import type { ReactElement } from "react";
import { PARTNER_COLORS as B } from "./partnerTheme";

export type PartnerItem = {
  id: string;
  num: string;
  label: string;
  headline: string;
  desc: string;
  offers: string[];
  models: string[];
  color: string;
  colorLight: string;
  colorMid: string;
  icon: ReactElement;
};

export type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  icon: ReactElement;
};

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: "manufacturer",
    num: "01",
    label: "Pharmaceutical Manufacturers",
    headline: "Scale your reach across India",
    desc: "Partner with Medzy's established distribution network to unlock new markets faster. We bring proven logistics, deep retailer relationships, and sales muscle so you can focus on manufacturing.",
    offers: [
      "Extensive pan-India distribution network",
      "Proven market penetration track record",
      "Strong retailer & hospital relationships",
      "Efficient inventory & logistics management",
      "Sales and marketing support",
    ],
    models: ["Exclusive distribution agreements", "C&F agency partnerships", "Super stockist arrangements", "Regional distribution rights"],
    color: B.p,
    colorLight: B.pLight,
    colorMid: B.pMid,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22">
        <rect x="2" y="9" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M2 9l4-6h12l4 6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 16v5M15 16v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "hospital",
    num: "02",
    label: "Hospitals & Healthcare Institutions",
    headline: "Zero-gap supply for uninterrupted care",
    desc: "From IPD/OPD pharmacy management to emergency procurement, Medzy keeps your institution fully stocked with the right medicines at the right time - every time.",
    offers: [
      "Dedicated account management",
      "Comprehensive product portfolio",
      "IPD/OPD pharmacy management",
      "Competitive institutional pricing",
      "Emergency procurement support",
      "Flexible credit terms",
    ],
    models: [],
    color: B.aDark,
    colorLight: B.aLight,
    colorMid: B.aMid,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22">
        <rect x="3" y="3" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "retail",
    num: "03",
    label: "Retail Pharmacies",
    headline: "Everything your pharmacy needs, simplified",
    desc: "One partner for your complete stock needs. Medzy gives retail pharmacies unmatched product access, competitive margins, and a seamless digital ordering experience.",
    offers: [
      "Wide product range under one roof",
      "Competitive margins and schemes",
      "Regular & reliable stock availability",
      "Easy digital ordering platform",
      "Fast delivery & logistics",
      "Business growth support",
    ],
    models: [],
    color: B.p,
    colorLight: B.pLight,
    colorMid: B.pMid,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Submit Enquiry",
    desc: "Fill in your business details in under 3 minutes.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width="20">
        <path d="M4 3h14a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 8h8M7 12h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Consultation Call",
    desc: "Our team reaches out within 48 hours to understand your needs.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width="20">
        <path d="M20.01 15.38c-.98 1.26-2.5 1.94-4.1 1.94-5.37 0-9.73-4.36-9.73-9.73 0-1.6.68-3.12 1.94-4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 3h3v3L9 8c1 2 3 4 5 5l2-2h3v3c-4.5 1.5-11-5-11-11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Agreement Finalised",
    desc: "Customised partnership terms agreed upon collaboratively.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width="20">
        <path d="M9 11l3 3 7-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12v7a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Go Live",
    desc: "Quick onboarding with a dedicated support manager by your side.",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width="20">
        <polygon points="12 2 3 13 11 13 10 21 20 9 12 9 12 2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];
