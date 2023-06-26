/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    boxShadow: {
      primaryInput: "0 0 0px 5px #EDA41520",
      secondary: "0 0 0px 5px #155e7520",
      primaryInputError: "0 0 0px 5px #C3313120",
    },
    colors: {
      black: "#292D32",
      cyan: {
        600: "#0e7490",
        700: "#316887",
        800: "#155e75",
      },
      indigo: {
        500: "#4D47C3",
      },
      gray: { 50: "#f9fafb", 100: "#f3f4f6", 500: "#B0B0B0" },
      orange: {
        500: "#EDA415",
        600: "#fb923c",
        700: "#f97316",
      },
      red: {
        100: "#fee2e2",
        500: "#C33131",
      },
      white: "#fff",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
