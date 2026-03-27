'use client';

import Dealerbtn from "../../common/Dealerbtn";
import SectionHeader from "../../common/SectionHeader";

export default function AboutUs() {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-24">
            <div className="max-w-[1200px] mx-auto px-4">

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* LEFT - IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                            <img
                                loading="lazy"
                                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop"
                                alt="Pharmaceutical distribution and healthcare logistics"
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* RIGHT - CONTENT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">

                        <SectionHeader
                            eyebrow="Who We Are"
                            title="About Us"
                            centered={false}
                        />

                        {/* Teal underline accent */}
                        <div className="w-10 h-[3px] bg-[#00B5A5] rounded-full mb-6 mx-auto lg:mx-0" />

                        {/* Body */}
                        <p className="section-paragraph text-[#59606C] text-[15px] md:text-[16px] mb-8">
                            Medzy Healthcare Pvt Ltd is a rapidly growing pharmaceutical distribution company dedicated to bridging the gap between manufacturers and healthcare providers. With a customer-centric approach and cutting-edge logistics infrastructure, we ensure that quality medicines reach those who need them most - on time, every time. Backed by industry expertise and a commitment to excellence, Medzy serves hospitals, clinics, pharmacies, and retail chains across India with unmatched reliability.
                        </p>

                       
                        {/* CTA */}
                        <div className="hidden md:block">
                            <Dealerbtn />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}