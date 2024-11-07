import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        iceland: ["var(--font-iceland)", ...fontFamily.sans],
      },
      screens: {
        // Define your custom screens here
        xs: "480px", // Extra small screens
        sm: "640px", // Small screens (default Tailwind value)
        md: "768px", // Medium screens (default Tailwind value)
        lg: "1024px", // Large screens (default Tailwind value)
        xl: "1280px", // Extra large screens (default Tailwind value)
        "2xl": "1536px", // 2X large screens (default Tailwind value)
        "3xl": "1920px", // Custom screen size for very large screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
          600: "#76828D",
          700: "#ABB8C4",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
        "celtic-green": "#006400",
        "red-dark": " #8B0000",
      },
    },
  },
  plugins: [],
};
export default config;
