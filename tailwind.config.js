/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customPurple: '#EDDCFD',
        pinkText : '#CC3DBB',
        headerPink1 : "#A626DB",
        headerPink2 : "#FD5A91",
        

      }
    },
  },
  plugins: [],
}