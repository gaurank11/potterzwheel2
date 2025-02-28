import React, { useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const propertiesData = [
  { id: 1, name: 'KRISUMI WATERSIDE RESIDENCES', type: '2BHK/ 3BHK/ 2BHK + S/ 3BHK + S', address: 'Sector 36A, Gurgaon, Haryana', image: '/Krisumi_Homepage.png', logo: 'Krisumi logo.png', link: '/Krisumi' },
  { id: 2, name: 'MVN MALL', type: 'Commercial', address: 'Sector 37D, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp', logo: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webphttps://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp', link: '/mvn' },
  { id: 3, name: 'TREVOC ROYAL RESIDENCES', type: '3BHK/ 4BHK', address: 'Sector 56, Gurgaon, Haryana', image: '/trevoc/t_home.png', logo: '/Real-Estate.jpg', link: '/trevoc' },
  { id: 4, name: 'Eldeco Fairway Reserve', type: '4BHK/ 3BHK', address: 'Sector 80, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp', logo: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_logo.png', link: '/eldico' },
  { id: 5, name: 'Sobha Altus', type: '4BHK/ 3BHK', address: 'Sector 89, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.jpeg', logo: '/Real-Estate.jpg', link: '/sobha' },
  { id: 6, name: 'SS Camasa', type: '4BHK', address: 'Sector 90, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.png', logo: '/Real-Estate.jpg', link: '/camasa' },
  { id: 7, name: 'KRISUMI Waterfall Residence', type: '2BHK/ 3BHK/ 4BHK', address: 'Sector- 36A Dwarka Expressway, Gurgaon', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/waterfall_img.webp', link: '/waterfall' },
  { id: 8, name: 'Aero One', type: '5.5BHK', address: 'Sector- 37D Dwarka Expressway, Gurgaon', image: 'https://www.realtorprojects.com/project_pics/MVN%20Aero%20One%20banner-32581.jpg', logo: '/Real-Estate.jpg', link: '/aero' }
];

const ResidentialProperties = () => {
  // Filter only Residential properties using useMemo to avoid recalculating on every render
  const residentialProperties = useMemo(
    () => propertiesData.filter((property) => property.type === 'Residential'),
    []
  );

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/5e4a7c7c-6876-40dd-ac01-5754523f6d02.webp')",
        }}
      >
        <h1
          className="text-4xl md:text-6xl text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-md"
          style={{ fontFamily: "'NOURD', sans-serif", fontWeight: 'bold' }}
        >
          Residential Listings
        </h1>
      </section>

      {/* Property Grid Section */}
      <section className="py-10 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Reusable Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      {/* Property Image */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${property.image})` }}
      >
        {/* Lazy Loading for Images */}
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Property Details */}
      <div className="p-4 bg-blue-950 text-white h-[150px] md:h-[164px]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{property.name}</h3>
          <p className="text-sm font-semibold">{property.price}</p>
        </div>
        <p className="text-sm mb-2">{property.type}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            <MapPin className="mr-2" />
            {property.address}
          </div>
          {/* Link for navigation */}
          <Link to={property.link}>
            <button className="px-4 py-1 text-sm rounded-md border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResidentialProperties;