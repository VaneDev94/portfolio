import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const SectionTitle = ({ kicker, title }) => (
  <div className="mx-auto mb-10 max-w-4xl text-center">
    {kicker && (
      <p className="mb-2 text-sm font-medium tracking-widest text-white/60">
        {kicker}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c]">
      {title}
    </h2>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();

  const groups = [
    {
      title: t("skills.languages.title"),
      items: t("skills.languages.list", { returnObjects: true }),
    },
    {
      title: t("skills.tools.title"),
      items: t("skills.tools.list", { returnObjects: true }),
    },
    {
      title: t("skills.frameworks.title"),
      items: t("skills.frameworks.list", { returnObjects: true }),
    },
    {
      title: t("skills.concepts.title"),
      items: t("skills.concepts.list", { returnObjects: true }),
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker={t("skills.kicker")} title={t("skills.title")} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h4 className="mb-4 text-base font-semibold text-[#3ee6c1]">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((it, i) => (
                <Badge key={`${it}-${i}`}>{it}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;