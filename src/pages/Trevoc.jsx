import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Trevoc = () => {
  const images = [
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t1.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t2.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t3.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t4.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t5.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t6.webp',
  ];

  const  overview_img = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t_home.webp";



  const brochureUrl = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/TREVOC.pdf"; 
  const details = "Trevoc Royal Residences";

  const description = `
    Trevoc Royal Residences harmonises modernity with sophistication, integrating smart home automation for ultimate convenience, top-notch security for peace of mind, and ample parking with EV charging stations, all embodying the future of sustainable luxury. The lifestyle here is second to none, with exclusive amenities like a clubhouse featuring fine dining restaurants and bars, a spa & salon, meditation and relaxation zones, and weather-controlled infinity pools. For those who seamlessly blend work and leisure, the co-working spaces within the development provide the ideal environment for productivity and relaxation. Discover the unparalleled lifestyle at Trevoc Royal Residences, where every detail is designed for those who demand the best.
  `;
  const builder ="TREVOC GROUP";

  const price = ''

  const mapImage = 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t_map.webp';
  const mapUrl = 'https://maps.app.goo.gl/4yUzCjvTzv4JAmBfA';

  // const amenities = [
  //   { name: 'Top Security', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a1.svg' },
  //   { name: 'Ample Parking', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/parking.svg' },
  //   { name: 'Smart Automation', icon: 'https://www.svgrepo.com/show/519296/smart-life.svg' },
  //   { name: 'Concierge Services', icon: 'https://www.svgrepo.com/show/455905/hotel-concierge.svg' },
  //   { name: 'Infinity Pools', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a8.svg' },
  //   { name: 'Gym', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/gym.svg' },


   
  // ];

  const amenities = [
    { name: 'Round the Clock Security', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a1.svg' },
    { name: '24 Hours Electricity and Waterm', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a2.svg' },
    { name: '100% Power Back-up', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a3.svg' },
    { name: 'Open & Covered Parking Spaces', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/parking.svg' },
    { name: 'All the Lobbies are Air-conditioned', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a6.svg' },
    { name: 'Swimming Pools', icon: 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Amenities/a8.svg' },


   
  ];

  const location =[
    { name: '25 mins to IGI Airport', icon: 'https://www.svgrepo.com/show/490515/airport-departure.svg' },
    { name: '8 mins to Corporate Hubs', icon: 'https://www.svgrepo.com/show/403900/office-building.svg' },
    { name: '2 mins to Sector 56 Metro Station', icon: 'https://www.svgrepo.com/show/490847/metro.svg' },
    { name: '2 mins to Grand Hyatt', icon: 'https://www.svgrepo.com/show/490127/hotel-building.svg' },
    { name: '5 mins to DLF Camellias', icon: 'https://www.svgrepo.com/show/456974/real-estate-building.svg' },
    { name: '5 mins to One Horizon Center', icon: 'https://www.svgrepo.com/show/70483/office-block.svg' },
    
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

export default Trevoc;
