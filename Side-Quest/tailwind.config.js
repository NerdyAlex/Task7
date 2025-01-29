/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'active'],
    color: ['hover', 'focus', 'active']
  },
  plugins: [],
}

