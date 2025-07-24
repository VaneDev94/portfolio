import React from "react";
import { useTranslation } from "react-i18next";

const aqua = "text-[#3ee6c1]";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen max-w-6xl mx-auto px-6 pt-40 bg-gradient-to-b from-black/80 to-black/90 flex flex-col"
      style={{ scrollMarginTop: "80px", paddingBottom: "1rem", marginTop: "4rem" }}
    >
      <h2
        style={{
          background: "linear-gradient(90deg, #8fefee, #3ee6c1, #2da59c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "800",
          fontSize: "3.8rem",
          marginBottom: "6.4rem",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        {t('skills.title')}
      </h2>

      <div className="grid grid-cols-4 gap-x-12 gap-y-20">
        {/* Lenguajes */}
        <div className="col-span-1 px-[4rem] mt-[-2rem] text-left">
          <h3 className={`text-[1.6rem] font-semibold mb-[1.3rem] ${aqua}`}>
            {t('skills.languages.title')}
          </h3>
          <ul className="list-disc list-inside text-[1.05rem] leading-[1.8rem] space-y-[1.2rem]">
            {t('skills.languages.list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Herramientas */}
        <div className="col-span-1 px-[2rem] mt-[-2rem] text-left">
          <h3 className={`text-[1.6rem] font-semibold mb-[1.3rem] ${aqua}`}>
            {t('skills.tools.title')}
          </h3>
          <ul className="list-disc list-inside text-[1.05rem] leading-[1.8rem] space-y-[1.2rem]">
            {t('skills.tools.list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Frameworks */}
        <div className="col-span-1 px-[2rem] mt-[-2rem] text-left">
          <h3 className={`text-[1.6rem] font-semibold mb-[1.3rem] ${aqua}`}>
            {t('skills.frameworks.title')}
          </h3>
          <ul className="list-disc list-inside text-[1.05rem] leading-[1.8rem] space-y-[1.2rem]">
            {t('skills.frameworks.list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Conceptos */}
        <div className="col-span-1 px-[0rem] mt-[-2rem] text-left">
          <h3 className={`text-[1.6rem] font-semibold mb-[1.3rem] ${aqua}`}>
            {t('skills.concepts.title')}
          </h3>
          <ul className="list-disc list-inside text-[1.05rem] leading-[1.8rem] space-y-[1.2rem]">
            {t('skills.concepts.list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;