import React, { useState, useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const propertiesData = [
  { id: 1, name: 'KRISUMI WATERSIDE RESIDENCES', type: 'Residential', type1: '2BHK/ 3BHK', address: 'Sector 36A, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi_Homepage.webp', logo: 'Krisumi logo.png', link: '/Krisumi' },
  { id: 2, name: 'MVN MALL', type: 'Commercial', type1: 'Commercial', address: 'Sector 37D, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp', logo: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp', link: '/mvn' },
  { id: 3, name: 'TREVOC ROYAL RESIDENCES', type: 'Residential', type1: '3BHK/ 4BHK', address: 'Sector 56, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t_home.webp', logo: '/Real-Estate.jpg', link: '/trevoc' },
  { id: 4, name: 'ELDECO FAIRWAY RESERVE', type: 'Residential', type1: '4BHK/ 3BHK', address: 'Sector 80, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp', logo: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_logo.png', link: '/eldico' },
  { id: 5, name: 'SOBHA ALTUS', type: 'Residential', type1: '4BHK/ 3BHK', address: 'Sector 106s, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.webp', logo: '/Real-Estate.jpg', link: '/sobha' },
  { id: 6, name: 'SS CAMASA', type: 'Residential', type1: '4BHK', address: 'Sector 90, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.webp', logo: '/Real-Estate.jpg', link: '/camasa' },
  { id: 7, name: 'KRISUMI WATERFALL RESIDENCES', type: 'Residential', type1: '2BHK/ 3BHK', address: 'Sector- 36A, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/waterfall_img.webp', link: '/waterfall' },
  { id: 8, name: 'MVN AEROONE', type: 'Residential', type1: '5.5BHK', address: 'Sector- 37D, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero_home.webp', logo: '/Real-Estate.jpg', link: '/aero' },
  { id: 8, name: 'ELAIRA RESIDENCES', type: 'Residential', type1: '', address: 'Sector 80, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el_home.webp', logo: '/Real-Estate.jpg', link: '/elaira' }
];

const TopProperties = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProperties = useMemo(() => (
    filter === 'All' ? propertiesData : propertiesData.filter(p => p.type === filter)
  ), [filter]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[270px] md:h-[95vh] flex items-center justify-center mt-10 pt-6">
        <img 
          src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/properties_page.webp"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <h1 className="relative text-3xl md:text-6xl text-white font-bold px-6 py-4 rounded-md">
          Listings
        </h1>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            {['All', 'Residential', 'Commercial'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 mx-2 rounded-md text-white transition-colors text-sm ${filter === category ? 'bg-blue-900' : 'bg-gray-700 hover:bg-gray-800'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map(({ id, name, type1, address, image, link }) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-48 object-cover" 
                  loading="lazy" 
                />
                <div className="p-4 bg-blue-950 text-white h-[140px]">
                  <h3 className="text-sm font-bold uppercase">{name}</h3>
                  <p className="text-[12px] mb-2">{type1}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm"><MapPin className="mr-2" />{address}</div>
                    <Link to={link}>
                      <button className="px-4 py-1 rounded-md border-2 border-white text-white hover:bg-white hover:text-black transition-colors text-sm">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProperties;
