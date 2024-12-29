/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,tsx,jsx}",
    "./src/components/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#E1E1E6",

        gray: {
          100: "#FCFDFE",
          200: "#E1EBF4",
          300: "#C4D0DB",
          400: "#73808C",
          500: "#45525F",
          600: "#1A1F24",
        },

        green: {
          500: "#00292E",
          400: "#28494E",
          200: "#9FF9CC",
          soft: "#E9F3EF",
          light: "#3B9B62",
          base: "#257F49",
          dark: "#052914",
        },
        red: {
          light: "#FDEDED",
          base: "#F94144",
        },
        orange: {
          500: "#F48F56",
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },

        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
      },
      fontFamily: {
        bold: "Rubik_700Bold",
        medium: "Rubik_500Medium",
        regular: "Rubik_400Regular",
        semiBold: "Rubik_600SemiBold",
      },
    },
  },
  plugins: [],
};
