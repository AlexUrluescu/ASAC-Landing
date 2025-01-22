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
  const [isMobile, setIsMobile] = useState(4);

  useEffect(() => {
    const numberSteps = window.innerWidth <= 525 ? 2 : 0;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < services.length + numberSteps - 4 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 525 ? 1.7 : 4);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  return (
    <Flex style={{ width: "100%" }}>
      <div
        style={{
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <div
          className="carouser-item-container"
          style={{
            transform: `translateX(-${currentIndex * (100 / isMobile)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="service">
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
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
};

export default ServiceCarousel;
