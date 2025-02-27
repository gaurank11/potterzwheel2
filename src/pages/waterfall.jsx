import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Waterfall = () => {
  const images = [
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/wt-1.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/wt-2.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/wt-3.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/wt-4.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/wt-5.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/wt-6.webp',
  ];
const  overview_img = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/waterfall_img.webp";

const property_location ="Sector- 36A Dwarka Expressway, Gurgaon"

  const brochureUrl = "/Waterside-Residences-Brochure.pdf"; 
  const details = "Waterfall Residences";

  const builder ="KRISUMI"

  const description = `
    Some of the terms synonymous with Japan are quality, reliability, timelessness, efficiency, finesse, aesthetics, sustainability and longevity. It is with this view that Waterside Residences has been designed based on the Japanese style of art and architecture to provide enduring value to the residents. The Clubhouse, “Sudare” (symbolizing the sparkling drops of a Waterside) is spread over a sprawling 36,000 sq ft, it is fully-equipped with a state-of-the-art Gym, Restaurant, Bar Lounge, Spa, Salon, Theatre and many other amenities. Located in Sector 36-A, Waterside Residences offers unparalleled connectivity to Delhi and other sectors of Gurugram.
  `;

  const price = ''

  const mapImage = 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/waterfall/wt_map.webp';
  const mapUrl = 'https://www.google.com/maps/dir//Krisumi+Waterfall+Residences+Gurgaon+Sector+36A+Gurugram,+Haryana+122002/@28.4170455,76.973437,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d3daba8918f95:0x5c81fa76593240e6!2m2!1d76.973437!2d28.4170455?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D';

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

export default Waterfall;
