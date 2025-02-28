import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="md:h-[95vh] h-[250px]  bg-cover bg-center flex items-center justify-center mt-10 pt-6" 
      style={{ backgroundImage: "url('https://raw.githubusercontent.com/potterzwhealrealty/photos/main/hero-bg.webp')" }} 
    >
      <h1 
        className="text-3xl md:text-6xl text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-md" 
        style={{ fontWeight: 'bold' }}
      >
        Contact Us
      </h1>
    </section>
  );
};

export default Hero;
