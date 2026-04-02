import type { RefObject } from "react";
import usePartnerReveal from "../hooks/usePartnerReveal";
import { PARTNER_COLORS as B } from "../partnerTheme";
import Btn from "../../../common/Btn";

type Props = {
  formRef: RefObject<HTMLDivElement | null>;
};

export default function PartnerHero({ formRef }: Props) {
  const handlePartnerClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const r2 = usePartnerReveal<HTMLHeadingElement>(100);
  const r3 = usePartnerReveal<HTMLParagraphElement>(200);
  const r4 = usePartnerReveal<HTMLDivElement>(300);

  return (
    <section
      className="relative overflow-hidden border-b bg-[url('/img/p6.png')] bg-cover bg-no-repeat"
      style={{ borderColor: B.border }}
    >
      <div className="absolute inset-0 bg-[#00a9ae]/50"></div>

      <div className="
        hero-inner relative z-[1] mx-auto w-full max-w-[1240px]
        flex flex-col md:flex-row
        items-center md:items-start
        justify-between
        gap-8 md:gap-[52px]
        px-5 md:px-0
        pt-[70px] md:pt-[124px]
        pb-[40px] md:pb-[84px]
      ">

        <div className="
          max-w-[610px] w-full
          text-center md:text-left
        ">
          
          <h1
            ref={r2}
            className="font-heading 
              reveal mb-[18px]
              font-['Lora',serif]
              text-[clamp(2rem,6vw,4.35rem)]
              font-semibold leading-[1.1]
              tracking-[-.02em] text-white text-start
            "
          >
            Build Growth with
            <br />
            <span className="relative inline-block text-[#b0f276]">
              Medzy Partnerships
            </span>
          </h1>

          <p
            ref={r3}
            className="font-body
              reveal mb-[24px] md:mb-[30px]
              max-w-[520px]
              mx-auto md:mx-0
              text-[10px] md:text-[15px]
              leading-[1.7] md:leading-[1.86]
              text-white text-start hidden md:block
            "
          >
            From manufacturers to hospitals and retail networks, we create partnership models that scale faster, stay compliant, and deliver measurable
            business outcomes.
          </p>

          <div
            className="
              hero-btns reveal flex
              justify-center md:justify-start
              flex-wrap gap-3 
            "
            ref={r4}
          >
           
                 <Btn
              title="Partner With Us"
              text="text-white"
              bg="bg-[#00a9ae]"
              border="border-[#00a9ae]"
              hover="bg-[#8ac43f]"
              onClick={handlePartnerClick}
            />
          
       
         
          </div>

        </div>
      </div>
    </section>
  );
}
