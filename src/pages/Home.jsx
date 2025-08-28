import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Home() {
  const { t, i18n } = useTranslation();

  const navLink =
    "relative px-3 py-2 text-white/90 font-medium transition-all duration-200 ease-out hover:scale-110 focus:outline-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c] after:rounded-full after:transition-all after:duration-300 hover:after:w-8";

  // Footer style constants (moved from Footer.jsx)
  const paddingTop = "2.8rem";
  const paddingBottom = "0rem";
  const maxWidth = "72rem";
  const marginLeftVanessa = "-25rem";
  const marginTopVanessa = "-1rem";
  const fontSizeVanessa = "1.1rem";
  const marginLeftLocation = "-26rem";
  const marginTopLocation = "0rem";
  const fontSizeLocation = "1rem";
  const marginLeftCopyright = "0rem";
  const marginTopCopyright = "-0.3rem";
  const fontSizeCopyright = "0.75rem";
  const marginRightDesigned = "-35.2rem";
  const marginTopDesigned = "-4rem";
  const fontSizeDesigned = "1rem";
  const marginRightIcons = "-25rem";
  const marginTopRightIcons = "0.7rem";
  const gapBetweenRightIcons = "3rem";
  const borderHeight = "1px";
  const borderColor = "rgba(13, 161, 146, 0.5)";
  const borderMarginTop = "2rem";
  const borderMarginBottom = "2rem";

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-[#0f0f0f]/90 to-[#050505]/80 backdrop-blur-md py-2 border-b border-white/5 shadow-md"
      >
        <div className="flex items-center justify-between h-[55px] max-w-[1400px] mx-auto px-6 px-[1rem] py-[0.5rem]">
          {/* Dominio izquierda */}
          <a href="https://vanessam.dev/" className="flex items-center">
            <img
              src={logo}
              alt="VanessaM logo"
              style={{ width: '250px', height: 'auto' }}
            />
          </a>

          {/* Menú central */}
          <nav className="flex w-[700px] text-white text-base font-medium font-spaceGrotesk justify-around">
            <a
              href="#home"
              className={navLink}
            >
              {t("navbar.home")}
            </a>
            <a
              href="#skills"
              className={navLink}
            >
              {t("navbar.skills")}
            </a>
            <a
              href="#projects"
              className={navLink}
            >
              {t("navbar.projects")}
            </a>
            <a
              href="#contact"
              className={navLink}
            >
              {t("navbar.contact")}
            </a>
          </nav>

          {/* Idioma derecha */}
          <div>
            <button
              onClick={toggleLanguage}
              className="relative px-3 py-2 text-white/90 font-medium transition-transform duration-200 ease-out hover:scale-110 focus:outline-none"
            >
              {i18n.language === "en" ? "🇬🇧 EN" : "🇪🇸 ES"}
            </button>
          </div>
        </div>
      </motion.header>
      <main
        id="home"
        className="relative isolate flex-1 flex flex-col items-center justify-center overflow-visible text-center w-full bg-transparent pt-[80px] pb-8"
      >
        {/* Background effect scoped to Hero only */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <TransitionEffect />
        </div>
        <div className="max-w-5xl px-6 text-center z-10 mx-auto flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]"
          >
            <span style={{ marginBottom: '1rem', display: 'block' }}>
              <span className="text-white text-2xl sm:text-3xl">{t('hero.greeting')}</span>{" "}
              <span className="text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c]">
                Vanessa
              </span>{" "}
              <span className="text-white">👩🏼‍💻</span>
            </span>

            <div className="mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c]">
                {t('hero.title1')}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c]">
                {t('hero.title2')}
              </span>
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-[1.5rem] space-y-[1rem] text-sm sm:text-base md:text-lg lg:text-xl mx-auto text-left w-fit"
          >
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph1') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph2') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph3') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph4') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph5') }}></p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {/* Botón verde "Ver proyectos" */}
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => scrollTo("#projects")}
              className="font-sans inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-5 py-3 font-semibold text-black shadow-lg transition transform hover:scale-105 hover:opacity-95"
            >
              {t('hero.projects')} <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </motion.button>

            {/* Botón transparente "Solicitar presupuesto" */}
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => scrollTo("#contact")}
              className="font-sans inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white/90 transition transform hover:scale-105 hover:bg-white/20"
            >
              {t('hero.contact')}
            </motion.button>
          </div>
        </div>

        {/* Light Glow Effect */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full filter blur-[100px] opacity-30 pointer-events-none z-[-1]" />
        <div className="absolute top-[-80px] right-[-60px] w-[200px] h-[200px] rounded-full filter blur-[100px] opacity-20 pointer-events-none z-[-1]" />
        <div className="h-10" />
      </main>
    </div>
  );
}