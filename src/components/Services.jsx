import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.backend.title"),
      description: t("services.backend.description"),
    },
    {
      title: t("services.bots.title"),
      description: t("services.bots.description"),
    },
    {
      title: t("services.dashboard.title"),
      description: t("services.dashboard.description"),
    },
    {
      title: t("services.integrations.title"),
      description: t("services.integrations.description"),
    },
    {
      title: t("services.automation.title"),
      description: t("services.automation.description"),
    },
  ];

  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-2 py-[0rem] pb-[2rem] bg-black text-white text-center"
    >
      <h2 className="text-[3rem] md:text-[4rem] font-bold text-center mb-[3.5rem] bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c] text-transparent bg-clip-text leading-tight tracking-wide">
        {t("services.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-transparent p-[0.2rem] hover:scale-105 transform transition-transform duration-300 space-y-[1.5rem]"
          >
            <h3 className="text-[1.6rem] font-semibold bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c] text-transparent bg-clip-text leading-snug tracking-normal">
              {service.title}
            </h3>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed tracking-wide">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-[1rem]"></div>
    </section>
  );
};

export default Services;