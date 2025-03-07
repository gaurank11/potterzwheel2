import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Eldico = () => {
  const images = [
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/e1.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/e2.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/e3.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/e4.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/e5.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/e6.webp',
  ];


  const  overview_img = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp";

  const brochureUrl = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldeco.pdf"; 
  const details = "Eldeco Fairway Reserve";
  const builder ="ELDECO";

  const description = `
    Welcome to Eldeco Fairway Reserve , an oasis of opulence in Gurugram’s Sector 80. Wake up to breathtaking vistas of the majestic Aravali hills, where the tranquility of nature blends seamlessly with modern elegance.
These meticulously designed 3 and 4-bedroom residences redefine luxury, offering expansive layouts that balance comfort and sophistication. Indulge in world-class amenities that transform every day into a celebration of style and relaxation.
At Eldeco Fairway Reserve, luxury begins with picturesque views and continues with an unmatched living experience, surrounded by nature’s beauty and urban charm.
  `;

  const price = ''

  const mapImage = 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/e_map.webp';
  const mapUrl = 'https://www.google.com/maps/place/Eldeco+Fairway+Reserve+Sector+80/@28.3635672,76.9583626,17z/data=!3m1!4b1!4m6!3m5!1s0x390d3d0046a30fb7:0xe7d0ea9ceb9a2bcf!8m2!3d28.3635625!4d76.9609375!16s%2Fg%2F11wqwsysbc?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D';

  const amenities = [
    { name: 'Round the Clock Security', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a1.svg' },
    { name: '24 Hours Electricity and Waterm', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a2.svg' },
    { name: '100% Power Back-up', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a3.svg' },
    { name: 'Open & Covered Parking Spaces', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/parking.svg' },
    { name: 'All the Lobbies are Air-conditioned', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a6.svg' },
    { name: 'Swimming Pools', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a8.svg' },


   
  ];
  const location =[
    { name: '2 Widest Roads in Gurugram’s NPR and CPR', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/the-confluence-SPR-CPR.svg' },
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
      overview_img = { overview_img}
      details = {details}
      builder ={builder}
    />
  );
};

export default Eldico;
