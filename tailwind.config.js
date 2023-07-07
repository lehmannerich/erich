/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
      fontFamily: {
        robotocon: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
