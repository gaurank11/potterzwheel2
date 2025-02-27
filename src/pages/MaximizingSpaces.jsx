import React from "react";

export default function MaximizingSpaces() {
  return (
    <div className=" mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-4">Maximizing Small Spaces</h1>
      <img
        src="https://assets.architecturaldigest.in/photos/631b0636ac6d3139777df715/16:9/w_2560%2Cc_limit/6%2520design%2520hacks%2520for%2520a%2520small%2520home%2520that%2520you%2520need%2520to%2520know.jpg"
        alt="Maximizing Small Spaces"
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">
        Living in a small space doesn’t mean compromising on comfort or style. With the right design strategies, you can make the most of every inch.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Smart Space-Saving Tips</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Multi-Functional Furniture:</strong> Invest in furniture that serves multiple purposes, like a bed with storage underneath.</li>
        <li><strong>Use Vertical Space:</strong> Install shelves and wall-mounted storage to keep the floor area open.</li>
        <li><strong>Mirrors and Lighting:</strong> Strategically placed mirrors can make a space look larger, while bright lighting prevents a cramped feeling.</li>
      </ul>
      <p className="text-gray-700">
        By implementing these tricks, even the smallest apartment can feel spacious and organized.
      </p>
    </div>
  );
}
