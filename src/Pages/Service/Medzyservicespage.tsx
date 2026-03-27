import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   HOOKS811
───────────────────────────────────────── */
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms`;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "none"; io.disconnect(); }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return ref;
}

function useParallax(speed = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${center * speed}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return ref;
}

/* ─────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #f0fdfa; }
  ::-webkit-scrollbar-thumb { background: #2DD4BF; border-radius: 4px; }
  @keyframes ticker    { from { transform: translateX(0); }   to { transform: translateX(-50%); } }
  @keyframes fadeUp    { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
  @keyframes floatY    { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-10px);} }
  @keyframes pulseRing { 0%,100%{transform:scale(1);opacity:.6;} 50%{transform:scale(1.15);opacity:1;} }
`;


/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] bg-[linear-gradient(135deg,#004d47_0%,#004d47_25%,#005f57_45%,#008f87_70%,#b1fcf2_100%)] flex items-center overflow-hidden pt-10">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:"linear-gradient(rgba(45,212,191,1) 1px,transparent 1px),linear-gradient(90deg,rgba(45,212,191,1) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute right-10 top-1/4 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl pointer-events-none"/>
      <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-teal-600/10 blur-3xl pointer-events-none"/>

      <div className="absolute right-16 top-20 hidden lg:block" style={{animation:"floatY 5s ease-in-out infinite"}}>
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 rounded-full border border-teal-400/20"/>
          <div className="absolute inset-12 rounded-full border border-teal-400/30 bg-teal-400/5"/>
          <div className="absolute inset-24 rounded-full bg-teal-400/10 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
              <path d="M12 36V24L24 12l12 12v12H12z" stroke="#2DD4BF" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="19" y="26" width="10" height="10" rx="1" stroke="#2DD4BF" strokeWidth="2"/>
            </svg>
          </div>
          {[0,1,2,3].map(i=>(
            <div key={i} className="absolute w-2 h-2 rounded-full bg-teal-400/60" style={{top:"50%",left:"50%",transform:`rotate(${i*90}deg) translateY(-144px) translateX(-50%)`}}/>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"/>
            <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Pharma Distributor · Pan-India</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            Medicines Delivered<br/>
            <em className="text-teal-400" style={{fontStyle:"italic"}}>With Precision.</em>
          </h1>
          <p className="text-white/50 text-base leading-relaxed max-w-lg mb-10">
            Medzy is a trusted pharmaceutical distribution partner — supplying hospitals, retail pharmacies, and healthcare institutions across India with accuracy, speed, and care.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-teal-400 hover:bg-teal-500 text-slate-900 font-bold text-sm px-10 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/30">Our Services →</button>
            <button className="border border-white/20 hover:border-teal-400/50 text-white/80 hover:text-white font-semibold text-sm px-9 py-4 rounded-full transition-all duration-200">Contact Us</button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TICKER
───────────────────────────────────────── */
function Ticker() {
  const items = ["Wholesale Distribution","Hospital Supply","Retail Pharmacy","Custom Packaging","Market Intelligence","Regulatory Assistance","Emergency Procurement","Product Education"];
  const all = [...items,...items];
  return (
    <div className="bg-teal-400 overflow-hidden py-3">
      <div className="flex gap-16 w-max" style={{animation:"ticker 30s linear infinite"}}>
        {all.map((x,i)=>(
          <span key={i} className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-90">
            {x} <span className="opacity-40 ml-4">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SERVICES
───────────────────────────────────────── */
const SERVICES = [
  { icon:"🏭", title:"Wholesale Distribution", desc:"Direct supply from manufacturers to healthcare institutions across therapeutic categories — with competitive pricing and reliable availability.", points:["12+ therapeutic categories","Flexible order quantities","99% fill rate","Fast processing"] },
  { icon:"🏥", title:"Hospital & Institutional", desc:"End-to-end IPD & OPD pharmacy management for hospitals, nursing homes, and clinics with zero-gap supply chains.", points:["200+ hospital partners","Dedicated account managers","Priority delivery schedules","Real-time inventory"] },
  { icon:"💊", title:"Retail Pharmacy Support", desc:"Empowering retail pharmacies with stock replenishment, digital ordering, credit facilities, and promotional support.", points:["5,000+ retail partners","Digital ordering app","Credit & payment terms","Co-branded promotions"] },
];

function Services() {
  const rH = useReveal(0);
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  return (
    <section className="bg-white py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={rH} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">What We Do</p>
            <div className="w-12 h-0.5 bg-teal-400 rounded-full mb-6"/>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>Our Core Services</h2>
          </div>
          <p className="lg:max-w-sm text-slate-500 leading-relaxed text-sm">From manufacturer to end-user — Medzy manages every link in the pharmaceutical supply chain with precision and accountability.</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {SERVICES.map((sv,i)=>(
            <button key={i} onClick={()=>setActive(i)} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${active===i?"bg-teal-400 text-white shadow-md shadow-teal-200":"bg-white text-slate-500 border border-slate-200 hover:border-teal-300"}`}>
              {sv.icon} {sv.title}
            </button>
          ))}
        </div>
        <div key={active} className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200" style={{animation:"fadeUp 0.4s cubic-bezier(.22,1,.36,1) both"}}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 lg:p-14 flex flex-col justify-between gap-10">
            <div>
              <div className="text-5xl mb-7">{s.icon}</div>
              <h3 className="text-3xl font-bold text-white leading-tight mb-5" style={{fontFamily:"'Playfair Display',serif"}}>{s.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{s.desc}</p>
            </div>
            <button className="self-start bg-teal-400 hover:bg-teal-500 text-slate-900 font-bold text-xs px-7 py-3 rounded-full transition-colors duration-200">Learn More →</button>
          </div>
          <div className="bg-slate-50 p-10 lg:p-14">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">Key Highlights</p>
            <div className="flex flex-col gap-3 mb-8">
              {s.points.map((pt,j)=>(
                <div key={j} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" width="11"><path d="M3 8l3.5 3.5L13 5" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-slate-800 text-sm font-semibold">{pt}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["99%","Accuracy"],["24h","Delivery"]].map(([n,l])=>(
                <div key={n} className="bg-white rounded-2xl p-5 text-center border border-slate-100">
                  <div className="text-teal-500 text-3xl font-bold leading-none mb-1" style={{fontFamily:"'Playfair Display',serif"}}>{n}</div>
                  <div className="text-slate-400 text-xs uppercase tracking-widest">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   VALUE-ADDED SERVICES  (zigzag + images)
───────────────────────────────────────── */
const VALUE_ITEMS = [
  { num:"01", title:"Custom Packaging",      subtitle:"Tailored for Compliance",   desc:"End-to-end custom packaging solutions engineered for regulatory compliance, brand consistency, and client-specific requirements across all therapeutic categories.", tags:["GMP Certified","Brand Aligned","Regulatory Ready"], img:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80", flip:false, dark:false },
  { num:"02", title:"Product Education",     subtitle:"Knowledge That Saves Lives", desc:"Structured training programs, accredited e-learning modules, and clinical materials empowering healthcare professionals to deliver better patient outcomes.", tags:["CME Accredited","Digital Learning","Clinical Training"], img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", flip:true,  dark:true  },
  { num:"03", title:"Regulatory Assistance", subtitle:"Navigate with Confidence",   desc:"Expert guidance through India's complex drug licensing landscape — from Schedule H documentation to state-level compliance, we handle every regulatory touchpoint.", tags:["Schedule H","CDSCO","State Licensing"], img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", flip:false, dark:false },
  { num:"04", title:"Market Intelligence",   subtitle:"Data-Driven Decisions",      desc:"Real-time performance dashboards, AI-powered demand forecasting, and competitive analytics transforming supply chain data into actionable business intelligence.", tags:["AI Forecasting","Live Dashboards","Competitor Insights"], img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", flip:true,  dark:true  },
];

/* Each card is its own component so hooks are called at top level */
type ValueItem = {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  img: string;
  flip: boolean;
  dark: boolean;
};

function ValueCard({ item, isLast }: { item: ValueItem; isLast: boolean }) {
  const rText = useReveal(100);
  const pRef  = useParallax(item.flip ? -0.07 : 0.07);
  const [hovered, setHovered] = useState(false);

  const textBg = item.dark
    ? "linear-gradient(135deg,#0d1f1e 0%,#0a2826 100%)"
    : "linear-gradient(135deg,#e8faf8 0%,#f0fdfa 100%)";
  const overlayGrad = item.flip
    ? (item.dark ? "linear-gradient(to right,transparent 30%,#0d1f1e 100%)" : "linear-gradient(to right,transparent 30%,#e8faf8 100%)")
    : (item.dark ? "linear-gradient(to left,transparent 30%,#0d1f1e 100%)"  : "linear-gradient(to left,transparent 30%,#e8faf8 100%)");

  return (
    <div style={{marginBottom: isLast ? 0 : "5rem"}}>
      <div
        className={`relative flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden ${item.flip ? "lg:flex-row-reverse" : ""}`}
        style={{
          boxShadow: hovered ? "0 40px 100px rgba(13,148,136,0.2),0 8px 30px rgba(0,0,0,0.12)" : "0 16px 60px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.5s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* IMAGE */}
        <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden" style={{minHeight:340}}>
          <div ref={pRef} className="absolute inset-0" style={{transformOrigin:"center",transform:"scale(1.12)"}}>
            <img src={item.img} alt={item.title} className="w-full h-full object-cover"
              style={{filter:item.dark?"brightness(0.5) saturate(0.7)":"brightness(0.82) saturate(1.1)",transform:hovered?"scale(1.06)":"scale(1)",transition:"transform 0.7s ease"}}/>
          </div>
          <div className="absolute inset-0" style={{background:overlayGrad}}/>
          {/* ghost number */}
          <div className="absolute bottom-5 left-5 select-none pointer-events-none" style={{fontSize:"7rem",fontFamily:"'Playfair Display',serif",fontWeight:900,color:"rgba(45,212,191,0.13)",lineHeight:1,letterSpacing:"-0.04em"}}>{item.num}</div>
          {/* badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full" style={{background:"rgba(0,0,0,0.45)",backdropFilter:"blur(12px)",border:"1px solid rgba(45,212,191,0.3)"}}>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" style={{animation:"pulseRing 2s ease-in-out infinite"}}/>
            <span className="text-white font-bold uppercase" style={{fontSize:"0.58rem",letterSpacing:"0.24em"}}>{item.subtitle}</span>
          </div>
        </div>

        {/* TEXT */}
        <div ref={rText} className="relative lg:w-1/2 flex flex-col justify-center p-10 lg:p-14" style={{background:textBg}}>
          <div className="absolute pointer-events-none" style={{width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle,rgba(45,212,191,0.1) 0%,transparent 70%)",top:item.flip?"auto":"-60px",bottom:item.flip?"-60px":"auto",right:"-60px"}}/>
          <div className="relative z-10">
            <h3 className="font-bold leading-tight mb-2" style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3vw,2.6rem)",color:item.dark?"#ffffff":"#0a2826"}}>{item.title}</h3>
            <div className="rounded-full mb-6" style={{width:hovered?"80px":"40px",height:"3px",background:"#2DD4BF",transition:"width 0.4s ease"}}/>
            <p className="leading-relaxed mb-8" style={{color:item.dark?"rgba(255,255,255,0.48)":"#3d7a72",fontSize:"0.93rem",maxWidth:"420px"}}>{item.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {item.tags.map((tag: string) => (
                <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full" style={{background:item.dark?"rgba(45,212,191,0.12)":"rgba(45,212,191,0.14)",color:"#2DD4BF",border:"1px solid rgba(45,212,191,0.25)",letterSpacing:"0.05em"}}>{tag}</span>
              ))}
            </div>
           
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="hidden lg:flex justify-center mt-8">
          <div className="flex flex-col items-center gap-1" style={{opacity:0.25}}>
            <div className="w-px h-6 bg-teal-400"/>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400"/>
            <div className="w-px h-6 bg-teal-400"/>
          </div>
        </div>
      )}
    </div>
  );
}

function ValueAdded() {
  const rH = useReveal(0);
  return (
    <section className="relative py-28 px-6 lg:px-10 overflow-hidden" style={{background:"linear-gradient(160deg,#e6faf8 0%,#f0fdfa 45%,#e8f8f5 100%)"}}>
      <div className="absolute top-0 right-0 pointer-events-none" style={{width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(45,212,191,0.1) 0%,transparent 70%)",transform:"translate(30%,-30%)"}}/>
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 70%)",transform:"translate(-30%,30%)"}}/>
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(circle,rgba(45,212,191,0.18) 1px,transparent 1px)",backgroundSize:"40px 40px",opacity:0.45}}/>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div ref={rH} className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none" style={{fontSize:"clamp(4rem,10vw,9rem)",fontFamily:"'Playfair Display',serif",fontWeight:900,color:"rgba(45,212,191,0.05)",letterSpacing:"-0.03em",lineHeight:1}}>SERVICES</div>
          <div className="relative z-10">
            
            <h2 className="font-bold text-5xl text-slate-900 mb-5" style={{fontFamily:"'Playfair Display',serif",lineHeight:1.06}}>
              Value-Added <em className="text-teal-500" style={{fontStyle:"italic"}}>Services</em>
            </h2>
          
            
          </div>
        </div>

        {/* CARDS — each is own component so hooks work */}
        {VALUE_ITEMS.map((item, i) => (
          <ValueCard key={i} item={item} isLast={i === VALUE_ITEMS.length - 1} />
        ))}

        
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────
   CTA
───────────────────────────────────────── */
function CTA() {
  return (
    <section className="bg-white px-6 lg:px-10 pb-16 mt-16">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"/>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"/>
        <div className="relative z-10">
          <p className="text-teal-100/70 text-xs font-bold uppercase tracking-widest mb-4">Partner With Us</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>Ready to Partner<br/>with Medzy?</h2>
          <p className="text-teal-100/80 mb-10 max-w-md mx-auto text-sm leading-relaxed">Join hundreds of healthcare institutions and pharmacies that trust Medzy for their pharmaceutical supply needs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-teal-600 font-bold px-8 py-3.5 rounded-full hover:bg-teal-50 transition-colors shadow-lg text-sm">Contact Us Today</button>
            <button className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
export default function MedzyWebsite() {
  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
       
        <Hero />
        <Ticker />
        <Services />
        <ValueAdded />
        
        <CTA />
       
      </div>
    </>
  );
}