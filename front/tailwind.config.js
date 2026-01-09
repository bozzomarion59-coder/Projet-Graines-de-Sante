/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vertSauvage: "#93B26D",
        beige: "#F5F3DC",
        mandarine: "#F9CBA0",
        grainCafe: "#5D3B2D",
        noir: "#000000",
        oliveGrise: "#A6A6A2",
      },
      fontFamily: {
        titre: ['"Playfair Display"', "serif"],
        texte: ['"Open Sans"', "sans-serif"],
        bouton: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
