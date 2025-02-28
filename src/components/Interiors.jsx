import React, { useState } from "react";
import Slider from "./Slider";
import ServicesSection from "./Interior_Services";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const processSteps = [
  {
    number: "01",
    icon: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/svg/perceptive.svg",
    title: "PERSPECTIVE DEVELOPMENT",
    link: "https://www.potterzwheel.com/#",
    description: "In-depth understanding of client’s tastes & Preferences, lifestyle, professions, life stage, budget, aesthetics & functional needs, native inclinations, family members (elderly, kids, pets) and their individual needs, site location and a lot more."
  },
  {
    number: "02",
    icon: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/svg/concept.svg",
    title: "CONCEPT & RENDERS",
    link: "https://www.potterzwheel.com/#",
    description: "First cut presentation of Project outline, Key offerings, budget & time frames, mood boards, theme and palettes. It is followed by a detailed Space Plan, facilitated with 2D & 3D renders (highlighting placements, colours, lighting, furniture & accessories)."
  },
  {
    number: "03",
    icon: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/svg/material.svg",
    title: "MATERIAL SELECTION",
    link: "https://www.potterzwhealrealty/photos/main/interiors/svg/material.svg",
    description: "Finalising of wood & other base materials, finishes, textures, colours & designs, floorings (tiles & marbles) followed by the procurements ranging from lights, curtains, rugs, upholstery and wallpapers to kitchen appliances & fittings, sanitaryware, etc."
  },
  {
    number: "04",
    icon: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/interiors/svg/execution.svg",
    title: "EXECUTION",
    link: "https://www.potterzwhealrealty/photos/main/interiors/svg/execution.svg",
    description: "All woodwork related materials are sent to our in-house workshop, where your factory-made furniture is manufactured with minimal scope of error, by our seasoned craftsmen. Once ready, these are installed at the site by the same team."
  }
];

const recentWorks = [
  {
    imgSrc: "https://i0.wp.com/www.potterzwheel.com/wp-content/uploads/2021/11/Project-Image-2.jpeg?fit=1024%2C576&ssl=1",
    title: "Living Room (DLF Ultima, Gurugram)",
    link: "https://www.potterzwheel.com/portfolio/living-room/"
  },
  {
    imgSrc: "https://i0.wp.com/www.potterzwheel.com/wp-content/uploads/2021/10/3.png?fit=1024%2C768&ssl=1",
    title: "Modular Kitchen (AWHO Complex, Shanti Vihar, Gurugram)",
    link: "https://www.potterzwheel.com/portfolio/kitchen/"
  },
  {
    imgSrc: "https://i0.wp.com/www.potterzwheel.com/wp-content/uploads/2021/10/2.png?fit=1024%2C768&ssl=1",
    title: "Kid’s Room (DLF Ultima, Gurugram)",
    link: "https://www.potterzwheel.com/portfolio/kids-room-dlf-ultima-gurugram/"
  }
];

const HowItWorks = () => (
  <section className="bg-gray-100 py-12" id="howitworks">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-6xl font-bold mb-6 text-blue-950">Our Working Process</h2>
      <div className="grid md:grid-cols-4 gap-6 p-6">
        {processSteps.map((step, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="relative">
              <div className="absolute top-0 right-0 text-7xl font-extrabold text-gray-200">{step.number}</div>
              <div className="mx-left w-16 h-16 bg-blue-950 flex justify-center items-center rounded-md transition-transform duration-500 ease-in-out transform hover:rotate-180">
                <img src={step.icon} className="w-10 h-10" alt={step.title} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4 text-left">
              <a href={step.link} className="text-black hover:underline">
                {step.title}
              </a>
            </h3>
            <p className="text-gray-600 mt-2 text-sm text-left">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RecentWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12" id="recentwork">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-6 text-blue-950">Recent Work</h2>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.5, centeredSlides: true },
            1024: { slidesPerView: 2.2, centeredSlides: true },
          }}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          loop={false}
          initialSlide={1}
          centerInsufficientSlides={true}
          className="w-full h-full"
        >
          {recentWorks.map((work, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(work.imgSrc)}
              >
                <img
                  src={work.imgSrc}
                  alt={work.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedImage && (
          <Dialog open={true} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
              >
                ✕
              </button>
              <img src={selectedImage} alt="Zoomed" className="max-w-full max-h-screen rounded-lg" />
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
};

const Interiors = () => (
  <>
    <Slider />
    <HowItWorks />
    <RecentWork />
    <ServicesSection />
  </>
);

export default Interiors;
