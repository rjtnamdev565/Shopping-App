/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}","./node_modules/tw-elements-react/dist/js/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'orange' : 'hsl(26, 100%, 55%)',
        'pale-orange' : 'hsl(25, 100%, 94%)',
        'dark-blue' : 'hsl(220, 13%, 13%)',
        'dark-grayish-blue' : 'hsl(219, 9%, 45%)',
        'grayish-blue' : 'hsl(220, 14%, 75%)',
        'light-grayish-blue' : 'hsl(223, 64%, 98%)',
        'white' : 'hsl(0, 0%, 100%)',
        'black-75' : 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        'kumbhsans': 'Kumbh Sans'
      }
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

