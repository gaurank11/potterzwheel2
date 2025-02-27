import React from "react";
import Slider from "react-slick";

const ClientPartners = () => {
  const images = [
    "/Krisumi logo.png",
    "/Real-Estate.jpg",
    "/MVN_group.png",
    "/logo-icon.svg"
  ];

  // Duplicate images for seamless infinite scrolling
  const duplicatedImages = [...images, ...images];

  const settings = {
    infinite: true,
    speed: 3000, // Adjust for smoother movement
    slidesToShow: 5, // Show more icons at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", // Smooth scrolling effect
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      {/* Centered Heading */}
      <h1 className="text-xl md:text-4xl font-bold mb-6 text-center">
        Our Clients and Partners
      </h1>

      {/* Centered Slider */}
      <div className="w-full max-w-5xl mt-5">
        <Slider {...settings}>
          {duplicatedImages.map((image, index) => (
            <div key={index} className="px-4 flex items-center justify-center">
              <img 
                src={image} 
                alt={`Client ${index + 1}`} 
                className="w-32 h-24 object-contain" // Ensures all logos have equal height
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientPartners;
