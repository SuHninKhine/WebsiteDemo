import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f9ff",
          100: "#c7f0ff",
          200: "#97e3fb",
          300: "#6ad7f6",
          400: "#40cbf2",
          500: "#25c0ec",
          600: "#14b4e0",
          700: "#0d99c1",
          800: "#0f7b98",
          900: "#0e667c"
        },
        surface: "#f8fafc",
        border: "#e5e7eb"
      },
      boxShadow: {
        card: "0 10px 30px -20px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
