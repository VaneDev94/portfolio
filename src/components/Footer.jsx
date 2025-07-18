import React from "react";

const Footer = () => {
  // Ajustes generales
  const paddingTop = "2.8rem";   // Espacio para separar del contenido
  const paddingBottom = "0rem";

  const maxWidth = "72rem";

  // Posiciones y tamaños individuales (horizontal y vertical)
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

  // Configuración de la ralla (línea)
  const borderHeight = "1px";
  const borderColor = "rgba(13, 161, 146, 0.5)";
  const borderMarginTop = "2rem";
  const borderMarginBottom = "2rem";

  return (
    <footer
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
      className="w-full bg-transparent mb-0 pb-0"
    >
      {/* Ralla movible */}
      <div
        style={{
          height: borderHeight,
          backgroundColor: borderColor,
          marginTop: borderMarginTop,
          marginBottom: borderMarginBottom,
        }}
      />

      <div
        className="mx-auto flex flex-col md:flex-row justify-between items-center px-6"
        style={{ maxWidth: maxWidth }}
      >
        {/* Bloques izquierdo separados */}
        <div className="flex flex-col text-left">
          <div
            style={{
              marginLeft: marginLeftVanessa,
              marginTop: marginTopVanessa,
              fontSize: fontSizeVanessa,
              color: "#999",
            }}
            className="font-semibold mb-1"
          >
            Vanessa Montero
          </div>
          <div
            style={{
              marginLeft: marginLeftLocation,
              marginTop: marginTopLocation,
              fontSize: fontSizeLocation,
              color: "#999",
            }}
            className="flex items-center mb-1"
          >
            <span role="img" aria-label="Spain flag" style={{ marginRight: "0.4rem" }}>
              🇪🇸
            </span>
            Barcelona, Spain
          </div>
          <div
            style={{
              marginLeft: marginLeftCopyright,
              marginTop: marginTopCopyright,
              fontSize: fontSizeCopyright,
              color: "#fff",
            }}
            className=""
          >
           © 2025 VanessaM.dev. All rights reserved.
          </div>
        </div>

        {/* Bloques derecho separados */}
        <div className="flex flex-col items-end text-right space-y-2">
          <div
            style={{
              marginRight: marginRightDesigned,
              marginTop: marginTopDesigned,
              fontSize: fontSizeDesigned,
              color: "#999",
            }}
            className=""
          >
            Website Designed with React & Tailwind CSS
          </div>
          <div
            className="flex justify-end"
            style={{
              marginRight: marginRightIcons,
              marginTop: marginTopRightIcons,
              gap: gapBetweenRightIcons,
            }}
          >
            <a
              href="https://github.com/vanessamontero"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[#999] hover:text-[#fff] transition duration-300 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                style={{ width: "1.5rem", height: "1.5rem" }}
              >
                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.305 3.49.997.107-.776.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.125-.303-.535-1.522.115-3.176 0 0 1.005-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.654.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.922.43.37.81 1.1.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.19.694.8.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;