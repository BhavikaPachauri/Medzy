export type ServiceKpi = {
  v: string;
  // l: string;
};

export type ServiceItem = {
  id: number;
  color: string;
  bg: string;
  acc: string;
  label: string;
  title: string;
  desc: string;
  kpis: ReadonlyArray<ServiceKpi>;
  img: string;
  // Icon: () => ReactElement;
};

export type ValueAddedItem = {
  num: string;
  title: string;
  desc: string;
  img: string;
  flip: boolean;
  accent: string;
};

export const HERO_WORDS = ["Precision", "Reliability", "Speed", "Trust"] as const;

export const SERVICES: ReadonlyArray<ServiceItem> = [
  {
    id: 0,
    color: "#0891b2",
    bg: "#f0f9ff",
    acc: "rgba(8,145,178,.09)",
    label: "Wholesale",
    title: "Wholesale Distribution",
    desc: "Medzy serves as a comprehensive wholesale distributor for pharmaceutical products, connecting manufacturers with retailers, hospitals, and healthcare institutions.",
    kpis: [
      { v: "Wide range of therapeutic categories"  },
      { v: "Competitive bulk pricing"  },
      { v: "Flexible order quantities"},
      { v: "Regular stock availability"  },
    ],
    img: "./img/wholesale.webp",
   
  },
  {
    id: 1,
    color: "#0891b2",
    bg: "#f0f9ff",
    acc: "rgba(8,145,178,.09)",
    label: "Hospital",
    title: "Hospital & Institutional",
    
    desc: "We specialize in managing IPD (In-Patient Department) and OPD (Out-Patient Department) pharmacy requirements for hospitals, nursing homes, and medical institutions.",
    kpis: [
      { v: "Dedicated account management" },
      { v: "Customized product portfolios" },
      { v: "Priority delivery schedules" },
      { v: "Inventory management support" },
    ],
    img: "./img/hospital.webp",
 
  },
  {
    id: 2,
    color: "#0891b2",
    bg: "#f0f9ff",
    acc: "rgba(58, 225, 237, 0.09)",
    label: "Retail",
    title: "Retail Pharmacy Support",
   
    desc: "Supporting independent pharmacies and retail chains with reliable product supply and business growth solutions.",
    kpis: [
      { v: "Regular stock replenishment" },
      { v: "Promotional support materials" },
      { v: "Competitive margins" },
      { v: "Dedicated retail support team" },
    ],
    img: "./img/retailpharmacy.webp",
  
  },
];

export const VALUE_ADDED: ReadonlyArray<ValueAddedItem> = [
  {
    num: "01",
    title: "Custom Packaging",
    desc: "End-to-end custom packaging engineered for regulatory compliance, brand consistency, and client-specific requirements across all therapeutic categories.",
    
    img: "./img/v1.jpeg",
    flip: false,
         accent: "#0891b2",
  },
  {
    num: "02",
    title: "Product Education",
   
    desc: "Structured training programs, accredited e-learning modules, and clinical materials empowering healthcare professionals to deliver better patient outcomes.",

    img: "./img/v3.jpeg",
    flip: true,
    accent: "#0891b2",
  },
  {
    num: "03",
    title: "Regulatory Assistance",
   
    desc: "Expert guidance through India's complex drug licensing landscape, from Schedule documentation to state-level compliance and every regulatory touchpoint.",

    img: "./img/v4.jpeg",
    flip: false,
   accent: "#0891b2",
  },
  {
    num: "04",
    title: "Market Intelligence",
  
    desc: "Real time performance dashboards, AI powered demand forecasting, and competitive analytics that turn supply chain data into actionable intelligence.",
    
    img: "./img/v2.jpeg",
    flip: true,
     accent: "#0891b2",
  },
];
