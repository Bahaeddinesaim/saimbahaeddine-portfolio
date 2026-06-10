/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        bg: {
          DEFAULT: "#030712"
        },
        surface: {
          DEFAULT: "#020617",
          soft: "#020617",
          elevated: "#020617"
        }
      },
      boxShadow: {
        "soft-glow": "0 18px 60px rgba(15,23,42,0.18)",
        "premium": "0 20px 50px rgba(15,23,42,0.12)"
      }
    }
  },
  plugins: []
};

