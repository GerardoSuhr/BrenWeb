/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#172554",
        terciary: "#f0f9ff"
      },
      backgroundImage: {
        'header-img': "url('/src/assets/BrenBoteSunset.jpeg')"
      }
    },
  },
  plugins: [],
}