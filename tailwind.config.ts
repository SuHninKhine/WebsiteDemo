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
          50: "#eef7ff",
          100: "#d9ebff",
          200: "#b4d7ff",
          300: "#81bfff",
          400: "#489eff",
          500: "#1f7cff",
          600: "#0f63e6",
          700: "#0d4bb4",
          800: "#0f3e8a",
          900: "#0f356f"
        },
        sand: {
          50: "#f9fafb",
          100: "#f2f4f7",
          200: "#e5e7eb",
          300: "#d6dae3"
        }
      },
      boxShadow: {
        card: "0 12px 40px -16px rgba(15, 63, 124, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
