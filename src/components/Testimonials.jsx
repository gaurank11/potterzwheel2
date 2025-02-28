import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Testimonial data
const testimonials = [
  {
    name: "MR. ISHAN MEHTA, DLF NEW TOWN HEIGHTS (SECTOR-90)",
    feedback:
      "Really impressed with their work, finishing and creative ideas. Professional in approach, perfect execution, and decent price. A few furniture turned out to be more beautiful than the sample images. Highly recommend.",
    rating: 4.5,
  },
  {
    name: "MR. SAGAR BAJPAI, MICROTEK GREENBURG",
    feedback:
      "They did end-to-end interior renovation work at my house wonderfully. They solved our biggest challenge of utilizing our small space in the best possible way. Team of professionals helped me shape my dream home.",
    rating: 4,
  },
  {
    name: "MS. RANJANA YADAV, M3M WOODSHIRE",
    feedback:
      "Really impressed by the work done by Potterzwheel. They’ve used quality material with latest design. Also, they explained everything in detail with full transparency. Timely delivery even in the COVID-19 situation.",
    rating: 5,
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
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
  return <div className="flex gap-1 justify-center mt-2">{stars}</div>;
};

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className="section_head mb-8">
          <h4 className="text-3xl md:text-6xl font-bold mb-4">Testimonials</h4>
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Happy Customers</h2>
      
        </div>

        {isMobile ? (
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6">
                <p className="text-lg">{testimonial.feedback}</p>
                <h4 className="text-xl font-semibold mt-4">{testimonial.name}</h4>
                <StarRating rating={testimonial.rating} />
              </div>
            ))}
          </Slider>
        ) : (
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
                <StarRating rating={testimonial.rating} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
