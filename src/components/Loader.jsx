import React, { useEffect } from "react";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-950 z-50">
      {/* Logo with blinking animation */}
      <img
        src="/logo.png"
        alt="Loading..."
        className="w-48 h-36 md:w-80 md:h-48 animate-pulse"
      />
    </div>
  );
};

export default Loader;
