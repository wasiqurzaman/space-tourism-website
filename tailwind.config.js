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
        // Homepage background
        "home-desktop": "url('home/background-home-desktop.jpg')",
        "home-tablet": "url('home/background-home-tablet.jpg')",
        "home-mobile": "url('home/background-home-mobile.jpg')",
        // Destination page background
        "destination-desktop": "url('destinations/background-destination-desktop.jpg')",
        "destination-tablet": "url('destinations/background-destination-tablet.jpg')",
        "destination-mobile": "url('destinations/background-destination-mobile.jpg')",
        // Crew page background
        "crew-desktop": "url('crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('crew/background-crew-mobile.jpg')",
        // Technology page
        "technology-desktop": "url('technology/background-technology-desktop.jpg')",
        "technology-tablet": "url('technology/background-technology-tablet.jpg')",
        "technology-mobile": "url('technology/background-technology-mobile.jpg')",
      },

      // Custome colors
      colors: {
        "custom-blue-900": "#0b0d17",
        "custom-blue-300": "#d0d6f9"
      },

      // Custom Breakpoint
      screens: {
        mobile: "480px",
        tablet: "600px",
        laptop: "1024px",
        desktop: "1280px",
        "large-desktop": "1600px"
      }


    },
  },
  plugins: [],
}

