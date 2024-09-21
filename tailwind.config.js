/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tealBright: "#00E593",
        customGray: "#F2F2F2",
        customGrey: "#272727",
      },
    },
  },

  plugins: [],
};
