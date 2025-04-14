/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#bd0624', // Red
        secondary: '#0a8bc7', // Blue
        tertiary: '#53b30e', // Green
      },
    },
  },
  plugins: [],
};
