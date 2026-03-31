import { useEffect, useState } from "react";
import { HERO_WORDS } from "../serviceData";

export default function ServiceHero() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((prev) => prev + 1), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[linear-gradient(150deg,#ffffff_0%,#f0fdfb_50%,#e6faf7_100%)]">
      <div className="hgrid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute right-[-10%] top-[-14%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,.16)_0%,transparent_64%)]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,.09)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-1 items-center px-[5%] pb-12 pt-[52px]">
        <div className="h2col mx-auto flex w-full max-w-[1240px] items-center gap-14">
          <div className="hcopy flex min-w-0 flex-1 flex-col">
            <div className="fup mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(13,148,136,.24)] bg-[rgba(255,255,255,.75)] px-[14px] py-[7px]" style={{ animationDelay: "40ms" }}>
              <span className="h-[7px] w-[7px] rounded-full bg-[#0d9488]" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              <span className="font-['DM_Mono',monospace] text-[10px] font-semibold uppercase tracking-[.16em] text-[#0d9488]">Medzy Service Network</span>
            </div>

            <h1 className="fup mb-[18px] font-['Cormorant_Garamond',serif] text-[clamp(3rem,5.4vw,5rem)] font-bold leading-[1.02] tracking-[-.025em] text-[#0a2523]" style={{ animationDelay: "90ms" }}>
              Precision Supply
              <br />
              for{" "}
              <span className="wordslide inline-block font-medium italic text-[#0d9488]" key={tick}>
                {HERO_WORDS[tick % HERO_WORDS.length]}
              </span>
            </h1>

            <p className="fup mb-7 max-w-[500px] font-['Outfit',sans-serif] text-[15px] leading-[1.85] text-[#5a8a85]" style={{ animationDelay: "170ms" }}>
              We connect manufacturers, hospitals, and pharmacies through a single responsive supply network, built for speed, compliance, and dependable
              medicine availability.
            </p>

            <div className="fup hbtns mb-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <button className="btnp">Explore Services -&gt;</button>
              <button className="btno">Partner With Us</button>
            </div>

            <div className="fup flex flex-wrap gap-[10px]" style={{ animationDelay: "300ms" }}>
              {[
                { v: "12+", l: "Therapeutic Categories" },
                { v: "5,000+", l: "Retail Partners" },
                { v: "99%", l: "Order Fill Rate" },
              ].map((item) => (
                <div key={item.l} className="rounded-xl border border-[rgba(13,148,136,.2)] bg-[rgba(255,255,255,.72)] px-[14px] py-[10px]">
                  <div className="font-['Cormorant_Garamond',serif] text-2xl font-bold leading-none text-[#0d9488]">{item.v}</div>
                  <div className="font-['Outfit',sans-serif] text-[11px] font-semibold text-[#6b9e98]">{item.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hrvis fup relative w-[430px] shrink-0" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-[30px] border border-[rgba(13,148,136,.2)] bg-[linear-gradient(150deg,#ffffff_0%,#effcf9_65%,#e3faf4_100%)] p-6 shadow-[0_26px_70px_rgba(13,148,136,.22)]">
              <div className="mb-[18px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <div className="grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-[#e7faf6] text-[#0d9488]">
                    <svg viewBox="0 0 20 20" width="16" fill="none">
                      <path d="M3 10h4l2-4 2.6 8 1.8-4H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-['Outfit',sans-serif] text-xs font-bold text-[#0a2523]">Live Distribution Pulse</div>
                    <div className="font-['DM_Mono',monospace] text-[10px] text-[#8cb4ae]">PAN INDIA</div>
                  </div>
                </div>
                <span className="rounded-full bg-[rgba(13,148,136,.12)] px-[10px] py-[5px] font-['DM_Mono',monospace] text-[9px] font-semibold tracking-[.08em] text-[#0d9488]">STABLE</span>
              </div>

              <div className="mb-[14px] rounded-2xl border border-[#d8eeea] bg-white p-[14px]">
                <svg viewBox="0 0 320 90" width="100%" height="88" fill="none">
                  <path d="M6 58h44l12-28 20 52 26-64 24 50 16-26h26l12-18 18 36h58" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 58h44l12-28 20 52 26-64 24 50 16-26h26l12-18 18 36h58" stroke="#7ed4c9" strokeWidth="7" opacity=".2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="62" cy="30" r="4" fill="#0d9488" />
                  <circle cx="224" cy="24" r="4" fill="#0d9488" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-[10px]">
                <div className="rounded-xl border border-[#d8eeea] bg-white px-3 py-[10px]">
                  <div className="mb-1 font-['DM_Mono',monospace] text-[10px] text-[#8cb4ae]">TURNAROUND</div>
                  <div className="font-['Cormorant_Garamond',serif] text-[28px] font-bold leading-none text-[#0d9488]">24h</div>
                </div>
                <div className="rounded-xl border border-[#d8eeea] bg-white px-3 py-[10px]">
                  <div className="mb-1 font-['DM_Mono',monospace] text-[10px] text-[#8cb4ae]">ACTIVE ROUTES</div>
                  <div className="font-['Cormorant_Garamond',serif] text-[28px] font-bold leading-none text-[#0d9488]">200+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[5%] h-px bg-[linear-gradient(90deg,transparent,rgba(13,148,136,.2)_30%,rgba(13,148,136,.2)_70%,transparent)]" />
    </section>
  );
}
