import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTimes } from 'react-icons/fa';
import emailjs from 'emailjs-com';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
  });

  // Memoize description parts to avoid recalculating on every render
  const descriptionParts = useMemo(() => {
    const trimmedDescription = description.trim();
    return {
      firstLetter: trimmedDescription[0].toUpperCase(),
      firstThreeWords: trimmedDescription.split(' ').slice(0, 3).join(' ').slice(1),
      remainingText: trimmedDescription.split(' ').slice(3).join(' '),
    };
  }, [description]);

  // Memoize popup handlers
  const closePopup = useCallback(() => setShowPopup(false), []);
  const openPopup = useCallback(() => setShowPopup(true), []);
  const closePopup2 = useCallback(() => setShowPopup2(false), []);
  const openPopup2 = useCallback(() => setShowPopup2(true), []);
  const close2Popup = useCallback(() => setShowSchedulePopup(false), []);
  const open2Popup = useCallback(() => setShowSchedulePopup(true), []);

  // Memoize share function
  const shareOnPlatform = useCallback((platform) => {
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
  }, []);

  // Memoize form submission handlers
  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      emailjs
        .send('service_j3bcnsv', 'template_1ehcvh7', { ...formData, property: details }, 'LhmPcW1aSL4Bb2D5V')
        .then(() => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
        })
        .catch((error) => {
          alert('Failed to send the message. Please try again.');
          console.error(error);
        });
    },
    [formData, details]
  );

  const onForm2Submit = useCallback(
    (e) => {
      e.preventDefault();
      emailjs
        .send('service_j3bcnsv', 'template_1ehcvh7', { ...formData, property: details }, 'LhmPcW1aSL4Bb2D5V')
        .then(() => {
          alert('Showing scheduled successfully!');
          setFormData({ name: '', email: '', phone: '', date: '', time: '' });
        })
        .catch((error) => {
          alert('Failed to schedule showing. Please try again.');
          console.error(error);
        });
    },
    [formData, details]
  );

  const onForm3Submit = useCallback(
    (e) => {
      e.preventDefault();
      emailjs
        .send('service_j3bcnsv', 'template_1ehcvh7', { ...formData, property: details }, 'LhmPcW1aSL4Bb2D5V')
        .then(() => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setShowPopup2(false);
          setTimeout(() => window.open(pdfUrl, '_blank'), 300);
        })
        .catch((error) => {
          alert('Failed to send the message. Please try again.');
          console.error(error);
        });
    },
    [formData, details, pdfUrl]
  );

  // Handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  // Show popup after 3 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="mt-15">
      {/* Popup Forms */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4 py-8 md:py-12">
          <div className="bg-gray-50 p-6 rounded-lg w-full max-w-lg md:max-w-4xl relative border border-blue-950 max-h-[70vh] md:max-h-[80vh] overflow-auto">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2">
                <img src={overview_img} alt="Property Image" className="w-full h-auto md:h-full object-cover rounded-t-lg md:rounded-l-lg" loading="lazy" />
                <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white p-2 rounded-md text-xs md:hidden">
                  <h2 className="font-semibold">{details}</h2>
                  <p>{property_location}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <form onSubmit={onFormSubmit} className="space-y-4">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Name" required className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-gray-900 text-sm md:text-lg" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email" required className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter Number" required className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg" />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Enter Message" rows="2" className="block w-full p-2 border-b border-gray-400 bg-transparent outline-none text-sm md:text-lg"></textarea>
                  <div className="flex items-start">
                    <input id="consent" name="consent" type="checkbox" className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-blue-800 mt-1" required />
                    <label htmlFor="consent" className="ml-2 text-xs md:text-sm text-gray-800">
                      I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-blue-950 text-white text-sm md:text-lg font-semibold py-3 rounded-md mt-4 hover:bg-blue-900 transition">
                    SUBMIT NOW
                  </button>
                </form>
              </div>
            </div>
            <button onClick={closePopup} className="absolute top-3 right-3 text-gray-600 text-3xl">
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Other Popups and JSX */}
      {/* ... (Add other popups and JSX here) ... */}

      {/* Floating Download Brochure Button */}
      <div onClick={openPopup2} className="fixed top-1/3 -right-7 md:-right-8 bg-blue-950 text-white rounded-full p-3 shadow-lg hover:bg-blue-900 transition duration-200 cursor-pointer flex items-center justify-center rotate-90">
        <img src="https://www.svgrepo.com/show/527693/download-minimalistic.svg" alt="Download Icon" className="w-4 h-4 md:w-7 md:h-7" style={{ filter: 'invert(1)' }} />
        <span className="text-[12px] md:text-lg text-center"> Brochure</span>
      </div>
    </div>
  );
};

export default PropertyDetails;