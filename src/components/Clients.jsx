import React from "react";
import Slider from "react-slick";

const ClientPartners = () => {
  const images = [
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/krisumi.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/TRevoc.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/MVN_group.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/M3M.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Sobha.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/DLF.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Emaar_logo.svg.webp",
  ];

  // Duplicate images for seamless infinite scrolling
  const duplicatedImages = [...images, ...images];

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For mobile landscape
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // For small mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h1 className="text-3xl md:text-6xl font-bold mt-5 md:mb-10 md:pb-5 text-center text-blue-950">
        Our Clients and Partners
      </h1>
      <div className="w-full mt-5">
        <Slider {...settings}>
          {duplicatedImages.map((image, index) => (
            <div key={index} className="px-4 flex justify-center items-center">
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientPartners;
