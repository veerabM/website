import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cloudComputing from "../../assets/cloudcomputing.jpg";
import managedIT from "../../assets/carousel3.jpg";
import Advisory from "../../assets/carousel2.jpg";

const carouselItems = [
  {
    image: cloudComputing,
    title: 'Cloud Computing',
    subtitle: 'Scalable Solutions',
    description: `Empower your business with secure, scalable, and high-performance cloud infrastructure designed for the modern era.`,
  },
  {
    image: managedIT,
    title: 'Managed IT Services',
    subtitle: 'Reliable Support',
    description: `Proactive IT management and support to ensure your business operations run smoothly without interruption.`,
  },
  {
    image: Advisory,
    title: 'Technology Advisory',
    subtitle: 'Strategic Growth',
    description: `Expert guidance to align your technology strategy with your business goals for sustainable growth.`,
  },
];

const ResponsiveCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-primary">
      {/* Background Images with Smooth Crossfade */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${carouselItems[currentIndex].image})` }}
            />
            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl pl-4 md:pl-12 lg:pl-20">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold tracking-wider mb-4"
              >
                {carouselItems[currentIndex].subtitle}
              </motion.span>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {carouselItems[currentIndex].title}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                {carouselItems[currentIndex].description}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => window.location.href = '/#/services'}
                  className="btn-orange group whitespace-nowrap"
                >
                  Explore
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button
                  onClick={() => window.location.href = '/#/contact'}
                  className="btn-outline-light whitespace-nowrap"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-0 w-full z-20">
        <div className="container mx-auto px-4 pl-8 md:pl-16 lg:pl-24">
          <div className="flex gap-4 items-center">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex ? 'w-16 bg-linear-to-r from-orange-500 via-amber-500 to-orange-500' : 'w-8 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-8 md:right-16 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all hover:border-white/50 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all hover:border-white/50 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;