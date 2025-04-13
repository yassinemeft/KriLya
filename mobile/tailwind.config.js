/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Red
        secondary: '#0000FF', // Blue
        tertiary: '#008000', // Green
      },
    },
  },
  plugins: [],
};
