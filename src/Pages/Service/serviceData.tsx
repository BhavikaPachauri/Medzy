import type { ReactElement } from "react";

export type ServiceKpi = {
  v: string;
  l: string;
};

export type ServiceItem = {
  id: number;
  color: string;
  bg: string;
  acc: string;
  label: string;
  title: string;
  tagline: string;
  desc: string;
  kpis: ReadonlyArray<ServiceKpi>;
  img: string;
  Icon: () => ReactElement;
};

export type ValueAddedItem = {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: ReadonlyArray<string>;
  img: string;
  flip: boolean;
  accent: string;
};

export const HERO_WORDS = ["Precision.", "Reliability.", "Speed.", "Trust."] as const;

export const SERVICES: ReadonlyArray<ServiceItem> = [
  {
    id: 0,
    color: "#0d9488",
    bg: "#f0fdfa",
    acc: "rgba(13,148,136,.09)",
    label: "Wholesale",
    title: "Wholesale Distribution",
    tagline: "Direct from manufacturer to institution.",
    desc: "We supply across 12+ therapeutic categories with competitive pricing, flexible quantities, and a 99% fill rate nationwide.",
    kpis: [
      { v: "12+", l: "Categories" },
      { v: "99%", l: "Fill Rate" },
      { v: "24h", l: "Processing" },
    ],
    img: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=700&q=80",
    Icon: () => (
      <svg viewBox="0 0 28 28" fill="none" width="20">
        <rect x="3" y="10" width="22" height="15" rx="3" stroke="#0d9488" strokeWidth="1.7" />
        <path d="M3 10l4-7h14l4 7" stroke="#0d9488" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M10 18v4M18 18v4" stroke="#0d9488" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 1,
    color: "#0891b2",
    bg: "#f0f9ff",
    acc: "rgba(8,145,178,.09)",
    label: "Hospital",
    title: "Hospital & Institutional",
    tagline: "Zero-gap supply for critical care.",
    desc: "End-to-end IPD and OPD pharmacy management for 200+ hospitals and nursing homes with priority delivery and dedicated account managers.",
    kpis: [
      { v: "200+", l: "Hospitals" },
      { v: "IPD/OPD", l: "Coverage" },
      { v: "Priority", l: "Delivery" },
    ],
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=80",
    Icon: () => (
      <svg viewBox="0 0 28 28" fill="none" width="20">
        <rect x="5" y="4" width="18" height="21" rx="3" stroke="#0891b2" strokeWidth="1.7" />
        <path d="M14 9v6M11 12h6" stroke="#0891b2" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    color: "#7c3aed",
    bg: "#faf5ff",
    acc: "rgba(124,58,237,.09)",
    label: "Retail",
    title: "Retail Pharmacy Support",
    tagline: "Empowering every pharmacy.",
    desc: "Digital ordering, credit facilities, and co-branded promotions for 5,000+ retail pharmacy partners across India.",
    kpis: [
      { v: "5,000+", l: "Partners" },
      { v: "App", l: "Ordering" },
      { v: "Flexible", l: "Credit" },
    ],
    img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=700&q=80",
    Icon: () => (
      <svg viewBox="0 0 28 28" fill="none" width="20">
        <rect x="4" y="7" width="20" height="14" rx="4" stroke="#7c3aed" strokeWidth="1.7" />
        <path d="M14 7v14" stroke="#7c3aed" strokeWidth="1.5" />
        <circle cx="9" cy="14" r="2.5" fill="rgba(124,58,237,.15)" stroke="#7c3aed" strokeWidth="1.3" />
      </svg>
    ),
  },
];

export const VALUE_ADDED: ReadonlyArray<ValueAddedItem> = [
  {
    num: "01",
    title: "Custom Packaging",
    subtitle: "Tailored for Compliance",
    desc: "End-to-end custom packaging engineered for regulatory compliance, brand consistency, and client-specific requirements across all therapeutic categories.",
    tags: ["GMP Certified", "Brand Aligned", "Regulatory Ready"],
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    flip: false,
    accent: "#0d9488",
  },
  {
    num: "02",
    title: "Product Education",
    subtitle: "Knowledge That Saves Lives",
    desc: "Structured training programs, accredited e-learning modules, and clinical materials empowering healthcare professionals to deliver better patient outcomes.",
    tags: ["CME Accredited", "Digital Learning", "Clinical Training"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    flip: true,
    accent: "#0891b2",
  },
  {
    num: "03",
    title: "Regulatory Assistance",
    subtitle: "Navigate with Confidence",
    desc: "Expert guidance through India's complex drug licensing landscape, from Schedule H documentation to state-level compliance and every regulatory touchpoint.",
    tags: ["Schedule H", "CDSCO", "State Licensing"],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    flip: false,
    accent: "#7c3aed",
  },
  {
    num: "04",
    title: "Market Intelligence",
    subtitle: "Data-Driven Decisions",
    desc: "Real-time performance dashboards, AI-powered demand forecasting, and competitive analytics that turn supply-chain data into actionable intelligence.",
    tags: ["AI Forecasting", "Live Dashboards", "Competitor Insights"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    flip: true,
    accent: "#ea580c",
  },
];
