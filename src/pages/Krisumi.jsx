import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Krisumi = () => {
  const images = [
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi1.png',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi2.png',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi3.png',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi4.png',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi5.png',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi6.png',
  ];
const  overview_img = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi_Homepage.png";

const property_location ="Sector 36A, Gurgaon"

  const brochureUrl = "/Waterside-Residences-Brochure.pdf"; 
  const details = "Waterside Residences";

  const builder ="KRISUMI"

  const description = `
    Welcome to Waterside Residences, where luxury living merges with holistic wellness in the heart of Gurgaon's Sector 36A.
    Embrace a lifestyle of opulence and serenity. With premium amenities and picturesque surroundings, Waterside Residences
    offers a sanctuary where comfort meets tranquility.
    A masterpiece, where the meticulously crafted exteriors by Nikken Housing System seamlessly blend with the opulent interiors
    envisioned by Aoyama Nomura Design (A.N.D). Innovation, expertise, and creativity have shaped the captivating Waterside
    Residences offering you a fine living experience.
  `;

  const price = ''

  const mapImage = 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi_location.png';
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

export default Krisumi;
