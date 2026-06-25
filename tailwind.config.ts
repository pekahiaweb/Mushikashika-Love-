import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      colors: {
        midnight:  "#050810",
        "deep-blue": "#0a1020",
        burgundy:  "#8b1a2f",
        wine:      "#6b0f1e",
        gold:      "#b8860b",
        "gold-light": "#d4a017",
        "gold-pale":  "#f0c040",
        amber:     "#c8902e",
        cyan:      "#00e5ff",
        "cyan-dim": "#00b8cc",
        earth:     "#8b6b4a",
        cream:     "#e8e4dc",
        muted:     "#9a9080",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "hero-gradient": `
          radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,26,47,0.35) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 20% 60%, rgba(184,134,11,0.15) 0%, transparent 50%),
          linear-gradient(180deg, #020408 0%, #050810 40%, #0a1020 100%)
        `,
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(12px)" },
        },
      },
      animation: {
        "pulse-slow": "pulse 2.5s ease-in-out infinite",
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
