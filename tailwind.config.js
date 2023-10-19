/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Gothic : "'Gothic A1' ,  sans-serif",
      },
      daisyui: {
        themes: ["light", "dark"],
      },
    },
  },
  plugins: [require("daisyui")],
}

