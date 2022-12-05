/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        // 'banner': "url('/images/bg.jpg')",
        // 'contact' : "url('/images/contact.png')"
      },
    },
  },
  plugins: [],
}
