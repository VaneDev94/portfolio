import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <TransitionEffect />
      <main
        className="relative flex flex-col items-center justify-center min-h-screen h-full overflow-hidden text-center w-full bg-transparent pb-[4rem]"
      >
        <div className="max-w-5xl px-6 text-center z-10 mx-auto flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[64px] sm:text-[96px] md:text-[120px] lg:text-[144px] font-extrabold leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]"
          >
            <span style={{ marginBottom: '1rem', display: 'block' }}>
              <span className="text-white text-[79px]">{t('hero.greeting')}</span>{" "}
              <span className="text-transparent text-[90px] bg-clip-text bg-gradient-to-r from-[#8fefee] via-[#3ee6c1] to-[#2da59c]">
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
            className="mt-[2rem] space-y-[1.5rem] text-lg sm:text-xl md:text-2xl lg:text-3xl mx-auto text-left w-fit"
          >
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph1') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph2') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph3') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph4') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('hero.paragraph5') }}></p>
          </motion.div>
        </div>

        {/* Light Glow Effect */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full filter blur-[100px] opacity-30 pointer-events-none z-0" />
        <div className="absolute top-[-80px] right-[-60px] w-[200px] h-[200px] rounded-full filter blur-[100px] opacity-20 pointer-events-none z-0" />
      </main>
    </>
  );
}