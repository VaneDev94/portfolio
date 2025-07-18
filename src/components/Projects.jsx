import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
  {
    img: "/assets/botia.png",
    visitar: "#",
    portfolio: "#",
  },
  {
    img: "/assets/backendweb.png",
    visitar: "#",
    portfolio: "#",
  },
  {
    img: "/assets/scraperweb.png",
    visitar: "#",
    portfolio: "#",
  },
  {
    img: "/assets/todoapp.png",
    visitar: "#",
    portfolio: "#",
  },
  {
    img: "/assets/calculadora.png",
    visitar: "#",
    portfolio: "#",
  },
  {
    img: "/assets/formcontacto.png",
    visitar: "#",
    portfolio: "#",
  },
];

const inProgress = [
  {
    // Sólo las imágenes o URLs si las hay, pero en este caso no hay
  },
  {
    // Sólo las imágenes o URLs si las hay, pero en este caso no hay
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-black/80 to-black/90 min-h-screen"
    >
      <h2
        style={{
          background: "linear-gradient(90deg, #8fefee, #3ee6c1, #2da59c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "800",
          fontSize: "3.75rem",
          marginBottom: "4rem",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {t('projects.title')}
      </h2>

      <h3 className="text-3xl font-semibold" style={{ color: "#3ee6c1", marginBottom: "2rem" }}>
        {t('projects.inProgress')}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="border border-[#00FFC9] rounded-xl shadow-md bg-black/50 backdrop-blur-md overflow-hidden"
          >
            <img
              src={p.img}
              alt={t(`projects.list.${i}.title`)}
              className="w-32 h-24 object-cover rounded-t-xl mx-auto mt-4 mb-6"
            />
            <div className="p-3">
              <h3 className="text-white text-xl font-semibold mb-1">
                {t(`projects.list.${i}.title`)}
              </h3>
              <p className="text-gray-300 text-xs mb-3">
                {t(`projects.list.${i}.tech`)}
              </p>
              <div className="flex gap-4 text-xs text-[#00FFC9] font-semibold">
                <a
                  href={p.visitar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('projects.visit')}
                </a>
                <a
                  href={p.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('projects.portfolio')}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {inProgress.map((p, i) => (
          <div
            key={i}
            className="border border-[#00FFC9] rounded-xl shadow-md bg-black/50 backdrop-blur-md p-6 text-center text-gray-400"
          >
            <h3 className="text-xl font-semibold mb-2" >
              {t(`projects.inProgressList.${i}.title`)}
            </h3>
            <p className="mb-4 text-sm">
              {t(`projects.inProgressList.${i}.description`)}
            </p>
            <button
              disabled
              className="px-6 py-2 bg-gray-600 text-white rounded-full cursor-not-allowed"
            >
              {t('projects.comingSoon')}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
