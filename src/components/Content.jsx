import React, { useState, useCallback, useRef, useMemo } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Link, Instagram, Facebook, Linkedin, MapPinned } from "lucide-react";

const Content = () => {
  const formRef = useRef(null);

  const initialState = useMemo(() => ({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
    message: "",
  }), []);

  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_j3bcnsv",
        "template_8d1xkuo",
        formRef.current,
        "LhmPcW1aSL4Bb2D5V"
      );
      alert("Message Sent Successfully!");
      setFormData(initialState);
    } catch (error) {
      alert("Error sending message!");
    }
  };

  const countryCodes = useMemo(() => [
    { code: "+91", label: "India" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" }
  ], []);

  const services = useMemo(() => [
    "Residential", "Commercial", "SCO", "Studio Apartments", "Plots", "Fractional Ownership", "FarmHouses"
  ], []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info Section */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 p-8 rounded-lg shadow-lg text-white transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
            Reach Us <MapPinned className="text-3xl text-red-200" />
          </h2>
          <p className="text-lg md:text-xl">
            2nd Floor, SCO Number 8, Vatika Market Place-1, Sector 83, Gurugram, Haryana - 122012
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-5">
            {[
              { Icon: Mail, label: "Email", value: "hi@potterzwheel.com", href: "mailto:hi@potterzwheel.com" },
              { Icon: Phone, label: "Phone", value: "+91-9810360300", href: "tel:+919810360300" },
              { Icon: Link, label: "Website", value: "potterzwheel.com", href: "https://potterzwheel.com" }
            ].map(({ Icon, label, value, href }) => (
              <p key={label} className="flex items-center">
                <Icon className="mr-2 text-red-100 h-6 w-6" />
                <span className="text-lg font-bold">{label}:</span>
                <a href={href} className="underline text-red-50 hover:text-red-50 ml-2">{value}</a>
              </p>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex space-x-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/potterzwheel_realty?igsh=MWtvb3FuNGY2NnRlYg==", color: "text-pink-500 hover:text-pink-600" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61559495078889", color: "text-blue-300 hover:text-blue-400" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "text-white hover:text-white" }
            ].map(({ Icon, href, color }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                <Icon className={`${color} h-8 w-8`} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Let's Get in Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            
            {["name", "email"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            ))}

            {/* Phone Number with Country Code */}
            <div className="flex">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="border p-3 rounded-md" required>
                {countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>{`${code} (${label})`}</option>
                ))}
              </select>
              <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} className="ml-2 w-full border p-3 rounded-md" required />
            </div>

            {/* Service Selection */}
            <select name="service" value={formData.service} onChange={handleChange} className="w-full border p-3 rounded-md" required>
              <option value="">Select a Property Type</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>

            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full border p-3 rounded-md" required />

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
