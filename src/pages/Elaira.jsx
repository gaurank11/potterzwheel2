import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Elaira = () => {
  const images = [
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el1.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el2.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el3.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el4.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el5.webp',
    'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el6.webp',
  ];
const  overview_img = "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el_home.webp";

const property_location ="Sector- 80, Gurgaon"

  const brochureUrl = "/Waterside-Residences-Brochure.pdf"; 
  const details = "Conscient Elaira Residences";

  const builder ="Conscient"

  const description = `
   Positioned in a very pioneering neighbourhood, i.e. Sector-80, Gurgaon, Conscient Infrastructure launches its fresh project, namely, Conscient Elaira Residences offers a great opportunity for all the residents to embark on a great journey, curating a great lifestyle for them as well as their loved ones. This magnificent project encompasses a total land parcel of 5.56 acres where it will accommodate 2 sky-scraping towers that accommodate a total of 268 apartments.

Experience A Life Filled With Exclusivity And Fun Residing in a low-density project, curated with exclusive techniques like Conscient Elaira Residences itself is a major blessing in disguise for people belonging to every age group. People who decide to reside here will obtain a great opportunity to choose between the configuration of 3 BHK and 4 BHK residences that are crafted with excellence.
  `;

  const price = ''

  const mapImage = 'https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Elaira/el_map.webp';
  const mapUrl = 'https://www.google.com/maps/place/Elaira+Residences+by+Conscient/@28.3633172,76.9607376,17z/data=!3m1!4b1!4m6!3m5!1s0x390d3d91cd759c63:0x2a9b7a23b55f8fa2!8m2!3d28.3633125!4d76.9633125!16s%2Fg%2F11wvgwpq27?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D';

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

export default Elaira;
