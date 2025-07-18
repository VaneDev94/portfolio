import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "automation",
  },
  {
    key: "backend",
  },
  {
    key: "webdev",
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center text-white mb-10"
      >
        {t("services.title")}
      </motion.h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent px-6 py-6 rounded-lg shadow-lg text-white/90"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">{t(`services.${service.key}.title`)}</h3>
            <p className="text-white/60 text-sm">{t(`services.${service.key}.description`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
