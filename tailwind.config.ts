import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5EFE4",
        dark: "#1C0F07",
        gold: "#C8922A",
        terracotta: "#B5552A",
        ink: "#1A1108",
        muted: "#6B5744",
        border: "#E2D5C3",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "4px",
        button: "3px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(28, 15, 7, 0.10)",
        "card-hover": "0 8px 40px rgba(28, 15, 7, 0.18)",
      },
      transitionDuration: {
        base: "200ms",
        slow: "400ms",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "kolam-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        ticker: "ticker 20s linear infinite",
        "kolam-spin": "kolam-spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
