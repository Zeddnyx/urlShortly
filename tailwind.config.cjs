/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop:  ['Poppins', 'sans-serif'],
      },
      fontSize: {
        sm: '18px',
      },
      colors: {
        cyan:           'hsl(180, 66%, 49%)',
        darkViolet:     'hsl(257, 27%, 26%)',
        red:            'hsl(0, 87%, 67%)',
        gray:           'hsl(0, 0%, 75%)',
        grayViolet:     'hsl(257, 7%, 63%)',
        darkBlue:       'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)'
      },
    },
  },
  plugins: [],
}
