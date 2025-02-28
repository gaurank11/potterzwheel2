import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const propertiesData = [
  { id: 1, name: 'KRISUMI WATERSIDE RESIDENCES',type: 'Residential', type1: '2BHK/ 3BHK/ 2BHK + S/ 3BHK + S', address: 'Sector 36A, Gurgaon, Haryana', image: '/Krisumi_Homepage.png', logo: 'Krisumi logo.png', link: '/Krisumi' },
  { id: 2, name: 'MVN MALL',type: 'Commercial', type1: 'Commercial', address: 'Sector 37D, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp', logo: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webphttps://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/m1.webp', link: '/mvn' },
  { id: 3, name: 'TREVOC ROYAL RESIDENCES', type: 'Residential',type1: '3BHK/ 4BHK', address: 'Sector 56, Gurgaon, Haryana', image: '/trevoc/t_home.png', logo: '/Real-Estate.jpg', link: '/trevoc' },
  { id: 4, name: 'Eldeco Fairway Reserve',type: 'Residential', type1: '4BHK/ 3BHK', address: 'Sector 80, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp', logo: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_logo.png', link: '/eldico' },
  { id: 5, name: 'Sobha Altus',type: 'Residential', type1: '4BHK/ 3BHK', address: 'Sector 89, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.jpeg', logo: '/Real-Estate.jpg', link: '/sobha' },
  { id: 6, name: 'SS Camasa',type: 'Residential', type1: '4BHK', address: 'Sector 90, Gurgaon, Haryana', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.png', logo: '/Real-Estate.jpg', link: '/camasa' },
  { id: 7, name: 'KRISUMI Waterfall Residence',type: 'Residential', type1: '2BHK/ 3BHK/ 4BHK', address: 'Sector- 36A Dwarka Expressway, Gurgaon', image: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/waterfall_img.webp', link: '/waterfall' },
  { id: 8, name: 'Aero One',type: 'Residential', type1: '5.5BHK', address: 'Sector- 37D Dwarka Expressway, Gurgaon', image: 'https://www.realtorprojects.com/project_pics/MVN%20Aero%20One%20banner-32581.jpg', logo: '/Real-Estate.jpg', link: '/aero' }
];

const TopProperties = () => {
  const [filter, setFilter] = useState('All');
  const filteredProperties = filter === 'All' ? propertiesData : propertiesData.filter((p) => p.type === filter);

  return (
    <>
      <section id="hero" className="h-[70vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('properties_page.png')" }}>
        <h1 className="text-4xl md:text-6xl text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-md">Listings</h1>
      </section>

      <section className="py-10 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            {['All', 'Residential', 'Commercial'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 mx-2 rounded-md text-white ${filter === category ? 'bg-blue-900' : 'bg-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${property.image})` }} />
                <div className="p-4 bg-blue-950 text-white h-[150px] md:h-[164px]">
                  <h3 className="text-lg font-bold">{property.name}</h3>
                  <p className="text-sm mb-2">{property.type1}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm"><MapPin className="mr-2" />{property.address}</div>
                    <Link to={property.link}>
                      <button className="px-4 py-1 text-sm rounded-md border-2 border-white text-white hover:bg-white hover:text-black transition-colors">Know More</button>
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
