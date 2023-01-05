/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#201238",
        "primary-gray": "#7E7E7E",
        "secondary-gray": "#D8D8D8",
        "primary-green": "#5CB85C",
      },
      backgroundImage: (theme) => ({
        "gradient-blueish":
          "linear-gradient(180deg, #627A96 0%, #83B5C5 19.47%, #8DC7D4 39.07%, #93D2DC 82.24%, #95D6DF 100%)",
      }),
      fontFamily: {
        baskervville: ["Baskervville", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
