import type { RefObject } from "react";
import usePartnerReveal from "../hooks/usePartnerReveal";
import { PARTNER_COLORS as B } from "../partnerTheme";

type Props = {
  formRef: RefObject<HTMLElement | null>;
};

export default function PartnerHero({ formRef }: Props) {
  const r1 = usePartnerReveal<HTMLDivElement>(0);
  const r2 = usePartnerReveal<HTMLHeadingElement>(100);
  const r3 = usePartnerReveal<HTMLParagraphElement>(200);
  const r4 = usePartnerReveal<HTMLDivElement>(300);
  const r5 = usePartnerReveal<HTMLDivElement>(380);

  return (
    <section className="relative overflow-hidden border-b bg-[url('./img/partnerbanner.webp')] bg-cover bg-no-repeat " style={{ borderColor: B.border }}>
      <div className="pointer-events-none absolute right-[-8%] top-[-12%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(11,163,127,.16)_0%,transparent_67%)]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(200,212,0,.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(11,163,127,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,163,127,.08)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="absolute left-0 right-0 top-0 h-1 bg-[linear-gradient(90deg,#C8D400,#0BA37F)]" />

      <div className="hero-inner relative z-[1] mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-[52px]  pb-[84px] pt-[124px]">
        <div className="max-w-[610px] min-w-0 flex-[1_1_560px]">
          <h1 ref={r2} className="reveal mb-[18px] font-['Lora',serif] text-[clamp(2.7rem,5.3vw,4.35rem)] font-semibold leading-[1.06] tracking-[-.02em] text-[#0B2B24]">
            Build Growth with
            <br />
            <span className="relative inline-block text-[#0BA37F]">
              Medzy Partnerships
              
            </span>
          </h1>

          <p ref={r3} className="reveal mb-[30px] max-w-[520px] text-[15px] leading-[1.86] text-[#426B5E]">
            From manufacturers to hospitals and retail networks, we create partnership models that scale faster, stay compliant, and deliver measurable
            business outcomes.
          </p>

          <div className="hero-btns reveal flex flex-wrap gap-3" ref={r4}>
            <button
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 rounded-xl border-0 bg-[#0BA37F] px-7 py-[14px] text-sm font-bold text-white shadow-[0_8px_28px_rgba(11,163,127,.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(11,163,127,.45)]"
            >
              Start Partnership Journey
              <svg viewBox="0 0 16 16" fill="none" width="16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex items-center gap-2 rounded-xl border-2 border-[#C8E4DC] bg-transparent px-6 py-[14px] text-sm font-semibold text-[#0B2B24] transition-all duration-200 hover:border-[#0BA37F] hover:text-[#0BA37F]">
              View Partnership Models
            </button>
          </div>

         
        </div>
      </div>
    </section>
  );
}
