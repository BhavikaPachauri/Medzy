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
      className="relative overflow-hidden border-b bg-[url('/img/p6.png')] bg-cover bg-center bg-no-repeat"
      style={{ borderColor: B.border }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00a9ae]/60"></div>

      <div
        className="
        relative z-[1] mx-auto w-full max-w-[1240px]
        flex flex-col md:flex-row
        items-center md:items-start
        justify-between
        gap-6 md:gap-12
        px-4 sm:px-6 md:px-8
        pt-16 sm:pt-20 md:pt-28
        pb-10 sm:pb-14 md:pb-28
      "
      >
        {/* LEFT CONTENT */}
        <div className="w-full max-w-[640px] text-center md:text-left">
          <h1
            ref={r2}
            className="
              reveal mb-4
              font-['Lora',serif]
              text-[clamp(1.8rem,6vw,4rem)]
              font-semibold leading-tight
              tracking-tight text-white
            "
          >
            Build Growth with
            <br />
            <span className="text-[#b0f276]">
              Medzy Partnerships
            </span>
          </h1>

          <p
            ref={r3}
            className="
              reveal mb-6
              text-sm sm:text-base md:text-[15px]
              leading-relaxed md:leading-[1.8]
              text-white
              max-w-[520px]
              mx-auto md:mx-0
            "
          >
            From manufacturers to hospitals and retail networks, we create
            partnership models that scale faster, stay compliant, and deliver
            measurable business outcomes.
          </p>

          <div
            ref={r4}
            className="
              reveal flex
              justify-center md:justify-start
              flex-wrap gap-3
            "
          >
            <Btn
              title="Partner With Us"
              text="text-white"
              bg="bg-[#b0f276]"
              border="border-[#b0f276]"
              hover="bg-[#1fb7b3]"
              onClick={handlePartnerClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}