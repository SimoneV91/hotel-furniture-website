/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",       // tutte le pagine app router
    "./pages/**/*.{ts,tsx,js,jsx}",     // pagine legacy
    "./components/**/*.{ts,tsx,js,jsx}", // componenti riutilizzabili
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
