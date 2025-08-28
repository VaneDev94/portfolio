import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Services from "./components/Services";

const App = () => {
  const footerMaxWidth = "72rem";
  const footerBorderColor = "rgba(13, 161, 146, 0.5)";
  const footerMarginTop = "2rem";
  const footerMarginBottom = "2rem";

  const leftMarginLeft = "0rem";
  const leftMarginTop = "0rem";
  const leftFontSize = "1rem";

  const locationMarginLeft = "0rem";
  const locationMarginTop = "0.2rem";
  const locationFontSize = "0.9rem";

  const copyrightMarginTop = "0.5rem";
  const copyrightFontSize = "0.75rem";
  const copyrightMarginLeft = "6rem";

  const rightMarginRight = "0rem";
  const rightMarginTop = "0rem";
  const rightFontSize = "0.9rem";

  const iconMarginTop = "0.5rem";
  const iconAlignSelf = "center"; // options: "flex-start", "center", "flex-end"
  const iconOffsetX = "-1.5rem";  // horizontal shift (use rem, px, etc.)
  const iconMarginLeft = "-2rem";

  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <footer className="w-full bg-transparent mt-8">
          {/* Línea superior */}
          <div
            className="mx-auto h-px w-full"
            style={{
              backgroundColor: footerBorderColor,
              marginTop: footerMarginTop,
              marginBottom: footerMarginBottom,
              maxWidth: footerMaxWidth
            }}
          />

          {/* Contenido 3 columnas sin márgenes negativos */}
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-start md:justify-between" style={{ maxWidth: footerMaxWidth }}>
            {/* Izquierda */}
            <div className="text-left">
              <div
                style={{
                  marginLeft: leftMarginLeft,
                  marginTop: leftMarginTop,
                  fontSize: leftFontSize
                }}
                className="font-semibold text-white/80"
              >
                Vanessa Montero
              </div>
              <div
                style={{
                  marginLeft: locationMarginLeft,
                  marginTop: locationMarginTop,
                  fontSize: locationFontSize
                }}
                className="flex items-center text-white/70"
              >
                <span role="img" aria-label="Spain flag" className="mr-2">🇪🇸</span>
                Barcelona, Spain
              </div>
            </div>

            {/* Centro */}
            <div
              style={{
                marginTop: copyrightMarginTop,
                fontSize: copyrightFontSize,
                marginLeft: copyrightMarginLeft
              }}
              className="text-white/70 text-center text-xs md:flex-1 md:self-center"
            >
              © 2025 VanessaM.dev. All rights reserved.
            </div>

            {/* Derecha */}
            <div className="text-right flex flex-col">
              <div
                style={{
                  marginRight: rightMarginRight,
                  marginTop: rightMarginTop,
                  fontSize: rightFontSize
                }}
                className="text-white/70 mb-2"
              >
                Website Designed with React &amp; Tailwind CSS
              </div>
              <a
                href="https://github.com/vanessamontero"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-white/70 transition-colors hover:text-white"
                title="GitHub"
                style={{
                  marginTop: iconMarginTop,
                  alignSelf: iconAlignSelf,
                  transform: `translateX(${iconOffsetX})`
                }}
              >
                <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.305 3.49.997.107-.776.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.125-.303-.535-1.522.115-3.176 0 0 1.005-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.654.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.922.43.37.81 1.1.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.19.694.8.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </Layout>
    </div>
  );
};

export default App;