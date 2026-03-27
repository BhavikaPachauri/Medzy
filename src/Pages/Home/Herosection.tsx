'use client';

import { useState, useEffect, type JSX } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Btn from '../../common/Btn';
type Slide = {
  image: string;
  title: string;
  subtitle: string;
  overlay: string;
  overlay2: string;
};

export default function HeroCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop',
      title: 'Leading Pharmaceutical Distributor Across India',
      subtitle:
        'Medzy Healthcare Pvt Ltd provides high-quality pharmaceutical products and efficient distribution services, ensuring timely delivery of essential healthcare solutions nationwide.',
      overlay: 'bg-blue-900/20',
      overlay2: 'bg-black/20',
    },
    {

      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1920&auto=format&fit=crop',
      title: 'Leading Pharmaceutical Distributor Across India',
      subtitle:
        'Medzy Healthcare Pvt Ltd provides high-quality pharmaceutical products and efficient distribution services, ensuring timely delivery of essential healthcare solutions nationwide.',
      overlay: 'bg-blue-900/20',
      overlay2: 'bg-black/20',
    },
  ];
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = (): void => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
  setIsAutoPlaying(false);

  // Resume autoplay after 5 sec
  setTimeout(() => setIsAutoPlaying(true), 2000);
};

const prevSlide = (): void => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  setIsAutoPlaying(false);

  setTimeout(() => setIsAutoPlaying(true), 5000);
};

  return (
    <section className="relative w-full h-[80vh] sm:h-[80vh] md:h-[95vh] overflow-hidden group">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          {/* Background */}
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform:
                index === currentSlide ? 'scale(1.1)' : 'scale(1)',
            }}
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 ${slide.overlay} transition-opacity duration-700`}
          />
          <div
            className={`absolute inset-0 ${slide.overlay2} transition-opacity duration-700`}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <div key={currentSlide} className="animate-fade-in-up">
          <h1 className="sm:text-5xl md:text-7xl font-heading drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>

          <p className="mt-12 max-w-5xl text-xl font-body font-light drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
          <p className="mt-5 text-base sm:text-lg font-medium font-body text-teal-100">
            Delivering Health, Building Trust
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Btn />
          </div>
         
        </div>
      </div>

      {/* Navigation (Optional UI ready) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white"
      >
        <ChevronRight size={30} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-20">
        <div
          key={currentSlide}
          className="bg-white transition-all ease-linear"
          style={{
            width: isAutoPlaying ? '100%' : '0%',
            transition: isAutoPlaying ? 'width 5s linear' : 'none',
          }}
        />
      </div>

    </section>
  );
}