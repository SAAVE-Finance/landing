/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      DM_Sans: ["DM Sans"],
      Poppins: ['Poppins'],
    },
    backgroundImage: {
      "glow-1": "url('/assets/glow1.png')",
      "glow-3": "url('/assets/glow3.png')",
    },
  },
  plugins: [],
};
