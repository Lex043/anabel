/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        modal: "rgba(255, 255, 255, 0.15)",
      },

      backgroundImage: {
        anabel: "url('./src/assets/images/Ellipse-compressed.png')",
      },
    },
  },
  plugins: [],
};
