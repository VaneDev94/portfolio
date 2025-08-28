import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Database, Bot, PanelLeft, Link2, Workflow } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.backend.title"),
      description: t("services.backend.description"),
      icon: Database,
    },
    {
      title: t("services.bots.title"),
      description: t("services.bots.description"),
      icon: Bot,
    },
    {
      title: t("services.dashboard.title"),
      description: t("services.dashboard.description"),
      icon: PanelLeft,
    },
    {
      title: t("services.integrations.title"),
      description: t("services.integrations.description"),
      icon: Link2,
    },
    {
      title: t("services.automation.title"),
      description: t("services.automation.description"),
      icon: Workflow,
    },
  ];

  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-4 py-16 text-center"
    >
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <p className="mb-2 text-sm font-medium tracking-widest text-white/60">
          {t("services.kicker")}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c]">
          {t("services.title")}
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {services.map(({ title, description, icon: Icon }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:shadow-xl hover:border-[#3ee6c1]/50 sm:w-[45%] lg:w-[31%]"
          >
            {Icon && (
              <Icon className="mb-3 h-8 w-8 text-[#3ee6c1] transition-transform group-hover:scale-110" />
            )}
            <h3 className="mb-2 text-lg font-semibold text-[#3ee6c1] group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;