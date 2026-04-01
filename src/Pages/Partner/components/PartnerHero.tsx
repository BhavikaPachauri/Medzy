import usePartnerReveal from "../hooks/usePartnerReveal";
import { PARTNER_COLORS as B } from "../partnerTheme";
import Dealerbtn from "../../../common/Dealerbtn";
import Btn from "../../../common/Btn";

export default function PartnerHero() {

  const r2 = usePartnerReveal<HTMLHeadingElement>(100);
  const r3 = usePartnerReveal<HTMLParagraphElement>(200);
  const r4 = usePartnerReveal<HTMLDivElement>(300);


  return (
    <section className="relative overflow-hidden border-b bg-[url('/img/p6.png')]  bg-cover bg-no-repeat " style={{ borderColor: B.border }}>
      <div className="absolute inset-0  bg-[#00a9ae]/50"></div>
      <div className="pointer-events-none absolute right-[-8%] top-[-12%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(11,163,127,.16)_0%,transparent_67%)]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(200,212,0,.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(11,163,127,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,163,127,.08)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="absolute left-0 right-0 top-0 h-1 bg-[linear-gradient(90deg,#C8D400,#0BA37F)]" />

      <div className="hero-inner relative z-[1] mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-[52px]  pb-[84px] pt-[124px]">
        <div className="max-w-[610px] min-w-0 flex-[1_1_560px]">
          <h1 ref={r2} className="reveal mb-[18px] font-['Lora',serif] text-[clamp(2.7rem,5.3vw,4.35rem)] font-semibold leading-[1.06] tracking-[-.02em] text-white">
            Build Growth with
            <br />
            <span className="relative inline-block text-[#b0f276]">
              Medzy Partnerships

            </span>
          </h1>

          <p ref={r3} className="reveal mb-[30px] max-w-[520px] text-[15px] leading-[1.86] text-white">
            From manufacturers to hospitals and retail networks, we create partnership models that scale faster, stay compliant, and deliver measurable
            business outcomes.
          </p>

          <div className="hero-btns reveal flex flex-wrap gap-3" ref={r4}>
            {/* <button
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 rounded-xl border-0 bg-[#b0f276] px-7 py-[14px] text-sm font-bold text-white shadow-[0_8px_28px_rgba(11,163,127,.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(11,163,127,.45)]"
            >
              Start Partnership Journey
            
            </button>
            <button className="flex items-center gap-2 rounded-xl border-2 border-[#C8E4DC] bg-transparent px-6 py-[14px] text-sm font-semibold text-white transition-all duration-200 hover:border-[#63b658] hover:text-[#63b658]">
              View Partnership Models
            </button> */}
            <Dealerbtn title="Start Partnership Journey " />
            <Btn title="Partner With Us" text="text-white" bg="bg-[#00a9ae]" border="border-[#00a9ae]" hover="bg-[#8ac43f]" /> 
          </div>


        </div>
      </div>
    </section>
  );
}
