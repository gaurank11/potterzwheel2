import React from "react";
import BlogPost from "./BlogPost";

const ChoosingRightProperty = () => {
  const sections = [
    {
      title: "Understanding Your Needs and Goals",
      icon: "1️",
      content: [
        "Start by defining your purpose. Are you looking for a home, a rental property, or a long-term investment?",
        "If purchasing a house, consider factors like family size, work proximity, and lifestyle preferences. For investments, analyze appreciation potential, rental demand, and market stability."
      ]
    },
    {
      title: "Evaluating Location and Neighborhood",
      icon: "2️",
      content: ["The location is crucial in real estate. Key factors to consider:"],
      list: [
        "Proximity to schools, hospitals, and shopping centers.",
        "Transportation accessibility and connectivity.",
        "Crime rates and neighborhood safety.",
        "Future development plans and infrastructure growth."
      ]
    },
    {
      title: "Financial Planning and Budgeting",
      icon: "3️",
      content: ["Establishing a realistic budget is essential. Consider:"],
      list: [
        "Down payment and mortgage options.",
        "Property taxes and insurance.",
        "Maintenance and renovation expenses.",
        "Legal and registration fees."
      ]
    },
    {
      title: "Inspecting the Property Thoroughly",
      icon: "4️",
      content: ["Before buying, conduct a detailed inspection. Check for:"],
      list: [
        "Structural integrity and material quality.",
        "Plumbing and electrical systems.",
        "Signs of water damage or leaks."
      ]
    },
    {
      title: "Understanding Legal Aspects",
      icon: "5️",
      content: ["Ensure the property has clear legal documentation. Verify:"],
      list: [
        "Ownership rights and title deeds.",
        "No legal disputes or pending dues.",
        "Compliance with zoning laws and building codes."
      ]
    }
  ];

  return (
    <BlogPost
      title="Choosing the Right Property"
      image="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Maximizing%20Small%20Spaces.webp"
      content={
        <>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Finding the <strong>perfect property</strong>, whether for personal use or investment, requires careful consideration. A well-researched decision ensures <strong>long-term financial benefits</strong> and satisfaction.
          </p>
          <p className="text-lg md:text-xl text-gray-700">Here’s a detailed guide to help you make the right choice.</p>
          {sections.map(({ title, icon, content, list }, index) => (
            <div key={index} className="mt-6">
              <h3 className="font-semibold text-xl md:text-3xl text-blue-950 mb-2">
                <span className="bg-blue-950 text-white px-2 py-1 rounded-md">{icon}</span> {title}
              </h3>
              {content.map((text, idx) => (
                <p key={idx} className="text-lg text-gray-700">{text}</p>
              ))}
              {list && (
                <ul className="list-disc pl-5 text-lg text-gray-700">
                  {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <h2 className="mt-8 text-2xl md:text-3xl font-bold text-gray-800">✅ Final Thoughts</h2>
          <p className="text-lg text-gray-700">
            Choosing the right property is a <strong>significant financial</strong> and personal decision. By carefully assessing your needs, researching the market, and seeking expert advice, you can make a <strong>well-informed investment</strong> that aligns with your goals.
          </p>
        </>
      }
    />
  );
};

export default ChoosingRightProperty;
