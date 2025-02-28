import React, { memo, lazy, Suspense } from "react";

// Lazy load icons
const FaBuilding = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaBuilding })));
const FaHandshake = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaHandshake })));
const FaStore = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaStore })));
const FaFileContract = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaFileContract })));
const FaGlobe = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaGlobe })));
const FaPaintBrush = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaPaintBrush })));

const values = [
  { title: "Customer-Centric Approach", description: "Our clients are at the heart of everything we do. We listen, understand, and tailor our services to meet their unique needs, ensuring a seamless real estate experience." },
    { title: "Transparency & Honesty", description: "We believe in complete clarity at every step. No hidden charges, no surprises—just straightforward, honest advice." },
    { title: "Innovation in Real Estate Solutions", description: "We leverage market insights, technology, and fresh perspectives to offer solutions that maximize value for our clients." },
    { title: "Trust & Long-Term Relationships", description: "Every transaction is an opportunity to build lasting relationships based on integrity and reliability." },
    { title: "Commitment to Excellence", description: "Whether it's finding the right property, negotiating the best deals, or handling legal formalities, we strive for excellence in every aspect of our service." }
];

const capabilities = [
  { icon: <FaBuilding />, title: "Residential & Commercial Leasing", description: "Connecting landlords with ideal tenants and businesses with prime locations." },
  { icon: <FaHandshake />, title: "Property Sale & Purchase", description: "Seamless buying and selling experiences with expert insights." },
  { icon: <FaStore />, title: "SCO & Retail Spaces", description: "Maximizing investor and business returns on shop-cum-office spaces." },
  { icon: <FaFileContract />, title: "End-to-End Property Management", description: "Handling legal documentation, tenant management, and maintenance." },
  { icon: <FaGlobe />, title: "NRI & Investor Advisory", description: "Tailored solutions for overseas investors in Indian real estate." },
  { icon: <FaPaintBrush />, title: "Home Interiors & Customization", description: "Helping buyers make their spaces move-in ready." }
];

const AboutUsPage = () => {
  return (
    <div className="mt-1">
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[95vh] flex items-center justify-center mt-10 pt-6">
        {/* Lazy Loaded Hero Image */}
        <img 
          src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aboutus_hero.webp"
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Title */}
        <h1 className="relative text-3xl md:text-6xl text-white font-bold px-6 py-4 rounded-md">
          Contact Us
        </h1>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
        <div className="flex-1">
          <p className="text-lg">At Potterzwheel Realty, we aim to transform the real estate experience by addressing common inefficiencies, lack of transparency, and fragmented services in the market. Whether buying, selling, or leasing residential or commercial properties, our goal is to provide a seamless, customer-focused experience that maximizes your returns and builds trust.</p>
          <h2 className="mt-6 text-3xl font-semibold">Potterzwheel Realty—Crafting Legacies</h2>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["ab1.webp", "ab2.webp"].map((img, index) => (
            <img key={index} src={`https://raw.githubusercontent.com/potterzwhealrealty/photos/main/${img}`} 
              alt={`About Us ${index + 1}`} className="rounded-lg shadow-md w-full" loading="lazy" />
          ))}
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 px-6 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="flex-2 grid grid-cols-2 gap-6">
            {[{ name: "Vishal Awasthi", image: "vikas_awasthi.webp" }, { name: "Amandeep Malhotra", image: "malhotra.webp" }]
              .map((founder, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={`https://raw.githubusercontent.com/potterzwhealrealty/photos/main/${founder.image}`} 
                    alt={founder.name} className="rounded-lg shadow-md w-48 h-32 md:w-80 md:h-64" loading="lazy" />
                  <p className="mt-2 text-sm">{founder.name}</p>
                </div>
              ))}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-left">Founder's Message</h2>
            <p className="mt-6 text-lg md:text-xl text-left"> At Potterzwheel Realty, we aim to revolutionize the real estate experience by offering a seamless, transparent process for buying, selling, and leasing properties. We eliminate inefficiencies and provide a customer-focused solution every step of the way—from property selection to financing, paperwork, and beyond. Our commitment is simple: to build trust, maximize returns, and ensure that your real estate journey is rewarding and hassle-free. Potterzwheel Realty is here to help you achieve your financial goals and create lasting legacies in the world of real estate.</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-6xl font-bold text-blue-950 mb-8">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
      {values.map((value, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-lg md:text-3xl font-bold text-black">{value.title}</h3>
            <p className="text-sm md:text-xl text-black">{value.description}</p>
          </div>
        ))}
      </div>
    </section>

       {/* Our  Capabilities */}
       <section className="py-12 bg-white text-center">
      <h2 className="text-3xl md:text-6xl font-bold text-blue-950 mb-8">Our Capabilities</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {capabilities.map((capability, index) => (
          <div key={index} className="bg-blue-950 shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <span className="text-4xl mb-4 text-white">{capability.icon}</span>
            <h3 className="text-lg md:text-3xl  font-semibold text-white mb-2">{capability.title}</h3>
            <p className="text-white text-sm md:text-xl">{capability.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default memo(AboutUsPage);
