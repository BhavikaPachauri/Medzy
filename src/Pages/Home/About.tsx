'use client';

import { Link } from "react-router-dom";
import Dealerbtn from "../../common/Dealerbtn";
import SectionHeader from "../../common/SectionHeader";

export default function AboutUs() {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-24">
            <div className="max-w-[1200px] mx-auto px-4">

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* LEFT - IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl bg-[#00a9ae] overflow-hidden shadow-lg group">
                            <img
                                loading="lazy"
                                src="/img/homeAbout.png"
                                alt="Trusted Pharma Distribution Partnership"
                                className="w-full h-[350px] object-cover opacity-90 rounded-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* RIGHT - CONTENT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                       <div className="group">
                           <SectionHeader
                            title="About Us"
                            centered={false}
                        />
                         <div className="h-[3px] rounded-full bg-gradient-to-r from-[#00b2a9] via-[#00958d] to-[#8ac43f] w-[100px] md:group-hover:w-[200px] transition-[width] duration-500 ease-out mt-1 mb-3 shadow-sm"></div>
                       </div>
                      
                        

                        {/* Teal underline accent */}
                        {/* <div className="w-10 h-[3px] bg-[#00B5A5] rounded-full mb-6 mx-auto lg:mx-0" /> */}

                        {/* Body */}
                        <p className="section-paragraph text-[#59606C] text-[15px] md:text-[16px] mb-8">
                            Medzy Healthcare Pvt Ltd. is a rapidly growing pharmaceutical distribution company dedicated to bridging the gap between manufacturers and healthcare providers. With a customer centric approach and cutting edge logistics infrastructure, we ensure that quality medicines reach those who need them most on time.
                            Backed by industry expertise and a commitment to excellence, Medzy serves hospitals, clinics, pharmacies, and retail chains across India with unmatched reliability.
                            
                        </p>


                        {/* CTA */}
                        <div  className="hidden md:block btnp">
                        <Link to="/aboutus">
                            <Dealerbtn title="Read More" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
