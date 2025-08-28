/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f14",
        foreground: "#fafafa",
        primary: "#3ee6c1",
        muted: "#71717a",
        border: "#27272a",
        quirkyGradientStart: "#b5ffe1",
        quirkyGradientMiddle: "#50e4be",
        quirkyGradientEnd: "#00d9a0",
        vanessaGradientStart: "#00f0ff",
        vanessaGradientEnd: "#0074ff",
        accent: "#00FFC9",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fade: "fade 0.5s ease-in-out",
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
