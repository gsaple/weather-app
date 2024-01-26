import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/util/color-variants.ts",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "9": "repeat(9, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
      },
      screens: {
        sM: { max: "639px" },
        ...defaultTheme.screens,
      },
      colors: {
        "cadet-grey": "#9ca3af",
        "lavender-blush": "#fef2f2",
        "salmon-pink": "#f87171",
        "old-brick": "#991b1b",
        "buttery-white": "#fefce8",
        "ripe-lemon": "#facc15",
        "raw-umber": "#854d0e",
        "dew-green": "#f0fdf4",
        "algae-green": "#4ade80",
        "spring-green": "#15803d",
        "spruce-green": "#166534",
        "silver-sand": "#c1c1c1",
        "crystal-blue": "#60a5fA",
        "grey-olive": "#aba69c",
        "nile-blue": "#1d2e48",
      },
    },
  },
  plugins: [],
};
export default config;
