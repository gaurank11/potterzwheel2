import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(() => !Cookies.get('cookieConsent'));

  const handleConsent = (status) => {
    Cookies.set('cookieConsent', status, { expires: 365 });
    if (status === 'rejected') {
      Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-950 text-white p-4 shadow-lg z-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0">
          By clicking “Accept All Cookies,” you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.{' '}
          <a href="/privacy-policy" className="text-gray-300 underline hover:text-white">
            Privacy Policy
          </a>
        </p>
        <div>
          <button
            onClick={() => handleConsent('accepted')}
            className="bg-white hover:bg-gray-400 text-black px-4 py-2 w-30 text-center rounded mr-2 mb-2"
          >
            Accept All
          </button>
          <button
            onClick={() => handleConsent('rejected')}
            className="bg-black hover:bg-gray-800 text-white px-5 py-2 w-30 text-center rounded"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
