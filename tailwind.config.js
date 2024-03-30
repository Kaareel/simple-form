/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: 'hsl(0, 100%, 74%)', bgText: 'hsl(248, 32%, 49%)', bgButton: 'hsl(154, 59%, 51%)', inputText: 'hsl(248, 9%, 26%, 1', termsText: 'hsl(246, 25%, 77%)',
      }
    },
    boxShadow: { '3xl': '0px 8px 0px rgba(0, 0, 0, 0.14688)', '4xl': 'inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)'}
  },
  plugins: [],
}

