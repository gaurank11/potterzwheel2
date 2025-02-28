import React, { useState, useCallback, useRef, useMemo } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Link, Instagram, Facebook, XIcon, Linkedin, MapPinned } from "lucide-react";

const Content = () => {
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_j3bcnsv",
        "template_8d1xkuo",
        formRef.current,
        "LhmPcW1aSL4Bb2D5V"
      );
      console.log(result.text);
      alert("Message Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        service: "",
        message: "",
      });
    } catch (error) {
      console.log(error.text);
      alert("Error sending message!");
    }
  };

  const countryCodes = useMemo(() => ([
    { code: "+91", label: "India" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" }
  ]), []);

  const services = useMemo(() => ([
    "Residential", "Commercial", "SCO", "Studio Apartments", "Plots", "Fractional Ownership", "FarmHouses"
  ]), []);

  return (
    <section id="content" className="max-w-7xl mx-auto py-12 px-6  text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Reach Us Section */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 p-8 rounded-lg shadow-lg text-white relative transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
            Reach Us <MapPinned className="text-3xl text-red-200" />
          </h2>
          <p className="md:text-xl">
            2nd Floor, SCO Number 8, Vatika Market Place-1, Sector 83, Gurugram, Haryana - 122012
          </p>
          
          {/* Contact Details */}
          <div className="mt-10 space-y-5">
            <p className="flex items-center">
              <Mail className="mr-2 text-red-100 h-6 w-6" />
              <span className="text-lg font-bold">Email:</span>
              <a href="mailto:hi@potterzwheel.com" className="underline text-red-50 hover:text-red-50 ml-2">
                hi@potterzwheel.com
              </a>
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 text-teal-100 h-6 w-6" />
              <span className="text-lg font-bold">Phone:</span>
              <a href="tel:+919810360300" className="underline text-teal-50 hover:text-teal-100 ml-2">
                +91-9810360300
              </a>
            </p>
            <p className="flex items-center">
              <Link className="mr-2 text-blue-100 h-6 w-6" />
              <span className="text-lg font-bold">Website:</span>
              <a href="https://potterzwheel.com" target="_blank" rel="noopener noreferrer"
                 className="underline text-blue-100 hover:text-blue-50 ml-2">
                potterzwheel.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex space-x-4">
            <a href="https://www.instagram.com/potterzwheel_realty?igsh=MWtvb3FuNGY2NnRlYg==" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-pink-500 hover:text-pink-600 h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559495078889" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-blue-300 hover:text-blue-400 h-8 w-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white hover:text-white h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Let's Get in Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            
            <input name="name" type="text" placeholder="Name" value={formData.name} 
                   onChange={handleChange} className="w-full border p-3 rounded-md" required />

            <input name="email" type="email" placeholder="Email" value={formData.email} 
                   onChange={handleChange} className="w-full border p-3 rounded-md" required />

            {/* Phone Number with Country Code */}
            <div className="flex">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} 
                      className="border p-3 rounded-md" required>
                {countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>{`${code} (${label})`}</option>
                ))}
              </select>
              <input name="phone" type="text" placeholder="Phone" value={formData.phone} 
                     onChange={handleChange} className="ml-2 w-full border p-3 rounded-md" required />
            </div>

            {/* Service Selection */}
            <select name="service" value={formData.service} onChange={handleChange} 
                    className="w-full border p-3 rounded-md" required>
              <option value="">Select a Property Type</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>

            <textarea name="message" placeholder="Message" value={formData.message} 
                      onChange={handleChange} className="w-full border p-3 rounded-md" required />

            <button type="submit" className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Content;
