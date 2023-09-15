/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1DAECE",
        "textWhite": "#DFDFDF"
      },
      fontFamily: {
        "workSans": "'Work Sans', sans-serif",
        "josefin": "'Josefin Sans', sans-serif",
        "poppins": "'Poppins', sans-serif",
        "roboto": "'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}

