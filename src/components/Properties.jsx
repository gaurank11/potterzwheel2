import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

const PropertiesPage = () => {
  const navigate = useNavigate();

  const featuredProperties = [
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi_Homepage.png", name: "KRISUMI WATERSIDE RESIDENCES", link: "/Krisumi", price: "4 cr", sector: "Sector 36A, Gurgaon, Haryana" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp", name: "MVN MALL", link: "/mvn", price: "27 lakhs", sector: "Sector 37D, Gurgaon, Haryana" },
  ];

  const secondRowProperties = [
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t_home.webp", name: "TREVOC PROPERTIES", link: "/trevoc", price: "6 cr", sector: "Sector 56, Gurgaon, Haryana" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.webp", name: "SS CAMASA", link: "/camasa", price: "3.20 cr", sector: "Sector 80, Gurgaon, Haryana"},
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.webp", name: "SOBHA ALTUS", link: "/sobha", price: "1.55 cr", sector: "Sector 89, Gurgaon, Haryana" },
  ];

  const thirdRowProperties = [
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp", name: "Eldeco Fairway Reserve", link: "/eldico", price: "3.5 cr", sector: "Sector 90, Gurgaon, Haryana" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/waterfall_img.webp", name: "KRISUMI WATERFALL RESIDENCE", link: "/waterfall", price: "2.20 cr", sector: "Sector- 36A Dwarka Expressway, Gurgaon"},
  ];

  const handleNavigate = useCallback((link) => {
    navigate(link);
  }, [navigate]);

  const PropertyCard = ({ img, name, link, price, sector }) => {
    return (
      <div className="relative group cursor-pointer w-full">
        <img
          src={img}
          alt={name}
          className="w-full h-60 sm:h-80 object-cover rounded-md"
          loading="lazy"
          onClick={() => handleNavigate(link)}
        />

        <div className="flex flex-col items-start px-4 py-2 sm:hidden">
        <p className="text-xl font-bold text-black">{name}</p>
        <p className="text-sm text-black">Starting From - {price}</p>
          <button
            className="mt-2 px-4 py-2 w-full bg-transparent border-black border text-black font-semibold hover:bg-black hover:text-white transition"
            onClick={() => handleNavigate(link)}
          >
            View More
          </button>
        </div>

        <div className="absolute bottom-4 left-4 text-white text-lg font-semibold hidden sm:block group-hover:opacity-0 transition-opacity duration-300">
          <p>{name}</p>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-white p-4">
  {/* Property Name & Price with More Space */}
  <div className="flex-1 flex flex-col">
    <span className="text-black text-lg font-semibold pt-2 mb-1">{name}</span>
    <span className="text-gray-600 text-sm">Starting From - {price}</span>
  </div>

  {/* View Details Section (Fixed Width) */}
  <div className="flex flex-col items-center  w-[200px]">


{/* Sector Name */}
<span className="bg-gray-300 text-black text-[10px] font-bold px-4 py-2  rounded w-full text-center mb-2  ">
      {sector}
    </span>

    {/* View Details Button */}
    <button
      className="bg-blue-950 text-white px-4 py-3 font-semibold w-full text-center "
      onClick={() => navigate(link)}
    >
      View Details
    </button> 
    
  
  </div>
</div>



          </div>

    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-0 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-4 sm:p-5">
          <p className="text-4xl sm:text-6xl font-bold text-right text-blue-950">FEATURED</p>
          <p className="text-2xl sm:text-4xl font-bold text-blue-950 mt-1 text-right">LISTINGS</p>
          <button
            className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-blue-950 hover:text-white transition flex items-center space-x-2 mx-auto sm:text-2xl"
            onClick={() => navigate('/properties')}
          >
            <span>View All Properties</span>
            <Plus size={20} />
          </button>
        </div>
        {featuredProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
        {secondRowProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
        {thirdRowProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}

        <div className="w-full flex flex-col justify-center items-center space-y-4 sm:space-y-6 h-full text-xl sm:text-2xl p-4 sm:p-0">
          {['BUY', 'SELL', 'LEASE'].map((action, index) => (
            <div key={index} className="flex items-center w-full">
              <button
                className="w-full px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-blue-950 border-2 border-black text-white font-bold hover:bg-white hover:text-black transition duration-300"
                onClick={() => navigate(`/${action.toLowerCase()}`)}
              >
                {action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
