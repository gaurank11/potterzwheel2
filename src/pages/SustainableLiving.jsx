import React from "react";
import BlogPost from "./BlogPost";

const SustainableLiving = () => {
  return (
    <BlogPost
      title="Sustainable Living in Modern Homes"
      image="https://example.com/sustainable.jpg"
      content={
        <>
          <p>
            Creating an eco-friendly home is easier than ever. Here’s how you can embrace sustainability in your modern living space.
          </p>
          <h3>1. Energy Efficiency</h3>
          <p>
            Install LED lighting, energy-efficient appliances, and smart thermostats to reduce energy consumption.
          </p>
          <h3>2. Use Sustainable Materials</h3>
          <p>
            Opt for eco-friendly materials like bamboo flooring, recycled wood, and non-toxic paints.
          </p>
          <h3>3. Reduce Water Usage</h3>
          <p>
            Install water-saving fixtures and rainwater harvesting systems to minimize waste.
          </p>
          <h3>4. Grow Indoor Plants</h3>
          <p>
            Plants not only enhance aesthetics but also improve air quality by filtering pollutants.
          </p>
        </>
      }
    />
  );
};

export default SustainableLiving;
