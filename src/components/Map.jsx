import React from 'react';

const Map = () => {
  return (
    <section id="map" className="h-[400px]">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2436235439834!2d76.93812857678846!3d28.38458158251548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dc1ae67e541%3A0x911f4560c763fb4a!2sVatika%20India%20Market%20Place%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1692009081572!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"

      ></iframe>
    </section>
  );
};

export default Map;
