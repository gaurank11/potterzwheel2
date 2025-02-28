import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTimes } from 'react-icons/fa';
import emailjs from "emailjs-com";
 // Importing social media icons from react-icons

 const PropertyDetails = ({
  images,
  description,
  mapImage,
  mapUrl,
  details,
  amenities,
  location,
  locationDescription,
  handleOpenInMap,
  pdfUrl,
  overview_img,
  property_location,
  builder,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 3 seconds

    // Clean up the timeout when the component is unmounted or when popup is closed
    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup2 = () => {
    setShowPopup2(false);
  };

  const openPopup2 = () => {
    setShowPopup2(true);
  };


  const close2Popup = () => {
    setShowSchedulePopup(false);
  };

  const open2Popup = () => {
    setShowSchedulePopup(true);
  };

  const shareOnPlatform = (platform) => {
    const currentUrl = encodeURIComponent(window.location.href);
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case 'instagram':
        alert('Instagram does not support direct URL sharing via web.');
        return;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_j3bcnsv"; 
    const templateID = "template_1ehcvh7"; 
    const userID = "LhmPcW1aSL4Bb2D5V";  

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property: details,

    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send the message. Please try again.");
        console.error(error);
      });
  };

  const onForm2Submit = (e) => {
    e.preventDefault();

    const serviceID = "service_j3bcnsv"; 
    const templateID = "template_1ehcvh7"; 
    const userID = "LhmPcW1aSL4Bb2D5V"; 

    const template2Params = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
    };

    emailjs
      .send(serviceID, templateID, template2Params, userID)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", date: "", time: "" });
      })
      .catch((error) => {
        alert("Failed to schedule showing. Please try again.");
        console.error(error);
      });
  };

  const onForm3Submit = (e) => {
    e.preventDefault();

    const serviceID = "service_j3bcnsv"; 
    const templateID = "template_1ehcvh7"; 
    const userID = "LhmPcW1aSL4Bb2D5V";  


    const template3Params = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property: details,
    };

    emailjs
    .send(serviceID, templateID, template3Params, userID)
    .then((response) => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Close the popup
      setShowPopup2(false);

      // Automatically open the PDF after form submission
      setTimeout(() => {
        window.open(pdfUrl, "_blank");
      }, 300); // Slight delay for better UX
    })
    .catch((error) => {
      alert("Failed to send the message. Please try again.");
      console.error(error);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="mt-15">
    {/* Popup Form */}
    {showPopup && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4 py-8 md:py-12">
    <div className="bg-gray-50 p-6 rounded-lg w-full max-w-lg md:max-w-4xl relative border border-blue-950 max-h-[70vh] md:max-h-[80vh] overflow-auto">
      
      {/* Image + Form Container */}
      <div className="flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 ">
          <img
            src={overview_img}
            alt="Property Image"
            className="w-full h-auto md:h-full object-cover rounded-t-lg md:rounded-l-lg"
          />

          {/* Property Name & Location (Only for Mobile) */}
          <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white p-2 rounded-md text-xs md:hidden">
            <h2 className="font-semibold">{details}</h2>
            <p>{property_location}</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4">
          {/* Property Name & Location (Only for Desktop) */}
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-gray-900 text-center">{details}</h2>
            <p className="text-sm text-gray-700 mb-4 text-center">{property_location}</p>
          </div>

          <form onSubmit={onFormSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
              required
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-gray-900 text-sm md:text-lg"
            />
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              required
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Number"
              required
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter Message"
              rows="2"
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg"
            ></textarea>

            <div className="flex items-start">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-blue-800 mt-1"
                required
              />
              <label htmlFor="consent" className="ml-2 text-xs md:text-sm text-gray-800">
                I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. 
                This consent overrides any registration for DNC/NDNC.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white text-sm md:text-lg font-semibold py-3 rounded-md mt-4 hover:bg-blue-900 transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={closePopup}
        className="absolute top-3 right-3 text-gray-600 text-3xl"
      >
        &times;
      </button>
    </div>
  </div>
)}

{showPopup2 && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4 py-8 md:py-12">
    <div className="bg-gray-50 p-6 rounded-lg w-full max-w-lg md:max-w-4xl relative border border-blue-950 max-h-[70vh] md:max-h-[80vh] overflow-auto">
      
      {/* Image + Form Container */}
      <div className="flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 ">
          <img
            src={overview_img}
            alt="Property Image"
            className="w-full h-auto md:h-full object-cover rounded-t-lg md:rounded-l-lg"
          />

          {/* Property Name & Location (Only for Mobile) */}
          <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white p-2 rounded-md text-xs md:hidden">
            <h2 className="font-semibold">{details}</h2>
            <p>{property_location}</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4">
          {/* Property Name & Location (Only for Desktop) */}
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-gray-900 text-center">{details}</h2>
            <p className="text-sm text-gray-700 mb-4 text-center">{property_location}</p>
          </div>

          <form onSubmit={onForm3Submit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
              required
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-gray-900 text-sm md:text-lg"
            />
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              required
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Number"
              required
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter Message"
              rows="2"
              className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg"
            ></textarea>

            <div className="flex items-start">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-blue-800 mt-1"
                required
              />
              <label htmlFor="consent" className="ml-2 text-xs md:text-sm text-gray-800">
                I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. 
                This consent overrides any registration for DNC/NDNC.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white text-sm md:text-lg font-semibold py-3 rounded-md mt-4 hover:bg-blue-900 transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={closePopup2}
        className="absolute top-3 right-3 text-gray-600 text-3xl"
      >
        &times;
      </button>
    </div>
  </div>
)}

{showSchedulePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-blue-950 p-8 rounded-lg w-full max-w-lg text-center relative">
            <h3 className="text-lg font-semibold text-white md:text-2xl mb-4">
              Schedule a Showing for <span className="text-white">{details} </span>
            </h3>
            <form onSubmit={onForm2Submit} className="space-y-4">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
                autoComplete="tel"
              />
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="block w-4/5 mx-auto p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />

<div className="flex items-start w-4/5 mx-auto">
    <input
      id="terms"
      name="terms"
      type="checkbox"
      className="h-4 w-4 text-blue-900 border-gray-300 rounded focus:ring-2 focus:ring-blue-800 mt-1"
      required
    />
    <label htmlFor="terms" className="ml-2 text-sm text-gray-200">
      I agree to the{' '}
      <a href="/termsandconditions" target="_blank" className="text-gray-400 hover:underline">
        Terms and Conditions
      </a>{' '}
      and{' '}
      <a href="/privacy-policy" target="_blank" className="text-gray-400 hover:underline">
        Privacy Policy
      </a>.
    </label>
  </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-md hover:border-1 hover:border-black transition"
              >
                Schedule Showing
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={close2Popup}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0">
  {images.map((image, index) => (
    <div key={index} className="flex justify-center items-center">
      <img
        src={image}
        alt={`Property image ${index + 1}`}
        className="w-full h-auto md:h-80 object-fit"
        loading="lazy" // Lazy loading added here
      />
    </div>
  ))}
</div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:px-20 px-8 ">
 
  {/* Desktop & Laptop View */}
  <div className="hidden lg:block">
  <h2 className="text-6xl font-bold text-center md:text-left lg:text-5xl ">{details}</h2>

  <p className="mt-5 text-justify text-[16px] lg:text-[20px] leading-relaxed">
    {/* Styled first letter */}
    <span className="text-6xl lg:text-[90px] font-semibold leading-none lg:float-left lg:mr-4 lg:mt-1">
      {description.trim()[0].toUpperCase()}
    </span>
    <span>
      {description
        .trim()
        .split(' ')
        .slice(0, 3)
        .join(' ')
        .slice(1)} {/* Exclude the first letter */}
    </span>
    {/* Remaining description continues seamlessly */}
    {description.trim().split(' ').length > 3 && (
      <span className="ml-1">
        {description.trim().split(' ').slice(3).join(' ')}
      </span>
    )}
  </p>
</div>

{/* Mobile View */}
<div className="block lg:hidden mt-6">
  <h2 className="text-[30px] font-bold text-left">{details}</h2>

  <p className="mt-6 text-[14px] text-justify">
    {/* Styled first letter */}
    <span className="text-4xl font-semibold leading-none float-left mr-3">
      {description.trim()[0].toUpperCase()}
    </span>
    <span>
      {description
        .trim()
        .split(' ')
        .slice(0, 3)
        .join(' ')
        .slice(1)} {/* Exclude the first letter */}
    </span>
    {/* Remaining description continues seamlessly */}
    {description.trim().split(' ').length > 3 && (
      <span className="ml-1">
        {description.trim().split(' ').slice(3).join(' ')}
      </span>
    )}
  </p>
</div>


   


<div className=" flex flex-col  ">
 <div className="flex flex-col gap-4 md:mt-20 md:mx-16 md:text-2xl">

            <button 
            onClick={openPopup}
            className="px-6 py-3 bg-blue-950 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
              Request Details
            </button>
            <button 
              onClick={open2Popup}
            className="px-6 py-3 bg-blue-950 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
              Schedule a Showing
            </button>
            <button className="px-6 py-3 bg-blue-950 border-2  text-white font-semibold  hover:bg-white transition hover:text-black hover:border-black">
              View More
            </button>
          </div>
          <div className="mt-5 flex flex-col items-center md:items-start md:mt-10 md:mx-20 ">
            <p>Share This Listing:</p>
            <div className="flex gap-3 mt-2">
              <button
                className="p-2 bg-gray-300 text-black rounded-md"
                onClick={() => shareOnPlatform('facebook')}
              >
                <FaFacebook size={24} />
              </button>
              <button
                className="p-2 bg-gray-300 text-black rounded-md"
                onClick={() => shareOnPlatform('instagram')}
              >
                <FaInstagramSquare size={24} />
              </button>
              <button
                className="p-2 bg-gray-300 text-black rounded-md"
                onClick={() => shareOnPlatform('linkedin')}
              >
                <FaLinkedin size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Location Section */}
<div className="my-8 mt-16 md:px-10">
  <h2 className="text-3xl font-bold text-center md:text-5xl">
    LOCATION
  </h2>

  <div className="text-center mt-4 md:px-10">
    <div>
    <img
      src={mapImage}
      alt="Map location"
      className="w-full h-auto mb-3 bg-gray-900"

    />
      <div className="relative">
    <button
      className="absolute bottom-4 right-4 transform translate-x-2 bg-blue-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition"
      onClick={() => handleOpenInMap(mapUrl)}
    >
      Click to View on Map
    </button>
  </div>
  </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-4 ">
      {location.map((loc, index) => (
        <div
          key={index}
          className="p-6 border border-gray-300 rounded-md w-full flex items-center gap-4"
        >
          <img src={loc.icon} alt={loc.name} className="w-16 h-16" />
          <div className="text-left">
            <p className="font-medium">{loc.name}</p>
            <p className="text-sm">{loc.description}</p>
          </div>
        </div>
      ))}
    </div>
    
  </div>
</div>

{/* Amenities Section */}
<div className="my-8 mt-16 md:px-10">
  <h2 className="text-3xl font-bold md:text-5xl text-center">AMENITIES</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-4 md:px-10">
    {amenities.map((amenity, index) => (
      <div
        key={index}
        className="p-6 border border-gray-300 rounded-md w-full flex items-center gap-4 "
      >
        <img src={amenity.icon} alt={amenity.name} className="w-16 h-16 bg-blue-950" />
        <div className="text-left">
          <p className="font-medium">{amenity.name}</p>
          <p className="text-sm">{amenity.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="w-full bg-white text-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg md:text-2xl font-bold text-center relative mb-6">
          Interested in <span className="text-blue-950">{details}</span> ?
        </h3>
        <form onSubmit={onFormSubmit} className="space-y-5">
          {/* Hidden Input for Property */}
          <input
            type="text"
            value={details}
            readOnly
            className="hidden"
            name="property"
            id="property"
          />

          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="email"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="tel"
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows="4"
            required
            className="block w-full md:w-4/5 mx-auto p-3 text-gray-800 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoComplete="on"
          ></textarea>

<div className="flex items-start w-full sm:w-4/5 mx-auto">
    <input
      id="terms"
      name="terms"
      type="checkbox"
      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-1"
      required
    />
    <label htmlFor="terms" className="ml-2 text-sm md:text-[18px] text-gray-600">
      I agree to the{' '}
      <a href="/termsandconditions" target="_blank" className="text-blue-600 hover:underline">
        Terms and Conditions
      </a>{' '}
      and{' '}
      <a href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline">
        Privacy Policy
      </a>.
    </label>
  </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-950 text-white rounded-md block mx-auto text-lg font-semibold hover:bg-blue-800 shadow-md transform transition-transform duration-200 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>


    {/* Floating Download Brochure Button (Chat-like Icon) */}
   <div
  onClick={openPopup2}
  className="fixed top-1/3 -right-7 md:-right-8 bg-blue-950 text-white rounded-full p-3 shadow-lg hover:bg-blue-900 transition duration-200 cursor-pointer flex items-center justify-center rotate-90" >

  <img
    src="https://www.svgrepo.com/show/527693/download-minimalistic.svg"
    alt="Download Icon"
    className="w-4 h-4 md:w-7 md:h-7"
    style={{
      filter: "invert(1)",
    }}
  />
  <span className="text-[12px] md:text-lg text-center"> Brochure</span>
</div>




    </div>
  );
};

export default PropertyDetails;
