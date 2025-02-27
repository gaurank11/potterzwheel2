import React from 'react';
import HeroSection from '../components/Hero1';
import AboutUs from '../components/About';
import OurServices from '../components/Services';
import PropertiesPage from '../components/Properties';
import ClientsPartners from '../components/Clients';
import ChatBot from '../components/chatbot';
import Testimonials from '../components/Testimonials';
const Home = () => {
  return (
    <>
    <div className=" overflow-x-hidden w-full">
    <HeroSection/>
    <PropertiesPage />
    <OurServices />
    <AboutUs />
    <Testimonials/>
    <ClientsPartners />
  
    </div>
    </>
  )
}

export default Home
