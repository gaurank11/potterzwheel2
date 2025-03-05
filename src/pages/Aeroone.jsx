import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Aeroone = () => {
  const images = [
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero1.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero2.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero3.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero4.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero5.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero6.webp',
  ];
const  overview_img = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero_home.webp";

const property_location ="Sector 37D, Gurgaon"

  const brochureUrl = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aeroone.pdf"; 
  const details = "MVN AEROONE";

  const builder ="MVN"

  const description = `
MVN Aero One seems to be generating quite a buzz. It appears to be a new project or development coming up in the Dwarka Expressway area of Gurgaon. With real estate being a prominent sector in Gurgaon, projects like AeroOne often promise modern amenities, strategic locations, and attractive living
  `;

  const price = ''

  const mapImage = 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/aeroone/aero_map.webp';
  const mapUrl = 'https://www.google.com/maps/place/MVN+Aero+One/@28.4380566,76.9593479,17z/data=!3m1!4b1!4m6!3m5!1s0x390d17005773aa1b:0xb8a95fce7abe34f2!8m2!3d28.4380519!4d76.9619228!16s%2Fg%2F11ww6nf9f5?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D';
  const amenities = [
    { name: 'Round the Clock Security', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a1.svg' },
    { name: '24 Hours Electricity and Waterm', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a2.svg' },
    { name: '100% Power Back-up', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a3.svg' },
    { name: 'Open & Covered Parking Spaces', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/parking.svg' },
    { name: 'All the Lobbies are Air-conditioned', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a6.svg' },
    { name: 'Swimming Pools', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a8.svg' },


   
  ];

  const location =[
    { name: '2 Widest Roads in Gurugram’s NPR and CPR', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/location_road.svg' },
    { name: '3 Minute Drive to NH-48', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/Connected-to-NH-48.svg' },
    { name: 'Planned Mass Rapid Transit System along NPR and CPR', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/planned-mass-rapid.svg' },
    { name: 'Encircled by 220 acres of Green Zone and a 50-metre Green Belt', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/surrounded-by-220.svg' },
    { name: 'Adjacent to Gurgram’s Newest Business Centre', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/adjacent-to-global.svg' },
    { name: 'Unhindered Connectivity to IGI Airport', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/Near-IGI-Airport.svg' },
  ];


  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };
  const handleOpenInMap = (mapUrl) => {
    window.open(mapUrl, '_blank'); 
  };
  
  return (
    <PropertyDetails
      images={images}
      description={description}
      price={price}
      mapImage={mapImage}
      mapUrl={mapUrl} 
      onFormSubmit={handleFormSubmit}
      amenities={amenities}
      pdfUrl ={brochureUrl}
      location = {location}
      handleOpenInMap={handleOpenInMap}
      details = {details}
      overview_img = { overview_img}
      property_location = {property_location}
      builder ={builder}
    />
  );
};

export default Aeroone;
