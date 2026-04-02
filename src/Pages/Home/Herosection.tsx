'use client';
import { useState, useEffect, type JSX } from 'react';
import Btn from '../../common/Btn';
import { Link } from 'react-router-dom';

type Slide = {
  image: string;
  subtitle: string;
  mobileImage?: string;
};

export default function HeroCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: '/img/banner.webp',
      mobileImage: '/img/mobile-hero.png',
      subtitle:
        'Medzy Healthcare Pvt Ltd. provides high quality pharmaceutical products and efficient distribution services, ensuring timely delivery of essential healthcare solutions nationwide.',
    },

  ];

  /* Auto Slide */
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden">

      {/* Slides */}
      {slides.map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Background */}
          
          <div
            className="w-full h-full bg-cover xl:bg-[url('./img/banner.webp')]  md:bg-[url('./img/tabBanner.png')] bg-[url('./img/mobile-hero.png')] bg-center scale-110"
           
          />

        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl h-full flex flex-col justify-center px-6 md:px-16 text-[#017d77]">
        <div key={currentSlide} className="animate-fade-in-up">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">

            Leading{" "}
            <span
              style={{
                background: "linear-gradient(120deg, #88c440 0%, #88c440 50%, #88c440 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Pharmaceutical Distributor
            </span>
            {" "}Across India
          </h1>

          <p className="mt-6 max-w-2xl text-sm md:text-lg text-[#017d77">
            {slides[currentSlide].subtitle}
          </p>

          <p className="mt-3 text-sm md:text-base text-[#017d77]">
            "Delivering Health, Building Trust"
          </p>

          <div className="mt-6">
            <Link to="/services" >
            <Btn
              title="Explore our service"
              text="text-white"
              bg="bg-[#00a9ae]"
              border="border-[#00a9ae]"
              hover="bg-[#8ac43f]"
            />
            </Link>
          
        </div>
      </div>
    </div>

      {/* Progress Bar */ }
  {
    slides.length > 1 && (
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <div className="bg-white w-full animate-[progress_5s_linear]" />
      </div>
    )
  }
    </section >
  );
}
