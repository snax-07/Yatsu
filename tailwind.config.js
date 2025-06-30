/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // include shadcn components
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", ...defaultTheme.fontFamily.sans],
        audiowide: ["var(--font-audiowide)", ...defaultTheme.fontFamily.sans],
        quantico: ["var(--font-quantico)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
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
  plugins: [require("tailwindcss-animate")],
};
