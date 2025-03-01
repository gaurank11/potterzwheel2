import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Sobha = () => {
  const images = [
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha1.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha2.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha3.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha4.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha5.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha6.webp',
  ];


  const  overview_img = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.webp";
  const brochureUrl = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha.pdf"; 
  const details = "SOBHA ALTUS";

  const description = `
    Welcome to SOBHA Altus, an exceptional residential enclave that redefines luxury living along the prestigious Upper Dwarka Expressway in Gurgaon. Designed by a globally renowned team of architects and designers from India, Europe, and the Far East, SOBHA Altus brings a harmonious blend of international expertise and sophisticated design to life.

The community welcomes residents with a grand, access-controlled lobby that combines privacy with a luxurious arrival experience. With impeccable architectural design, spacious interiors, and top-notch security, SOBHA Altus Sector 106 Gurgaon offers a sanctuary of modern living.
  `;

  const price = ''

  const mapImage = 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_map.png';
  const mapUrl = 'https://www.google.com/maps/place/Krisumi+Sales+Lounge/@28.4192531,76.9649014,17z/data=!3m1!4b1!4m6!3m5!1s0x390d3d63b59907ff:0x92efb89d2926d143!8m2!3d28.4192485!4d76.9697723!16s%2Fg%2F11f57wszxq?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D';

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
      overview_img = { overview_img}
      handleOpenInMap={handleOpenInMap}
      details = {details}
    />
  );
};

export default Sobha;
