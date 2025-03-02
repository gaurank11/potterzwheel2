import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "MR. ISHAN MEHTA, DLF NEW TOWN HEIGHTS (SECTOR-90)",
    feedback:
      "Really impressed with their work, finishing and creative ideas. Professional in approach, perfect execution, and decent price. A few furniture turned out to be more beautiful than the sample images. Highly recommend.",
    rating: 5,
  },
  {
    name: "MR. SAGAR BAJPAI, MICROTEK GREENBURG",
    feedback:
      "They did end-to-end interior renovation work at my house wonderfully. They solved our biggest challenge of utilizing our small space in the best possible way. Team of professionals helped me shape my dream home.",
    rating: 4.5,
  },
  {
    name: "MS. RANJANA YADAV, M3M WOODSHIRE",
    feedback:
      "Really impressed by the work done by Potterzwheel. They’ve used quality material with latest design. Also, they explained everything in detail with full transparency. Timely delivery even in the COVID-19 situation.",
    rating: 4,
  },
];

// Function to render star rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="bg-blue-950 py-16">
      <div className="container mx-auto text-center text-white">
        <h4 className="text-3xl md:text-6xl font-bold mb-4">Testimonials</h4>
        <h2 className="text-xl md:text-3xl font-semibold mb-6">Happy Customers</h2>

        {isMobile ? (
          <div className="relative w-full max-w-xs mx-auto bg-white text-blue-950 p-6 rounded-xl shadow-lg">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg italic">"{testimonials[currentIndex].feedback}"</p>
              <h4 className="font-semibold mt-4">{testimonials[currentIndex].name}</h4>
              <div className="flex justify-center mt-2">{renderStars(testimonials[currentIndex].rating)}</div>
            </motion.div>

            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                onClick={handlePrev}
                className="p-2 bg-blue-950 text-white rounded-full shadow-md"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-blue-950 text-white rounded-full shadow-md"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md w-80 text-blue-950"
              >
                <p className="italic">"{testimonial.feedback}"</p>
                <h4 className="font-semibold mt-4">{testimonial.name}</h4>
                <div className="flex justify-center mt-2">{renderStars(testimonial.rating)}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
