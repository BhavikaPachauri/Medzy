'use client';
import { useState, useEffect, type JSX } from 'react';
import Btn from '../../common/Btn';
import { Link } from 'react-router-dom';

type Slide = {
  image: string;
  subtitle: string;
  mobileImage?: string;
  tabletImage?: string;
};

const slides: Slide[] = [
  {
    image: '/img/banner.webp',
    mobileImage: '/img/mobile-hero.png',
    tabletImage: '/img/tabBanner.png',
    subtitle:
      'Medzy Healthcare Pvt Ltd. provides high quality pharmaceutical products and efficient distribution services, ensuring timely delivery of essential healthcare solutions nationwide.',
  },
];

export default function HeroCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[540px] overflow-hidden sm:min-h-[620px] md:h-[95vh] md:min-h-0">
      {/* Slides */}
      {slides.map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <picture>
            <source media="(min-width: 1280px)" srcSet={slides[index].image} />
            <source media="(min-width: 768px)" srcSet={slides[index].tabletImage || slides[index].image} />
            <img
              src={slides[index].mobileImage || slides[index].image}
              alt="Medzy Healthcare - Leading Pharmaceutical Distributor Across India"
              aria-hidden="true"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              sizes="100vw"
              className="h-full w-full object-cover object-center md:scale-105"
            />
          </picture>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-white/40 md:bg-gradient-to-r md:from-white/60 md:via-white/15 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4 pb-10 pt-24 text-[#017d77] sm:px-6 sm:pb-14 sm:pt-28 md:max-w-4xl md:px-16 md:pb-0 md:pt-0">
        <div key={currentSlide} className="max-w-[23rem] animate-fade-in-up sm:max-w-[28rem] md:max-w-4xl">
          <h1 className="text-[clamp(2rem,8vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Leading{' '}
            <span
              style={{
                background: 'linear-gradient(120deg, #88c440 0%, #88c440 50%, #88c440 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Pharmaceutical Distributor
            </span>
            {' '}Across India
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#017d77] sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg">
            {slides[currentSlide].subtitle}
          </p>

          <p className="mt-3 text-sm font-medium text-[#017d77] md:text-base">
            "Delivering Health, Building Trust"
          </p>

          <div className="mt-6 sm:mt-7">
            <Link to="/services">
              <Btn
                title="Explore our service"
                text="text-white"
                bg="bg-[#00a9ae]"
                border="border-[#00a9ae]"
                hover="bg-[#8ac43f]"
                as="span"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {slides.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1">
          <div className="w-full bg-white animate-[progress_5s_linear]" />
        </div>
      )}
    </section>
  );
}
