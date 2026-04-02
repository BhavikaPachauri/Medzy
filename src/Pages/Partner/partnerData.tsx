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
   
  },
  {
    id: "hospital",
    num: "02",
    label: "Hospitals & Healthcare Institutions",
    headline: "Zero-gap supply for uninterrupted care",
    desc: "From IPD/OPD pharmacy management to emergency procurement, Medzy keeps your institution fully stocked with the right medicines at the right time.",
    offers: [
      "Dedicated account management",
      "Comprehensive product portfolio",
      "IPD/OPD pharmacy management",
      "Competitive institutional pricing",
      "Emergency procurement support",
      "Flexible credit terms",
    ],
    models: [],
   
    color: B.p,
    colorLight: B.pLight,
    colorMid: B.pMid,
   
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
