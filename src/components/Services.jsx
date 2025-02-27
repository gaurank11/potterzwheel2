import React from 'react';
import './OurServices.css'; // Import the custom CSS file for animations

const OurServices = React.memo(() => {
  // Define a color palette for the overlays
  const overlayColors = [
    'bg-gray-800', // Property Sales
    'bg-blue-950', // Property Leasing
    'bg-gray-800', // Document
    'bg-blue-950', // Security Solutions
    'bg-gray-800', // Home Inspection
    'bg-blue-950', // Consulting Services
  ];

  const services = [
    {
      title: 'Sales and Purchase',
      bgImage: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Services/Sales%20and%20purchase.webp',
    },
    {
      title: 'Leasing',
      bgImage: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Services/LEASING.webp',
    },
    {
      title: 'Legal Paperwork Consultancy',
      bgImage: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Services/high-angle-man-signing-contract-new-home.webp',
    },
    {
      title: 'Interior Design Services',
      bgImage: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Services/INTERIOR%20DESIGN%20SERVICES.webp',
    },
    {
      title: 'Property Management Services',
      bgImage: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Services/PROPERTY%20MANAGMENT%20SERVICES.webp',
    },
    {
      title: 'Serving the NRI Market',
      bgImage: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Services/NRI.webp',
    },
  ];

  return (
    <section className="px-6 lg:px-16 bg-white py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-12 md:text-6xl mt-2">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-lg h-[350px] flex items-center justify-center group overflow-hidden service-card"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            >
              {/* Dynamic color overlay */}
              <div
                className={`absolute inset-0 ${overlayColors[index]} opacity-80 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10 text-center text-white">
                <h3 className="text-2xl font-bold md:text-[30px]">
                  <span className="relative inline-block px-6 py-3">
                    {service.title}
                    <span className="absolute inset-0 border-4 border-gray-300 scale-animation transition-transform duration-300"></span>
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default OurServices;
