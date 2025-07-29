import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
  {
    img: "/assets/botia.png",
    key: "bot",
    visitar: "http://127.0.0.1:8000/docs",
    portfolio: "https://github.com/VaneDev94/quirkybot-fastapi"
  },
  {
    img: "/assets/backendweb.png",
    key: "fullbackend",
    visitar: "",
    portfolio: ""
  },
  {
    img: "/assets/panelcustom.png",
    key: "panel",
    visitar: "",
    portfolio: ""
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      style={{
        paddingTop: "0rem",
        paddingBottom: "1.5rem",
      }}
      className="max-w-7xl mx-auto px-6 bg-gradient-to-b from-black/80 to-black/90 min-h-screen"
    >
      <h2
        style={{
          background: "linear-gradient(90deg, #8fefee, #3ee6c1, #2da59c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "800",
          fontSize: "3.75rem",
          marginTop: "0rem",
          marginBottom: "2rem",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {t('projects.title')}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gradient-to-br from-[#1a1f27] via-[#232b34] to-[#3ee6c1] rounded-lg p-4 shadow-md border border-[#2c3039] backdrop-blur-md flex flex-col justify-between max-w-[250px] mx-auto"
          >
            <img
              src={p.img}
              alt={t(`projects.${p.key}.title`)}
              className="w-full h-24 object-cover rounded-lg mb-3"
            />
            <h3 className="text-white text-sm font-semibold mb-1 text-center">
              {t(`projects.${p.key}.title`)}
            </h3>
            <p className="text-gray-300 text-xs mb-3 text-center">
              {t(`projects.${p.key}.description`)}
            </p>
            <div className="flex justify-center gap-4 text-sm font-semibold">
              {p.portfolio && (
                <a
                  href={p.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FFC9] hover:underline"
                >
                  {t("projects.github")}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;