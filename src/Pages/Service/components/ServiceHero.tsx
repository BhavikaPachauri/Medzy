import { useEffect, useState } from "react";
import { HERO_WORDS } from "../serviceData";
import Dealerbtn from "../../../common/Dealerbtn";
import Btn from "../../../common/Btn";

export default function ServiceHero() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((prev) => prev + 1), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-[90vh] bg-[#00a9ae] flex-col overflow-hidden ">
      <div className="pointer-events-none absolute inset-0 bg-[url('./img/s2.png')] bg-cover opacity-70" />
      <div className="pointer-events-none absolute right-[-10%] top-[-14%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,.16)_0%,transparent_64%)]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,.09)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-1 items-center px-[5%] pb-12 pt-[52px]">
        <div className=" mx-auto flex w-full max-w-[1240px] items-center gap-14">
          <div className=" flex min-w-0 flex-1 flex-col">
           

            <h1 className="text-white fup mb-[18px] font-['Cormorant_Garamond',serif] text-[clamp(3rem,5.4vw,5rem)] font-bold leading-[1.02] tracking-[-.025em] text-[#0a2523]" style={{ animationDelay: "90ms" }}>
              Precision Supply
              <br />
              for{" "}
              <span className="wordslide inline-block font-medium italic text-[#80ee72]" key={tick}>
                {HERO_WORDS[tick % HERO_WORDS.length]}
              </span>
            </h1>

            <p className="fup mb-7 max-w-[500px] font-['Outfit',sans-serif] text-[15px] leading-[1.85] text-white" style={{ animationDelay: "170ms" }}>
              We connect manufacturers, hospitals, and pharmacies through a single responsive supply network, built for speed, compliance, and dependable
              medicine availability.
            </p>

            <div className="fup hbtns mb-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              {/* <button className="btnp">Explore Services </button>
              <button className="btno">Partner With Us</button> */}
                <Dealerbtn title="Explore Services " />
                {/* <Btn title="Partner With Us" /> */}
            </div>

           
          </div>

         
        </div>
      </div>

      <div className="mx-[5%] h-px bg-[linear-gradient(90deg,transparent,rgba(13,148,136,.2)_30%,rgba(13,148,136,.2)_70%,transparent)]" />
    </section>
  );
}
