import React, { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const Popup = React.lazy(() => import("./popup"));

const ChatBot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Welcome to Potterzwheel Realty! How can we assist you today?" },
  ]);
  const [showChat, setShowChat] = useState(false);
  const [menu, setMenu] = useState("main");
  const [showPopup, setShowPopup] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
    setMessages([{ sender: "bot", text: "👋 Welcome to Potterzwheel Realty! How can we assist you today?" }]);
    setMenu("main");
  };

  const handleOptionClick = (option, nextMenu) => {
    setMessages([...messages, { sender: "user", text: option }]);
    setMenu(nextMenu);
  };

  const residentialProperties = [
    { name: "KRISUMI WATERSIDE RESIDENCES", link: "/Krisumi" },
    { name: "TREVOC ROYAL RESIDENCES", link: "/trevoc" },
    { name: "ELDECO FAIRWAY RESERVE", link: "/eldico" },
    { name: "SOBHA ALTUS", link: "/sobha" },
    { name: "SS CAMASA", link: "/camasa" },
    { name: "KRISUMI WATERFALL RESIDENCES", link: "/waterfall" },
    { name: "MVN AEROONE", link: "/aero" },
    { name: "ELAIRA RESIDENCES", link: "/elaira" }
  ];

  const commercialProperties = [
    { name: "MVN MALL", link: "/mvn" }
  ];

  return (
    <>
      <div
        onClick={toggleChat}
        className="fixed bottom-5 right-5 p-5 bg-blue-950 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-900 transition"
      >
        Chat with Us 💬
      </div>

      {showChat && (
        <div className="fixed bottom-16 right-5 w-80 bg-white shadow-lg border rounded-lg">
          <div className="flex justify-between items-center p-3 bg-blue-900 text-white">
            <h2 className="text-lg font-semibold">Potterzwheel Realty</h2>
            <button onClick={toggleChat} className="text-2xl">&times;</button>
          </div>

          <div className="h-40 overflow-auto p-2 border-b">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 text-sm ${msg.sender === "user" ? "text-right text-blue-950" : "text-left text-gray-600"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {menu === "main" && (
            <div className="p-3 grid grid-cols-1 gap-2">
              <button onClick={() => handleOptionClick("Looking to Buy Property", "buyProperty")} className="bg-blue-950 text-white py-2 rounded">Looking to Buy</button>
              <button onClick={() => handleOptionClick("Looking to Lease/Rent", "leaseProperty")} className="bg-blue-950 text-white py-2 rounded">Looking to Lease/Rent</button>
              <button onClick={() => handleOptionClick("Selling/Leasing My Property", "sellProperty")} className="bg-blue-950 text-white py-2 rounded">Selling/Leasing My Property</button>
              <button onClick={() => setShowPopup(true)} className="bg-blue-950 text-white py-2 rounded">General Inquiry</button>
            </div>
          )}

          {menu === "buyProperty" && (
            <div className="p-3 grid grid-cols-1 gap-2">
              <button onClick={() => setMenu("residential")} className="bg-blue-950 text-white py-2 rounded">Residential Property 🏡</button>
              <button onClick={() => setMenu("commercial")} className="bg-blue-950 text-white py-2 rounded">Commercial Space 🏢</button>
              <button onClick={() => setMenu("main")} className="bg-white text-black py-2 rounded w-full mt-2 border border-black">Back</button>
            </div>
          )}

          {menu === "residential" && (
            <div className="p-3 overflow-auto max-h-40">
              {residentialProperties.map((property, index) => (
                <button
                  key={index}
                  onClick={() => navigate(property.link)}
                  className="bg-blue-950 text-white py-2 rounded w-full mb-2"
                >
                  {property.name}
                </button>
              ))}
              <button onClick={() => setMenu("buyProperty")} className="bg-white text-black py-2 rounded w-full mt-2 border border-black">Back</button>
            </div>
          )}

          {menu === "commercial" && (
            <div className="p-3 overflow-auto max-h-40">
              {commercialProperties.map((property, index) => (
                <button
                  key={index}
                  onClick={() => navigate(property.link)}
                  className="bg-blue-950 text-white py-2 rounded w-full mb-2"
                >
                  {property.name}
                </button>
              ))}
              <button onClick={() => setMenu("buyProperty")} className="bg-white text-black py-2 rounded w-full mt-2 border border-black">Back</button>
            </div>
          )}
        </div>
      )}

      {showPopup && (
        <Suspense fallback={<div>Loading...</div>}>
          <Popup setShowPopup={setShowPopup} />
        </Suspense>
      )}
    </>
  );
};

export default ChatBot;
