import React from "react";
import { useTranslation } from "react-i18next";

const aqua = "text-[#3ee6c1]";

const Skills = () => {
  const { t } = useTranslation();

  const marginLeftBlock1 = 400; // px
  const marginTopBlock1 = 80;   // px
  const marginLeftBlock2 = -150;// px
  const marginTopBlock2 = -345; // px

  return (
    <section
      id="skills"
      className="min-h-screen max-w-4xl mx-auto px-6 pt-40 pb-28 bg-gradient-to-b from-black/80 to-black/90 flex flex-col"
      style={{ scrollMarginTop: "80px" }}
    >
      <h2
        style={{
          background: "linear-gradient(90deg, #8fefee, #3ee6c1, #2da59c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "800",
          fontSize: "3.8rem",
          marginBottom: "7rem",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        {t('skills.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 mx-auto max-w-5xl items-start gap-y-10">
        <div
          className="text-left px-16"
          style={{ marginLeft: `${marginLeftBlock1}px`, marginTop: `${marginTopBlock1}px` }}
        >
          <h3 className={`text-4xl font-semibold mb-7 ${aqua}`}>{t('skills.languages.title')}</h3>
          <ul className="list-disc list-inside space-y-4 text-xl">
            {t('skills.languages.list', { returnObjects: true }).map((item, i) => (
              <li key={i} className="text-xl">{item}</li>
            ))}
          </ul>

          <h3 className={`text-4xl font-semibold mt-16 mb-7 ${aqua}`}>
            {t('skills.tools.title')}
          </h3>
          <ul className="list-disc list-inside space-y-4 text-xl">
            {t('skills.tools.list', { returnObjects: true }).map((item, i) => (
              <li key={i} className="text-xl">{item}</li>
            ))}
          </ul>
        </div>

        <div
          className="text-left px-16"
          style={{ marginLeft: `${marginLeftBlock2}px`, marginTop: `${marginTopBlock2}px` }}
        >
          <h3 className={`text-4xl font-semibold mb-7 ${aqua}`}>{t('skills.frameworks.title')}</h3>
          <ul className="list-disc list-inside space-y-4 text-xl">
            {t('skills.frameworks.list', { returnObjects: true }).map((item, i) => (
              <li key={i} className="text-xl">{item}</li>
            ))}
          </ul>

          <h3 className={`text-4xl font-semibold mt-16 mb-7 ${aqua}`}>
            {t('skills.concepts.title')}
          </h3>
          <ul className="list-disc list-inside space-y-4 text-xl">
            {t('skills.concepts.list', { returnObjects: true }).map((item, i) => (
              <li key={i} className="text-xl">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;