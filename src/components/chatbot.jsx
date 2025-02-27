import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const ChatBot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Welcome to Potterzwheel Realty! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [showForm, setShowForm] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [menu, setMenu] = useState("main");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Your request has been sent successfully!");
        setShowForm(false);
        setFormData({ name: "", phone: "", email: "" });
      })
      .catch(() => {
        alert("An error occurred, please try again.");
      });
  };

  const toggleChat = () => {
    setShowChat(!showChat);
    setMessages([{ sender: "bot", text: "👋 Welcome to Potterzwheel Realty! How can we help you today?" }]);
    setShowForm(false);
    setMenu("main");
  };

  return (
    <>
      <div
        onClick={toggleChat}
        className="fixed bottom-5 right-5 p-5 bg-blue-900 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-800 transition"
      >
        Chat with Us 💬
      </div>

      {showChat && (
        <div className="fixed bottom-16 right-5 w-80 bg-white shadow-lg border rounded-lg">
          <div className="flex justify-between items-center p-3 bg-blue-900 text-white">
            <h2 className="text-lg font-semibold">Potterzwheel Realty</h2>
            <button onClick={toggleChat} className="text-2xl">&times;</button>
          </div>

          <div className="h-40 overflow-y-auto p-2 border-b">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 text-sm ${msg.sender === "user" ? "text-right text-blue-600" : "text-left text-gray-600"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {menu === "main" && !showForm && (
            <div className="p-3 grid grid-cols-1 gap-2">
              <button onClick={() => setMenu("buyProperty")} className="bg-blue-950 text-white py-2 rounded">Looking to Buy</button>
              <button onClick={() => setMenu("leaseProperty")} className="bg-blue-950 text-white py-2 rounded">Looking to Lease/Rent</button>
              <button onClick={() => setMenu("sellProperty")} className="bg-blue-950 text-white py-2 rounded">Selling/Leasing My Property</button>
              <button onClick={() => setMenu("inquiry")} className="bg-blue-950 text-white py-2 rounded">General Inquiry</button>
            </div>
          )}

          {menu === "buyProperty" && (
            <div className="p-3 grid grid-cols-1 gap-2">
              <button onClick={() => setMenu("locationBudget")} className="bg-blue-950 text-white py-2 rounded">Residential Property</button>
              <button onClick={() => setMenu("locationBudget")} className="bg-blue-950 text-white py-2 rounded">Studio Apartment</button>
              <button onClick={() => setMenu("locationBudget")} className="bg-blue-950 text-white py-2 rounded">Residential Plot</button>
              <button onClick={() => setMenu("locationBudget")} className="bg-blue-950 text-white py-2 rounded">Commercial Space</button>
              <button onClick={() => setMenu("main")} className="bg-black text-white py-2 rounded">Back</button>
            </div>
          )}

          {menu === "locationBudget" && (
            <div className="p-3">
              <input type="text" placeholder="Preferred Location" className="w-full border p-2 rounded mb-2" />
              <input type="text" placeholder="Budget Range" className="w-full border p-2 rounded mb-2" />
              <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white py-2 rounded w-full">Submit Details</button>
              <button onClick={() => setMenu("buyProperty")} className="bg-black text-white py-2 rounded w-full mt-2">Back</button>
            </div>
          )}

          {showForm && (
            <form className="p-3 space-y-3" onSubmit={sendEmail}>
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <input type="text" placeholder="Your Phone Number" className="w-full border p-2 rounded" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
              <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
              <button onClick={() => setShowForm(false)} className="bg-red-600 text-white py-2 rounded w-full mt-2">Cancel</button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
