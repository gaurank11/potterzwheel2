import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import { X } from "lucide-react"; // Importing an icon for the close button

const Popup = ({ setShowPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState(null);

  // Memoize handleChange to prevent unnecessary re-renders
  const handleChange = useCallback((e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // Memoize handleSubmit to prevent unnecessary re-renders
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_j3bcnsv", "template_8d1xkuo", e.target, "LhmPcW1aSL4Bb2D5V")
        .then(
          () => {
            setModalMessage("Message Sent Successfully!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              countryCode: "+91",
              service: "",
              message: "",
            });
          },
          () => {
            setModalMessage("Error sending message!");
          }
        );
    },
    []
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-auto relative">
        {/* Close Button */}
        <button onClick={() => setShowPopup(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-left">Let's Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number with Country Code */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="flex items-center">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                required
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className="ml-2 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Interested in
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
              required
            >
              <option value="">Select a Property Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="SCO">SCO</option>
              <option value="Studio Apartments">Studio Apartments</option>
              <option value="Plots">Plots</option>
              <option value="Fractional Ownership">Fractional Ownership</option>
              <option value="FarmHouses">FarmHouses</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
              required
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-900"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the{" "}
              <a href="/termsandconditions" target="_blank" className="text-blue-900 underline hover:text-blue-600">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" target="_blank" className="text-blue-900 underline hover:text-blue-600">
                Privacy Policy
              </a>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-900 text-white text-lg font-semibold rounded-md focus:ring-blue-900 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Success/Error message */}
        {modalMessage && <p className="mt-3 text-center">{modalMessage}</p>}
      </div>
    </div>
  );
};

export default Popup;
