import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const domain = "VanessaM.dev";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-[#0f0f0f]/90 to-[#050505]/80 backdrop-blur-md py-5 border-b border-white/5 shadow-md"
    >
      <div className="flex items-center justify-between h-[65px] max-w-[1400px] mx-auto px-6">
        {/* Dominio izquierda */}
        <a href="https://vanessamontero.dev" className="flex items-center">
          <img
            src={logo}
            alt="VanessaM logo"
            style={{ width: '250px', height: 'auto' }}
          />
        </a>

        {/* Menú central */}
        <nav className="flex w-[700px] text-white text-lg font-medium font-spaceGrotesk justify-around">
          <a
            href="#home"
            className="text-white py-2 rounded transition-transform duration-300 ease-in-out hover:scale-140 hover:shadow-lg hover:shadow-white/30 menu-large"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#skills"
            className="text-white py-2 rounded transition-transform duration-300 ease-in-out hover:scale-140 hover:shadow-lg hover:shadow-white/30 menu-large"
          >
            {t("navbar.skills")}
          </a>
          <a
            href="#projects"
            className="text-white py-2 rounded transition-transform duration-300 ease-in-out hover:scale-140 hover:shadow-lg hover:shadow-white/30 menu-large"
          >
            {t("navbar.projects")}
          </a>
          <a
            href="#contact"
            className="text-white py-2 rounded transition-transform duration-300 ease-in-out hover:scale-140 hover:shadow-lg hover:shadow-white/30 menu-large"
          >
            {t("navbar.contact")}
          </a>
        </nav>

        {/* Idioma derecha */}
        <div>
          <button
            onClick={toggleLanguage}
            className="text-white px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white/30 lang-btn-large"
          >
            {i18n.language === "en" ? "🇬🇧 EN" : "🇪🇸 ES"}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
