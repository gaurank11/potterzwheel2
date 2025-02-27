import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ensure react-icons is installed

const WhatsAppFloatingIcon = ({ phoneNumber }) => {
  // Ensure proper formatting of the phone number
  const formattedPhoneNumber = phoneNumber.replace(/[^\d+]/g, ""); // Remove unwanted characters
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`; // Universal WhatsApp URL

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 md:bottom-3 right-5 md:right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-200 flex items-center space-x-2"
      title="Chat on WhatsApp"
    >
     <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-8 h-8 md:w-12 md:h-12"
    fill="white"
  >
    <path d="M16.01 3c-7.13 0-12.91 5.78-12.91 12.91 0 2.29.6 4.51 1.73 6.48l-2.14 7.01 7.15-2.11c1.91.98 4.04 1.49 6.17 1.49h.01c7.13 0 12.91-5.78 12.91-12.91S23.14 3 16.01 3zm6.16 18.27c-.26.74-1.52 1.43-2.13 1.52-.54.08-1.23.11-1.99-.13-.46-.14-1.05-.34-1.81-.67-3.15-1.34-5.21-4.48-5.38-4.7-.16-.22-1.28-1.71-1.28-3.26 0-1.55.81-2.31 1.1-2.62.28-.31.6-.39.81-.39.2 0 .41 0 .59.01.19.01.44-.07.69.52.26.61.87 2.11.95 2.26.08.15.13.32.02.52-.1.2-.15.31-.29.48-.15.18-.3.4-.42.54-.14.15-.28.31-.12.6.15.31.65 1.07 1.4 1.73.97.87 1.8 1.14 2.11 1.26.31.13.49.11.68-.07.19-.19.79-.91 1-1.22.21-.31.42-.25.71-.15.29.1 1.85.88 2.17 1.04.31.16.52.24.6.38.07.15.07.84-.19 1.57z"></path>
  </svg>
    </a>
  );
};

export default WhatsAppFloatingIcon;
