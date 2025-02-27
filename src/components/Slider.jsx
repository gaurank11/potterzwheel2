import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// List of image URLs
const images = [
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/armchair-green-living-room-with-copy-space.webp",
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/loft-home-office-interior-design.webp",
  "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/modern-styled-entryway.webp"
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000); // Auto slide change every 7 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, [current]); // Dependency on current to trigger re-run of effect

  const handleNextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full md:h-[700px] h-[250px] overflow-hidden rounded-2xl shadow-lg mt-10 pt-6">
      <AnimatePresence mode="wait">
        {/* Image Slide with Wipe Transition */}
        <motion.img
          key={current} // Use index for stable key
          src={images[current]}
          alt="Slide"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
          loading="lazy" // Lazy load the image
        />
      </AnimatePresence>

      {/* Previous and Next Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
