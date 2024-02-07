/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        homemade: ['Homemade Apple', 'cursive'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require("daisyui"),
  ],
}
