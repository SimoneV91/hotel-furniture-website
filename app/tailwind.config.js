/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",       // tutte le pagine app router
    "./pages/**/*.{ts,tsx,js,jsx}",     // pagine legacy
    "./components/**/*.{ts,tsx,js,jsx}", // componenti riutilizzabili
  ],
 theme: {
    extend: {
      colors: {
        sage: {
          50: "#F4F7F2",
          100: "#E8EDE3",
          200: "#D4DDCC",
          300: "#B8C5A8",
          400: "#9CAF88",
          500: "#7A8F6A",
          600: "#6B7F5A",
          700: "#6b584f",
          800: "#4A5A3F",
          900: "#3A4A2F",
        },
      },
    },
  },
  plugins: [],
};
