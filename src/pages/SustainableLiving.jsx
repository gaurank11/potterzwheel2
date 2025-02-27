import React from "react";

export default function SustainableLiving() {
  return (
    <div className="mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-4">Sustainable Living: A Guide to an Eco-Friendly Home</h1>
      <img
        src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
        alt="Sustainable Living"
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">
        With growing concerns about climate change and environmental impact, sustainable living has become more important than ever. Adopting eco-friendly practices at home can reduce your carbon footprint and save money in the long run.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Practical Ways to Live Sustainably</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Energy Efficiency:</strong> Switch to LED lighting, install solar panels, and use energy-efficient appliances.</li>
        <li><strong>Water Conservation:</strong> Fix leaks, use water-saving fixtures, and harvest rainwater for irrigation.</li>
        <li><strong>Eco-Friendly Materials:</strong> Use sustainable building materials like bamboo, recycled wood, and low-VOC paints.</li>
      </ul>
      <p className="text-gray-700">
        Making small changes in your daily life can significantly contribute to a healthier planet and a sustainable future.
      </p>
    </div>
  );
}
