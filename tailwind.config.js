/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#08299B",
        softBlue: "#BFCAE0",
        softBlueI: "#8193B8",
        softBlueII: "#697A9B",
        footerCol: "#E0E4EC",
      },
    },
  },
  plugins: [],
};
