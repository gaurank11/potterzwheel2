import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  const images = [
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img1.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img2.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img3.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img4.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img5.webp",
    "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/img6.webp",
  ];

  const texts = [
    "Transparent. Tailored. Totally worth it.",
    "Turning dreams into doorsteps.",
    "Smart investments, seamless returns.",
    "High returns, low hassle—that’s how we roll",
    "Turning aspirations into lasting legacies",
    "Timeless addresses, tailored just for you",
  ];

  return (
    <div className="md:h-[95vh] h-[370px] overflow-hidden bg-black mt-10 pt-6">
      <Slider {...settings} className="w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="relative md:h-[700px] h-[370px]  flex items-center justify-center">
            <img src={image} alt={`Slide ${index}`} className="absolute w-full h-full object-cover" />

            <div className="absolute top-1/2 left-0 w-full h-[4px] bg-white opacity-50 transform -translate-y-1/2"></div>

            <div className="absolute top-1/2 w-full transform -translate-y-1/2 flex items-center justify-center px-4">
              <div className="relative text-white text-center px-6 py-3 md:py-5 rounded-lg bg-black/50 backdrop-blur-md animate-slide-fullvw">
                <p className="text-sm md:text-2xl  font-semibold">{texts[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        @keyframes slide-fullvw {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-fullvw {
          animation: slide-fullvw 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
