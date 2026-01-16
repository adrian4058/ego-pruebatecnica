import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#000000",
          dark: "#1A1A1A",
        },
        red: {
          600: "#E30613",
        },
        neutral: {
          50: "#FFFFFF",
          100: "#F7F7F7",
          200: "#F0F0F0",
          300: "#E5E5E5",
          400: "#D8D8D8",
          600: "#373737",
          700: "#333333",
          800: "#1A1A1A",
          900: "#000000",
        },
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        header: "0 2px 8px rgba(0, 0, 0, 0.08)",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
