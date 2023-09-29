/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     backgroundImage: {
      "white-pink":  "linear-gradient(0deg, rgba(235,146,210,1) 0%, rgba(235,146,210,1) 49%, rgba(255,255,255,1) 49%)",
      "yellow-purple": "linear-gradient(0deg, rgba(172,138,220,1) 51%, rgba(170,146,235,1) 52%, rgba(230,242,77,1) 53%)"
     }
    },
  },
  plugins: [],
}
