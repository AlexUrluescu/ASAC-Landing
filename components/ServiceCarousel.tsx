"use client";
import { Flex } from "antd";
import { log } from "console";
import React, { useState } from "react";

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

  // Handles navigation to the next set of items
  const handleNext = () => {
    if (currentIndex < services.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handles navigation to the previous set of items
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  console.log("currentIndex", currentIndex);

  return (
    <Flex style={{ width: "100%" }}>
      <Flex style={{ width: 50, padding: "0px 10px" }}>
        {currentIndex !== 0 ? (
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              backgroundColor: "transparent",
              border: "none",
              fontSize: 30,
              color: "black",
            }}
          >
            ←
          </button>
        ) : null}
      </Flex>

      <div
        style={{
          overflow: "hidden",
          margin: "0 auto",
          //   backgroundColor: "red",
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

      <Flex style={{ width: 50, padding: "0px 10px" }}>
        {currentIndex !== 2 ? (
          <button
            onClick={handleNext}
            disabled={currentIndex === services.length - 4}
            style={{
              cursor:
                currentIndex === services.length - 4
                  ? "not-allowed"
                  : "pointer",
              backgroundColor: "transparent",
              border: "none",
              fontSize: 30,
              color: "black",
            }}
          >
            →
          </button>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default ServiceCarousel;
