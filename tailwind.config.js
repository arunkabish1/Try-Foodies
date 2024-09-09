/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'pulse': 'pulse 3s linear infinite',
    },
    extend: {},
    fontFamily:{
      bebas:['bebas','sans-serif'],
      bebasregular:['bebas-regular','sans-serif']
    }
  },
  plugins: [],
}