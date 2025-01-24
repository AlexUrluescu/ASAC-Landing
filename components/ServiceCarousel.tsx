"use client";
import { Flex } from "antd";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const ServiceCarousel = () => {
  const t = useTranslations("home");
  const services = [
    { icon: "🏠", label: `${t("services.label1")}` },
    { icon: "📦", label: `${t("services.label2")}` },
    { icon: "🧹", label: `${t("services.label3")}` },
    { icon: "🔧", label: `${t("services.label4")}` },
    { icon: "🐜", label: `${t("services.label5")}` },
    { icon: "🌿", label: `${t("services.label6")}` },
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
                  fontWeight: 500,
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
