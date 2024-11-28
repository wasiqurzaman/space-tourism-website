/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"]
      },
      backgroundImage: {
        "home-desktop": "url('home/background-home-desktop.jpg')",
      }

    },
  },
  plugins: [],
}

