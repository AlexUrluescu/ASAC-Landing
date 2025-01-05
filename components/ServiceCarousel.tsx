"use client";
import { Flex } from "antd";
import React, { useState, useEffect } from "react";

const ServiceCarousel = () => {
  const services = [
    { icon: "🏠", label: "Home Improvement" },
    { icon: "📦", label: "Moving and Organizing" },
    { icon: "🧹", label: "Household Cleaning Services" },
    { icon: "🔧", label: "Repairs and Maintenance" },
    { icon: "🐜", label: "Pest Control Services" },
    { icon: "🌿", label: "Gardening and Lawn Care" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < services.length - 4 ? prevIndex + 1 : 0
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [services.length]);

  return (
    <Flex style={{ width: "100%" }}>
      <div
        style={{
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        {/* Services Wrapper */}
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * (100 / 4)}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {services.map((service, index) => (
            <Flex
              vertical
              gap={10}
              align="center"
              key={index}
              className="service"
            >
              <span style={{ fontSize: 40 }}>{service.icon}</span>
              <span
                style={{
                  color: "black",
                  display: "block",
                  textAlign: "center",
                }}
              >
                {service.label}
              </span>
            </Flex>
          ))}
        </div>
      </div>
    </Flex>
  );
};

export default ServiceCarousel;
