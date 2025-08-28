import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
  {
    key: "bot",
    img: "src/assets/demobot.png",
    tags: ["OpenAI", "Scraping", "Automatización"],
    github: "https://github.com/VaneDev94/quirkybot-fastapi",
    link: "https://vanedev94.github.io/frontend-demobot/"
  },
  {
    key: "fullbackend",
    img: "src/assets/proyecto-fastapi.png",
    tags: ["FastAPI", "PostgreSQL", "Autenticación"],
    github: "",
    link: ""
  },
  {
    key: "panel",
    img: "src/assets/proyecto-paneldeusuario.png",
    tags: ["Dashboards", "Usuarios", "Métricas"],
    github: "",
    link: ""
  },
  {
    key: "voiceclone",
    img: "src/assets/dubloop.png",
    tags: ["IA", "Clonación de Voz", "Dubloop"],
    github: "",
    link: ""
  },
];

const stagger = { show: { transition: { staggerChildren: 0.08 } } };
const cardVariant = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <p className="mb-2 text-sm font-medium tracking-widest text-white/60">
          {t("projects.kicker")}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c]">
          {t("projects.title")}
        </h2>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <img
              src={p.img}
              alt={t(`projects.${p.key}.title`)}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-xl font-bold">{t(`projects.${p.key}.title`)}</h3>
              <p className="mt-1 text-sm text-white/80">{t(`projects.${p.key}.description`)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85 ring-1 ring-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-4 text-sm font-semibold">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FFC9] hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FFC9] hover:underline"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;