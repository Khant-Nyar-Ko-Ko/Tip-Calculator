/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor : 'hsl(172, 67%, 45%)',
        veryDark : 'hsl(183, 100%, 15%)',
        darkGrayish : 'hsl(186, 14%, 43%)',
        grayish : 'hsl(184, 14%, 56%)',
        lightGrayish : 'hsl(185, 41%, 84%)',
        veryLightGrayish : 'hsl(189, 41%, 97%)',
        btn: '#00afaf'
      }
    },
  },
  plugins: [],
}
