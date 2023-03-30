/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#fb0056",
        green: "#03b000",
        blue: "#02bfc5",
        orange: "#f46d23",
        purple: "#ab2fbe",
      },
      fontFamily: {
        obidee: ["Obidee", "sans-serif"],
      },
      backgroundImage: {
        hero_triangle: "url('../assets/rsp/triangle.png')",
      },
    },
  },
  plugins: [],
};
