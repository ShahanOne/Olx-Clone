/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ["'Fira Sans', sans-serif"],
        pacifico: [" 'Pacifico', cursive"],
        fredoka: ["'Fredoka One', cursive"],
        allerta: ["'Allerta', sans-serif"],
      },
      backgroundImage: {
        // mobile: "url('./public/olxlanding.png')",
      },
    },
  },
  plugins: [],
};
