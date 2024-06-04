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
        mainColor: "#29335c",
        mainColorLight: "#5767aa",
        secondaryColor: "#db2b39",
        secondaryColorStrong: "#bb1a27",
        secondaryColorLight: "#d74753",
        textColor: "#e0e0e0",
        textColorBlack: "#121212",
        primary: "#424242",
        secondary: "#7a8bee",
        error: "#d91111",
        background_dark: "#212121",
        background_light: "#fdfefe",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
