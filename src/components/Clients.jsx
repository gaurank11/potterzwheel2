import React from "react";
import Slider from "react-slick";

const ClientPartners = () => {
  const images = [
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi logo.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Real-Estate.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/MVN_group.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/M3M.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Sobha.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/DLF.webp",
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
      <h1 className="text-3xl md:text-6xl font-bold mt-5 md:mb-10 md:pb-5 text-center text-blue-950">
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
                className="w-48 h-32 md:w-64 md:h-48 object-contain" // Increased size for mobile
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientPartners;
