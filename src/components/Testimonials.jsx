import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    name: "MR. ISHAN MEHTA, DLF NEW TOWN HEIGHTS (SECTOR-90)",
    feedback:
      "Really impressed with their work, finishing and creative ideas. Professional in approach, perfect execution, and decent price. A few furniture turned out to be more beautiful than the sample images. Highly recommend.",
    avatar: "Ishan",
  },
  {
    name: "MR. SAGAR BAJPAI, MICROTEK GREENBURG",
    feedback:
      "They did end-to-end interior renovation work at my house wonderfully. They solved our biggest challenge of utilizing our small space in the best possible way. Team of professionals helped me shape my dream home.",
    avatar: "Sagar",
  },
  {
    name: "MS. RANJANA YADAV, M3M WOODSHIRE",
    feedback:
      "Really impressed by the work done by Potterzwheel. They’ve used quality material with latest design. Also, they explained everything in detail with full transparency. Timely delivery even in the COVID-19 situation.",
    avatar: "Ranjana",
  },
];

// Avatar Component
const AvatarSVG = ({ name }) => {
  return (
    <svg
      className="w-16 h-16 rounded-full bg-gray-300 md:bg-blue-950 text-white flex items-center justify-center"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="12"
        fontWeight="bold"
      >
        {name ? name[0] : "?"}
      </text>
    </svg>
  );
};

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="bg-blue-950 py-16">
      <div className="container mx-auto text-center text-white">
        {/* Section Header */}
        <div className="section_head mb-8">
          <h4 className="text-lg font-medium">Testimonials</h4>
          <h2 className="text-3xl font-bold mb-4">Happy Customers</h2>
          <div className="w-24 mx-auto h-1 bg-white rounded-full"></div>
        </div>

        {/* Conditionally render slider or grid */}
        {isMobile ? (
          // Mobile View (Slider)
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6">
                <p className="text-lg">{testimonial.feedback}</p>
                <h4 className="text-xl font-semibold mt-4">{testimonial.name}</h4>
                <div className="testi-thumb mt-4 flex justify-center items-center">
                  <AvatarSVG name={testimonial.avatar} />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          // Laptop View (Grid)
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-6 rounded-lg shadow-md w-80"
              >
                <span className="text-3xl text-blue-500 mr-2 italic font-bold">“</span>
                <p className="text-black">{testimonial.feedback}</p>
                <h4 className="text-blue-950 font-semibold mt-4">{testimonial.name}</h4>
                <div className="testi-thumb mt-4 flex justify-center items-center">
                  <AvatarSVG name={testimonial.avatar} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
