import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col items-center justify-center text-center p-6 text-foreground pt-32">
      <span className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="max-w-3xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          {t('hero.title.highlight')}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-[#00FFC9] via-[#00FFC9] to-[#00FFC9] bg-clip-text text-transparent mb-4"
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg text-muted mb-8"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-5 py-2 rounded-md bg-primary text-white hover:bg-opacity-90 transition"
          >
            {t('hero.projects')}
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            {t('hero.contact')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
