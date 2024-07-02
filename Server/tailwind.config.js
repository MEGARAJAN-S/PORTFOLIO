/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#1F2833",
        "secondary" : "#FAED26",
        "tertiary" : "#45A29E",
      },
    },
    screens: {
      lg: {max: '2023px'},
      sm: {max: '1023px'},
    }
  },
  plugins: [],
}
