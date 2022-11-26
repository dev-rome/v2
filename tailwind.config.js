/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f8f9fa',
      'pink': '#e64980',
      'black': '#212529'
    },
    extend: {},
  },
  plugins: [],
};
