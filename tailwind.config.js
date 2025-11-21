/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nvred: "#CC1010",
        nvblack: "#000000",
      },
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"]
      },
      boxShadow: {
        nvhalo: "0 0 45px rgba(204,16,16,0.35)",
      },
    },
  },
  plugins: [],
}
