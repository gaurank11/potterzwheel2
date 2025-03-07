import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 50);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Circular progress with a gradient stroke */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (progress / 100) * 251.2}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{
              transition: "stroke-dashoffset 0.2s ease-in-out",
              filter: "drop-shadow(0 0 6px rgba(59,130,246,0.5))", // Soft glow
            }}
          />
        </svg>
        {/* Logo */}
        <img
          src="/icon.png"
          alt="Loading..."
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-2 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Loader;
