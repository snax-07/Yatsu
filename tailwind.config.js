/** @type {import('tailwindcss').Config} */
const defaultConfig = require("tailwindcss/defaultConfig")
const shadcnConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...shadcnConfig.theme,
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        audiowide: ["var(--font-audiowide)"],
        quantico: ["var(--font-quantico)"],
      },
      colors: {
        ...shadcnConfig.theme.extend.colors,
        "neon-red": "#FF3131",
        "neon-cyan": "#00FFFF",
        "neon-orange": "#FF6A00",
        "neon-turquoise": "#00D1FF",
        turquoise: {
          400: "#00D1FF",
          300: "#33DDFF",
        },
      },
      animation: {
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [...shadcnConfig.plugins, require("tailwindcss-animate")],
}
