import { useState, type FC, type ReactNode } from "react";

const T = "#2abfbf";
const TD = "#178f8f";
const TL = "#e4f7f7";

interface Feature {
  id: number;
  num: string;
  tag: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    id: 1, num: "01", tag: "Logistics", title: "Supply Chain Excellence",
    desc: "We utilize advanced inventory management systems, demand forecasting tools, and streamlined order processing to reduce costs and improve service levels. Our logistics network ensures products reach even remote locations without delay.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-5 h-5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 2, num: "02", tag: "Innovation", title: "Technology Driven Operations",
    desc: "From automated inventory tracking to real time order management, Medzy leverages technology at every step to enhance efficiency and full transparency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 9l3 3 2-2 3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3, num: "03", tag: "Alliances", title: "Strategic Partnerships",
    desc: "We collaborate with leading pharmaceutical manufacturers and healthcare providers, creating mutually beneficial alliances that extend market reach and foster growth opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-5 h-5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857a5.002 5.002 0 019.288 0" strokeLinecap="round" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 4, num: "04", tag: "Service", title: "Customer-Centric Approach",
    desc: "Understanding that healthcare waits for no one, we prioritize customer satisfaction through responsive support, flexible payment terms, and customized solutions tailored to specific needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-5 h-5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5, num: "05", tag: "Sustainability", title: "Environmental Responsibility",
    desc: "Medzy adopts sustainable practices in warehousing and distribution, building a reputation as a responsible and environmently responsible business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12c1-3 5-4 7-2-1 3-5 4-7 2z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1" />
        <path d="M12 16v-4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const Illustrations: Record<number, FC<{ color: string }>> = {
  1: ({ color }) => (
    <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
      <rect x="8" y="20" width="22" height="55" rx="4" fill={color} opacity="0.12" stroke={color} strokeWidth="1.2"/>
      <rect x="38" y="35" width="22" height="40" rx="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1.2"/>
      <rect x="68" y="14" width="22" height="61" rx="4" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2"/>
      <rect x="98" y="28" width="14" height="47" rx="4" fill={color} opacity="0.15" stroke={color} strokeWidth="1.2"/>
      <path d="M8 78h108" stroke={color} strokeWidth="1" opacity="0.3"/>
      <circle cx="19" cy="20" r="3" fill={color} opacity="0.5"/>
      <circle cx="49" cy="35" r="3" fill={color} opacity="0.6"/>
      <circle cx="79" cy="14" r="3" fill={color} opacity="0.7"/>
      <path d="M19 20 L49 35 L79 14" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.4"/>
    </svg>
  ),
  2: ({ color }) => (
    <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
      <rect x="15" y="12" width="90" height="56" rx="6" fill={color} opacity="0.08" stroke={color} strokeWidth="1.2"/>
      <rect x="22" y="20" width="76" height="40" rx="3" fill={color} opacity="0.1"/>
      <path d="M30 45 L42 33 L54 40 L66 28 L78 36 L90 24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      <circle cx="30" cy="45" r="2.5" fill={color}/>
      <circle cx="90" cy="24" r="2.5" fill={color}/>
      <rect x="35" y="70" width="50" height="6" rx="3" fill={color} opacity="0.2"/>
    </svg>
  ),
  3: ({ color }) => (
    <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
      <circle cx="40" cy="38" r="20" fill={color} opacity="0.1" stroke={color} strokeWidth="1.2"/>
      <circle cx="80" cy="38" r="20" fill={color} opacity="0.1" stroke={color} strokeWidth="1.2"/>
      <ellipse cx="60" cy="38" rx="12" ry="20" fill={color} opacity="0.15"/>
      <circle cx="40" cy="34" r="7" fill={color} opacity="0.3"/>
      <circle cx="80" cy="34" r="7" fill={color} opacity="0.3"/>
      <path d="M20 70 Q40 58 60 62 Q80 58 100 70" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.4"/>
    </svg>
  ),
  4: ({ color }) => (
    <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
      <path d="M60 72 C60 72 20 52 20 32 a16 16 0 0128-10.4A16 16 0 0160 28a16 16 0 0112-6.4A16 16 0 01100 32c0 20-40 40-40 40z" fill={color} opacity="0.15" stroke={color} strokeWidth="1.2"/>
      <circle cx="60" cy="36" r="8" fill={color} opacity="0.35"/>
      <circle cx="38" cy="55" r="5" fill={color} opacity="0.2"/>
      <circle cx="82" cy="55" r="5" fill={color} opacity="0.2"/>
    </svg>
  ),
  5: ({ color }) => (
    <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
      <circle cx="60" cy="45" r="30" fill={color} opacity="0.08" stroke={color} strokeWidth="1.2"/>
      <circle cx="60" cy="45" r="18" fill={color} opacity="0.12" stroke={color} strokeWidth="1" strokeDasharray="4 3"/>
      <path d="M44 50 C48 38 64 36 72 44 C68 56 52 58 44 50z" fill={color} opacity="0.3" stroke={color} strokeWidth="1"/>
      <path d="M60 62 V48" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M44 30 C50 22 68 24 72 32" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" opacity="0.5"/>
    </svg>
  ),
};

export default function WhatSetsUsApart(): ReactNode {
  const [active, setActive] = useState<number>(1);
  const f = features.find(x => x.id === active)!;
  const Illo = Illustrations[active];

  return (
    <div className="bg-[linear-gradient(145deg,#004d47_0%,#006b63_25%,#009e96_60%,#00756e_100%)]" style={{ fontFamily: "'DM Sans',sans-serif" }}>
      <div className="max-w-6xl mx-auto  px-4 sm:px-6 py-12">

        
         <h2
              className=" text-3xl lg:text-4xl  text-white text-center leading-tight mb-5"      
            >
              What Sets Us Apart
             
            </h2> 

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mt-2 mb-6">
             
              <div
                className="h-[1px] w-80 rounded-full"
                style={{ background: "linear-gradient(90deg,transparent, #ffffff, transparent)" }}
              />
            </div>
        {/* Main card: sidebar + panel */}
        <div
          className="flex flex-col sm:flex-row bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
          style={{ minHeight: 360 }}
        >
          {/* ── Sidebar ── */}
          <div className="sm:w-52 flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100 p-3 flex sm:flex-col gap-1.5">
            {features.map(item => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="nav-item w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left"
                style={{
                  background: active === item.id ? TL : "transparent",
                  borderLeft: active === item.id ? `3px solid ${T}` : "3px solid transparent",
                }}
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{
                    background: active === item.id ? T : "#f3f4f6",
                    color: active === item.id ? "#fff" : "#9ca3af",
                  }}
                >
                  {item.icon}
                </div>
                <div className="hidden sm:block">
               
                  <div className="text-xs font-semibold leading-tight" style={{ color: active === item.id ? "#111" : "#6b7280" }}>
                    {item.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ── Content panel ── */}
          <div key={active} className="panel-in flex-1 p-7 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: TL, color: TD }}
                >
                  {f.tag}
                </span>
                
              </div>

              <h2 className="font-heading display text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-3">
                {f.title}
              </h2>
              <p className="font-body text-gray-400 text-sm leading-relaxed max-w-sm">{f.desc}</p>
            </div>

             <div className="flex items-end justify-between gap-4">
              <div className="w-36 h-20 opacity-80">
                <Illo color={T} />
              </div>

             </div>
           
          
          </div>
        </div>
      </div>
    </div>
  );
}
