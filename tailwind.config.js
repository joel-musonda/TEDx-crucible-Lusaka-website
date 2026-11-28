/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'ted-red': '#EB0028',
        'ted-red-hover': '#D00024',
      },
    },
  },
  plugins: [],
}