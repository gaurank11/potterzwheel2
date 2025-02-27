import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Main App component
import './index.css'; // Tailwind CSS and custom styles
import CookieConsent from './components/CookieConsent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <CookieConsent />
    </BrowserRouter>
  </React.StrictMode>
);

