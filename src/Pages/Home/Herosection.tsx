'use client';
import { useState, useEffect, type JSX } from 'react';
import Btn from '../../common/Btn';

type Slide = {
  image: string;
  subtitle: string;
};

export default function HeroCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: '/img/banner.webp',
      subtitle:
        'Medzy Healthcare Pvt Ltd provides high-quality pharmaceutical products and efficient distribution services, ensuring timely delivery of essential healthcare solutions nationwide.',
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
    <section className="relative w-full h-[80vh] md:h-[95vh] overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background */}
          <div
            className="w-full h-full bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl h-full flex flex-col justify-center px-6 md:px-16 text-[#017d77]">
        <div key={currentSlide} className="animate-fade-in-up">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
             
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

          <p className="mt-6 max-w-2xl text-base md:text-lg text-[#017d77">
            {slides[currentSlide].subtitle}
          </p>

          <p className="mt-3 text-sm md:text-base text-[#017d77]">
            "Delivering Health, Building Trust"
          </p>

          <div className="mt-6">
            <Btn title='Explore our service' />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {slides.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1">
          <div className="bg-white w-full animate-[progress_5s_linear]" />
        </div>
      )}
    </section>
  );
}
