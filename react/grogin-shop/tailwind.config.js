/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sale-purple': '#634C9F',
        'sale-red': '#DC2626',
        'cart-green': '#16A34A',
        'main-text': '#111827',
      },
    },
  },
  plugins: [],
}