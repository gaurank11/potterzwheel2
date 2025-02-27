import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const propertiesData = [
  {
    id: 2,
    name: 'MVN MALL',
    type: 'Commercial',
    address: 'Sector 37D, Gurgaon, Haryana',
    image: '/mvn/overview_img.jpg',
    logo: '/MVN_group.png',
    link: '/mvn'
  }
];

const CommercialProperties = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://www.resmanagement.in/img/blog/commercial-properties-in-ahemedabad-res-management.webp')"
        }}
      >
        <h1 className="text-4xl md:text-6xl text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-md">
          Commercial Listings
        </h1>
      </section>

      {/* Properties Section */}
      <section className="py-10 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8">
            {propertiesData.map(({ id, name, type, address, image, link }) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Property Image */}
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>

                {/* Property Details */}
                <div className="p-4 bg-blue-950 text-white">
                  <h3 className="text-lg font-bold">{name}</h3>
                  <p className="text-sm mb-2">{type}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2" />
                      {address}
                    </div>
                    <Link to={link}>
                      <button className="px-4 py-1 text-sm rounded-md border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
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

export default CommercialProperties;
