import React, { lazy, Suspense } from 'react';
import { Link } from "react-router-dom";

// Lazy loading icons
const InstagramIcon = lazy(() => import('lucide-react').then(module => ({ default: module.InstagramIcon })));
const FacebookIcon = lazy(() => import('lucide-react').then(module => ({ default: module.FacebookIcon })));
const LinkedinIcon = lazy(() => import('lucide-react').then(module => ({ default: module.LinkedinIcon })));

// Memoize the Footer to avoid unnecessary re-renders
const Footer = React.memo(() => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left Section - About */}
          <div className="flex flex-col space-y-6">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <p className="text-md text-gray-400 font-dm-sans text-left mx-auto max-w-4xl">
              Building homes, shaping dreams. We specialize in connecting you with the perfect property while redefining trust and transparency in real estate. Let's create a seamless journey toward your ideal home.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col space-y-10 md:items-center">
            <h2 className="text-2xl font-bold text-white font-nourd md:text-center">Follow Us</h2>
            <div className="flex space-x-4 md:space-x-3">
              <Suspense fallback={<div>Loading...</div>}>
                <a href="https://www.instagram.com/potterzwheel_realty?igsh=MWtvb3FuNGY2NnRlYg==" className="text-white hover:text-gray-400">
                  <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61559495078889" className="text-white hover:text-gray-400">
                  <FacebookIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="https://www.linkedin.com" className="text-white hover:text-gray-400">
                  <LinkedinIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Suspense>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-bold text-white font-nourd">Quick Links</h2>
            <ul className="space-y-4 text-lg font-dm-sans">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Our Services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/Disclaimer" className="hover:underline">Disclaimer</Link></li>
              <li><Link to="/termsandconditions" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-2xl font-bold text-white font-nourd">Contact Us</h3>
            <p className="text-sm text-gray-400">
              <span className="font-bold">Corporate Office:</span><br />
              2nd Floor,<br />
              SCO Number 8, Vatika Market Place-1<br />
              Sector 83, Gurugram, Haryana 122012<br />
            </p>
            <p className="text-sm text-gray-400 mt-4">
              <span className="font-bold">Phone:</span> <a href="tel:+919810360300" className="hover:underline">+91-9810360300</a><br />
              <span className="font-bold">Email:</span> <a href="mailto:hi@potterzwheel.com" className="hover:underline">hi@potterzwheel.com</a><br />
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t-2 border-gray-600" />

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-400 text-sm font-dm-sans">
          <p>&copy; {new Date().getFullYear()} Potterzwheel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
