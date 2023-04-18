/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        passengerRed: "#D40000",
        passengerDarkRed: "#A10000",
        passengerBlack: "#000000",
        passengerBox: "#040404",
        passengerYellow: "#FFE600",
        passengerWhite: "#ffffff",
        passengerCommunityBG: "#FEF6EB",
        passengerBoxGray: "#D9D9D9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
