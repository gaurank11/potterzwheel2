import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Krisumi from "./pages/Krisumi";
import Mvn from "./pages/Mvn";
import FloatingContactIcons from "./components/FloatingContactIcons";
import Trevoc from "./pages/Trevoc";
import PrivacyPolicy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import TermsAndConditions from "./pages/Terms";
import TopProperties from "./components/All_Properties";
import AboutUsPage from "./pages/Aboutus_Page";
import ChatBot from "./components/chatbot";
import Interiors from "./components/Interiors";
import Camasa from "./pages/SS_Camasa";
import Sobha from "./pages/sobha_altus";
import Loader from "./components/Loader"; // Import Loader Component
import Eldico from "./pages/Eldico";
import Waterfall from "./pages/waterfall";
import Blog from "./pages/Blog";
import Elaira from "./pages/Elaira";

import Aeroone from "./pages/Aeroone";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Show loader for 3.5 seconds before displaying content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const businessPhoneNumber = "+919811092501";

  return (
    <div>
      
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/Krisumi" element={<Krisumi />} />
            <Route path="/mvn" element={<Mvn />} />
            <Route path="/trevoc" element={<Trevoc />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Disclaimer" element={<Disclaimer />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/properties" element={<TopProperties />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/interiors" element={<Interiors />} />
            <Route path="/camasa" element={<Camasa />} />
            <Route path="/sobha" element={<Sobha />} />
            <Route path="/eldico" element={<Eldico/>} />
            <Route path="/waterfall" element={<Waterfall/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/aero" element={<Aeroone/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/elaira" element={<Elaira/>} />
          </Routes>
          <FloatingContactIcons  phoneNumber={businessPhoneNumber} />
          <ChatBot />
          <Footer />
        </>
  
    </div>
  );
}
