import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/armchair-green-living-room-with-copy-space.webp",
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/loft-home-office-interior-design.webp",
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/modern-styled-entryway.webp"
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const startAutoPlay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNextSlide();
    }, 7000);
  };

  const handleNextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="relative w-full md:h-[95vh] h-[270px] overflow-hidden shadow-lg mt-10 pt-6"
      onMouseEnter={() => clearTimeout(timeoutRef.current)}
      onMouseLeave={startAutoPlay}
    >
      <AnimatePresence mode="wait">
        {/* Old Image (Keeps existing one visible) */}
        <motion.img
          key={`old-${images[current]}`}
          src={images[current]}
          alt="Slide"
          loading="lazy"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />

        {/* New Image with Wipe Effect */}
        <motion.img
          key={`new-${images[(current + 1) % images.length]}`}
          src={images[(current + 1) % images.length]}
          alt="Slide"
          loading="lazy"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Buttons (Hidden on Mobile) */}
      <button
        onClick={handlePrevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 hidden md:block"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 hidden md:block"
      >
        <ChevronRight />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
