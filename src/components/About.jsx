import React from "react";

const founders = [
  {
    name: "Vishal Awasthi",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/vikas_awasthi.webp",
    alt: "Vishal Awasthi",
    description:
      "An IIM Kolkata alumnus with 20+ years in Telecom, Financial Services, Education, and Fashion, Vishal combines a people-centric approach with innovative strategies to build long-lasting relationships and successful outcomes.",
  },
  {
    name: "Amandeep Malhotra",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/malhotra.webp",
    alt: "Amandeep Malhotra",
    description:
      "A Delhi University alumnus with 20+ years in operations management, Aman focuses on understanding client needs and delivering smooth, seamless experiences. His hands-on expertise ensures clients not only meet but exceed their goals.",
  },
];

const AboutUs = React.memo(() => {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black mb-12 md:text-6xl">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={founder.image}
                alt={founder.alt}
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-900"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-black mb-2">{founder.name}</h3>
              <p className="text-gray-700">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
