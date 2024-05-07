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
        'radial-gradient': 'radial-gradient(98.49% 98.49% at 50% 1.51%, #005559 0%, #000 100%)'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    }),
    require("tailwindcss-font-inter"), // "font-inter" support
  ],
};

export default config;
