"use client";
import { useVisible } from "../../hooks/useVisible";

export default function AboutContent() {
  const [bodyRef, bodyVisible] = useVisible(0.1);

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* image */}
          <div
            ref={bodyRef}
            className="transition-all duration-700"
            style={{ opacity: bodyVisible ? 1 : 0, transform: bodyVisible ? "translateX(0)" : "translateX(-28px)" }}
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                loading="lazy"
                src="./img/about.webp"
                alt="Medzy Healthcare team"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />


            </div>
          </div>

          {/* text */}
          <div
            className="transition-all duration-700 delay-150"
            style={{ opacity: bodyVisible ? 1 : 0, transform: bodyVisible ? "translateX(0)" : "translateX(28px)", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            <h2 className="text-[#1A2E44] text-4xl font-bold leading-[1.15] tracking-tight mb-4">
              About Us
            </h2>
            <div className="w-10 h-[3px] rounded-full mb-6" style={{ background: "linear-gradient(90deg, #00B5A5, #1A2E44)" }} />

            <p className="text-[#59606C] text-[15.5px] leading-[1.85] mb-5">
              Medzy Healthcare Pvt Ltd is a trusted and rapidly growing pharmaceutical distributor committed to delivering health and empowering lives. Founded with a vision to revolutionize pharmaceutical distribution in India, we are dedicated to providing genuine healthcare products under a robust regulatory framework—ensuring reliability, safety, and complete customer satisfaction.<br/>
              Lead by our Director, Mr. Tushar Bhatia, we operate with a simple but powerful belief: quality healthcare products should reach every corner of the country efficiently and affordably. Our state-of-the-art warehousing facilities, robust supply chain network, and experienced team enable us to serve diverse healthcare needs with precision and care.

            </p>
           

          </div>
        </div>
      </section>
  );
}