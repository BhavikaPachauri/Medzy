import { useEffect, useState } from "react";
import { HERO_WORDS } from "../serviceData";
import Dealerbtn from "../../../common/Dealerbtn";
import Btn from "../../../common/Btn";

export default function ServiceHero() {
  const [tick, setTick] = useState(0);

  const handleExploreServices = () => {
    document.getElementById("core-services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const timer = setInterval(() => setTick((prev) => prev + 1), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-[50vh] md:h-[80vh] bg-[#00a9ae] flex-col overflow-hidden ">
      <div className="pointer-events-none absolute inset-0 bg-[url('/img/s4.webp')] bg-cover bg-center md:bg-left opacity-70" />
      <div className="pointer-events-none absolute right-[-10%] top-[-14%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,.16)_0%,transparent_64%)]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,.09)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-1 items-center px-[5%] pb-5 md:pb-12 pt-[30x] md:pt-[52px]">
        <div className=" mx-auto flex w-full max-w-[1240px] items-center gap-14">
          <div className=" flex min-w-0 flex-1 flex-col">
           

            <h1 className="font-heading text-white fup mb-[18px] text-3xl  md:text-5xl lg:text-7xl font-bold leading-[1.02] tracking-[-.025em] text-[#0a2523]" style={{ animationDelay: "90ms" }}>
              Precision Supply
              <br />
              for{" "}
              <span className="font-heading wordslide inline-block font-medium italic text-[#80ee72]" key={tick}>
                {HERO_WORDS[tick % HERO_WORDS.length]}
              </span>
            </h1>

            <p className="font-body fup mb-7 max-w-[500px] text-[12px] md:text-[15px]  leading-[1.85] text-white" style={{ animationDelay: "170ms" }}>
              We connect manufacturers, hospitals, and pharmacies through a single responsive supply network, built for speed, compliance, and dependable
              medicine availability.
            </p>

            <div className=" flex justify-start items-start flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            
                
                 <Btn title="Explore Our Services" text="text-white" bg="bg-[#37a996]" border="border-[#37a996]" hover="bg-[#8ac43f]" onClick={handleExploreServices} /> 
               
            </div>

           
          </div>

         
        </div>
      </div>

      <div className="mx-[5%] h-px bg-[linear-gradient(90deg,transparent,rgba(13,148,136,.2)_30%,rgba(13,148,136,.2)_70%,transparent)]" />
    </section>
  );
}
