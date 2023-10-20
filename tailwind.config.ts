import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "electric-violet": {
          "50": "#fbf5ff",
          "100": "#f6e9fe",
          "200": "#efd7fd",
          "300": "#e2b7fb",
          "400": "#d089f7",
          "500": "#be5cf0",
          "600": "#ac3ae3",
          "700": "#9529c7",
          "800": "#7d26a3",
          "900": "#662083",
          "950": "#480b60",
        },
      },
    },
  },
  plugins: [],
};
export default config;
