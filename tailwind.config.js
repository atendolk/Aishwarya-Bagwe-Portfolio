/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        ivory: "#F6F2ED",
        charcoal: "#1A1A1A",
        blush: "#E8C7CF",
        sage: "#B7C4B2",
        mist: "#C9D6E3",
        stone: "#D9D1C7",
      },

      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
}