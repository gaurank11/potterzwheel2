import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[270px] md:h-[95vh] flex items-center justify-center mt-10 pt-6">
        {/* Lazy Loaded Hero Image */}
        <img 
          src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/hero-bg.webp"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Title */}
        <h1 className="relative text-3xl md:text-6xl text-white font-bold px-6 py-4 rounded-md">
          Contact Us
        </h1>
      </section>
  );
};

export default Hero;
