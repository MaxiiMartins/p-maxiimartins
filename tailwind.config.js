/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": {
          100: '#FF0000',
          500: '#950101',
          900: '#3D0000',
        }
      },
    },
  },
  plugins: [],
}
