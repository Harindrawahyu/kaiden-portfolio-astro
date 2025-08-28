import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
